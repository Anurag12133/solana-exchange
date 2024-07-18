# Solana SPL Token Swap Script

This project contains a simple JavaScript script to swap Solana SPL tokens using the Solana Web3.js and SPL Token libraries. The example provided demonstrates swapping SOL with another SPL token.

## Prerequisites

Before running the script, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm (comes with Node.js)

## Setup

1. **Clone the Repository**

   ```sh
   git clone https://github.com/your-repo/solana-token-swap.git
   cd solana-token-swap
   ```

2. **Install Dependencies**

   ```sh
   npm install @solana/web3.js @solana/spl-token
   ```

## Usage

1. **Update Constants**

   In the script file `swap.js`, update the mint addresses for the tokens you want to swap if they are different:

   ```javascript
   const SOL_MINT_ADDRESS = "So11111111111111111111111111111111111111112";
   const DOGWIFTHAT_MINT_ADDRESS =
     "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm";
   ```

2. **Run the Script**

   To execute the script, use the following command:

   ```sh
   node swap.js
   ```

   The script will:

   - Connect to the Solana mainnet.
   - Generate a new keypair for both the sending and receiving wallets.
   - Request an airdrop of SOL to the sending wallet for testing purposes.
   - Create associated token accounts for both the SOL and the other SPL token.
   - Transfer a small amount of SOL to the receiving wallet.

## Notes

- **Security**: This script uses newly generated keypairs for demonstration purposes. In a real application, you would use securely managed wallets and private keys.
- **Error Handling**: This script lacks comprehensive error handling. Ensure you implement proper error checking for production use.
- **Customization**: Modify the token mint addresses, transfer amounts, and other logic as needed for your specific use case.

## References

- [Solana Web3.js Documentation](https://solana-labs.github.io/solana-web3.js/)
- [Solana SPL Token Library Documentation](https://spl.solana.com/token)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
