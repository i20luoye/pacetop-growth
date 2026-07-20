"use client";

import { ArrowRight, Check, Mail } from "lucide-react";
import type { FormEvent } from "react";

export default function AuditRequestPage() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const body = [
      `姓名：${form.get("name") || ""}`,
      `公司：${form.get("company") || ""}`,
      `网站：${form.get("website") || ""}`,
      `行业：${form.get("industry") || ""}`,
      `目标市场：${form.get("market") || ""}`,
      `邮箱：${form.get("email") || ""}`,
      "",
      `补充信息：${form.get("message") || ""}`,
    ].join("\n");

    window.location.href = `mailto:hello@pacetop.com?subject=${encodeURIComponent("免费 AI B2B Growth Audit 申请")}&body=${encodeURIComponent(body)}`;
  }

  return (
    <main className="bg-slate-50 py-16 text-slate-950 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <section className="rounded-[2rem] bg-slate-950 p-7 text-white sm:p-10 lg:sticky lg:top-28">
          <p className="text-sm font-semibold text-blue-300">免费诊断摘要</p>
          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">先确认官网最值得解决的增长问题</h1>
          <p className="mt-5 leading-7 text-slate-300">
            提交企业网站和基本业务信息，我们会从海外搜索、AI理解和询盘转化三个方向进行初步判断。
          </p>
          <ul className="mt-8 space-y-4 text-sm text-slate-300">
            {["网站初步增长评分", "三个主要问题", "一个优先行动建议", "无需先购买完整服务"].map((item) => (
              <li className="flex gap-3" key={item}>
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 border-t border-white/10 pt-6 text-xs leading-5 text-slate-500">
            提交按钮会调用您设备上的邮件客户端，将资料发送至 hello@pacetop.com。我们不会在网站中保存您的业务资料。
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
              <Mail className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-2xl font-bold">提交企业信息</h2>
              <p className="mt-1 text-sm text-slate-500">带 * 的项目有助于完成有效分析。</p>
            </div>
          </div>

          <form className="mt-8 grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
            <label className="text-sm font-medium text-slate-700">
              姓名 *
              <input required name="name" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" placeholder="怎么称呼您" />
            </label>
            <label className="text-sm font-medium text-slate-700">
              公司名称 *
              <input required name="company" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" placeholder="企业或品牌名称" />
            </label>
            <label className="text-sm font-medium text-slate-700 sm:col-span-2">
              企业网站 URL *
              <input required type="url" name="website" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" placeholder="https://example.com" />
            </label>
            <label className="text-sm font-medium text-slate-700">
              行业 *
              <input required name="industry" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" placeholder="例如：CNC 加工" />
            </label>
            <label className="text-sm font-medium text-slate-700">
              目标市场
              <input name="market" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" placeholder="例如：美国、德国" />
            </label>
            <label className="text-sm font-medium text-slate-700 sm:col-span-2">
              联系邮箱 *
              <input required type="email" name="email" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" placeholder="name@company.com" />
            </label>
            <label className="text-sm font-medium text-slate-700 sm:col-span-2">
              产品、现状或希望解决的问题
              <textarea name="message" className="mt-2 min-h-36 w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" placeholder="例如：网站长期没有询盘，希望了解 Google 和 AI 搜索中的问题。" />
            </label>
            <div className="sm:col-span-2">
              <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/15 transition-all hover:-translate-y-0.5 hover:bg-blue-700 sm:w-auto" type="submit">
                生成邮件并提交申请 <ArrowRight className="h-4 w-4" />
              </button>
              <p className="mt-4 text-xs leading-5 text-slate-400">也可以直接将网站地址、行业和目标市场发送至 hello@pacetop.com。</p>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
