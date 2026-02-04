import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 3001,
  },
  dev: {
    assetPrefix: 'http://localhost:3001/',
  },
  output: {
    assetPrefix: 'auto',
  },
  tools: {
    rspack: {
      output: {
        uniqueName: 'remote_products',
      },
      plugins: [
        new ModuleFederationPlugin({
          name: 'remote_products',
          filename: 'remoteEntry.js',
          dts: false,
          exposes: {
            './ProductGrid': './src/components/ProductGrid.tsx',
            './ProductCard': './src/components/ProductCard.tsx',
            './ProductDetail': './src/components/ProductDetail.tsx',
          },
          shared: {
            react: {
              singleton: true,
              requiredVersion: false,
            },
            'react-dom': {
              singleton: true,
              requiredVersion: false,
            },
            'react-router-dom': {
              singleton: true,
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
