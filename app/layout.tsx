import type { Metadata } from "next";
import localFont from "next/font/local";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "서비스 이름 | 한 줄 슬로건",
  description: "서비스에 대한 매력적인 설명입니다.",
  openGraph: {
    title: "서비스 이름",
    description: "공유 시 보일 설명",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}
