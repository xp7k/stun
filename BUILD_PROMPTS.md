# Step-by-Step Build Prompts for STUN

This document contains prompts you can use to build the STUN distributed AI network step by step. Each prompt is self-contained and can be used with AI assistants or as development tasks.

---

## Phase 1: Monorepo Setup

### Prompt 1.1: Initialize Monorepo Structure

```
Create a monorepo structure for a distributed AI compute network called STUN using pnpm workspaces and Turborepo.

Structure:
- apps/ (web dashboard, provider client, docs)
- packages/ (contracts, SDKs, shared utilities, UI components)
- services/ (orchestrator, API gateway, QA system)
- tools/ (scripts, CLI)

Requirements:
1. Set up pnpm workspace with pnpm-workspace.yaml
2. Configure Turborepo with turbo.json
3. Create root package.json with workspace scripts
4. Set up TypeScript configuration at root
5. Add ESLint and Prettier configs
6. Create basic README.md explaining the structure
7. Add .gitignore for monorepo
8. Set up GitHub Actions workflow for CI/CD

The monorepo should support:
- TypeScript for most packages
- Python for provider client
- Solidity for smart contracts
- Shared dependencies and tooling
```

### Prompt 1.2: Set Up Root Configuration

```
Set up root-level configuration files for the STUN monorepo:

1. Create tsconfig.json with base TypeScript config that other packages can extend
2. Create .eslintrc.js with shared ESLint rules
3. Create .prettierrc with code formatting rules
4. Create .editorconfig for consistent editor settings
5. Create .gitignore for Node.js, Python, and Solidity files
6. Create turbo.json with pipeline configuration:
   - dev: runs dev servers in parallel
   - build: builds in dependency order
   - test: runs tests in parallel
   - lint: lints all packages
7. Create pnpm-workspace.yaml defining all workspace packages

All configs should follow best practices for monorepos.
```

---

## Phase 2: Smart Contracts

### Prompt 2.1: Set Up Smart Contracts Package

```
Create a smart contracts package in packages/contracts/ for the STUN network.

Requirements:
1. Set up Hardhat project with TypeScript
2. Configure for Ethereum (Sepolia testnet initially)
3. Install OpenZeppelin contracts
4. Set up test environment with Hardhat
5. Create basic folder structure:
   - contracts/ (Solidity files)
   - scripts/ (deployment scripts)
   - test/ (test files)
   - hardhat.config.ts
6. Add package.json with necessary dependencies
7. Create README.md with setup instructions

The package should be ready for developing ERC-20 token and marketplace contracts.
```

### Prompt 2.2: Create STUN Token Contract

```
Create an ERC-20 token contract called STUNToken for the STUN network.

Requirements:
1. Use OpenZeppelin's ERC20 contract as base
2. Token name: "STUN"
3. Token symbol: "STUN"
4. Total supply: 1,000,000,000 STUN (1 billion)
5. Decimals: 18
6. Include minting functionality (only owner can mint)
7. Include burning functionality (anyone can burn their tokens)
8. Add pause functionality (owner can pause transfers)
9. Write comprehensive tests using Hardhat and ethers.js
10. Add NatSpec documentation

The contract should be production-ready and follow security best practices.
```

### Prompt 2.3: Create Marketplace Contract

```
Create a ComputeMarketplace smart contract for the STUN network.

Requirements:
1. Task submission: Users can submit compute tasks with requirements and reward
2. Provider registration: GPU providers can register with their specs
3. Task assignment: Providers can claim tasks
4. Task completion: Providers submit results
5. Payment escrow: Hold payment until task completion
6. Reputation system: Track provider performance
7. Dispute resolution: Basic dispute mechanism
8. Events: Emit events for all major actions
9. Access control: Use OpenZeppelin's Ownable and AccessControl
10. Write comprehensive tests
11. Add NatSpec documentation

The contract should handle:
- Task lifecycle (pending → assigned → completed/cancelled)
- Payment flow (escrow → release)
- Provider reputation tracking
- Basic quality assurance (require result hash)
```

### Prompt 2.4: Create Reputation Contract

