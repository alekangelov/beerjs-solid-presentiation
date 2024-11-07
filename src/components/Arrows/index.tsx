import { FiChevronLeft, FiChevronRight } from "solid-icons/fi";
import * as s from "./index.css";
export default function Arrows(p: {
  onLeft: VoidFunction;
  onRight: VoidFunction;
}) {
  return (
    <>
      <button onClick={p.onLeft} class={`${s.arrow.left} ${s.arrow.base}`}>
        <FiChevronLeft />
      </button>
      <button onClick={p.onRight} class={`${s.arrow.right} ${s.arrow.base}`}>
        <FiChevronRight />
      </button>
    </>
  );
}
