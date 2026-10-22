import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, CheckCircle2, ChevronDown, Sparkles } from "lucide-react";
import { benefits, faqs, industries, markets, networks, site, solutions, stats, steps, trustBadges } from "@/lib/content";
import { Icon } from "@/components/Icon";
import { TelegramButton } from "@/components/TelegramButton";
import { TrustSeals } from "@/components/TrustSeals";
import { HeroVisual, NetworkOrbit } from "@/components/Visuals";

// Bento layout: column spans for the six solution cards on large screens.
const solutionSpans = ["lg:col-span-2", "", "", "lg:col-span-2", "lg:col-span-2", ""];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: site.name,
        url: site.url,
        logo: `${site.url}/logo.jpg`,
        description: site.description,
        sameAs: [site.telegramUrl],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
          <div aria-hidden className="pointer-events-none absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-blue-brand/25 blur-[140px]" />
          <div aria-hidden className="pointer-events-none absolute top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-pink-brand/20 blur-[140px]" />
          <div className="container-x relative grid items-center gap-16 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
            <div>
              <span className="eyebrow">
                <Sparkles className="h-3.5 w-3.5" /> Domestic &amp; international payment gateways
              </span>
              <h1 className="mt-6 text-4xl leading-[1.05] font-extrabold sm:text-6xl lg:text-7xl">
                Accept payments. <br className="hidden sm:block" />
                <span className="text-gradient">Every way. Everywhere.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
                We have <strong className="font-semibold text-white">partners and networks for all types of domestic and international payment gateway solutions</strong>.
                UPI, cards, net banking, wallets, payouts and multi-currency payments — matched to your business and live fast.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <TelegramButton size="lg" label="Start on Telegram" />
                <a
                  href="#solutions"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Explore solutions <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <ul className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4" aria-label="Trust badges">
                {trustBadges.slice(0, 4).map((b) => (
                  <li key={b.title} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-xs font-medium text-slate-200">
                    <Icon name={b.icon} className="h-4 w-4 shrink-0 text-sky-brand" />
                    {b.title.replace(" Compliant", "").replace(" Secured", "").replace("-Authorised Partners", " Partners")}
                  </li>
                ))}
              </ul>
            </div>
            <HeroVisual />
          </div>
        </section>

        {/* Stats */}
        <section aria-label="JIPAY in numbers" className="border-y border-white/10 bg-night-900/60">
          <dl className="container-x grid grid-cols-2 divide-white/10 py-10 lg:grid-cols-4 lg:divide-x">
            {stats.map((s) => (
              <div key={s.label} className="px-4 py-4 text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-gradient font-display text-4xl font-extrabold sm:text-5xl">{s.value}</dd>
                <dd className="mt-2 text-sm text-slate-400">{s.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Domestic & International */}
        <section id="markets" className="section scroll-mt-16 pb-0 sm:pb-0 lg:pb-0">
          <div className="container-x">
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow">Domestic &amp; international</span>
              <h2 className="mt-5 text-3xl font-extrabold sm:text-5xl">
                Get paid <span className="text-gradient">in India and around the world</span>
              </h2>
              <p className="mt-5 text-lg text-slate-400">
                Whether your customers are next door or overseas, we have the right gateway partner for you.
              </p>
            </div>
            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {markets.map((m) => (
                <article key={m.title} className="card group overflow-hidden">
                  <div className="relative h-56 overflow-hidden sm:h-64">
                    <Image
                      src={m.image}
                      alt={m.alt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-night-900 via-night-900/40 to-transparent" />
                    <span className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-night-950/60 px-4 py-1.5 text-xs font-semibold tracking-wider text-white uppercase backdrop-blur">
                      <Icon name={m.icon} className="h-4 w-4 text-sky-brand" /> {m.eyebrow}
                    </span>
                  </div>
                  <div className="p-7 sm:p-9">
                    <h3 className="text-2xl font-bold sm:text-3xl">{m.title}</h3>
                    <p className="mt-3 text-slate-400">{m.text}</p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {m.points.map((pt) => (
                        <li key={pt} className="flex items-center gap-2.5 text-sm text-slate-200">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-brand to-pink-brand">
                            <Check className="h-3 w-3 text-white" />
                          </span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Network */}
        <section id="network" className="section relative scroll-mt-16 overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute top-1/3 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-blue-brand/10 blur-[120px]" />
          <div className="container-x relative">
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow">Our network</span>
              <h2 className="mt-5 text-3xl font-extrabold sm:text-5xl">
                Partners &amp; networks for <span className="text-gradient">all types of domestic &amp; international payment gateway solutions</span>
              </h2>
              <p className="mt-5 text-lg text-slate-400">
                One conversation with JIPAY opens our entire partner network. We match you with the right solution for your
                business model, volume and settlement needs.
              </p>
            </div>
            <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
              <NetworkOrbit />
              <ul className="grid gap-4 sm:grid-cols-2">
                {networks.map((n) => (
                  <li key={n.label} className="card p-5 transition hover:border-sky-brand/40">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-brand to-blue-brand text-white">
                        <Icon name={n.icon} className="h-5 w-5" />
                      </span>
                      <h3 className="font-bold">{n.label}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">{n.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section id="solutions" className="section scroll-mt-16 bg-night-900">
          <div className="container-x">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <span className="eyebrow">Solutions</span>
                <h2 className="mt-5 text-3xl font-extrabold sm:text-5xl">Everything you need to accept &amp; move money</h2>
              </div>
              <p className="max-w-md text-slate-400">From the first rupee online to bulk payouts and cross-border sales — one partner for all of it.</p>
            </div>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {solutions.map((s, i) => (
                <article key={s.title} className={`group relative h-96 overflow-hidden rounded-3xl border border-white/10 ${solutionSpans[i]}`}>
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    sizes="(min-width: 1024px) 66vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/70 to-night-950/10" />
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur">
                      <Icon name={s.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-2xl font-bold">{s.title}</h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-300">{s.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why JIPAY */}
        <section id="why" className="section scroll-mt-16">
          <div className="container-x grid items-center gap-16 lg:grid-cols-2">
            <div className="relative">
              <div aria-hidden className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-pink-brand/30 to-sky-brand/30 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/15">
                <Image
                  src="/images/partnership.jpg"
                  alt="Business partners celebrating a successful deal"
                  width={1200}
                  height={800}
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="glass absolute -bottom-8 left-6 flex items-center gap-4 p-4 pr-6 sm:left-10">
                <Image src="/logo.jpg" alt="" width={48} height={48} className="rounded-xl" />
                <div>
                  <p className="font-display font-bold text-white">One partner. Every gateway.</p>
                  <p className="text-xs text-slate-400">Domestic &amp; international</p>
                </div>
              </div>
            </div>
            <div className="pt-6 lg:pt-0">
              <span className="eyebrow">Why JIPAY</span>
              <h2 className="mt-5 text-3xl font-extrabold sm:text-5xl">
                Your shortcut to the <span className="text-gradient">right payment gateway</span>
              </h2>
              <p className="mt-5 text-lg text-slate-400">
                Skip weeks of applications and rejections. We know which solution fits your business and get you live quickly.
              </p>
              <ul className="mt-8 space-y-4">
                {benefits.map((b) => (
                  <li key={b} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-pink-brand" />
                    <span className="text-slate-200">{b}</span>
                  </li>
                ))}
              </ul>
              <TelegramButton size="lg" label="Talk to an expert" className="mt-10" />
            </div>
          </div>
        </section>

        {/* Industries */}
        <section aria-labelledby="industries-title" className="pb-20 sm:pb-24">
          <div className="container-x">
            <div className="card px-4 py-10 sm:px-10">
              <h2 id="industries-title" className="text-center text-xl font-bold sm:text-2xl">Built for every kind of business</h2>
              <ul className="mt-8 grid grid-cols-3 gap-2.5 sm:gap-3 lg:grid-cols-9">
                {industries.map((ind) => (
                  <li key={ind.label} className="flex flex-col items-center gap-2 rounded-2xl border border-white/5 bg-white/[0.03] px-1 py-5 text-center text-xs font-medium whitespace-nowrap sm:text-sm lg:text-[13px] xl:text-sm text-slate-200 transition hover:border-sky-brand/40">
                    <Icon name={ind.icon} className="h-6 w-6 text-sky-brand" />
                    {ind.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Trust badges */}
        <section id="trust" className="section relative scroll-mt-16 overflow-hidden bg-night-900">
          <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
          <div className="container-x relative">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">Safe &amp; secure</span>
              <h2 className="mt-5 text-3xl font-extrabold sm:text-5xl">
                Built on <span className="text-gradient">trust &amp; compliance</span>
              </h2>
            </div>
            <ul className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-6">
              {trustBadges.map((b) => (
                <li key={b.title} className="card flex flex-col items-center p-6 text-center">
                  <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-sky-brand via-blue-brand to-pink-brand p-[2px]">
                    <span className="flex h-full w-full items-center justify-center rounded-full bg-night-900 text-white">
                      <Icon name={b.icon} className="h-8 w-8" />
                    </span>
                    <CheckCircle2 aria-hidden className="absolute -right-1 -bottom-1 h-6 w-6 rounded-full bg-night-900 text-emerald-400" />
                  </span>
                  <h3 className="mt-5 text-sm font-bold sm:text-base">{b.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">{b.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section className="section">
          <div className="container-x">
            <div className="text-center">
              <span className="eyebrow">How it works</span>
              <h2 className="mt-5 text-3xl font-extrabold sm:text-5xl">Live in three simple steps</h2>
            </div>
            <ol className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-6">
              <div aria-hidden className="absolute top-8 right-[16%] left-[16%] hidden h-px bg-gradient-to-r from-sky-brand via-blue-brand to-pink-brand md:block" />
              {steps.map((s, i) => (
                <li key={s.title} className="relative text-center">
                  <span className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-sky-brand to-pink-brand font-display text-xl font-extrabold text-white shadow-lg shadow-pink-brand/30">
                    {i + 1}
                  </span>
                  <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                  <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-slate-400">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section scroll-mt-16 bg-night-900">
          <div className="container-x max-w-3xl">
            <div className="text-center">
              <span className="eyebrow">FAQ</span>
              <h2 className="mt-5 text-3xl font-extrabold sm:text-5xl">Questions, answered</h2>
            </div>
            <div className="mt-12 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="card group p-6 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-white">
                    {f.q}
                    <ChevronDown className="h-5 w-5 shrink-0 transition group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Trust seals */}
        <section aria-labelledby="seals-title" className="pb-4">
          <div className="container-x">
            <div className="card relative overflow-hidden p-6 sm:p-10">
              <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-pink-brand/15 blur-3xl" />
              <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-sky-brand/15 blur-3xl" />
              <div className="relative grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <span className="eyebrow">Trusted &amp; verified</span>
                  <h2 id="seals-title" className="mt-4 text-2xl font-extrabold sm:text-4xl">
                    Your payments are in <span className="text-gradient">safe hands</span>
                  </h2>
                  <p className="mt-4 text-slate-400">
                    Every solution we offer runs on secure, compliant infrastructure — with clear policies you can read anytime.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                    <Link href="/policies/privacy-policy" className="text-sky-brand hover:text-white">Privacy Policy</Link>
                    <Link href="/policies/refund-policy" className="text-sky-brand hover:text-white">Refund Policy</Link>
                    <Link href="/policies/kyc-aml-policy" className="text-sky-brand hover:text-white">KYC &amp; AML Policy</Link>
                  </div>
                </div>
                <TrustSeals />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-24">
          <div className="container-x">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 px-6 py-16 text-center sm:px-12 sm:py-20">
              <Image src="/images/analytics.jpg" alt="" fill sizes="100vw" className="object-cover" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-blue-brand/95 via-[#3a3fc8]/90 to-pink-brand/90" />
              <div className="relative">
                <h2 className="text-3xl font-extrabold sm:text-5xl">Ready to start accepting payments?</h2>
                <p className="mx-auto mt-5 max-w-xl text-lg text-white/85">
                  Message us on Telegram and our team will recommend the best solution for your business — usually within minutes.
                </p>
                <a
                  href={site.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-night-950 shadow-xl transition hover:-translate-y-0.5"
                >
                  Message {site.telegramHandle} on Telegram <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
