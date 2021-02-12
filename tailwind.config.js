module.exports = {
    purge: {
        enabled: true,
        content: ["./**/*.html"],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        container: {
            center: true,
            padding: "2rem",
        },
        fontFamily: {
            sans: "Patrick Hand",
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
