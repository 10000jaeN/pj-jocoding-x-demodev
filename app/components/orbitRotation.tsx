import Image from "next/image";

const rotationIcon = [
  { name: "경영기획", icon: "/icons/icon-cp.svg", color: "bg-[#7059F6]" },
  { name: "CS", icon: "/icons/icon-cs.svg", color: "bg-[#1072E9]" },
  { name: "디자인", icon: "/icons/icon-ds.svg", color: "bg-[#1072E9]" },
  { name: "재무", icon: "/icons/icon-fin.svg", color: "bg-[#7059F6]" },
  { name: "HR", icon: "/icons/icon-hr.svg", color: "bg-[#00B967]" },
  { name: "IT", icon: "/icons/icon-it.svg", color: "bg-[#7059F6]" },
  { name: "물류/건설", icon: "/icons/icon-lc.svg", color: "bg-[#00B967]" },
  { name: "법무", icon: "/icons/icon-cp.svg", color: "bg-[#1072E9]" },
  { name: "의료", icon: "/icons/icon-med.svg", color: "bg-[#00B967]" },
  { name: "마케팅", icon: "/icons/icon-mkt.svg", color: "bg-[#00B967]" },
  { name: "R&D", icon: "/icons/icon-rd.svg", color: "bg-[#7059F6]" },
];

export default function OrbitRotation({ className }: { className?: string }) {
  const radius = 442;

  return (
    <div className={`${className} relative h-[886px] w-[886px]`}>
      <div className="absolute h-[884px] w-[884px] animate-[spin_40s_linear_infinite] rounded-full border-2 border-[#7017BF]/8 bg-[#7017BF]/10">
        <div className="absolute h-[680px] w-[680px] translate-[102px] rounded-full border-2 border-[#7017BF]/40 bg-[#7017BF]/10">
          {/* 원 위의 점 */}
          <div className="absolute top-62 h-4 w-4 rounded-full border-2 border-[#7017BF]/40 bg-[#20122C]" />
          <div className="absolute right-62 bottom-0 h-4 w-4 rounded-full border-2 border-[#7017BF]/40 bg-[#20122C]" />

          <div className="absolute h-[488px] w-[488px] translate-[96px] rounded-full border-2 border-[#7017BF] bg-[#7017BF]/18">
            {/* 원 위의점 */}
            <div className="absolute bottom-0 left-44 h-4 w-4 rounded-full border-2 border-[#7017BF]/40 bg-[#2B1341]" />
            <div className="absolute right-0 left-44 h-4 w-4 rounded-full border-2 border-[#7017BF]/40 bg-[#2B1341]" />

            <div className="absolute h-[338px] w-[338px] translate-[75px] rounded-full bg-gradient-to-t from-[#7017BF] to-[#A75AEA]">
              {rotationIcon.map((item, i) => {
                const angle = (i / rotationIcon.length) * 2 * Math.PI; // 360도를 11등분
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);

                return (
                  <div
                    key={item.name}
                    className="absolute top-[119px] left-[119px] flex flex-col items-center justify-center gap-3"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                  >
                    <div className="relative animate-[spin_40s_linear_infinite_reverse]">
                      <div
                        className={`flex h-20 w-20 items-center justify-center rounded-full ${item.color}`}
                      >
                        <Image
                          src={item.icon}
                          alt={item.name}
                          width={44}
                          height={44}
                        />
                      </div>
                      <span className="left absolute -bottom-9 w-20 text-center text-xl font-semibold text-white">
                        {item.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Image
        src={"/icons/AI.svg"}
        alt="AI"
        width={116}
        height={88}
        className="absolute top-[350px] left-[385px]"
      />
      <Image
        src={"/icons/sparkle-icon.svg"}
        alt="sparkle-icon"
        width={60}
        height={54}
        className="absolute top-[300px] right-[350px]"
      />
      <Image
        src={"/icons/sparkle-icon-2.svg"}
        alt="sparkle-icon-2"
        width={29}
        height={29}
        className="absolute top-[440px] left-[320px]"
      />
    </div>
  );
}
