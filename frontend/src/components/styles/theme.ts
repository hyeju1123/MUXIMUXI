import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
    color: {
        black: "#000000",
        white: "#ffffff",
        gray100: "#fcfcfc",
        gray200: "#eeeef2",
        gray300: "#dcdce0",
        gray400: "#c2c2c7",
        gray500: "#959599",
        gray600: "#6c6c70",
        gray700: "#49494d",
        gray800: "#303033",
        gray900: "#222223",
        red100: "#ff7070",
        red200: "#fa4242",
        red300: "#f03030",
        red400: "#c71b1b",
        beige100: "#fffbf5",
        beige200: "#f7efe5",
        purple100: "#c3acd0",
        purple200: "#AF9DBE",
        purple300: "#674188",
        indigo100: "#595b7e",
        indigo200: "#181b46",
        plum100: "#9a6383",
        plum200: "#7a2d59",
        orange100: "#f39e77",
        orange200: "#f26322",
        yellow100: "#fde283",
        yellow200: "#fec804",
    },
    boxShadow: {
        normal: "0 3px 8px 0 rgb(0 0 0 / 10%)",
        purple: "0 3px 8px 0 #d6c9ff",
        blue: "0 3px 8px 0 #b3e2e6",
    },
};

const customMediaQuery = (maxWidth: number): string => `@media (max-width: ${maxWidth}px)`;

export const media = {
    custom: customMediaQuery,
    pc: customMediaQuery(1440),
    tablet: customMediaQuery(768),
    mobile: customMediaQuery(576),
};
