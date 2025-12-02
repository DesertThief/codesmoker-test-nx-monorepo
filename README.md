# CodeSmoker Test: Nx Monorepo (#14)

A test repository for the CodeSmoker test suite demonstrating an Nx monorepo workspace.

## Project Structure

```
├── apps/
│   └── api/              # API application
├── packages/
│   ├── shared/           # Shared configuration and types
│   └── utils/            # Utility functions
├── nx.json               # Nx configuration
├── tsconfig.base.json    # Base TypeScript config
└── package.json          # Root package.json
```

## Features

- **Nx Build System**: Task orchestration with caching
- **Dependency Graph**: Automatic dependency detection
- **Project References**: Path aliases for clean imports
- **Affected Commands**: Only build/test what changed

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm or pnpm

### Installation

```bash
npm install
# or
pnpm install
```

### Build All Projects

```bash
npx nx run-many --target=build
# or use npm script
npm run build
```

### Visualize Dependency Graph

```bash
npx nx graph
```

### Run Affected

```bash
npx nx affected --target=build
npx nx affected --target=test
```

## Nx Commands

| Command | Description |
|---------|-------------|
| `nx build <project>` | Build a specific project |
| `nx test <project>` | Test a specific project |
| `nx run-many --target=build` | Build all projects |
| `nx graph` | Visualize the dependency graph |
| `nx affected --target=build` | Build only affected projects |

## Path Aliases

The workspace uses TypeScript path aliases:

```typescript
import { getConfig } from '@codesmoker/shared';
import { capitalize } from '@codesmoker/utils';
```

## Documentation

Built using latest documentation from:
- [Nx.dev](https://nx.dev) - Nx monorepo build system documentation

---

*This is a CodeSmoker test repository*
