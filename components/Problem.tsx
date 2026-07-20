export default function Problem() {
  const items = [
    {title:'海外客户找不到你',text:'产品和工厂实力很好，但没有覆盖采购商真正搜索的关键词。'},
    {title:'AI无法理解你的企业',text:'ChatGPT、Gemini等AI工具需要更清晰的企业信息和知识结构。'},
    {title:'网站无法产生询盘',text:'很多官网只是展示企业，没有帮助客户完成采购决策。'},
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-4xl font-bold">很多制造企业官网，只是展示窗口，而不是海外销售系统</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map(i => (
            <div key={i.title} className="border rounded-2xl p-8">
              <h3 className="text-xl font-semibold">{i.title}</h3>
              <p className="mt-4 text-slate-600">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
