# WatchVault

A watch e-commerce built with **Module Federation** architecture to demonstrate micro-frontends.

**Tech Stack:**
- React 19 + TypeScript
- Rsbuild with Module Federation
- Nx Monorepo
- Tailwind CSS

**Architecture:**
```
apps/
├── host/              → Main shell (port 3000)
└── remote-products/   → Product catalog micro-frontend (port 3001)

libs/
└── shared/            → Shared types and components
```

## Getting Started

**Install dependencies:**
```bash
npm install
```

**Run development servers:**
```bash
npm run dev
```

This starts both applications in parallel:
- **Host:** http://localhost:3000
- **Remote Products:** http://localhost:3001

> **Note:** The remote-products app must be running for the host to load the product components.
