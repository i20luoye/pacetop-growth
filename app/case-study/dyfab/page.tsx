export default function DyfabCaseStudy() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-slate-900 py-24 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-blue-300">AI B2B Growth Audit Case Study</p>
          <h1 className="mt-6 text-5xl font-bold">Dyfab Industry</h1>
          <p className="mt-6 max-w-3xl text-xl text-slate-300">
            Precision manufacturing website growth analysis focused on SEO,
            AI Search visibility and overseas customer acquisition.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3">
          {[
            ['SEO Visibility', '55/100'],
            ['AI Search Readiness', '45/100'],
            ['Conversion Opportunity', '60/100'],
          ].map(([title, score]) => (
            <div key={title} className="rounded-2xl border p-8">
              <p className="text-slate-500">{title}</p>
              <p className="mt-4 text-4xl font-bold">{score}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold">Key Growth Findings</h2>
          <div className="mt-8 space-y-8">
            <div>
              <h3 className="text-xl font-semibold">From company brochure to customer acquisition system</h3>
              <p className="mt-3 text-slate-600">The website communicates manufacturing capability, but can further improve buyer decision support content.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">More purchase-intent SEO opportunities</h3>
              <p className="mt-3 text-slate-600">Additional pages targeting supplier searches can help attract qualified international buyers.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Improve AI search understanding</h3>
              <p className="mt-3 text-slate-600">Entity information, FAQs and industry knowledge can help AI systems better understand the company.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
