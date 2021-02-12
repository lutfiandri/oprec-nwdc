const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcssimport = require('postcss-import');

module.exports = {
    plugins: [
        tailwindcss,
        autoprefixer,
        postcssimport
    ],
};
