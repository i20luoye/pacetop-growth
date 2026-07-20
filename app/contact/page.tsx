export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-5xl font-bold">联系我们</h1>
        <p className="mt-6 text-lg text-slate-600">
          如果您希望提升企业官网的海外获客能力，欢迎联系我们获取 AI B2B Growth Audit。
        </p>

        <div className="mt-12 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold">PaceTop Growth</h2>
          <p className="mt-4 text-slate-600">
            AI-powered growth solutions for Chinese B2B manufacturers.
          </p>
          <div className="mt-6 space-y-2 text-slate-700">
            <p>Email: hello@pacetop.com</p>
            <p>Services: AI B2B Growth Audit, SEO Strategy, AI Search Optimization</p>
          </div>
        </div>
      </div>
    </main>
  );
}
