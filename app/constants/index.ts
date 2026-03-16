export const curriculums = [
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
] as const;

export const beforeEducation = [
  { title: "이전 교육" },
  { title: "툴 설명" },
  { title: "이론" },
  { title: "강의 중심" },
  { title: "간단한 실습" },
] as const;

export const axMasterEducation = [
  { title: "AX Master" },
  { title: "실제 기업 사례 실습" },
  { title: "제안/발표" },
  { title: "전문가 심사" },
  { title: "자격증 취득" },
] as const;

export const courseStructure = [
  {
    title: "AI 리터러시",
    list: ["AI 생태계 이해", "LLM 활용", "프롬프트 엔지니어링", "AI 도구 심화"],
    bg: "bg-[#D5AAFC]",
  },
  {
    title: "AX 핵심",
    list: [
      "업무 프로세스 진단",
      "AI 적용 영역 식별",
      "AX 전략 수립",
      "AX 전략 제안",
    ],
    bg: "bg-[#C284F9]",
    translate: "-translate-y-13",
  },
  {
    title: "AI 도구 활용",
    list: ["6가지 AI 활용 모듈", "도메인별 실습"],
    bg: "bg-[#9C3EF0]",
    translate: "-translate-y-25",
  },
  {
    title: "실전",
    list: ["캡스톤 프로젝트 개발", "데모데이", "자격증 발급"],
    bg: "bg-[#7017BF]",
    translate: "-translate-y-37",
  },
];
