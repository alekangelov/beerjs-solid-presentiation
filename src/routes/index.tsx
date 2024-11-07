import { createMemo, createSignal, onCleanup, onMount } from "solid-js";
import Slide from "~/components/Slide";
import SLIDES from "~/components/Slides";

const [currentSlideIdx, setCurrentSlideIdx] = createSignal(0);

const ACTIONS: Record<string, VoidFunction> = {
  ArrowRight: () => setCurrentSlideIdx((prev) => (prev + 1) % SLIDES.length),
  ArrowLeft: () =>
    setCurrentSlideIdx((prev) => (prev - 1 + SLIDES.length) % SLIDES.length),
};

export default function Home() {
  onMount(() => {
    const controller = new AbortController();
    window.addEventListener(
      "keydown",
      (e) => {
        ACTIONS[e.key]?.();
      },
      {
        signal: controller.signal,
      }
    );
    onCleanup(() => {
      controller.abort();
    });
  });

  const CurrentSlide = createMemo(() => SLIDES[currentSlideIdx()]());
  return (
    <main>
      <Slide>{CurrentSlide()}</Slide>
    </main>
  );
}