```
Create a ReputationSystem smart contract for tracking GPU provider performance.

Requirements:
1. Store reputation scores for each provider (0-100 scale)
2. Update reputation based on:
   - Task completion rate
   - Result accuracy (when verified)
   - Response time
   - Uptime
3. Calculate weighted reputation (recent performance weighted higher)
4. Slashing mechanism: Reduce reputation for bad behavior
5. Reputation tiers: Bronze, Silver, Gold, Platinum, Diamond
6. Events for reputation changes
7. View functions for querying reputation
8. Write comprehensive tests
9. Add NatSpec documentation

The contract should integrate with the marketplace contract.
```

### Prompt 2.5: Create Deployment Scripts

```
Create deployment scripts for STUN smart contracts.

Requirements:
1. Deploy script for STUNToken
2. Deploy script for ComputeMarketplace
3. Deploy script for ReputationSystem
4. Script to verify contracts on Etherscan
5. Script to initialize contracts (set up relationships)
6. Script for testnet deployment
7. Script for mainnet deployment (with safety checks)
8. Use Hardhat's deployment system
9. Support for multiple networks (hardhat, sepolia, mainnet)
10. Include gas estimation
11. Add deployment verification

All scripts should be in TypeScript and use environment variables for sensitive data.
```

---

## Phase 3: Shared Packages

### Prompt 3.1: Create Shared Types Package

```
Create a shared types package (packages/shared) for the STUN monorepo.

Requirements:
1. Define TypeScript types for:
   - Task (id, model, input, requirements, reward, status)
   - Provider (address, specs, reputation, status)
   - GPU specs (memory, compute capability, tier)
   - Task result (taskId, result, proof, timestamp)
   - Reputation (score, tier, history)
2. Define enums for:
   - TaskStatus (pending, assigned, completed, cancelled, failed)
   - ProviderStatus (active, inactive, banned)
   - GPUTier (tier1, tier2, tier3, tier4)
3. Create Zod schemas for runtime validation
4. Export all types and schemas
5. Add package.json with proper exports
6. Create index.ts for easy imports
7. Write README.md with usage examples

Types should be used across SDK, web app, and services.
```

### Prompt 3.2: Create Shared Utilities Package

```
Create shared utilities package (packages/shared) with common functions.

Requirements:
1. Crypto utilities:
   - Hash functions
   - Signature verification
   - Address validation
2. Formatting utilities:
   - Format token amounts
   - Format addresses
   - Format timestamps
3. Validation utilities:
   - Validate Ethereum addresses
   - Validate task requirements
   - Validate provider specs
4. Constants:
   - Network configurations
   - Contract addresses (per network)
   - Default values
5. Error classes:
   - Custom error types
   - Error messages
6. Add package.json
7. Write tests for all utilities
8. Create README.md

All utilities should be well-documented and tested.
```

### Prompt 3.3: Create UI Components Package

```
Create a shared UI components package (packages/ui) using React and Tailwind CSS.

Requirements:
1. Set up React component library with TypeScript
2. Configure Tailwind CSS
3. Create base components:
   - Button (variants: primary, secondary, outline)
   - Input (text, number, textarea)
   - Card
   - Modal
   - Loading spinner
   - Badge
   - Alert
4. Create STUN-specific components:
   - WalletConnect button
   - TaskCard (display task info)
   - ProviderCard (display provider info)
   - EarningsDisplay
   - ReputationBadge
5. Set up Storybook for component documentation
6. Add dark mode support
7. Make components responsive
8. Add package.json with proper exports
9. Write README.md with usage examples

Components should be reusable across web app and docs.
```

---

## Phase 4: SDK Development

### Prompt 4.1: Create TypeScript SDK Package

```
Create a TypeScript SDK package (packages/sdk) for interacting with the STUN network.

Requirements:
1. Set up package with TypeScript
2. Install dependencies: ethers.js, viem, or similar
3. Create SDK class with methods:
   - connectWallet() - Connect to wallet
   - submitTask() - Submit compute task
   - getTask() - Get task details
   - getProviderTasks() - Get provider's tasks
   - registerProvider() - Register as GPU provider
   - getProviderInfo() - Get provider information
   - getReputation() - Get provider reputation
4. Support multiple wallets (MetaMask, WalletConnect, Coinbase)
5. Handle network switching
6. Error handling with custom error types
7. Type-safe API using shared types
8. Add retry logic for failed transactions
9. Add gas estimation
10. Write comprehensive tests
11. Create README.md with examples

The SDK should be easy to use and well-documented.
```

