# 💰 CrowdFund

Decentralized crowdfunding platform with Web3 integration and transparent on-chain donations.

## 🌟 Features

- ✅ Create fundraising campaigns with goals
- ✅ Donate via Web3 (ETH, USDC, tokens)
- ✅ Milestone tracking and progress visualization
- ✅ Automatic refunds if goal not reached
- ✅ On-chain transparency
- ✅ Real-time campaign updates
- ✅ Campaign analytics and charts

## 📦 Project Structure

```
crowdfund/
├── core/             # Backend API
│   ├── src/
│   │   ├── campaigns/
│   │   ├── donations/
│   │   ├── payments/
│   │   └── analytics/
│   └── package.json
│
└── ui/               # Frontend React app
    ├── src/
    │   ├── screens/
    │   ├── modules/
    │   ├── components/
    │   └── lib/
    └── package.json
```

## 🚀 Quick Start

### Core (Backend)

```bash
cd core
npm install
npm run db:init
npm run dev           # http://localhost:4000
```

### UI (Frontend)

```bash
cd ui
npm install
npm run dev           # http://localhost:5173
```

## 🔧 Technologies

### Core
- Hono framework
- SQLite database
- Passport.js + JWT auth
- Joi validation
- Jest testing
- Winston logging

### UI
- React 19 + TypeScript
- Vite 7
- Wagmi 3 + WalletConnect
- Material-UI + Chakra UI
- React Hook Form + Zod validation
- Recharts for progress visualization
- Redux + Zustand state management
- Jest + Playwright testing
- Axios + React Query

## 🤖 Dependabot

Configured for daily updates at 7 AM Warsaw:
- `/ui` - Up to 15 PRs
- `/core` - Up to 10 PRs

## 💎 Smart Contracts

Integration ready for:
- Escrow contracts
- Token payments
- Milestone releases
- Refund mechanisms

## 📄 License

MIT

