import Problem from "@/components/Problem";
import CaseStudyCard from "@/components/CaseStudyCard";
import Process from "@/components/Process";
import CTA from "@/components/CTA";

const services = [
  {title:"SEO 增长分析",text:"发现海外采购关键词机会，优化产品页面和内容策略。"},
  {title:"AI 搜索优化",text:"帮助 ChatGPT、Gemini 等 AI 更准确理解企业和产品优势。"},
  {title:"询盘转化优化",text:"优化官网结构，让海外访客更容易产生询盘。"},
];

export default function Home(){
 return <main>
  <section className="bg-white py-24"><div className="container grid gap-12 md:grid-cols-2 items-center">
   <div><p className="font-semibold text-blue-600">PaceTop Growth</p><h1 className="mt-4 text-5xl font-bold leading-tight">帮助中国制造企业通过 AI 获得更多海外客户</h1><p className="mt-6 text-lg text-gray-600">AI B2B Growth Audit 为外贸企业分析网站获客能力、SEO机会、AI搜索表现和转化问题。</p><a href="/audit-request" className="inline-block mt-8 rounded-lg bg-blue-600 px-6 py-3 text-white">免费获取网站增长诊断</a></div>
   <div className="rounded-3xl bg-gray-900 p-8 text-white"><div className="text-gray-400">AI B2B Growth Score</div><div className="mt-5 text-6xl font-bold">62<span className="text-xl">/100</span></div><div className="mt-8 space-y-4">SEO Visibility 62%<br/>AI Search Readiness 45%<br/>Conversion 58%</div></div>
  </div></section>
  <Problem />
  <section className="py-24"><div className="container"><h2 className="text-4xl font-bold">AI B2B Growth Audit</h2><div className="mt-10 grid gap-6 md:grid-cols-3">{services.map(s=><div key={s.title} className="rounded-2xl border bg-white p-8"><h3 className="text-xl font-bold">{s.title}</h3><p className="mt-4 text-gray-600">{s.text}</p></div>)}</div></div></section>
  <CaseStudyCard />
  <Process />
  <CTA />
 </main>
}
