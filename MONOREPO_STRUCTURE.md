# STUN Monorepo Structure

## Overview

This document defines the monorepo structure for the STUN distributed AI network. All code will be organized in a single repository for easier development, testing, and deployment.

## Technology Stack

- **Monorepo Tool**: Turborepo or Nx (for managing multiple packages)
- **Package Manager**: pnpm (faster, better for monorepos)
- **Language**: TypeScript (primary), Python (for GPU client), Rust (optional for performance)
- **Blockchain**: Solidity (smart contracts), Hardhat/Foundry (development)

## Directory Structure

```
stun/
├── apps/                          # Applications
│   ├── web/                      # Web dashboard (Next.js)
│   ├── provider-client/          # GPU provider client (Python/Electron)
│   ├── mobile/                   # Mobile apps (React Native) - later
│   └── docs/                     # Documentation site
│
├── packages/                     # Shared packages
│   ├── contracts/                # Smart contracts (Solidity)
│   ├── sdk/                      # TypeScript SDK
│   ├── sdk-python/               # Python SDK
│   ├── sdk-rust/                 # Rust SDK (optional)
│   ├── shared/                   # Shared utilities, types
│   ├── ui/                       # Shared UI components
│   ├── config/                   # Shared configs (ESLint, TypeScript, etc.)
│   └── api/                      # API client library
│
├── services/                     # Backend services
│   ├── orchestrator/             # Task scheduler, matching engine
│   ├── api-gateway/              # API gateway (Node.js/Express)
│   ├── quality-assurance/        # QA system
│   ├── monitoring/                # Monitoring service
│   └── bridge/                   # Cross-chain bridge service
│
├── tools/                        # Development tools
│   ├── scripts/                  # Build, deploy scripts
│   └── cli/                      # CLI tools
│
├── infrastructure/               # Infrastructure as code
│   ├── docker/                   # Dockerfiles
│   ├── k8s/                      # Kubernetes configs (later)
│   └── terraform/                # Terraform configs (later)
│
├── tests/                        # Integration tests
│   ├── e2e/                      # End-to-end tests
│   └── load/                     # Load tests
│
├── .github/                      # GitHub workflows
│   └── workflows/                # CI/CD pipelines
│
├── docs/                         # Documentation
│   ├── architecture/             # Architecture docs
│   ├── api/                      # API documentation
│   └── guides/                   # User guides
│
├── package.json                  # Root package.json
├── pnpm-workspace.yaml           # pnpm workspace config
├── turbo.json                    # Turborepo config
├── tsconfig.json                 # Root TypeScript config
└── README.md                     # Main README
```

## Package Details

### Apps

**apps/web**
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- React Query
- Wallet integration (wagmi, viem)

**apps/provider-client**
- Python (primary)
- Electron (optional desktop wrapper)
- GPU detection (pynvml)
- Task execution
- Wallet integration

**apps/docs**
- Next.js or Docusaurus
- MDX for documentation

### Packages

**packages/contracts**
- Solidity smart contracts
- Hardhat/Foundry
- OpenZeppelin contracts
- Tests

**packages/sdk**
- TypeScript SDK
- Node.js and browser compatible
- API client
- Wallet integration

**packages/sdk-python**
- Python SDK
- Async/await support
- Type hints

**packages/shared**
- Shared TypeScript types
- Utilities
- Constants
- Validation schemas (Zod)

**packages/ui**
- React components
- Tailwind CSS
- Storybook (for component docs)

**packages/api**
- API client
- Type-safe API calls
- Error handling

### Services

**services/orchestrator**
- Node.js/TypeScript
- Task scheduling
- Resource matching
- Load balancing

**services/api-gateway**
- Node.js/Express or Fastify
- Authentication
- Rate limiting
- Request routing

**services/quality-assurance**
- Node.js/TypeScript
- Result verification
- Reputation tracking

**services/monitoring**
- Node.js/TypeScript
- Metrics collection
- Alerting

## Workspace Configuration

### pnpm-workspace.yaml
```yaml
packages:
  - 'apps/*'
  - 'packages/*'
  - 'services/*'
  - 'tools/*'
```

### Root package.json
```json
{
  "name": "stun-monorepo",
  "private": true,
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "test": "turbo run test",
    "lint": "turbo run lint",
    "clean": "turbo run clean"
  },
  "devDependencies": {
    "turbo": "latest",
    "typescript": "^5.0.0"
  }
}
```

## Development Workflow

1. **Install dependencies**: `pnpm install`
2. **Run all dev servers**: `pnpm dev`
3. **Build all packages**: `pnpm build`
4. **Run tests**: `pnpm test`
5. **Lint**: `pnpm lint`

## Benefits of Monorepo

1. **Code Sharing**: Easy to share types, utilities, components
2. **Atomic Changes**: Change multiple packages in one commit
3. **Consistent Tooling**: Same linting, testing, building across all packages
4. **Easier Refactoring**: Refactor across packages safely
5. **Single Source of Truth**: All code in one place


