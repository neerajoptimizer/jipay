import Image from "next/image";
import Link from "next/link";
import { navLinks, paymentMethods, site } from "@/lib/content";
import { policies } from "@/lib/policies";
import { Icon } from "@/components/Icon";
import { TelegramButton } from "@/components/TelegramButton";
import { TrustSeals } from "@/components/TrustSeals";

function Logo({ size = 40 }: { size?: number }) {
  return (
    <span className="flex items-center gap-2.5">
      <Image src="/logo.jpg" alt="" width={size} height={size} className="rounded-lg" priority />
      <span className="font-display text-xl font-extrabold text-white">
        JI<span className="text-gradient">PAY</span>
      </span>
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-night-950/70 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="JIPAY home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium lg:flex" aria-label="Main">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>
        <TelegramButton label="Telegram" />
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-night-900/60">
      <div className="container-x py-14">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label="JIPAY home">
              <Logo size={44} />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              Partners and networks for all types of domestic and international payment gateway solutions.
            </p>
            <TelegramButton label={`Message ${site.telegramHandle}`} className="mt-6" />
          </div>
          <nav aria-label="Explore">
            <h2 className="text-sm font-bold tracking-wider text-white uppercase">Explore</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-slate-400 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Policies">
            <h2 className="text-sm font-bold tracking-wider text-white uppercase">Policies</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {policies.map((p) => (
                <li key={p.slug}>
                  <Link href={`/policies/${p.slug}`} className="text-slate-400 hover:text-white">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-white/10 pt-10">
          <TrustSeals compact />
          <ul className="mt-8 flex flex-wrap justify-center gap-2" aria-label="Accepted payment methods">
            {paymentMethods.map((m) => (
              <li key={m.label} className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300">
                <Icon name={m.icon} className="h-3.5 w-3.5 text-sky-brand" /> {m.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 pb-16 text-xs text-slate-500 sm:flex-row sm:pb-0">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p className="text-center sm:text-right">Payments are processed by RBI-authorised, PCI DSS compliant partners.</p>
        </div>
      </div>
    </footer>
  );
}
