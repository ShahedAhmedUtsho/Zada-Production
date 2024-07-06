/** @type {import('tailwindcss').Config} */

import keepPreset from 'keep-react/preset';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/keep-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          100: '#e8e8e9',
          200: '#d2d2d2',
          300: '#bbbbbc',
          400: '#8e8e8f',
          500: '#777778',
          600: '#49494b',
          700: '#333335',
          800: '#19191b',
          900: '#000000',
        },
        brown: {
          100: '#F2ECEB',
          200: '#DFD4D1',
          300: '#CCBDB7',
          400: '#B8A69D',
          500: '#A48F83',
          600: '#90786A',
          700: '#7C6150',
          800: '#6F594F',
          900: '#56443C',
        },
      },
    },
  },
  presets: [keepPreset],
};
