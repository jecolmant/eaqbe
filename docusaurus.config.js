// @ts-check
/** @type {import('@docusaurus/types').Config} */

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { renderToString } from 'katex';

const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',
  url: 'https://your-docusaurus-site.example.com',  // Update with your actual URL
  baseUrl: '/',
  organizationName: 'facebook', // Update with your GitHub organization name
  projectName: 'docusaurus',   // Update with your GitHub repository name
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          remarkPlugins: [
            [remarkMath,
              {
                strict: 'ignore',
              },
            ],
          ],
          rehypePlugins: [
            [rehypeKatex,
              {
                output: 'mathml', // or 'html'
                strict: (errorCode) => errorCode !== 'ignore',
                macros: {
                    '\\eqref': function(name) {
                      return renderToString(`\\href{#eq:${name}}{(${name})}`, {
                        displayMode: false,
                        macros: {
                          '\\eqref': '\\href{#eq:{{name}}}{({{name}})}',
                        },
                        throwOnError: false,
                        errorColor: '#cc0000',
                      });
                    },
                },
                // ... other Katex options
              },
            ],
          ],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // ... your navbar, footer, and other theme config items ...
    }),
};

export default config;
