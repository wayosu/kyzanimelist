/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      owned: {
        primary: {
          500: '#FB2576',
          400: '#FD3B85',
          300: '#FE5194',
          200: '#FF67A3',
          100: '#FF7DB2',
        },
        accent: {
          500: '#3F0071',
          400: '#4A0083',
          300: '#550095',
          200: '#6000A7',
          100: '#6B00B9',
        },
        secondary: {
          500: '#150050',
          400: '#1D0066',
          300: '#25007D',
          200: '#2D0093',
          100: '#3500AA',
        },
        dark: {          
          500: '#000000',
          400: '#070707',
          300: '#0D0D0D',
          200: '#141414',
          100: '#1B1B1B',
        },
        light: {
          500: '#FFFFFF',
          400: '#F2F2F2',
          300: '#E5E5E5',
          200: '#D8D8D8',
          100: '#CCCCCC',
        },
        grey: {
          500: '#999999',
          400: '#8C8C8C',
          300: '#808080',
          200: '#737373',
          100: '#666666',
        },
      },
    },
  },
  plugins: [],
}
