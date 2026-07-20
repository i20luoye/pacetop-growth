import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PaceTop Growth | AI驱动中国制造企业海外增长",
  description:
    "PaceTop Growth帮助中国B2B制造企业通过AI搜索优化、SEO和网站增长策略获得更多海外客户。",
  keywords: [
    "AI B2B Growth Audit",
    "外贸网站优化",
    "制造企业海外获客",
    "AI SEO",
    "GEO优化",
  ],
  openGraph: {
    title: "PaceTop Growth",
    description:
      "AI驱动中国制造企业海外增长，帮助B2B企业获得更多国际客户。",
    type: "website",
  },
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
