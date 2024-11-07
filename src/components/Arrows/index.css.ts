import { style, styleVariants } from "@vanilla-extract/css";

export const arrow = styleVariants({
  base: {
    position: "fixed",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
    border: "none",
    background: "rgba(255, 255, 255, 0.25)",
    zIndex: 10,
    color: "white",
    borderRadius: "1rem",
    opacity: 0.1,
    transition: "opacity 0.3s",
    ":hover": {
      opacity: 0.5,
    },
    cursor: "pointer",
  },
  left: {
    left: 14,
  },
  right: {
    right: 14,
  },
});
