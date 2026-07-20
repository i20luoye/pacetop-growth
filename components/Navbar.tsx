export default function Navbar() {
  return (
    <header className="border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div>
          <div className="text-xl font-bold text-slate-900">PaceTop Growth</div>
          <div className="text-sm text-slate-500">AI B2B Growth Solutions</div>
        </div>

        <nav className="hidden gap-8 text-sm text-slate-600 md:flex">
          <a href="#services">服务</a>
          <a href="#case">案例</a>
          <a href="#process">方法</a>
        </nav>

        <a
          href="/audit-request"
          className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white"
        >
          免费诊断
        </a>
      </div>
    </header>
  );
}
