# STUN Smart Contracts

Smart contracts for the STUN distributed AI network.

## Contracts

- **STUNToken**: ERC-20 token contract
- **ComputeMarketplace**: Task marketplace contract
- **ReputationSystem**: Provider reputation tracking

## Setup

```bash
# Install dependencies
pnpm install

# Compile contracts
pnpm compile

# Run tests
pnpm test

# Deploy to Sepolia testnet
pnpm deploy:sepolia
```

## Environment Variables

Create a `.env` file:

```
PRIVATE_KEY=your_private_key
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/your_key
ETHERSCAN_API_KEY=your_etherscan_key
```

## Development

```bash
# Start local Hardhat node
pnpm node

# Deploy to local network
pnpm deploy:local
```

