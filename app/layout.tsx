import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PaceTop Growth | AI B2B Growth Solutions for Manufacturers",
  description:
    "帮助中国制造企业通过 AI 搜索优化、SEO 和网站增长策略获得更多海外客户。",
  keywords: [
    "B2B growth",
    "AI SEO",
    "GEO optimization",
    "外贸网站优化",
    "中国制造企业海外获客",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
