# STUN Monorepo - Build Status

## 🚀 Getting Started

This is the STUN (Secure Trusted Unified Network) monorepo - a distributed AI compute network on blockchain.

### Prerequisites

- Node.js 18+
- pnpm 8+
- Python 3.10+ (for provider client)
- Git

### Installation

```bash
# Install pnpm if you don't have it
npm install -g pnpm

# Install dependencies
pnpm install
```

### Development

```bash
# Run all dev servers
pnpm dev

# Build all packages
pnpm build

# Run tests
pnpm test

# Lint code
pnpm lint
```

## 📁 Project Structure

```
stun/
├── apps/                    # Applications
│   ├── web/                # Web dashboard (Next.js)
│   ├── provider-client/    # GPU provider client (Python)
│   └── docs/               # Documentation site
│
├── packages/               # Shared packages
│   ├── contracts/         # Smart contracts (Solidity)
│   ├── sdk/               # TypeScript SDK
│   ├── sdk-python/        # Python SDK
│   ├── shared/            # Shared utilities & types
│   ├── ui/                # UI components
│   └── api/               # API client
│
├── services/               # Backend services
│   ├── orchestrator/      # Task scheduler
│   ├── api-gateway/       # API gateway
│   └── quality-assurance/ # QA system
│
└── tools/                  # Development tools
```

## 🏗️ Build Progress

### ✅ Phase 1: Monorepo Setup (Complete)
- [x] Monorepo structure created
- [x] pnpm workspace configured
- [x] Turborepo set up
- [x] TypeScript configuration
- [x] ESLint & Prettier
- [x] CI/CD pipeline

### 🔄 Phase 2: Smart Contracts (Next)
- [ ] Contracts package setup
- [ ] STUN token contract
- [ ] Marketplace contract
- [ ] Reputation contract
- [ ] Deployment scripts

### 📋 Phase 3: Shared Packages (Pending)
- [ ] Shared types
- [ ] Shared utilities
- [ ] UI components

### 📋 Phase 4: SDKs (Pending)
- [ ] TypeScript SDK
- [ ] Python SDK

### 📋 Phase 5: Web Application (Pending)
- [ ] Next.js setup
- [ ] Provider dashboard
- [ ] Developer dashboard

### 📋 Phase 6: Provider Client (Pending)
- [ ] Client setup
- [ ] GPU detection
- [ ] Task execution

### 📋 Phase 7: Backend Services (Pending)
- [ ] Orchestrator service
- [ ] API gateway
- [ ] QA service

## 📚 Documentation

- [BUILD_PROMPTS.md](./BUILD_PROMPTS.md) - Step-by-step build prompts
- [QUICK_START.md](./QUICK_START.md) - Quick start guide
- [MONOREPO_STRUCTURE.md](./MONOREPO_STRUCTURE.md) - Structure details
- [TECHNICAL_ARCHITECTURE.md](./TECHNICAL_ARCHITECTURE.md) - Architecture

## 🛠️ Tech Stack

- **Monorepo**: Turborepo + pnpm
- **Frontend**: Next.js 14+, React, TypeScript, Tailwind CSS
- **Backend**: Node.js, TypeScript, Express/Fastify
- **Blockchain**: Solidity, Hardhat
- **Provider Client**: Python
- **Database**: PostgreSQL, Redis

## 📝 Next Steps

1. Set up smart contracts package (see BUILD_PROMPTS.md - Prompt 2.1)
2. Create STUN token contract
3. Build marketplace contract
4. Continue with shared packages

See [BUILD_PROMPTS.md](./BUILD_PROMPTS.md) for detailed prompts.

---

*Building STUN step by step 🚀*

