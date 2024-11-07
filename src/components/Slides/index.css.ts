import { style } from "@vanilla-extract/css";
import { variables } from "../../style/vars.css";

export const h1 = style({
  fontSize: "3rem",
  fontWeight: "bold",
  color: variables.text.color,
  textAlign: "center",
  marginBottom: "1rem",
});

export const h2 = style({
  fontSize: "2rem",
  color: variables.text.color,
  textAlign: "center",
  marginBottom: "1rem",
});
