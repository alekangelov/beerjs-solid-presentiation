import type { ParentProps } from "solid-js";
import * as s from "./index.css";
import { children } from "solid-js";

export default function Slide(props: ParentProps) {
  const c = children(() => props.children);
  return <div class={s.container}>{c()}</div>;
}
