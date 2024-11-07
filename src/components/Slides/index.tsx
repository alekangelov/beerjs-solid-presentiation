import * as s from "./index.css";
import { MonacoEditor } from "solid-monaco";

const SLIDES = [
  () => {
    return (
      <div>
        <h1 class={s.h1}>Пушти змија 🐍, немам сигнал 📵</h1>
        <h2 class={s.h2}>
          Како да размислуваш со сигнали во реактивни апликации
        </h2>
      </div>
    );
  },
  () => {
    return (
      <div class={s.fs}>
        <h1 class={s.h1}>Што е Солид и зошто е битен?</h1>
        <ul class={s.ul}>
          <li class={s.li}>
            Библиотека за реактивно програмирање на кориснички интерфејси
          </li>
          <li class={s.li}>
            Изградена е врз основа на „реактивни променливи“ или сигнали
          </li>
          <li class={s.li}>
            Една од најбрзите библиотеки според js-framework-benchmark
          </li>
          <li class={s.li}>
            Докажа дека реактивноста може да биде ефикасна, едноставна
          </li>
          <li class={s.li}>Докажа дека виртуелниот дом е само overhead</li>
        </ul>
      </div>
    );
  },
  () => {
    return (
      <div class={s.fs}>
        <h1 class={s.h1}>1000 зошто - 1000 затоа</h1>
        <ul class={s.ul}>
          <li class={s.li}>
            Бидејки грануларна промена е секогаш подобра од 1. фул рендер на
            цела апликација и чување во меморија на истата 2. диф помеѓу стара и
            нова верзија 3. промена на вистинскиот ДОМ
          </li>
          <li class={s.li}>
            Бидејќи нема многу компајлерски оптимизации, ниту мемоизација
          </li>
          <li class={s.li}>
            Компонентите се извршуваат само еднаш, а не постојано
          </li>
          <li class={s.li}>
            Реактивноста е онаму каде што {`{нешто()}`} се користи
          </li>
          <li class={s.li}>
            Knockout.js со модернизиран реактивен модел (и џејесекс)
          </li>
        </ul>
      </div>
    );
  },
  () => {
    return (
      <div class={s.fs}>
        <h1 class={s.h1}>Сигнали, ама подлабоко</h1>
        <ul class={s.ul}>
          <li class={s.li}>Реактивни променливи</li>
          <li class={s.li}>Не се променливи, функции се (гетер, сетер)</li>
          <li class={s.li}>createSignal, а не useSignal</li>
          <li class={s.li}>Можат да бидат локални, глобални и се во средина</li>
          <li class={s.li}>Не постои мемоизација, ниту низи од зависност</li>
        </ul>
      </div>
    );
  },
  () => {
    return (
      <iframe
        class={s.iframe}
        src="https://codesandbox.io/p/devbox/spring-water-d2kl21"
      />
    );
  },
  () => {
    return (
      <div class={s.fs}>
        <h1 class={s.h1}>Проблемот со Реакт</h1>
        <ul class={s.ul}>
          <li class={s.li}>Мемоизација useEffect, useMemo, useCallback</li>
          <li class={s.li}>
            Перформанс не е проблем, се додека не е огромен проблем
          </li>
          <li class={s.li}>Клучеви</li>
          <li class={s.li}>Git gud менталитетот</li>
        </ul>
      </div>
    );
  },
  () => {
    return (
      <div class={s.fs}>
        <h1 class={s.h1}>Решението е солиднo со сигнали</h1>
        <ul class={s.ul}>
          <li class={s.li}>
            Нема клучеви бидејќи копмонентите само еднаш се изведуваат
          </li>
          <li class={s.li}>
            Нема мемоизација бидејќи сигналот чува референци до неговите
            корисници
          </li>
          <li class={s.li}>
            Перформанс оптимизацијата е чисто колкава е комплексноста на твоите
            алгоритми
          </li>
          <li class={s.li}>Не се чува копија на ДОМот</li>
        </ul>
      </div>
    );
  },
  () => {
    return <img src="/react_perf.png" class={s.iframe} />;
  },
  () => {
    return <img src="/solid_perf.png" class={s.iframe} />;
  },
  () => {
    return <img src="/react_tree.png" class={s.iframe} />;
  },
  () => {
    return (
      <iframe
        class={s.iframe}
        src="https://codesandbox.io/p/sandbox/react-key-index-1-9olmn?file=%2Fsrc%2Findex.js%3A7%2C10-7%2C19"
      />
    );
  },

  () => {
    return (
      <iframe
        class={s.iframe}
        src="https://codesandbox.io/p/devbox/spring-water-d2kl21"
      />
    );
  },
  () => {
    return (
      <div class={s.fs}>
        <h1 class={s.h1}>Проблемите на Солид</h1>
        <ul class={s.ul}>
          <li class={s.li}>Екосистемот</li>
          <li class={s.li}>Алтернативите се огромни</li>
          <li class={s.li}>Несигурност</li>
          <li class={s.li}>Ти си крив за тоа дали апликацијата ќе биде брза</li>
        </ul>
      </div>
    );
  },
  () => {
    return <img src="/lol.png" class={s.iframe} />;
  },
  () => {
    return (
      <iframe
        src="https://codesandbox.io/p/sandbox/vanilla-js-4vck7"
        class="iframe"
      />
    );
  },
  () => {
    return (
      <div>
        <h1 class={s.h1}>толку од мене</h1>
        <h2 class={s.h2}>фала на времето</h2>
      </div>
    );
  },
];

export default SLIDES;
