export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="/" className="group flex items-center gap-3" aria-label="PaceTop Growth 首页">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold tracking-tight text-white shadow-sm transition-transform group-hover:-translate-y-0.5">
            PT
          </span>
          <span>
            <span className="block text-base font-bold tracking-tight text-slate-950">PaceTop Growth</span>
            <span className="block text-[11px] tracking-wide text-slate-500">派拓 · B2B 海外增长</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex" aria-label="主导航">
          <a className="transition-colors hover:text-slate-950" href="/#services">服务</a>
          <a className="transition-colors hover:text-slate-950" href="/case-study/dyfab">案例</a>
          <a className="transition-colors hover:text-slate-950" href="/#process">方法</a>
          <a className="transition-colors hover:text-slate-950" href="/#plans">方案</a>
          <a className="transition-colors hover:text-slate-950" href="/contact">联系我们</a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="/en"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-950"
          >
            EN
          </a>
          <a
            href="/audit-request"
            className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md sm:px-5"
          >
            免费诊断
          </a>
        </div>
      </div>
    </header>
  );
}
