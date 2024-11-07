import { style } from "@vanilla-extract/css";
import { variables } from "../../style/vars.css";

export const h1 = style({
  fontSize: "3rem",
  fontWeight: "900",
  textTransform: "uppercase",
  color: variables.text.color,
  textAlign: "center",
  marginBottom: "1rem",
  // @ts-ignore
  get selectors() {
    return {
      [`${fs} &`]: {
        textAlign: "left",
      },
    };
  },
});

export const h2 = style({
  fontSize: "2rem",
  color: variables.text.color,
  textAlign: "center",
  marginBottom: "1rem",
});

export const fs = style({
  width: "100%",
});

export const ul = style({
  padding: 0,
  marginTop: "2rem",
});

export const li = style({
  fontSize: "3rem",
  color: variables.text.color,
  // get selectors() {
  //   return {
  //     [`& + ${li}`]: {
  //       marginTop: "1rem",
  //     },
  //   };
  // },
});

export const monaco = style({
  width: "50%",
  height: "100%",
});

export const monacoParent = style({
  width: "100%",
  height: "100%",
  display: "flex",
});

export const iframe = style({
  width: "100%",
  height: "100%",
  border: "none",
});
