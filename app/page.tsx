const services = [
  {
    title: "SEO 增长分析",
    text: "发现海外采购关键词机会，优化产品页面和内容策略。",
  },
  {
    title: "AI 搜索优化",
    text: "帮助 ChatGPT、Gemini 等 AI 更准确理解企业和产品优势。",
  },
  {
    title: "询盘转化优化",
    text: "优化官网结构，让海外访客更容易产生询盘。",
  },
];

export default function Home() {
  return (
    <main>
      <section className="bg-white py-24">
        <div className="container grid gap-12 md:grid-cols-2">
          <div>
            <p className="font-semibold text-blue-600">PaceTop Growth</p>
            <h1 className="mt-4 text-5xl font-bold leading-tight">
              帮助中国制造企业通过 AI 获得更多海外客户
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              AI B2B Growth Audit 为外贸企业分析网站获客能力、SEO机会、AI搜索表现和转化问题。
            </p>
            <button className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-white">
              免费获取网站增长诊断
            </button>
          </div>
          <div className="rounded-3xl bg-gray-900 p-8 text-white">
            <div className="text-gray-400">AI B2B Growth Score</div>
            <div className="mt-5 text-6xl font-bold">62<span className="text-xl">/100</span></div>
            <div className="mt-8 space-y-4">
              <div>SEO Visibility 62%</div>
              <div>AI Search Readiness 45%</div>
              <div>Conversion 58%</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <h2 className="text-4xl font-bold">AI B2B Growth Audit</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((item) => (
              <div key={item.title} className="rounded-2xl border bg-white p-8">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-4 text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-24 text-white">
        <div className="container">
          <h2 className="text-4xl font-bold">案例：Dyfab Industry</h2>
          <p className="mt-5 text-gray-300">
            CNC制造企业海外获客增长分析案例，包含SEO、AI搜索和询盘优化建议。
          </p>
        </div>
      </section>
    </main>
  );
}
