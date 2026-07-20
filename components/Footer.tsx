const serviceLinks = [
  ["AI B2B Growth Audit", "/services/ai-b2b-growth-audit"],
  ["免费诊断申请", "/audit-request"],
  ["样板案例", "/case-study/dyfab"],
];

const companyLinks = [
  ["首页", "/"],
  ["联系我们", "/contact"],
  ["English", "/en"],
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="max-w-md">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-bold text-slate-950">PT</span>
            <div>
              <p className="font-bold">PaceTop Growth</p>
              <p className="text-xs text-slate-400">派拓 · AI B2B Growth Solutions</p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-7 text-slate-400">
            帮助中国制造企业把官网从展示窗口升级为海外客户获取系统，覆盖 SEO、AI 搜索可见性与询盘转化。
          </p>
          <a className="mt-5 inline-block text-sm font-semibold text-blue-400 hover:text-blue-300" href="mailto:hello@pacetop.com">
            hello@pacetop.com
          </a>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">服务</h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            {serviceLinks.map(([label, href]) => (
              <li key={href}>
                <a className="transition-colors hover:text-white" href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">PaceTop</h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            {companyLinks.map(([label, href]) => (
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
          <p>AI B2B Growth Audit for Chinese manufacturers.</p>
        </div>
      </div>
    </footer>
  );
}
