import "styled-components";

declare module "styled-components" {
    export type DefaultShadowKey = "normal" | "purple" | "blue";
    export type DefaultThemeColorKey =
        | "black"
        | "white"
        | "gray100"
        | "gray200"
        | "gray300"
        | "gray400"
        | "gray500"
        | "gray600"
        | "gray700"
        | "gray800"
        | "gray900"
        | "red100"
        | "red200"
        | "red300"
        | "red400"
        | "beige100"
        | "beige200"
        | "purple50"
        | "purple100"
        | "purple200"
        | "purple300"
        | "purple400"
        | "indigo100"
        | "indigo200"
        | "plum100"
        | "plum200"
        | "orange100"
        | "orange200"
        | "yellow100"
        | "yellow200";

    export interface DefaultTheme {
        color: {
            [key in DefaultThemeColorKey]: string;
        };
        boxShadow: {
            [key in DefaultShadowKey]: string;
        };
    }
}
