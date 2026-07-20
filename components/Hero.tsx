export default function Hero() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div>
          <p className="font-semibold text-blue-600">PaceTop Growth</p>
          <h1 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
            帮助中国制造企业
            <br />
            获得更多海外客户
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            通过 AI Search、SEO 和网站增长分析，帮助 B2B 制造企业提升海外搜索曝光和询盘转化能力。
          </p>
          <div className="mt-8">
            <a
              href="/audit-request"
              className="rounded-lg bg-blue-600 px-6 py-3 text-white"
            >
              免费获取 AI B2B Growth Audit
            </a>
          </div>
        </div>

        <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-xl">
          <div className="text-sm text-slate-400">AI B2B Growth Score</div>
          <div className="mt-4 text-5xl font-bold">68<span className="text-xl">/100</span></div>

          <div className="mt-8 space-y-5">
            <div>SEO Visibility <span className="float-right">65%</span></div>
            <div>AI Search Readiness <span className="float-right">48%</span></div>
            <div>Conversion Opportunity <span className="float-right">72%</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
