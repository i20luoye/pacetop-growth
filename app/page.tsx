import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  ChevronRight,
  CircleCheck,
  Factory,
  FileSearch,
  Gauge,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const auditModules = [
  {
    icon: Search,
    title: "SEO 增长分析",
    text: "识别海外采购商真正搜索的关键词，检查产品页、内容结构与竞争缺口。",
    details: ["采购意图关键词", "页面覆盖缺口", "竞争网站对比"],
  },
  {
    icon: Bot,
    title: "AI 搜索可见性",
    text: "评估 ChatGPT、Gemini、Perplexity 是否能够准确理解企业、产品和优势。",
    details: ["企业实体信息", "FAQ 与知识结构", "GEO/AEO 机会"],
  },
  {
    icon: Gauge,
    title: "询盘转化优化",
    text: "从海外采购决策路径出发，减少访客疑虑，提升提交 RFQ 和询盘的意愿。",
    details: ["首页定位", "信任证明", "询盘路径"],
  },
];

const processSteps = [
  ["01", "网站与业务分析", "理解产品、目标市场、现有官网结构和海外客户获取方式。"],
  ["02", "搜索与竞争研究", "分析采购关键词、同行网站、内容差距与市场表达方式。"],
  ["03", "增长机会排序", "按影响、投入和紧迫度筛选最值得优先解决的问题。"],
  ["04", "90 天执行路线", "给出页面、内容、AI 搜索和转化优化的分阶段行动方案。"],
];

const plans = [
  {
    name: "免费诊断摘要",
    price: "免费",
    description: "用于快速判断官网是否存在明显的海外获客机会。",
    items: ["网站初步评分", "3 个关键增长问题", "一项优先行动建议"],
    href: "/audit-request",
    cta: "申请免费诊断",
    featured: false,
  },
  {
    name: "完整 Growth Audit",
    price: "首期 ¥1,999",
    description: "适合希望获得明确优化方向，但暂时不需要代执行的企业。",
    items: ["SEO 与采购关键词分析", "AI Search / GEO 分析", "竞争对手对比", "询盘转化诊断", "90 天增长路线"],
    href: "/services/ai-b2b-growth-audit",
    cta: "查看完整服务",
    featured: true,
  },
  {
    name: "增长执行服务",
    price: "按项目报价",
    description: "适合希望直接推进页面、内容和自动化改造的企业。",
    items: ["首页与产品页优化", "SEO 内容规划", "AI 搜索结构建设", "询盘流程与自动化方案"],
    href: "/contact",
    cta: "沟通执行需求",
    featured: false,
  },
];

const faqs = [
  ["AI B2B Growth Audit 和普通 SEO 报告有什么区别？", "普通 SEO 报告通常集中在技术项和关键词。我们的诊断同时关注海外采购决策、AI 搜索理解、网站信任和询盘转化，最终输出按商业价值排序的行动方案。"],
  ["适合哪些企业？", "第一阶段主要服务拥有英文官网、面向海外市场的中国制造企业，尤其是机械设备、CNC、工业零件、自动化、电子制造和新能源相关企业。"],
  ["免费诊断会提供什么？", "免费版包含网站初步评分、三个主要问题和一个优先建议，用于判断是否值得继续做完整分析。"],
  ["完整诊断需要多久？", "根据网站规模和行业复杂度，一般在收到完整资料后 3–5 个工作日交付。"],
];

function ProgressBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-slate-300">{label}</span>
        <span className="font-semibold text-white">{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div className="h-full rounded-full bg-blue-400" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <section className="relative border-b border-slate-200 bg-[radial-gradient(circle_at_top_right,#dbeafe_0,transparent_32%),linear-gradient(to_bottom,#ffffff,#f8fafc)]">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-6xl">
              让官网从企业介绍页，变成持续获取海外询盘的增长系统
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              PaceTop Growth 帮助中国制造企业发现 SEO、AI 搜索与网站转化中的增长机会，缩短海外采购商从发现到询盘的决策路径。
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/audit-request"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-blue-700"
              >
                免费获取网站增长诊断
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/case-study/dyfab"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-all hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50"
              >
                查看样板案例
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
              {["面向中国出口企业", "不依赖广告投放", "以询盘增长为目标"].map((item) => (
                <span className="flex items-center gap-2" key={item}>
                  <CircleCheck className="h-4 w-4 text-emerald-600" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-blue-200/40 blur-3xl" />
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20 sm:p-8">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-sm font-medium text-blue-300">示例诊断面板</p>
                  <h2 className="mt-2 text-2xl font-bold">AI B2B Growth Score</h2>
                </div>
                <div className="rounded-2xl bg-white/10 px-4 py-3 text-right">
                  <p className="text-3xl font-bold">62</p>
                  <p className="text-xs text-slate-400">/ 100</p>
                </div>
              </div>

              <div className="mt-8 space-y-5">
                <ProgressBar label="SEO Visibility" value={62} />
                <ProgressBar label="AI Search Readiness" value={45} />
                <ProgressBar label="Conversion Readiness" value={58} />
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold">优先增长机会</p>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  {["补充高采购意图页面", "重构企业与产品知识信息", "降低 RFQ 提交阻力"].map((item) => (
                    <li className="flex items-start gap-3" key={item}>
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-4 text-xs leading-5 text-slate-500">此面板仅用于展示诊断结构，不代表任何客户的实际业务结果。</p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-5 pb-10 sm:px-8">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-slate-200 pt-8 text-sm text-slate-500">
            <span className="font-semibold text-slate-700">优先服务行业</span>
            {['CNC 与精密加工', '机械设备', '工业自动化', '电子制造', '新能源'].map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">制造能力很强，不代表官网会自动带来海外客户</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                很多企业已经投入建站，却仍停留在“公司介绍 + 产品图片 + 联系方式”。真正的增长网站必须帮助采购商快速判断匹配度、建立信任并采取行动。
              </p>
            </div>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {[
                [Factory, "客户找不到您", "网站没有覆盖采购商真实搜索词，制造能力无法进入客户的候选名单。"],
                [Bot, "AI 无法理解您", "企业、产品、行业和认证信息缺乏清晰结构，难以被 AI 搜索准确引用。"],
                [BarChart3, "访问没有变成询盘", "页面没有降低采购风险，也没有给客户一个足够明确、低阻力的下一步。"],
              ].map(([Icon, title, text]) => {
                const ItemIcon = Icon as typeof Factory;
                return (
                  <div className="grid gap-5 py-8 sm:grid-cols-[56px_1fr]" key={String(title)}>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                      <ItemIcon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="text-xl font-bold">{String(title)}</h3>
                      <p className="mt-2 leading-7 text-slate-600">{String(text)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-slate-950 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">AI B2B Growth Audit</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              不只是列出技术问题，而是回答三个商业问题：客户为什么找不到您、为什么不相信您、为什么没有提交询盘。
            </p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {auditModules.map(({ icon: Icon, title, text, details }) => (
              <article className="rounded-3xl border border-white/10 bg-white/[0.055] p-7" key={title}>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-7 text-2xl font-bold">{title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{text}</p>
                <ul className="mt-7 space-y-3 border-t border-white/10 pt-6 text-sm text-slate-400">
                  {details.map((item) => (
                    <li className="flex items-center gap-3" key={item}>
                      <Check className="h-4 w-4 text-blue-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-[2rem] bg-blue-600 p-7 text-white sm:p-10">
            <Sparkles className="h-8 w-8 text-blue-100" />
            <h2 className="mt-7 text-3xl font-bold tracking-tight sm:text-4xl">我们关注的不是“网站有没有问题”，而是“哪个问题最影响订单”</h2>
            <p className="mt-5 leading-8 text-blue-100">
              报告会把技术发现翻译成老板和外贸负责人能直接理解的商业语言，并按照优先级给出执行路线。
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              [ShieldCheck, "从采购决策出发", "围绕海外买家选择供应商时真正关心的信息，而不是只做技术检查。"],
              [FileSearch, "结论可核查", "明确页面、关键词、竞争差距和改进依据，减少空泛的 AI 建议。"],
              [BarChart3, "优先级清晰", "区分紧急修复、快速收益与长期资产，不要求企业一次做完所有事情。"],
              [Factory, "理解制造业场景", "针对产品参数、认证、应用行业、交付和 RFQ 等 B2B 特征设计建议。"],
            ].map(([Icon, title, text]) => {
              const ItemIcon = Icon as typeof Factory;
              return (
                <div className="rounded-2xl border border-slate-200 p-6" key={String(title)}>
                  <ItemIcon className="h-6 w-6 text-blue-600" />
                  <h3 className="mt-5 font-bold">{String(title)}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{String(text)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="case" className="bg-slate-100 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">样板案例：精密制造企业网站诊断</h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-600">展示我们如何从 SEO、AI 搜索理解和询盘路径三个方向分析一家 CNC 制造企业官网。</p>
            </div>
            <a className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800" href="/case-study/dyfab">
              查看完整案例 <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
              <div className="bg-slate-950 p-8 text-white sm:p-10">
                <p className="text-sm font-semibold text-blue-300">Dyfab Industry · 公开样板分析</p>
                <h3 className="mt-5 text-3xl font-bold">从工厂展示册，升级为采购决策页面</h3>
                <p className="mt-5 leading-7 text-slate-300">重点不在否定企业制造能力，而是判断官网是否充分传递行业匹配度、质量证明和报价行动入口。</p>
                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[["55", "SEO"], ["45", "AI Search"], ["60", "Conversion"]].map(([score, label]) => (
                    <div className="rounded-2xl bg-white/10 p-4" key={label}>
                      <p className="text-2xl font-bold">{score}</p>
                      <p className="mt-1 text-xs text-slate-400">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 sm:p-10">
                <p className="text-sm font-semibold text-slate-500">核心发现</p>
                <div className="mt-6 space-y-6">
                  {[
                    ["采购意图内容不足", "基础产品信息存在，但缺少价格因素、材料、精度、行业应用和供应商选择等决策内容。"],
                    ["企业知识结构不完整", "认证、能力和市场信息没有形成便于搜索引擎与 AI 理解的稳定实体表达。"],
                    ["询盘入口仍有阻力", "需要把 Contact Us 升级为更符合工业采购习惯的上传图纸与快速报价流程。"],
                  ].map(([title, text]) => (
                    <div className="flex gap-4" key={title}>
                      <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                        <Check className="h-4 w-4" />
                      </span>
                      <div>
                        <h4 className="font-bold">{title}</h4>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-xs leading-5 text-slate-400">本案例基于公开网站信息制作，是能力展示样板，不代表受该企业委托，也不代表优化后的实际业绩。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">从网站地址到可执行增长路线</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">第一版不开发复杂系统，由 AI 提升研究效率，再由人工审核关键结论与优先级。</p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {processSteps.map(([number, title, text]) => (
              <div className="relative border-t-2 border-slate-950 pt-6" key={number}>
                <p className="text-sm font-bold text-blue-600">{number}</p>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="plans" className="border-y border-slate-200 bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">从免费判断，到完整诊断与执行</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">先确认问题是否值得解决，再决定是否投入，降低企业第一次合作的决策成本。</p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <article className={`flex flex-col rounded-3xl border p-7 ${plan.featured ? 'border-blue-600 bg-slate-950 text-white shadow-xl' : 'border-slate-200 bg-white'}`} key={plan.name}>
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className={`mt-4 text-3xl font-bold ${plan.featured ? 'text-white' : 'text-slate-950'}`}>{plan.price}</p>
                <p className={`mt-4 min-h-14 text-sm leading-6 ${plan.featured ? 'text-slate-300' : 'text-slate-600'}`}>{plan.description}</p>
                <ul className={`mt-7 flex-1 space-y-3 border-t pt-6 text-sm ${plan.featured ? 'border-white/10 text-slate-300' : 'border-slate-200 text-slate-600'}`}>
                  {plan.items.map((item) => (
                    <li className="flex gap-3" key={item}>
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${plan.featured ? 'text-blue-300' : 'text-emerald-600'}`} />
                      {item}
                    </li>
                  ))}
                </ul>
                <a className={`mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 ${plan.featured ? 'bg-blue-600 text-white hover:bg-blue-500' : 'border border-slate-300 text-slate-800 hover:bg-slate-50'}`} href={plan.href}>
                  {plan.cta} <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">常见问题</h2>
            <p className="mt-4 leading-7 text-slate-600">仍有疑问，可以直接发送官网地址和行业信息。</p>
            <a className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700" href="/contact">联系我们 <ArrowRight className="h-4 w-4" /></a>
          </div>
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map(([question, answer]) => (
              <details className="group py-6" key={question}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold">
                  {question}
                  <span className="text-xl font-normal text-slate-400 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-3xl leading-7 text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-blue-600 px-6 py-14 text-center text-white sm:px-12 sm:py-18">
          <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">您的官网应该成为 24 小时工作的海外销售</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">先用一份免费诊断摘要，确认目前最值得优先解决的增长问题。</p>
          <a className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-blue-700 shadow-lg transition-transform hover:-translate-y-0.5" href="/audit-request">
            申请免费 AI B2B Growth Audit <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
