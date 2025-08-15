# Preview Lib

A React library for preview functionality, built with Vite and TypeScript.

## Features

- React components for preview functionality
- TypeScript support
- Vite build system
- ESLint and Prettier configuration
- Testing with Vitest

## Installation

```bash
npm install @preview-workspace/preview-lib
```

## Development

### Setup

```bash
npm install
```

### Build

```bash
npm run build
```

### Development Mode

```bash
npm run dev
```

### Testing

```bash
npm test
npm run test:ui
```

### Linting

```bash
npm run lint
npm run lint:fix
```

### Formatting

```bash
npm run format
```

## Publishing

### Local Development

Start local Verdaccio registry:
```bash
npm run verdaccio:start
```

Publish to local registry:
```bash
npm run publish:local
npm run publish:local:patch
npm run publish:local:minor
npm run publish:local:major
```

### Production

Publish to production registry:
```bash
npm run publish:patch
npm run publish:minor
npm run publish:major
```

## Scripts

- `build` - Build the library
- `dev` - Build in watch mode
- `type-check` - Run TypeScript type checking
- `lint` - Run ESLint
- `lint:fix` - Fix ESLint issues
- `format` - Format code with Prettier
- `test` - Run tests
- `test:ui` - Run tests with UI
- `clean` - Clean build output
- `publish:patch` - Publish patch version
- `publish:minor` - Publish minor version
- `publish:major` - Publish major version
- `publish:local` - Publish to local registry
- `publish:local:patch` - Publish patch to local registry
- `publish:local:minor` - Publish minor to local registry
- `publish:local:major` - Publish major to local registry
- `verdaccio:start` - Start local Verdaccio registry
- `verdaccio:stop` - Stop local Verdaccio registry

## Configuration

- `.npmrc` - Production registry configuration
- `.npmrc.local` - Local development registry configuration (gitignored)
- `.verdaccio/` - Verdaccio configuration (gitignored)

## Structure

```
preview-workspace/
├── src/                    # Source code
│   ├── index.ts           # Main entry point
│   └── lib/               # Library code
├── dist/                  # Build output
├── .verdaccio/           # Verdaccio configuration
├── package.json          # Package configuration
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
├── eslint.config.mjs     # ESLint configuration
└── README.md             # This file
```
