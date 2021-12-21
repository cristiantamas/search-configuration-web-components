import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';


export const config: Config = {
  namespace: 'search-configuration-web-components',
  globalStyle: './src/assets/styles/global.scss',
  buildEs5: true,
  minifyJs: false,
  extras: {
    cssVarsShim: true,
    dynamicImportShim: true,
    shadowDomShim: true,
    safari10: true,
    scriptDataOpts: true,
  },
  plugins: [
    sass()
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
