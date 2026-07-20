const services = [
  {
    title: "SEO 增长分析",
    text: "发现海外采购关键词机会，优化产品页面和内容策略。",
  },
  {
    title: "AI Search 优化",
    text: "帮助 ChatGPT、Gemini 等 AI 搜索工具更好理解企业。",
  },
  {
    title: "网站转化优化",
    text: "优化首页、产品页面和询盘流程，提高客户转化率。",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold">AI B2B Growth Audit</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((item) => (
            <div key={item.title} className="rounded-2xl border p-8">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
