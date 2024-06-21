import designSystem from '@octoml/design-system/tailwind.config';

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './node_modules/@octoml/design-system/dist/**/*.js',
    './src/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  presets: [designSystem],
  theme: {
    extend: {
      height: {
        '55vh': '55vh',
      },
      spacing: {
        '80px': '5rem',
        '160px': '10rem',
        '300px': '18.75rem',
        '35vh': '35vh',
      },
      maxWidth: {
        container: '1780px',
      },
      backgroundColor: {
        'dark-gray': '#111213',
      },
      backgroundImage: {
        noise: "url('/images/noise.png')",
        layeredGradient:
          'linear-gradient(180deg, #111213 0%, rgba(17, 18, 19, 0.00) 37.07%),   linear-gradient(198deg, #111213 0.6%, rgba(17, 18, 19, 0.00) 82.95%), linear-gradient(262deg, #111213 16.09%, rgba(17, 18, 19, 0.00) 47.02%), linear-gradient(97deg, #111213 7.24%, rgba(17, 18, 19, 0.00) 55.34%), linear-gradient(90deg, #0180FF 0%, #32D583 100%), linear-gradient(270deg, #F6BA83 0%, #EEA69D 147.12%)',
        'gradient-blk-to-btm-l':
          'linear-gradient(0deg, #111213 0%, rgba(17, 18, 19, 0.00) 37.07%)',
        'gradient-blk-to-top-r':
          'linear-gradient(20deg, #111213 0.6%, rgba(17, 18, 19, 0.00) 82.95%)',
        'gradient-blk-to-l':
          'linear-gradient(80deg, #111213 16.09%, rgba(17, 18, 19, 0.00) 47.02%)',
        'gradient-blk-to-r':
          'linear-gradient(260deg, #111213 7.24%, rgba(17, 18, 19, 0.00) 55.34%)',
        'gradient-blk-to-btm':
          'linear-gradient(180deg, rgba(29, 30, 31, 5) 50%, rgba(29, 30, 31, 0) 100%)',
      },
      opacity: {
        65: '.65',
      },
      transitionProperty: {
        spacing: 'margin, padding, gap',
        size: 'width, height',
        font: 'font-size, line-height',
        lottie: 'width, height, top, left',
      },
      gridTemplateColumns: {
        'left-sidebar': '1fr 3.65fr',
        'sidebar-icon': '60px 1fr',
        'content-sidebar': '1.2fr 1fr',
      },
      aspectRatio: {
        '2/3': '2/3',
      },
    },
  },
  plugins: [],
};
export default config;