### Prompt 4.2: Create Python SDK Package

```
Create a Python SDK package (packages/sdk-python) for the STUN network.

Requirements:
1. Set up Python package with pyproject.toml
2. Use web3.py or similar for blockchain interaction
3. Create SDK class with methods:
   - connect_wallet() - Connect to wallet
   - submit_task() - Submit compute task
   - get_task() - Get task details
   - register_provider() - Register as GPU provider
   - execute_task() - Execute compute task
   - submit_result() - Submit task result
4. Support async/await
5. Type hints for all methods
6. Error handling with custom exceptions
7. Configuration management
8. Logging support
9. Write comprehensive tests with pytest
10. Create README.md with examples
11. Add to monorepo (even though it's Python)

The SDK should be Pythonic and easy to use.
```

---

## Phase 5: Web Application

### Prompt 5.1: Set Up Next.js Web App

```
Create a Next.js 14+ web application in apps/web for the STUN network dashboard.

Requirements:
1. Set up Next.js with App Router
2. Configure TypeScript
3. Set up Tailwind CSS
4. Install dependencies:
   - wagmi/viem for wallet connection
   - React Query for data fetching
   - STUN SDK package
   - Shared UI components
5. Create folder structure:
   - app/ (routes)
   - components/ (page components)
   - hooks/ (custom React hooks)
   - lib/ (utilities)
6. Set up environment variables
7. Configure wallet providers
8. Create basic layout with navigation
9. Add error boundaries
10. Set up routing structure

The app should be ready for building provider and developer dashboards.
```

### Prompt 5.2: Create Provider Dashboard

```
Create a provider dashboard page in the STUN web app.

Requirements:
1. Dashboard layout with:
   - Header with wallet connection
   - Sidebar navigation
   - Main content area
2. Provider registration form:
   - GPU specs input
   - Staking amount
   - Submit registration
3. Earnings display:
   - Total earnings
   - Earnings chart (last 30 days)
   - Recent transactions
4. Active tasks view:
   - List of assigned tasks
   - Task status
   - Action buttons
5. Performance metrics:
   - Uptime percentage
   - Tasks completed
   - Average response time
   - Reputation score
6. Settings page:
   - Update provider info
   - Withdraw earnings
   - Staking management
7. Use shared UI components
8. Connect to STUN SDK
9. Real-time updates (polling or WebSocket)

Make it responsive and user-friendly.
```

### Prompt 5.3: Create Developer Dashboard

```
Create a developer dashboard page in the STUN web app.

Requirements:
1. Dashboard layout (similar to provider dashboard)
2. Task submission form:
   - Model selection/upload
   - Input data upload
   - Requirements (GPU specs, privacy)
   - Reward amount
   - Submit task
3. Task management:
   - List of submitted tasks
   - Task status (pending, in-progress, completed)
   - View results
   - Download results
4. Usage analytics:
   - Tasks submitted (chart)
   - Total spent
   - Average cost per task
   - Usage over time
5. Billing:
   - Current balance
   - Payment history
   - Add funds
6. Model marketplace (if implemented):
   - Browse models
   - Deploy model
7. Use shared UI components
8. Connect to STUN SDK
9. Real-time task updates

Make it intuitive for developers to use.
```

---

## Phase 6: Provider Client

### Prompt 6.1: Set Up Provider Client Application

```
Create a GPU provider client application in apps/provider-client.

Requirements:
1. Set up Python project structure
2. Install dependencies:
   - web3.py (blockchain)
   - pynvml (GPU detection)
   - requests (API calls)
   - click (CLI)
3. Create main application structure:
   - main.py (entry point)
   - gpu_manager.py (GPU detection and management)
   - task_executor.py (execute AI tasks)
   - wallet_manager.py (wallet operations)
   - api_client.py (API communication)
   - config.py (configuration)
4. Set up configuration file (YAML or JSON)
5. Add logging
6. Create CLI interface with commands:
   - start (start provider)
   - stop (stop provider)
   - status (show status)
   - register (register as provider)
7. Add package.json entry (for monorepo)
8. Create README.md

The client should be ready for GPU detection and task execution.
```

