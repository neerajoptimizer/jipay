import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FileText } from "lucide-react";
import { getPolicy, policies, policyUpdated } from "@/lib/policies";
import { TelegramButton } from "@/components/TelegramButton";

export const dynamicParams = false;

export function generateStaticParams() {
  return policies.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const policy = getPolicy((await params).slug);
  if (!policy) return {};
  return {
    title: policy.title,
    description: policy.description,
    alternates: { canonical: `/policies/${policy.slug}` },
  };
}

export default async function PolicyPage({ params }: { params: Promise<{ slug: string }> }) {
  const policy = getPolicy((await params).slug);
  if (!policy) notFound();

  return (
    <main>
      <section className="relative overflow-hidden border-b border-white/10">
        <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
        <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-blue-brand/20 blur-[120px]" />
        <div className="container-x relative py-16 sm:py-20">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link> <span aria-hidden>/</span> Policies
          </nav>
          <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">{policy.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-400">{policy.description}</p>
          <p className="mt-4 text-sm text-slate-500">Last updated: {policyUpdated}</p>
        </div>
      </section>

      <div className="container-x grid gap-12 py-14 lg:grid-cols-[16rem_1fr] lg:py-20">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <nav aria-label="All policies" className="card p-3">
            <ul className="space-y-1">
              {policies.map((p) => {
                const active = p.slug === policy.slug;
                return (
                  <li key={p.slug}>
                    <Link
                      href={`/policies/${p.slug}`}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition ${active ? "bg-gradient-to-r from-blue-brand/30 to-pink-brand/20 text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"}`}
                    >
                      <FileText className="h-4 w-4 shrink-0" />
                      {p.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        <article className="max-w-3xl">
          {policy.sections.map((s, i) => (
            <section key={s.heading} className={i ? "mt-10" : ""}>
              <h2 className="text-xl font-bold sm:text-2xl">{s.heading}</h2>
              {s.blocks.map((b, j) =>
                typeof b === "string" ? (
                  <p key={j} className="mt-4 leading-relaxed text-slate-300">{b}</p>
                ) : (
                  <ul key={j} className="mt-4 space-y-2.5">
                    {b.list.map((item) => (
                      <li key={item} className="flex gap-3 leading-relaxed text-slate-300">
                        <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-sky-brand to-pink-brand" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ),
              )}
            </section>
          ))}

          <div className="card mt-14 flex flex-col items-start justify-between gap-5 p-6 sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-lg font-bold text-white">Questions about this policy?</p>
              <p className="mt-1 text-sm text-slate-400">Our team is available 24/7 on Telegram.</p>
            </div>
            <TelegramButton />
          </div>
        </article>
      </div>
    </main>
  );
}
