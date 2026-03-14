"use client";

import { useState } from "react";

export default function Curriculum() {
  const [currentTap, setCurrentTap] = useState<number>(0);

  const items = [
    { title: "AI 생태계 이해 & LLM 활용" },
    { title: "프롬프트 엔지니어링 & AI 도구 심화" },
    { title: "기업 AX 진단" },
    { title: "AX 전략 & 제안" },
    { title: "텍스트 생성 & 콘텐츠" },
    { title: "미디어 생성" },
    { title: "바이브 코딩과 도구 제작" },
    { title: "데이터 분석과 인사이트 도출" },
    { title: "지식 관리와 RAG" },
    { title: "AI 에이전트 & 워크플로우 자동화" },
    { title: "캡스톤 프로젝트 개발" },
    { title: "데모데이 & 인증" },
  ];

  const handleClickStep = (idx: number) => {
    setCurrentTap(idx);
  };

  return (
    <div className="relative flex h-full gap-4">
      <div className="vertical-dashed-border absolute left-[11px] h-full w-[1px]" />
      <div className="flex shrink-0 flex-col gap-1.5">
        {items.map((item, idx) => (
          <div
            key={item.title}
            className={`flex items-center gap-4`}
            onClick={() => handleClickStep(idx)}
          >
            <span
              className={`relative h-[22px] w-[22px] shrink-0 rounded-full transition-colors duration-300 ${currentTap === idx ? "bg-[#FFFFFF]/40" : ""}`}
            >
              <span
                className={`absolute h-3 w-3 translate-[5px] rounded-full transition-colors duration-300 ${currentTap === idx ? "bg-white" : "bg-[#7A7A7A]"}`}
              />
            </span>
            <div
              className={`flex w-full flex-col rounded-xl px-7 py-4 transition-colors duration-300 ${currentTap === idx ? "bg-[#7017BF]" : "hover:bg-[#2D0056]"}`}
            >
              <span className="text-sm text-[#D8D8D8]">{idx + 1}주차</span>
              <span className="text-lg text-white">{item.title}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="borer-[#FFFFFF] flex w-full flex-col gap-7 rounded-[20px] border bg-[#2A242F] p-8">
        <span></span>
      </div>
    </div>
  );
}
