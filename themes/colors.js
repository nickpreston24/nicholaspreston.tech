import { theme } from '@chakra-ui/core'

export default {
    colors: {
        ...theme.colors,
        // Example of adding a new brand color. Used in props like variantColor, bg, etc.
        transparent: "transparent",

        // fades: {
        //     bora: {
        //         500: "linear-gradient (-45deg, #2BC0E4, #EAECC6)"                
        //     }
        // },

        dark: {
            50: '#eeeefe',
            100: '#cecfe6',
            200: '#adafd1',
            300: '#8d8ebe',
            400: '#6d6eaa',
            500: '#545591',
            600: '#404271',
            700: '#2e2f52',
            800: '#1c1c33',
            900: '#080816',
        },
        kiyap: {
            pink: {
                50: "#ffe4ff",
                100: "#feb4f4",
                200: "#fb85e8",
                300: "#f754df",
                400: "#f424d4",
                500: "#db0bbb",
                600: "#ab0592",
                700: "#7a0169",
                800: "#4b0040",
                900: "#1d0019",
            },
            red:
            {
                50: '#ffe3ed',
                100: '#ffb4c9',
                200: '#fb85a5',
                300: '#f85481',
                400: '#f4245c',
                500: '#db0b43',
                600: '#ab0434',
                700: '#7b0124',
                800: '#4c0015',
                900: '#1f0007',
            },
            sushi:
            {
                50: '#ffe5e5',
                100: '#fbbaba',
                200: '#f18e8e',
                300: '#ea6161',
                400: '#e33636',
                500: '#c91c1c',
                600: '#9e1415',
                700: '#710d0f',
                800: '#460506',
                900: '#1e0000',
            },
            giraffe:
            {
                50: '#efe9ff',
                100: '#ccbff7',
                200: '#aa95eb',
                300: '#886be1',
                400: '#6641d8',
                500: '#4d27be',
                600: '#3c1f95',
                700: '#2a156c',
                800: '#190c42',
                900: '#0b021c',
            },
            cream: {
                500: '#F9FFeF'
            },
        },

        upstack:
        {
            blue:
            {
                50: '#d8fbffe6',
                100: '#abeaffe6',
                200: '#7bdcffe6',
                300: '#48ccffe6',
                400: '#1abeffe6',
                500: '#00a4e6e6',
                600: '#0080b4e6',
                700: '#005b82e6',
                800: '#003851e6',
                900: '#001421e6',
            },
            teal:
            {
                50: '#dbfefb',
                100: '#b6f5ed',
                200: '#8eede0',
                300: '#65e4d3',
                400: '#3ddcc7',
                500: '#23c2ae',
                600: '#149787',
                700: '#056d60',
                800: '#00423a',
                900: '#001813',
            },
            orange: {
                50: '#fff9dc',
                100: '#fcecb1',
                200: '#f8df83',
                300: '#f6d254',
                400: '#f3c526',
                500: '#d9ab0c',
                600: '#a98505',
                700: '#795f02',
                800: '#493900',
                900: '#1b1300',
            },
            cream: {
                500: '#F9FFeF'
            },
        },

        linkedIn: {
            blue: {
                500: '#0077B5'
            }
        }
    }
}