import type { ParentProps } from "solid-js";
import * as s from "./index.css";

export default function Slide({ children }: ParentProps) {
  return <div class={s.container}>{children}</div>;
}
