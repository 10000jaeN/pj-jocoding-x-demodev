"use client";

export default function Nav() {
  const handleClickNavigate = (id: string) => {
    const navigate = document.getElementById(id);
    if (navigate) {
      navigate.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 flex h-15 items-center justify-center gap-[15%] bg-black">
      <button onClick={() => handleClickNavigate("curriculum")}>
        커리큘럼
      </button>
      <button onClick={() => handleClickNavigate("Instructors")}>강사진</button>
      <button onClick={() => handleClickNavigate("QA")}>Q&A</button>
    </nav>
  );
}
