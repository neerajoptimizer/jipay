import {
  AppWindow,
  BadgeCheck,
  Briefcase,
  Building2,
  ChartNoAxesCombined,
  CreditCard,
  Gamepad2,
  Globe,
  GraduationCap,
  Headset,
  Landmark,
  Layers,
  Lock,
  Network,
  Plane,
  QrCode,
  Repeat,
  Send,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Store,
  Wallet,
  Zap,
  type LucideProps,
} from "lucide-react";

const icons = {
  shield: ShieldCheck,
  lock: Lock,
  landmark: Landmark,
  badge: BadgeCheck,
  zap: Zap,
  headset: Headset,
  layers: Layers,
  qr: QrCode,
  card: CreditCard,
  send: Send,
  chart: ChartNoAxesCombined,
  network: Network,
  wallet: Wallet,
  globe: Globe,
  building: Building2,
  smartphone: Smartphone,
  store: Store,
  bag: ShoppingBag,
  graduation: GraduationCap,
  app: AppWindow,
  plane: Plane,
  briefcase: Briefcase,
  repeat: Repeat,
  gaming: Gamepad2,
};

export type IconName = keyof typeof icons;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Component = icons[name];
  return <Component aria-hidden {...props} />;
}

export function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
    </svg>
  );
}
