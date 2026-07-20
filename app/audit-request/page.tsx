export default function AuditRequestPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-24 text-slate-900">
      <div className="mx-auto max-w-2xl px-6">
        <h1 className="text-5xl font-bold">免费获取 AI B2B Growth Audit</h1>
        <p className="mt-6 text-lg text-slate-600">
          提交您的企业网站，我们将分析海外获客机会、SEO表现、AI搜索适配和网站转化能力。
        </p>

        <form className="mt-10 space-y-5">
          <input className="w-full rounded-xl border bg-white p-4" placeholder="姓名" />
          <input className="w-full rounded-xl border bg-white p-4" placeholder="公司名称" />
          <input className="w-full rounded-xl border bg-white p-4" placeholder="企业网站 URL" />
          <input className="w-full rounded-xl border bg-white p-4" placeholder="邮箱" />
          <textarea className="h-32 w-full rounded-xl border bg-white p-4" placeholder="企业产品、目标市场等信息" />
          <button className="rounded-xl bg-blue-600 px-8 py-3 text-white">
            提交申请
          </button>
        </form>
      </div>
    </main>
  );
}
