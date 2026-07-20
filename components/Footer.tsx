"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");

  const copy = isEnglish
    ? {
        subline: "AI B2B Growth Solutions",
        description:
          "Helping Chinese manufacturers turn their websites from company brochures into overseas customer acquisition systems.",
        serviceTitle: "Services",
        serviceLinks: [
          ["AI B2B Growth Audit", "/services/ai-b2b-growth-audit"],
          ["Free Audit Request", "/audit-request"],
          ["Sample Case", "/case-study/dyfab"],
        ],
        companyTitle: "PaceTop",
        companyLinks: [
          ["English Home", "/en"],
          ["Contact", "/contact"],
          ["中文", "/"],
        ],
        footerLine: "AI B2B Growth Audit for Chinese manufacturers.",
      }
    : {
        subline: "派拓 · AI B2B Growth Solutions",
        description:
          "帮助中国制造企业把官网从展示窗口升级为海外客户获取系统，覆盖 SEO、AI 搜索可见性与询盘转化。",
        serviceTitle: "服务",
        serviceLinks: [
          ["AI B2B Growth Audit", "/services/ai-b2b-growth-audit"],
          ["免费诊断申请", "/audit-request"],
          ["样板案例", "/case-study/dyfab"],
        ],
        companyTitle: "PaceTop",
        companyLinks: [
          ["首页", "/"],
          ["联系我们", "/contact"],
          ["English", "/en"],
        ],
        footerLine: "AI 驱动中国制造企业海外增长。",
      };

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="max-w-md">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-bold text-slate-950">PT</span>
            <div>
              <p className="font-bold">PaceTop Growth</p>
              <p className="text-xs text-slate-400">{copy.subline}</p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-7 text-slate-400">{copy.description}</p>
          <a className="mt-5 inline-block text-sm font-semibold text-blue-400 hover:text-blue-300" href="mailto:hello@pacetop.com">
            hello@pacetop.com
          </a>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">{copy.serviceTitle}</h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            {copy.serviceLinks.map(([label, href]) => (
              <li key={href}>
                <a className="transition-colors hover:text-white" href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">{copy.companyTitle}</h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            {copy.companyLinks.map(([label, href]) => (
              <li key={href}>
                <a className="transition-colors hover:text-white" href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 PaceTop Growth. All rights reserved.</p>
          <p>{copy.footerLine}</p>
        </div>
      </div>
    </footer>
  );
}
