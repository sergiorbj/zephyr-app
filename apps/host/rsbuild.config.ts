import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 3000,
  },
  dev: {
    assetPrefix: 'http://localhost:3000/',
  },
  output: {
    assetPrefix: 'auto',
  },
  tools: {
    rspack: {
      output: {
        uniqueName: 'watchvault_host',
      },
      plugins: [
        new ModuleFederationPlugin({
          name: 'watchvault_host',
          dts: false,
          remotes: {
            remote_products: 'remote_products@http://localhost:3001/mf-manifest.json',
          },
          shared: {
            react: {
              singleton: true,
              eager: true,
              requiredVersion: false,
            },
            'react-dom': {
              singleton: true,
              eager: true,
              requiredVersion: false,
            },
            'react-router-dom': {
              singleton: true,
              eager: true,
              requiredVersion: false,
            },
          },
        }),
      ],
    },
  },
  html: {
    template: './index.html',
  },
});
