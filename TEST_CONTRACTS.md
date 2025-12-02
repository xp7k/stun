# Quick Guide: Testing STUN Contracts

## 🚀 Quick Start (3 Steps)

### Step 1: Install Dependencies

```bash
# From the root directory
pnpm install
```

Or if you're in the contracts directory:

```bash
cd packages/contracts
pnpm install
```

### Step 2: Compile Contracts

```bash
cd packages/contracts
pnpm compile
```

This compiles the Solidity contracts to bytecode.

### Step 3: Run Tests

```bash
pnpm test
```

That's it! You should see test results.

---

## 📊 Expected Output

When tests pass, you'll see:

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

  13 passing (Xms)
```

---

## 🛠️ Additional Test Commands

### Run Tests in Watch Mode

```bash
pnpm test:watch
```
Reruns tests automatically when files change.

### Run Tests with Gas Reporting

```bash
pnpm test:gas
```
Shows gas usage for each function call.

### Run Specific Test File

```bash
npx hardhat test test/STUNToken.test.ts
```

### Run Tests with Verbose Output

```bash
npx hardhat test --verbose
```

---

## 🐛 Troubleshooting

### Issue: "Cannot find module"

**Solution**: Make sure you've run `pnpm install` from the root directory.

### Issue: "Contract not found"

**Solution**: Run `pnpm compile` first to compile the contracts.

### Issue: Tests are slow

**Solution**: This is normal for the first run. Subsequent runs are faster due to caching.

### Issue: TypeScript errors

**Solution**: Make sure TypeScript is installed and run `pnpm compile` to generate type definitions.

---

## 📝 What the Tests Cover

The test suite (`test/STUNToken.test.ts`) tests:

1. **Deployment**:
   - Owner is set correctly
   - Total supply is minted to owner
   - Token name and symbol are correct
   - Decimals are 18

2. **Transactions**:
   - Tokens can be transferred
   - Transfers fail with insufficient balance
   - Balances update correctly

3. **Pausable**:
   - Owner can pause transfers
   - Owner can unpause transfers
   - Only owner can pause

4. **Burnable**:
   - Users can burn their own tokens

5. **Minting**:
   - Owner can mint new tokens
   - Non-owners cannot mint

---

## 🎯 Next Steps After Tests Pass

1. ✅ **Tests Pass**: All 13 tests should pass
2. **Deploy Locally**: Test deployment on local Hardhat node
3. **Deploy to Testnet**: Deploy to Sepolia testnet
4. **Build Marketplace Contract**: Continue with next contract

---

## 📚 Full Documentation

See `packages/contracts/TESTING_GUIDE.md` for comprehensive testing documentation.

---

*Run `pnpm test` to get started! 🧪*


