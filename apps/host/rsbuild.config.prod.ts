import { defineConfig } from '@rsbuild/core';
import { withZephyr } from 'zephyr-rsbuild-plugin';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

// Production config - uses Zephyr Cloud
export default defineConfig({
  plugins: [pluginReact(), withZephyr()],
  server: {
    port: 3000
  },
  output: {
    assetPrefix: 'auto'
  },
  tools: {
    rspack: {
      output: {
        uniqueName: 'watchvault_host'
      },
      plugins: [new ModuleFederationPlugin({
        name: 'watchvault_host',
        dts: false,
        remotes: {
          remote_products: 'remote_products@https://sergio-b-9-watchvault-remote-products-zephyr-app--583a66a78-ze.zephyrcloud.app/mf-manifest.json'
        },
        shared: {
          react: {
            singleton: true,
            eager: true,
            requiredVersion: false
          },
          'react-dom': {
            singleton: true,
            eager: true,
            requiredVersion: false
          },
          'react-router-dom': {
            singleton: true,
            eager: true,
            requiredVersion: false
          }
        }
      })]
    }
  },
  html: {
    template: './index.html'
  }
});
