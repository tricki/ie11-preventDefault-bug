import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'ie11-preventdefault-bug',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
