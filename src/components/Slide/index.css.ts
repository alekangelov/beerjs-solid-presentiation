import { style } from "@vanilla-extract/css";
import { iframe } from "../Slides/index.css";

export const container = style({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "6rem",
  get selectors() {
    return {
      [`&:has(${iframe})`]: {
        padding: 0,
      },
    };
  },
});
