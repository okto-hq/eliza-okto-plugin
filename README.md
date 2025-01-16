# elizaos-okto-plugin

A comprehensive integration plugin for ElizaOS that provides access to Okto's various APIs and services.

## Features

- **Token Transfer**: Transfer tokens to other users
- **Wallet Management**: Get user's wallets
- **Portfolio Management**: Get user's portfolio
- **Order History**: Get user's order history

## Installation

```bash
npm install elizaos-okto-plugin
```

## Configuration

The plugin requires several environment variables to be set:

```env
OKTO_API_KEY=
OKTO_BUILD_TYPE=STAGING
OKTO_GOOGLE_ID_TOKEN=
```

## Usage

```typescript
import OktoPlugin from "elizaos-okto-plugin";

runtime.registerPlugin(OktoPlugin);
// etc...
```

## Contributing

Contributions are welcome! Please see the [CONTRIBUTING.md](CONTRIBUTING.md) file for more information.


## License

This plugin is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.