import { ArrowRight, Bot, Check, Gauge, Search } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Growth Analysis",
    text: "Identify purchase-intent keywords, missing pages and competitor content gaps that affect qualified traffic.",
  },
  {
    icon: Bot,
    title: "AI Search Readiness",
    text: "Assess whether ChatGPT, Gemini and other AI systems can accurately understand your company and products.",
  },
  {
    icon: Gauge,
    title: "Website Conversion",
    text: "Reduce buyer uncertainty and improve the journey from first visit to RFQ or qualified inquiry.",
  },
];

export default function EnglishHome() {
  return (
    <main className="bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-[radial-gradient(circle_at_top_right,#dbeafe_0,transparent_30%),linear-gradient(to_bottom,#ffffff,#f8fafc)]">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl font-bold leading-[1.12] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Turn your manufacturing website into an overseas customer acquisition system
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              PaceTop Growth helps Chinese B2B manufacturers improve SEO visibility, AI search understanding and website conversion.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700" href="/audit-request">
                Get a Free Growth Audit <ArrowRight className="h-4 w-4" />
              </a>
              <a className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 hover:bg-slate-50" href="/case-study/dyfab">
                View Sample Case
              </a>
            </div>
          </div>

          <div className="rounded-[1.75rem] bg-slate-950 p-7 text-white shadow-2xl sm:p-9">
            <p className="text-sm font-semibold text-blue-300">Sample audit structure</p>
            <div className="mt-4 flex items-end justify-between">
              <h2 className="text-2xl font-bold">AI B2B Growth Score</h2>
              <p className="text-4xl font-bold">62<span className="text-sm text-slate-400"> / 100</span></p>
            </div>
            <div className="mt-8 space-y-5">
              {[["SEO Visibility", 62], ["AI Search Readiness", 45], ["Conversion Readiness", 58]].map(([label, value]) => (
                <div key={String(label)}>
                  <div className="mb-2 flex justify-between text-sm"><span className="text-slate-300">{label}</span><span>{value}%</span></div>
                  <div className="h-2 rounded-full bg-white/10"><div className="h-2 rounded-full bg-blue-400" style={{ width: `${value}%` }} /></div>
                </div>
              ))}
            </div>
            <p className="mt-7 text-xs leading-5 text-slate-500">Illustrative dashboard only. It does not represent a client result.</p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">AI B2B Growth Audit</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">A commercial growth assessment, not just a technical SEO checklist.</p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, text }) => (
              <article className="rounded-3xl border border-slate-200 p-7" key={title}>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700"><Icon className="h-6 w-6" /></span>
                <h3 className="mt-7 text-2xl font-bold">{title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-slate-950 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">A clear path from website review to action plan</h2>
          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {[
              ["01", "Business review", "Products, markets and current acquisition model."],
              ["02", "Search research", "Buyer keywords and competitor positioning."],
              ["03", "Opportunity ranking", "Prioritize issues by commercial impact."],
              ["04", "90-day roadmap", "Pages, content, AI search and conversion actions."],
            ].map(([number, title, text]) => (
              <div className="border-t border-white/20 pt-6" key={number}>
                <p className="text-sm font-bold text-blue-300">{number}</p>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="plans" className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Start with a low-risk website assessment</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">The free summary identifies three important issues. A full audit adds competitor research, conversion analysis and a 90-day action roadmap.</p>
            <a className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white hover:bg-blue-700" href="/audit-request">Request Free Audit <ArrowRight className="h-4 w-4" /></a>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-2xl font-bold">Full Growth Audit includes</h3>
            <ul className="mt-6 space-y-4 text-slate-600">
              {["SEO and buyer-keyword analysis", "AI search and entity-readiness review", "Competitor comparison", "Website conversion assessment", "90-day prioritized roadmap"].map((item) => (
                <li className="flex gap-3" key={item}><Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
