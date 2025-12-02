# Testing Guide for STUN Smart Contracts

This guide explains how to test the STUN smart contracts.

## Prerequisites

1. **Node.js 18+** installed
2. **pnpm** installed (or npm/yarn)
3. Dependencies installed

## Quick Start

### Step 1: Install Dependencies

From the root of the monorepo:

```bash
# Install all dependencies (including contracts)
pnpm install
```

Or from the contracts package:

```bash
cd packages/contracts
pnpm install
```

### Step 2: Run Tests

```bash
# From packages/contracts directory
cd packages/contracts
pnpm test
```

Or from the root:

```bash
# From root directory
pnpm --filter @stun/contracts test
```

## Test Commands

### Run All Tests

```bash
pnpm test
```

### Run Tests with Coverage

```bash
# First, add coverage script to package.json
# Then run:
pnpm test:coverage
```

### Run Specific Test File

```bash
# Run only STUNToken tests
npx hardhat test test/STUNToken.test.ts
```

### Run Tests in Watch Mode

```bash
# Run tests and watch for changes
npx hardhat test --watch
```

### Run Tests with Gas Reporting

```bash
# See gas usage for each function
REPORT_GAS=true pnpm test
```

## Understanding Test Output

### Successful Test Run

You should see output like:

```
  STUNToken
    Deployment
      ✓ Should set the right owner
      ✓ Should assign the total supply of tokens to the owner
      ✓ Should have correct name and symbol
      ✓ Should have 18 decimals
    Transactions
      ✓ Should transfer tokens between accounts
      ✓ Should fail if sender doesn't have enough tokens
      ✓ Should update balances after transfers
    Pausable
      ✓ Should pause transfers
      ✓ Should unpause transfers
      ✓ Should only allow owner to pause
    Burnable
      ✓ Should allow users to burn their own tokens
    Minting
      ✓ Should allow owner to mint new tokens
      ✓ Should not allow non-owner to mint

  13 passing
```

### Failed Test

If a test fails, you'll see:

```
  1) STUNToken
       Deployment
         Should set the right owner:
     AssertionError: expected '0x...' to equal '0x...'
```

## Test Structure

### Test File: `test/STUNToken.test.ts`

The test file is organized into describe blocks:

1. **Deployment Tests**: Verify contract deployment
2. **Transaction Tests**: Test token transfers
3. **Pausable Tests**: Test pause/unpause functionality
4. **Burnable Tests**: Test token burning
5. **Minting Tests**: Test minting functionality

## Running Tests on Different Networks

### Local Hardhat Network (Default)

```bash
# Tests run on Hardhat's built-in network by default
pnpm test
```

### Forked Mainnet (for integration testing)

```bash
# Fork mainnet for testing
npx hardhat test --network hardhat --fork https://eth-mainnet.alchemyapi.io/v2/YOUR_KEY
```

## Adding More Tests

### Example: Test Custom Function

```typescript
describe("Custom Feature", function () {
  it("Should do something specific", async function () {
    // Arrange
    const amount = ethers.parseEther("100");
    
    // Act
    await stunToken.someFunction(amount);
    
    // Assert
    const result = await stunToken.someValue();
    expect(result).to.equal(amount);
  });
});
```

## Debugging Tests

### Enable Console Logs

```typescript
// In your test file
console.log("Balance:", await stunToken.balanceOf(addr1.address));
```

### Use Hardhat Console

```bash
# Start Hardhat console
npx hardhat console

# Then interact:
const STUNToken = await ethers.getContractFactory("STUNToken");
const token = await STUNToken.deploy(await ethers.getSigners()[0].address);
await token.deployed();
const balance = await token.balanceOf(await ethers.getSigners()[0].address);
console.log("Balance:", ethers.formatEther(balance));
```

### Debug Failed Transactions

```typescript
// In your test, catch and log errors
try {
  await stunToken.someFunction();
} catch (error) {
  console.error("Error:", error);
  throw error;
}
```

## Test Coverage

### Install Coverage Tool

```bash
pnpm add -D solidity-coverage
```

### Add to hardhat.config.ts

```typescript
import "solidity-coverage";

// In config
coverage: {
  enabled: true,
}
```

### Run Coverage

```bash
npx hardhat coverage
```

## Common Issues

### Issue: "Cannot find module '@nomicfoundation/hardhat-ethers'"

**Solution**: Install dependencies
```bash
pnpm install
```

### Issue: "Network not found"

**Solution**: Check hardhat.config.ts network configuration

### Issue: "Insufficient funds"

**Solution**: Tests use Hardhat's built-in accounts with plenty of ETH

### Issue: Tests timeout

**Solution**: Increase timeout in test file:
```typescript
this.timeout(60000); // 60 seconds
```

## Best Practices

1. **Test All Functions**: Every public function should have tests
2. **Test Edge Cases**: Test boundary conditions, zero values, max values
3. **Test Access Control**: Verify only authorized users can call functions
4. **Test Events**: Verify events are emitted correctly
5. **Test Reverts**: Test that functions revert when they should
6. **Use Descriptive Names**: Test names should describe what they test
7. **Arrange-Act-Assert**: Structure tests clearly
8. **Isolate Tests**: Each test should be independent

## Next Steps

After tests pass:

1. **Deploy to Testnet**: See deployment guide
2. **Add More Contracts**: Marketplace, Reputation
3. **Integration Tests**: Test contract interactions
4. **Gas Optimization**: Optimize gas usage
5. **Security Audit**: Get contracts audited

## Resources

- [Hardhat Testing Docs](https://hardhat.org/hardhat-runner/docs/guides/test-contracts)
- [Chai Assertions](https://www.chaijs.com/api/assert/)
- [Ethers.js Docs](https://docs.ethers.org/v6/)

---

*Happy Testing! 🧪*


