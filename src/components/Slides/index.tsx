import * as s from "./index.css";

function First() {
  return (
    <div>
      <h1 class={s.h1}>Пушти змија 🐍, немам сигнал 📵</h1>
      <h2 class={s.h2}>
        Како да размислуваш со сигнали во реактивни апликации
      </h2>
    </div>
  );
}

const SLIDES = [First];

export default SLIDES;