### Prompt 6.2: Implement GPU Detection

```
Implement GPU detection functionality in the provider client.

Requirements:
1. Use pynvml to detect NVIDIA GPUs
2. Detect GPU specifications:
   - Model name
   - Memory (VRAM)
   - Compute capability
   - Driver version
3. Categorize GPUs into tiers:
   - Tier 1: A100, RTX 4090 (16GB+ VRAM, compute 8.0+)
   - Tier 2: V100, RTX 4080 (8-16GB VRAM, compute 7.0+)
   - Tier 3: T4, RTX 4070 (4-8GB VRAM, compute 6.0+)
   - Tier 4: Consumer GPUs (others)
4. Support multiple GPUs
5. Monitor GPU availability
6. Handle GPU errors gracefully
7. Return structured GPU information
8. Write tests
9. Add logging

The detection should be accurate and handle edge cases.
```

### Prompt 6.3: Implement Task Execution

```
Implement task execution functionality in the provider client.

Requirements:
1. Task download:
   - Download model files
   - Download input data
   - Verify integrity
2. Task execution:
   - Load model (PyTorch/TensorFlow)
   - Run inference on input
   - Monitor GPU usage
   - Handle errors
3. Result generation:
   - Format results
   - Generate result hash
   - Create proof (if needed)
4. Result submission:
   - Upload results
   - Submit to blockchain
   - Handle failures
5. Task queue management:
   - Queue tasks
   - Prioritize tasks
   - Retry failed tasks
6. Resource management:
   - Check GPU availability
   - Allocate GPU to task
   - Release GPU after completion
7. Write tests
8. Add comprehensive logging

The execution should be robust and handle various AI frameworks.
```

---

## Phase 7: Backend Services

### Prompt 7.1: Set Up Orchestrator Service

```
Create an orchestrator service in services/orchestrator for task scheduling and matching.

Requirements:
1. Set up Node.js/TypeScript project
2. Install dependencies:
   - Express or Fastify
   - Prisma or TypeORM (database)
   - Redis (caching)
   - Bull (job queue)
3. Create service structure:
   - src/
     - api/ (REST endpoints)
     - services/ (business logic)
     - models/ (data models)
     - utils/ (utilities)
4. Implement task scheduler:
   - Match tasks to providers
   - Consider GPU specs, reputation, location
   - Load balancing
5. Implement matching algorithm:
   - Score providers for each task
   - Select best match
   - Handle conflicts
6. Database schema:
   - Tasks table
   - Providers table
   - Assignments table
7. API endpoints:
   - POST /tasks (submit task)
   - GET /tasks/:id (get task)
   - GET /providers (list providers)
   - POST /assign (assign task)
8. Add tests
9. Create README.md

The service should efficiently match tasks to providers.
```

### Prompt 7.2: Set Up API Gateway Service

```
Create an API gateway service in services/api-gateway.

Requirements:
1. Set up Node.js/TypeScript with Express or Fastify
2. Implement authentication:
   - JWT tokens
   - API keys
   - Wallet signature verification
3. Rate limiting:
   - Per IP
   - Per API key
   - Per wallet address
4. Request routing:
   - Route to orchestrator
   - Route to QA service
   - Route to monitoring
5. Request/response transformation
6. Error handling
7. Logging and monitoring
8. CORS configuration
9. Health check endpoint
10. API documentation (Swagger/OpenAPI)
11. Add tests
12. Create README.md

The gateway should handle all external API requests.
```

### Prompt 7.3: Set Up Quality Assurance Service

```
Create a quality assurance service in services/quality-assurance.

Requirements:
1. Set up Node.js/TypeScript project
2. Implement result verification:
   - Redundant execution (run on 2-3 providers)
   - Compare results
   - Verify consensus
3. Reputation tracking:
   - Update provider reputation
   - Track accuracy
   - Track response time
4. Fraud detection:
   - Detect suspicious patterns
   - Flag providers
   - Generate reports
5. Database for tracking:
   - Verification results
   - Reputation history
   - Fraud reports
6. API endpoints:
   - POST /verify (verify result)
   - GET /reputation/:address (get reputation)
   - POST /report (report fraud)
7. Integration with blockchain (update reputation contract)
8. Add tests
9. Create README.md

The service should ensure quality and prevent fraud.
```

