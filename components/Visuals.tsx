import Image from "next/image";
import { CheckCircle2, TrendingUp, Zap } from "lucide-react";
import { networks } from "@/lib/content";
import { Icon } from "@/components/Icon";

// Hero photo with floating, illustrative payment UI cards.
export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div aria-hidden className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-sky-brand/40 via-blue-brand/20 to-pink-brand/40 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/15 shadow-2xl">
        <Image
          src="/images/in-store-payment.jpg"
          alt="Customer paying with a phone at a shop counter"
          width={1200}
          height={800}
          priority
          sizes="(min-width: 1024px) 45vw, 90vw"
          className="aspect-[4/5] w-full object-cover object-[35%_center] sm:aspect-square"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-night-950/80 via-night-950/10 to-transparent" />
      </div>

      <div className="glass absolute top-6 left-2 flex animate-float items-center gap-3 p-3 pr-5 sm:-left-8">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
          <CheckCircle2 className="h-5 w-5" />
        </span>
        <div>
          <p className="text-[11px] text-slate-400">Payment received · UPI</p>
          <p className="font-display text-lg font-bold text-white">₹24,999.00</p>
        </div>
      </div>

      <div className="glass absolute right-2 bottom-24 w-48 animate-float-slow p-4 sm:-right-8">
        <div className="flex items-center justify-between text-[11px] text-slate-400">
          Success rate <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
        </div>
        <p className="font-display text-2xl font-bold text-white">98.6%</p>
        <div aria-hidden className="mt-2 flex h-10 items-end gap-1">
          {[40, 55, 45, 70, 60, 80, 72, 90, 85, 100].map((h, i) => (
            <span key={i} className="flex-1 rounded-sm bg-gradient-to-t from-blue-brand to-sky-brand" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>

      <div className="glass absolute bottom-6 left-4 flex items-center gap-3 p-3 pr-5 sm:left-8">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-brand/15 text-pink-brand">
          <Zap className="h-5 w-5" />
        </span>
        <div>
          <p className="text-[11px] text-slate-400">Settlement credited</p>
          <p className="text-sm font-semibold text-white">T+1 · to your bank</p>
        </div>
      </div>
    </div>
  );
}

// Logo at the centre with partner-network categories orbiting it.
export function NetworkOrbit() {
  const radius = 40; // % of container
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
      <div aria-hidden className="absolute inset-[10%] animate-spin-slow rounded-full border border-dashed border-sky-brand/30" />
      <div aria-hidden className="absolute inset-[26%] animate-spin-slow-reverse rounded-full border border-dashed border-pink-brand/30" />
      <div aria-hidden className="absolute inset-[30%] rounded-full bg-blue-brand/20 blur-3xl" />
      <svg aria-hidden viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="line" x1="0" x2="1">
            <stop offset="0" stopColor="#1fa8f0" stopOpacity="0.6" />
            <stop offset="1" stopColor="#ff2f9a" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {networks.map((_, i) => {
          const a = (i / networks.length) * 2 * Math.PI - Math.PI / 2;
          return (
            <line key={i} x1="50" y1="50" x2={50 + radius * Math.cos(a)} y2={50 + radius * Math.sin(a)} stroke="url(#line)" strokeWidth="0.3" strokeDasharray="1 1" />
          );
        })}
      </svg>
      <div className="absolute top-1/2 left-1/2 h-[26%] w-[26%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-2 border-white/20 shadow-[0_0_60px_rgba(31,168,240,0.5)]">
        <Image src="/logo.jpg" alt="JIPAY" fill sizes="140px" className="scale-[1.35] object-cover object-[50%_35%]" />
      </div>
      {networks.map((n, i) => {
        const a = (i / networks.length) * 2 * Math.PI - Math.PI / 2;
        return (
          <div
            key={n.label}
            className="absolute flex w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 text-center"
            style={{ left: `${50 + radius * Math.cos(a)}%`, top: `${50 + radius * Math.sin(a)}%` }}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-night-800 text-sky-brand shadow-lg shadow-black/40 sm:h-14 sm:w-14">
              <Icon name={n.icon} className="h-5 w-5 sm:h-6 sm:w-6" />
            </span>
            <span className="text-[10px] leading-tight font-semibold text-white sm:text-xs">{n.label}</span>
          </div>
        );
      })}
    </div>
  );
}
