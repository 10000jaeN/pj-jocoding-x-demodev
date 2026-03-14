"use client";

import { useState, useEffect } from "react";

const phrases = [
  "실무에 바로 쓰는 사람!",
  "내 할 일을 반으로 줄이는 사람!",
  "업무에 붙이는 사람!",
  "자동화 수익을 창출하는 사람!",
  "AI로 성과를 만드는 사람!",
];

export default function TextChanger() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true); // 페이드 효과를 위한 상태

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // 바뀔 때 투명도 0

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length);
        setFade(true); // 다시 나타나기
      }, 500); // 0.5초 뒤에 텍스트 변경
    }, 2500); // 전체 간격은 2.5초로 조정

    return () => clearInterval(interval);
  }, []);

  return (
    <h1
      className={`text-xl font-bold text-[#FF0A0A] transition-opacity duration-500 ease-in-out ${fade ? "opacity-100" : "opacity-0"}`}
    >
      🤖&nbsp;
      <span className="animate-blink border-r-2 border-black pr-1">
        {phrases[index]}
      </span>
    </h1>
  );
}