---

## Phase 8: Testing & CI/CD

### Prompt 8.1: Set Up Testing Infrastructure

```
Set up comprehensive testing infrastructure for the STUN monorepo.

Requirements:
1. Unit tests:
   - Jest for TypeScript packages
   - pytest for Python packages
   - Hardhat tests for contracts
2. Integration tests:
   - Test contract interactions
   - Test API endpoints
   - Test SDK functionality
3. E2E tests:
   - Playwright or Cypress for web app
   - Test full user flows
4. Test configuration:
   - Jest config for each package
   - pytest config for Python
   - Test scripts in package.json
5. Test coverage:
   - Set up coverage reporting
   - Minimum coverage thresholds
6. Test utilities:
   - Mock data
   - Test helpers
   - Fixtures
7. Add test scripts to root package.json
8. Create testing guide in docs/

All packages should have tests.
```

### Prompt 8.2: Set Up CI/CD Pipeline

```
Create GitHub Actions CI/CD pipeline for the STUN monorepo.

Requirements:
1. Workflow for each package type:
   - TypeScript packages (lint, test, build)
   - Python packages (lint, test)
   - Smart contracts (compile, test)
   - Web app (build, test)
2. Parallel execution where possible
3. Cache dependencies (pnpm, pip)
4. Run tests on PR
5. Build on main branch
6. Deploy to testnet on main (if configured)
7. Security scanning:
   - Dependabot
   - CodeQL
   - Linting
8. Coverage reporting
9. Status badges
10. Deployment workflows (separate)

The pipeline should be fast and reliable.
```

---

## Phase 9: Documentation

### Prompt 9.1: Set Up Documentation Site

```
Create a documentation site in apps/docs using Next.js or Docusaurus.

Requirements:
1. Set up documentation framework
2. Create documentation structure:
   - Getting Started
   - Architecture
   - API Reference
   - SDK Documentation
   - Smart Contract Documentation
   - Guides (for providers, developers)
3. Add code examples
4. Add diagrams (architecture, flowcharts)
5. Search functionality
6. Dark mode
7. Versioning (if needed)
8. Deploy to Vercel or similar
9. Auto-generate API docs from code
10. Link to GitHub

The docs should be comprehensive and easy to navigate.
```

---

## Phase 10: Deployment

### Prompt 10.1: Create Docker Configuration

```
Create Docker configurations for all STUN services.

Requirements:
1. Dockerfile for each service:
   - API gateway
   - Orchestrator
   - QA service
   - Web app
2. Docker Compose for local development:
   - All services
   - Database (PostgreSQL)
   - Redis
   - Message queue
3. Multi-stage builds for optimization
4. Health checks
5. Environment variable configuration
6. .dockerignore files
7. Documentation for running locally
8. Production-ready configurations

All services should be containerized.
```

### Prompt 10.2: Create Deployment Scripts

```
Create deployment scripts for the STUN network.

Requirements:
1. Scripts for:
   - Deploying smart contracts (testnet/mainnet)
   - Deploying services (staging/production)
   - Deploying web app
   - Database migrations
2. Environment-specific configs
3. Rollback procedures
4. Health checks after deployment
5. Notifications (Slack, Discord)
6. Use TypeScript or bash
7. Add to tools/scripts/
8. Documentation

Scripts should be safe and well-tested.
```

---

## Usage Instructions

1. **Start with Phase 1**: Set up the monorepo structure
2. **Then Phase 2**: Build smart contracts (core functionality)
3. **Then Phase 3**: Create shared packages (foundation)
4. **Continue sequentially**: Each phase builds on previous ones
5. **Customize prompts**: Adjust based on your specific needs
6. **Iterate**: Refine and improve as you build

## Tips

- Use these prompts with AI coding assistants (Claude, ChatGPT, etc.)
- Break down complex prompts into smaller ones if needed
- Test each component as you build it
- Keep the monorepo structure consistent
- Document as you go

---

*These prompts are designed to be used step-by-step to build the complete STUN network.*

