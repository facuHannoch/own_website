/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:  'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-color': "var(--primary-color)",
        'secondary-color': "var(--secondary-color)",
        'accent-color': "var(--accent-color)",
        "input-bg-color": "var(--input-bg-color)",

        "first-text-color": "var(--first-text-color)", /* text-gray-800 */
        "second-text-color": "var(--second-text-color)",

        "second-text-color-shadow": "var(--second-text-color-shadow)",
        "paragraph-text-color": "var(--paragraph-text-color)",


        "contrast-color": "var(--contrast-color)",

        "text-selected": "var(--text-selected)",
        "text-selected-inverted": "var(--text-selected-inverted)",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
