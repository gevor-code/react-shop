/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",

    ],
    theme: {
        extend: {
            colors: {
                white: "#fff",
                text: "#274C5B",
                semiWhite: "#FAFAFA",
                lightGreen: "#7EB693",
                border: "#E0E0E0"
            },
            height: {
                header: "204px",
                input: "66px",
                circle: "56px",
                input2: "40px",
                circle2: "50px",
                input3:"40px",
                circle3:"37px"

            },
            borderRadius: {
                md: "36px",
                brFull: "50%",
            },
            width: {
                input: "350px",
                circle: "56px",
                w1: "160px",
                input2: "200px",
                circle2: "50px",
                circle3:"37px"
            },
            fontSize: {
                large: ["2.37rem"],
                medium: ["1.2rem"],
            },
        },
    },
    plugins: [],

}

