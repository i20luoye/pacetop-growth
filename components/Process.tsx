export default function Process(){
  const steps=['网站分析','行业竞争研究','AI增长机会发现','90天执行路线'];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-4xl font-bold">我们的分析流程</h2>
        <div className="mt-10 grid md:grid-cols-4 gap-5">
          {steps.map((s,i)=>(
            <div key={s} className="border rounded-2xl p-6">
              <div className="text-blue-600 font-bold">0{i+1}</div>
              <h3 className="mt-4 font-semibold">{s}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
