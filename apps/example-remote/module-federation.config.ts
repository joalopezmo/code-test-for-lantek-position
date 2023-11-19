import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'example-remote',
  exposes: {
    './Routes': 'apps/example-remote/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
