import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'host',
  remotes: ['dashboard'],
};

export default config;
