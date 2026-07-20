export default function ServicePage() {
  return (
    <main className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-blue-600 font-semibold">PaceTop Growth Service</p>
        <h1 className="mt-5 text-5xl font-bold">AI B2B Growth Audit</h1>
        <p className="mt-6 text-xl text-slate-600">
          帮助中国制造企业发现海外获客机会，通过 AI Search、SEO 和网站转化优化提升询盘能力。
        </p>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            '网站增长诊断',
            'SEO关键词机会分析',
            'AI搜索可见性优化'
          ].map(item => (
            <div key={item} className="rounded-2xl border p-6">
              <h2 className="font-bold text-xl">{item}</h2>
              <p className="mt-3 text-slate-600">
                深入分析企业网站当前问题，并提供可执行优化方向。
              </p>
            </div>
          ))}
        </section>

        <section className="mt-16 rounded-2xl bg-slate-900 p-10 text-white">
          <h2 className="text-3xl font-bold">交付内容</h2>
          <ul className="mt-6 space-y-3 text-slate-200">
            <li>✓ 网站增长评分</li>
            <li>✓ SEO机会分析</li>
            <li>✓ AI搜索优化建议</li>
            <li>✓ 90天增长路线</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
