import { ReactNode } from "react";

export default function sClipPicketUi({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative h-[208px] w-[378px] transition-transform hover:scale-105`}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 385 216"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none" // div 크기에 맞춰 늘림
      >
        <g filter="url(#filter0_d_336_1106)">
          <path
            d="M24 36C24 29.3726 29.3726 24 36 24H307.026C311.331 24 315.307 26.307 317.444 30.0453L358.596 102.045C360.705 105.735 360.705 110.265 358.596 113.955L317.444 185.955C315.307 189.693 311.331 192 307.026 192H36C29.3726 192 24 186.627 24 180V36Z"
            fill="white"
          />
          <path
            d="M36 24.5H307.025C311.152 24.5 314.962 26.7106 317.01 30.293L358.162 102.293C360.183 105.829 360.183 110.171 358.162 113.707L317.01 185.707C314.962 189.289 311.152 191.5 307.025 191.5H36C29.6487 191.5 24.5 186.351 24.5 180V36L24.5146 35.4082C24.8227 29.3319 29.8472 24.5 36 24.5Z"
            stroke="#7017BF"
            strokeOpacity="0.1"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_336_1106"
            x="0"
            y="0"
            width="384.178"
            height="216"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="12" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.45098 0 0 0 0 0.45098 0 0 0 0 0.45098 0 0 0 0.2 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_336_1106"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_336_1106"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <div className={`${className} relative z-10 h-full p-5`}>{children}</div>
    </div>
  );
}
