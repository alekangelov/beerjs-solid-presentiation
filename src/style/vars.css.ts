import {
  assignVars,
  createThemeContract,
  globalStyle,
  style,
} from "@vanilla-extract/css";

const variables = createThemeContract({
  text: {
    color: null,
  },
  background: {
    color: null,
  },
});

export const themeClass = style({
  vars: assignVars(variables, {
    text: {
      color: "white",
    },
    background: {
      color: "#333",
    },
  }),
  "@media": {
    "(prefers-color-scheme: dark)": {
      vars: assignVars(variables, {
        text: {
          color: "white",
        },
        background: {
          color: "black",
        },
      }),
    },
  },
});

globalStyle("html", {
  background: variables.background.color,
  color: variables.text.color,
});

export { variables };
