const solanaWeb3 = require("@solana/web3.js");
const splToken = require("@solana/spl-token");

const SOL_MINT_ADDRESS = "So11111111111111111111111111111111111111112";
const DOGWIFTHAT_MINT_ADDRESS = "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm";
const SOLANA_NETWORK = solanaWeb3.clusterApiUrl("mainnet-beta");
const connection = new solanaWeb3.Connection(SOLANA_NETWORK, "confirmed");
const fromWallet = solanaWeb3.Keypair.generate();
const toWallet = solanaWeb3.Keypair.generate();

(async () => {
  const airdropSignature = await connection.requestAirdrop(
    fromWallet.publicKey,
    solanaWeb3.LAMPORTS_PER_SOL
  );
  await connection.confirmTransaction(airdropSignature);
  const solMint = new solanaWeb3.PublicKey(SOL_MINT_ADDRESS);
  const dogwifthatMint = new solanaWeb3.PublicKey(DOGWIFTHAT_MINT_ADDRESS);
  const fromTokenAccount = await splToken.getOrCreateAssociatedTokenAccount(
    connection,
    fromWallet,
    solMint,
    fromWallet.publicKey
  );

  const toTokenAccount = await splToken.getOrCreateAssociatedTokenAccount(
    connection,
    toWallet,
    dogwifthatMint,
    toWallet.publicKey
  );
  const transaction = new solanaWeb3.Transaction().add(
    solanaWeb3.SystemProgram.transfer({
      fromPubkey: fromWallet.publicKey,
      toPubkey: toWallet.publicKey,
      lamports: solanaWeb3.LAMPORTS_PER_SOL / 100,
    })
  );
  const signature = await solanaWeb3.sendAndConfirmTransaction(
    connection,
    transaction,
    [fromWallet]
  );

  console.log("Transaction confirmed", signature);
})();
