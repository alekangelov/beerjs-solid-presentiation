import { globalStyle } from "@vanilla-extract/css";
import { variables } from "./vars.css";

globalStyle("html, body", {
  background: variables.background.color,
  color: variables.text.color,
});
