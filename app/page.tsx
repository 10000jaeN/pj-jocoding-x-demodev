import Image from "next/image";
import Chip from "./components/chip";
import TextChanger from "./components/text-changer";
import Nav from "./components/nav";
import OrbitRotation from "./components/orbitRotation";
import Curriculum from "./components/curriculum";

const beforeEducation = [
  { title: "이전 교육" },
  { title: "툴 설명" },
  { title: "이론" },
  { title: "강의 중심" },
  { title: "간단한 실습" },
];

const axMasterEducation = [
  { title: "AX Master" },
  { title: "실제 기업 사례 실습" },
  { title: "제안/발표" },
  { title: "전문가 심사" },
  { title: "자격증 취득" },
];

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section>
        <div className="relative flex h-160 w-full flex-col items-center justify-center gap-[30px] overflow-hidden bg-black">
          <Image
            src={"/background/landing-1.png"}
            alt="background image for hero section"
            width={1280}
            height={640}
            className="absolute z-0 mx-auto w-full max-w-[1280px] min-w-250 object-cover"
            priority
          />
          <span className="relative z-10 rounded-sm bg-linear-to-l from-[#FBB03B] to-[#7017BF] px-[23px] py-[7px] text-[20px]">
            AI를 직원처럼 쓰는 AX 교육
          </span>
          <h1 className="z-10 text-[80px] font-extrabold">
            AX Master <br /> 양성교육과정
          </h1>
        </div>
        <div className="z-10 flex h-[300px] flex-col items-center justify-center gap-10 bg-[#1A1121] text-xl font-bold text-[#B16CEF]">
          <div className="flex items-center gap-10">
            <div className="flex w-50 flex-col gap-3">
              교육 기간
              <p className="font-semibold text-white">12주 (총 120시간)</p>
            </div>

            <div className="h-14 w-[1px] bg-[#4F3F5D]" />

            <div className="flex w-50 flex-col gap-3">
              교육 방식
              <p className="font-semibold text-white">온라인 Live 강의</p>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <div className="flex w-50 flex-col gap-3">
              모집 인원
              <p className="font-semibold text-white">40명</p>
            </div>

            <div className="h-14 w-[1px] bg-[#4F3F5D]" />

            <div className="flex w-50 flex-col gap-3">
              수강료
              <p className="font-semibold text-white">100-150 만원</p>
            </div>
          </div>
        </div>
      </section>

      <Nav />

      <section className="flex flex-col bg-white pb-24 text-black">
        <div className="flex h-20 w-full items-center justify-center gap-12 bg-[#FF2222] text-[28px] font-bold text-white">
          <Image src={"/Polygon.svg"} width={32} height={32} alt="polygon" />
          AI를 써봤는데, 활용할줄 모른다면?
          <Image src={"/Polygon.svg"} width={32} height={32} alt="polygon" />
        </div>
        <div className="mt-30 flex flex-col items-center justify-center gap-3">
          <p className="text-2xl font-medium text-[#808080]">
            언제까지 AI ‘사용’ 에만 머무를 건가요?
          </p>
          <h2 className="font-paperlogy text-center text-[64px]">
            AI 시대,
            <br />
            <span className="rounded-xl bg-[#7017BF] px-3 py-1 text-white">
              업무의 방식
            </span>
            이 바뀌고 있습니다.
          </h2>
        </div>
        <div className="flex flex-col items-center gap-10 py-22">
          <div className="h-5 w-5 rounded-full bg-[#7017BF]/20" />
          <div className="h-5 w-5 rounded-full bg-[#7017BF]/50" />
          <div className="h-5 w-5 rounded-full bg-[#7017BF]/100" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="font-paperlogy mb-[50px] text-[64px] font-extrabold">
            그럼 이제 필요한 것은?
          </span>
          <div className="flex flex-col gap-4">
            <span className="font-paperlogy h-[110px] w-165 rounded-[40px] bg-gradient-to-t from-[#7017BF] to-[#FBB03B] p-[15px] text-4xl font-bold">
              <div className="flex h-full w-full items-center justify-center rounded-[30px] bg-white leading-none">
                <p>어디에&nbsp;</p>
                <p className="font-medium"> 필요한지</p>
              </div>
            </span>
            <span className="font-paperlogy h-[110px] w-165 rounded-[40px] bg-gradient-to-t from-[#7017BF] to-[#FBB03B] p-[15px] text-4xl font-bold">
              <div className="flex h-full w-full items-center justify-center rounded-[30px] bg-white leading-none">
                <p>왜&nbsp;</p>
                <p className="font-medium"> 사용해야만 하는지</p>
              </div>
            </span>
            <span className="font-paperlogy h-[110px] w-165 rounded-[40px] bg-gradient-to-t from-[#7017BF] to-[#FBB03B] p-[15px] text-4xl font-bold">
              <div className="flex h-full w-full items-center justify-center rounded-[30px] bg-white leading-none">
                <p>어떻게&nbsp;</p>
                <p className="font-medium"> 실제 업무에 연결할지</p>
              </div>
            </span>
            <span className="font-paperlogy mt-[50px] text-center text-[100px] font-extrabold text-[#8B26E6]">
              판단하는 능력!
            </span>
          </div>
        </div>
      </section>

      <section className="py-25">
        <h2 className="flex flex-col items-center text-[64px] font-bold">
          AI를 일하게 하는
          <div className="flex">
            <p className="text-[#FBB03B]">당신</p>만 살아남는다
          </div>
        </h2>
        <p className="py-7 text-center text-[24px]">
          채용 우대사항에도 등장한 AI활용 역량
        </p>

        <div className="relative my-20 h-320 w-full">
          <Image
            src={"/background/landing-4.png"}
            alt="background image"
            fill
            className="mx-auto max-w-[1280px] object-cover"
          />
        </div>

        <span className="my-40 flex items-center justify-center text-center text-[48px] font-extrabold text-shadow-[0_0_32px_#FBB03B]">
          “AI를 활용하지 못하는 인재는 <br /> 더이상 살아남기 힘든 시대입니다.”
        </span>

        <div className="relative my-16 w-full">
          <Image
            src={"/background/landing-5.png"}
            alt="background image"
            width={1552}
            height={666}
            className="z-10 mx-auto w-full max-w-[1280px] object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-radial from-[#38224B]/40 from-10% via-[#111111] to-[#111111]" />
        </div>

        <div className="flex flex-col items-center justify-center font-extrabold">
          <span className="text-[48px]">이런 고민들이 ‘내 이야기 같다’면,</span>
          <span className="bg-gradient-to-b from-white to-[#FBB03B] bg-clip-text text-[72px] text-transparent">
            지금이 당신을 위한 기회입니다!
          </span>
        </div>
      </section>

      <section className="relative flex flex-col items-center bg-gradient-to-b from-white to-[#F4EAFD] pb-25">
        <div className="relative flex h-[310px] w-full flex-col items-center gap-7 bg-[#111111] pt-[70px]">
          <div>
            <TextChanger />
          </div>
          <span className="flex flex-col items-center text-[28px] font-semibold">
            <p>시대의 흐름에 맞춰,</p>
            <p className="flex">
              실제&nbsp;<p className="text-[#FF0A0A]">AI 활용</p>을 겸험해보세요
            </p>
          </span>
          <div
            className="absolute bottom-0 h-13 w-full bg-[#ffffff]"
            style={{
              WebkitMaskImage: "url(/background/vector.png)",
              maskImage: "url(/background/vector.png)",
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            }}
          />
        </div>

        <div className="font-paperlogy mt-31 flex flex-col items-center text-[48px] font-extrabold text-black">
          <span>도구 소개에서 끝나지 않습니다</span>

          <h2 className="relative text-[68px] text-[#7017BF]">
            AI를 배우는 방식이 다릅니다
          </h2>
        </div>

        <div className="relative mt-16">
          <div className="pointer-events-none absolute inset-y-8 top-6 left-[5px] z-0 w-[2px] bg-gradient-to-t from-[#7017BF] via-[#E5E5E5] to-[#E5E5E5]" />

          <div className="flex flex-col gap-16">
            <div className="flex items-center justify-start gap-[30px]">
              <div className="z-10 h-3 w-3 rounded-full bg-[#D9D9D9]" />
              <Chip variant="secondary">AI사용법</Chip>
            </div>
            <div className="flex items-center justify-start gap-[30px]">
              <div className="z-10 h-3 w-3 rounded-full bg-[#D9D9D9]" />
              <Chip variant="secondary">프롬프트작성</Chip>
            </div>
            <div className="flex items-center justify-start gap-[30px]">
              <div className="z-10 h-3 w-3 rounded-full bg-[#D9D9D9]" />
              <Chip variant="secondary">AI툴 따라하기</Chip>
            </div>
            <div className="flex items-center justify-start gap-[30px]">
              <div className="z-10 h-3 w-3 rounded-full bg-[#D9D9D9]" />
              <Chip variant="secondary">간단한 자동화실습</Chip>
            </div>
            <div className="flex items-center justify-start gap-[30px]">
              <div className="z-10 h-3 w-3 rounded-full bg-[#7017BF]" />
              <Chip>실제 기업 사례를 활용한 실습</Chip>
            </div>
            <div className="flex items-center justify-start gap-[30px]">
              <div className="z-10 h-3 w-3 rounded-full bg-[#7017BF]" />
              <Chip>성과 측정과 제안 발표</Chip>
            </div>
            <div className="flex items-center justify-start gap-[30px]">
              <div className="z-10 h-3 w-3 rounded-full bg-[#7017BF]" />
              <Chip>자격증 취득</Chip>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#120C19]">
        <div className="flex flex-col items-start py-21 pl-13">
          <span className="z-10 text-[48px] font-semibold">
            자격증까지 발급받는
          </span>
          <span className="z-10 mb-4 bg-gradient-to-l from-[#FBB03B] to-[#ECE7DF] bg-clip-text text-[72px] font-extrabold tracking-[-0.04em] text-transparent">
            AX Master 실전 캠프
          </span>
          <span className="z-10 text-2xl text-[#BDB9C5]">
            AI 기획부터 실무 성과 측정까지, 실전에서 직접 증명한다
          </span>
        </div>

        <div className="absolute inset-0 z-0">
          <Image
            src={"/background/landing-3.png"}
            alt="background image"
            fill
            className="h-full object-contain object-right"
          />
          <div className="absolute right-161 z-10 h-full w-30 bg-gradient-to-r from-[#100C19] to-transparent" />
        </div>
      </section>

      <section className="flex flex-col items-center justify-center bg-white text-black">
        <h2 className="mt-20 mb-4 text-[64px] font-bold">
          수강생이 아닌
          <span className="text-[#FBB03B]"> &apos;전문가&apos;</span>를
          배출합니다
        </h2>
        <span className="text-2xl text-[#737373]">
          기업 프로젝트와 전문가 심사를 거쳐, 당신의 실무 역량을 자격증으로
          증명할 수 있도록!
        </span>
      </section>

      <section className="bg-white">
        <button className="flex gap-4 rounded-xl bg-[#111111] p-6 text-[32px] font-extrabold text-white">
          <Image
            src={"/arrow-down.svg"}
            alt="arrow down"
            width={40}
            height={40}
          />
          커리큘럼 더 자세히 보기
          <Image
            src={"/arrow-down.svg"}
            alt="arrow down"
            width={40}
            height={40}
          />
        </button>
      </section>

      <section className="relative h-280 overflow-hidden pt-30">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-center text-[80px] leading-tight font-extrabold">
            AI를 활용할 수 있는
            <br /> 분야가 무궁무진
          </h2>
          <span className="text-2xl text-[#AFAFAF]">
            체계적인 학습으로 AI 능력 완성할 수 있도록 구성했습니다.
          </span>
        </div>
        <div className="mt-50 flex items-center justify-center">
          <OrbitRotation />
        </div>
        <div className="absolute bottom-0 z-10 h-[130px] w-full bg-[linear-gradient(to_bottom,_#11111100,_#111111E0,_#111111,_#111111)]" />
      </section>

      <section
        id="curriculum"
        className="flex flex-col items-center justify-center bg-[#1A1121]"
      >
        <div className="flex h-[240px] w-full flex-col items-center justify-end gap-7 bg-[linear-gradient(to_left,_#FB7B3B,_#FBB03B,_#FB7B3B)]">
          <h2 className="text-[32px] font-bold">
            AI 시대에도 살아남는 <br /> 실전 경험 완벽 대비!
          </h2>
          <div
            className="h-13 w-full bg-[#1A1121]"
            style={{
              WebkitMaskImage: "url(/background/vector.png)",
              maskImage: "url(/background/vector.png)",
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            }}
          />
        </div>

        {/* 하나 */}
        <div className="py-13">
          <div className="mb-30 flex flex-col items-center justify-center gap-3">
            <span className="text-[28px] font-bold text-[#FBB03B]">하나,</span>
            <span className="text-[48px] font-bold">
              따라만 오면 완성되는 12주 학습 경로 맵
            </span>
            <span className="text-2xl font-bold text-[#D8D8D8]">
              툴을 배우지 마세요. AI 구조를 가져가세요.
            </span>
          </div>
        </div>

        <Curriculum />

        {/* 둘 */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-3">
          <span className="text-[28px] font-bold text-[#FBB03B]">둘,</span>
          <span className="text-[48px] font-bold">
            학습이 아닌, 누적 결과물 생성 시스템
          </span>
          <span className="text-2xl font-bold text-[#D8D8D8]">
            우리는 실제 경험을 통한 결과물로 증명합니다
          </span>
        </div>

        <Image
          src={"/background/landing-6.png"}
          alt="background image"
          width={1452}
          height={666}
          className="top-18 z-0 mx-auto w-full max-w-[1280px] -translate-y-10 object-cover"
        />
        <span className="bg-gradient-to-l from-[#FB3B3B] to-white bg-clip-text text-[80px] font-extrabold text-transparent">
          12주 누적 포트폴리오 패키지
        </span>

        {/* 셋 */}
        <div className="relative z-10 my-40 flex flex-col items-center justify-center gap-3">
          <span className="text-[28px] font-bold text-[#FBB03B]">셋,</span>
          <span className="text-[48px] font-bold">자격증 발급</span>
          <span className="text-2xl font-bold text-[#D8D8D8]">
            우리는 실제 경험을 통한 결과물로 증명합니다
          </span>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center">
        <div className="h-70 w-full bg-[linear-gradient(to_left,_#8160EF,_#7017BF,_#7017BF,_#8160EF)] text-center">
          <p className="mb-[10px] text-xl text-[#E9E3EE]">
            AI 활용, 배우는 것에서 끝내지 마세요.
          </p>
          <h2 className="text-4xl font-bold">
            객관적인 피드백과 자격증 취득하는 경험,
            <br /> AX 파트너스에서만 가능합니다.
          </h2>
        </div>
      </section>
      <section>10</section>

      <section id="Instructors" className="bg-white px-8 py-16 text-black">
        <div className="mb-20 flex flex-col items-center justify-center">
          <span className="text-[64px] font-semibold text-[#1A1121]">
            최강자들이 뭉쳤다
          </span>
          <h2 className="text-2xl text-[#737373]">
            기술적인 역량과 강의력까지 겸비한 분들로 구성되었습니다.
          </h2>
        </div>
        <div className="mt-20 flex justify-center gap-6">
          <Image
            src={"/brand/brand.svg"}
            alt="참여 회사모음"
            width={235}
            height={208}
          />
          <div className="flex h-[220px] w-[310px] shrink-0 flex-col gap-3 rounded-2xl border border-[#E6E6E6] bg-white p-7">
            <div className="flex items-center gap-4">
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#E6E6E6] bg-white">
                <Image
                  src={"/brand/logo-primer.svg"}
                  alt="프라이머 로고"
                  fill
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xl font-extrabold">프라이머</span>
                <p className="text-[16px] font-semibold text-[#7017BF]">
                  국내 1위 액셀레이터
                </p>
              </div>
            </div>
            <p className="text-[#737373]">
              대한민국 대표 스타트업 액셀러레이터. 수백 개의 스타트업을 성장시킨
              검증된 전략 인프라와 네트워크를 제공합니다.
            </p>
          </div>

          <div className="flex h-[220px] w-[310px] shrink-0 flex-col gap-3 rounded-2xl border border-[#E6E6E6] bg-white p-7">
            <div className="flex items-center gap-4">
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#E6E6E6] bg-white">
                <Image
                  src={"/brand/logo-jocoding.svg"}
                  alt="조코딩 로고"
                  fill
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xl font-extrabold">조코딩</span>
                <p className="text-[16px] font-semibold text-[#7017BF]">
                  AI/코딩 교육 크리에이터
                </p>
              </div>
            </div>
            <p className="text-[#737373]">
              국내 최대 AI・코딩 교육 유튜브 채널 운영. 비전공자를 위한 실전 AI
              활용 콘텐츠로 수십만 구독자와 함께하고 있습니다.
            </p>
          </div>

          <div className="flex h-[220px] w-[310px] shrink-0 flex-col gap-3 rounded-2xl border border-[#E6E6E6] bg-white p-7">
            <div className="flex items-center gap-4">
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#E6E6E6] bg-white">
                <Image
                  src={"/brand/logo-demodev.svg"}
                  alt="대모산개발단 로고"
                  fill
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xl font-extrabold">대모산개발단</span>
                <p className="text-[16px] font-semibold text-[#7017BF]">
                  AI 교육 전문 팀
                </p>
              </div>
            </div>
            <p className="text-[#737373]">
              패스트캠퍼스 AI 강의 상위권 팀. 기업 맞춤 AX 교육과 실전 중심
              커리큘럼으로 수많은 AI 실무자를 양성했습니다.
            </p>
          </div>
        </div>
        <div className="mx-auto my-14 w-[90%] border-1 border-[#E6E6E6]" />

        <div className="mb-5 flex items-center justify-center gap-7">
          <Image
            src={"/brand/logo-jax.svg"}
            alt="jax logo"
            width={114}
            height={114}
          />
          <div className="flex flex-col justify-center gap-1">
            <span className="text-xl font-extrabold">AX Partners</span>
            <p className="font-semibold text-[#737373]">
              AI도구를 가르치지 않습니다.
              <br />
              AI로 문제를 바라보는 방법을 가르칩니다.
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-8">
          <div className="flex w-[265px] flex-col gap-4">
            <Image
              src={"/instructors/jo.png"}
              alt="조코딩 이미지"
              width={260}
              height={260}
              className="rounded-xl"
            />
            <div className="flex items-center gap-3 text-[32px] font-extrabold">
              조코딩
              <span className="rounded-full border border-[#E6D0FA] bg-[#F3E8FD] px-3 py-2 text-[16px] font-semibold text-[#7017BF]">
                메인강사
              </span>
            </div>
            <p>
              70만 구독자 AI·코딩 교육 유튜브 채널 운영자. AX Partners의 AI 교육
              콘텐츠 기획과 커뮤니티 확장을 담당합니다.
            </p>
          </div>
          <div className="flex w-[265px] flex-col gap-4">
            <Image
              src={"/instructors/moon.png"}
              alt="문경원 이미지"
              width={260}
              height={260}
              className="rounded-xl"
            />
            <div className="flex items-center gap-3 text-[32px] font-extrabold">
              문경원
              <span className="rounded-full border border-[#E6D0FA] bg-[#F3E8FD] px-3 py-2 text-[16px] font-semibold text-[#7017BF]">
                메인강사
              </span>
            </div>
            <p>
              프라이머 파트너 출신 전략 기획·사업 개발 전문가. AX Partners의
              사업 전략 수립과 전체 방향성을 총괄합니다.
            </p>
          </div>
          <div className="flex w-[265px] flex-col gap-4">
            <Image
              src={"/instructors/go.png"}
              alt="고성현 이미지"
              width={260}
              height={260}
              className="rounded-xl"
            />
            <div className="flex items-center gap-3 text-[32px] font-extrabold">
              고성현
              <span className="rounded-full border border-[#E6D0FA] bg-[#F3E8FD] px-3 py-2 text-[16px] font-semibold text-[#7017BF]">
                메인강사
              </span>
            </div>
            <p>
              대모산개발단 CEO 출신 운영·프로젝트 매니지먼트 전문가. AX
              Partners의 서비스 운영과 프로젝트 실행을 총괄합니다.
            </p>
          </div>
          <div className="flex w-[265px] flex-col gap-4">
            <Image
              src={"/instructors/kwon.png"}
              alt="권도균 이미지"
              width={260}
              height={260}
              className="rounded-xl"
            />
            <div className="flex items-center gap-3 text-[32px] font-extrabold">
              권도균
              <span className="rounded-full border border-[#E6D0FA] bg-[#F3E8FD] px-3 py-2 text-[16px] font-semibold text-[#7017BF]">
                연사
              </span>
            </div>
            <p>
              이니시스·이니텍 창업자이자 프라이머 대표 파트너. AX Partners의
              경영 자문과 스타트업 생태계 네트워크를 지원합니다.
            </p>
          </div>
        </div>
      </section>

      <section id="QA">
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="text-2xl text-[#FBB03B]">Q&A</span>
          <h2 className="text-[40px] font-bold">
            궁금해하시는 질문들만 모았습니다
          </h2>
        </div>
      </section>
    </main>
  );
}
