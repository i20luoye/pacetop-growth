import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { organizationSchema } from "./structured-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pacetop.com"),
  title: {
    default: "PaceTop Growth | AI驱动中国制造企业海外增长",
    template: "%s | PaceTop Growth",
  },
  description:
    "PaceTop Growth帮助中国B2B制造企业通过AI搜索优化、SEO和网站增长策略获得更多海外客户。",
  keywords: [
    "AI B2B Growth Audit",
    "外贸网站优化",
    "制造企业海外获客",
    "AI SEO",
    "GEO优化",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "zh-CN": "/",
      en: "/en",
    },
  },
  openGraph: {
    title: "PaceTop Growth",
    description: "AI驱动中国制造企业海外增长，帮助B2B企业获得更多国际客户。",
    type: "website",
    url: "https://pacetop.com",
    siteName: "PaceTop Growth",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
