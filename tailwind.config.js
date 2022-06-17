module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'himti-900': '#1c2647',
                'himti-800': '#24325c',
                'himti-700': '#2f4177',
                'himti-600': '#3c5399',
                'himti-500': '#425ba8',
                'himti-400': '#687cb9',
                'himti-300': '#8091c5',
                'himti-200': '#a8b4d7',
                'himti-100': '#c4cce4',
                'himti-50': '#eceff6',
            },
            spacing: {
                hero: 'calc(100vh - 88px)',
            },
        },
    },
    plugins: [require('flowbite/plugin')],
}
