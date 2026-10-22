// All editable copy for the JIPAY landing page lives here.
import type { IconName } from "@/components/Icon";

export const site = {
  name: "JIPAY",
  tagline: "Payment Gateway Solution",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://jipay.in",
  telegramUrl: process.env.NEXT_PUBLIC_TELEGRAM_URL ?? "https://t.me/jipay",
  telegramHandle: process.env.NEXT_PUBLIC_TELEGRAM_HANDLE ?? "@jipay",
  // Used on the policy pages — set these to your registered business details.
  legalName: process.env.NEXT_PUBLIC_LEGAL_NAME ?? "JIPAY",
  email: process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "support@jipay.in",
  address: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS ?? "India",
  grievanceOfficer: process.env.NEXT_PUBLIC_GRIEVANCE_OFFICER ?? "Grievance Officer, JIPAY",
  description:
    "JIPAY has partners and networks for all types of domestic and international payment gateway solutions — online checkout, UPI, cards, net banking, payouts and cross-border payments. Fast onboarding and 24/7 support on Telegram.",
};

export const stats = [
  { value: "All", label: "Domestic & international gateway solutions" },
  { value: "24–48h", label: "Typical onboarding time" },
  { value: "100+", label: "Payment methods supported" },
  { value: "24/7", label: "Support on Telegram" },
];

// Domestic vs international split shown right after the stats band.
export const markets: { icon: IconName; eyebrow: string; title: string; text: string; image: string; alt: string; points: string[] }[] = [
  {
    icon: "landmark",
    eyebrow: "Domestic",
    title: "Domestic Payment Gateways",
    text: "Accept payments from customers across India with every popular payment mode and quick INR settlements to your bank.",
    image: "/images/mobile-payments.jpg",
    alt: "Person paying with a phone while working on a laptop",
    points: ["UPI intent, collect & dynamic QR", "Debit & credit cards", "Net banking & wallets", "Payment links & INR payouts", "T+0 / T+1 settlements"],
  },
  {
    icon: "globe",
    eyebrow: "International",
    title: "International Payment Gateways",
    text: "Sell to customers worldwide and get paid in multiple currencies through our cross-border partner network.",
    image: "/images/international.jpg",
    alt: "Banknotes in many international currencies",
    points: ["International cards", "Multi-currency acceptance", "Global wallets & local methods", "Cross-border settlements", "Overseas business support"],
  },
];

// Shown around the network visual — categories only, no partner names.
export const networks: { icon: IconName; label: string; text: string }[] = [
  { icon: "network", label: "Payment Aggregators", text: "A wide network of authorised aggregators for every business type." },
  { icon: "landmark", label: "Banking Partners", text: "Banking relationships for collections and settlements." },
  { icon: "qr", label: "UPI Network", text: "UPI intent, collect and dynamic QR across all UPI apps." },
  { icon: "card", label: "Card Networks", text: "Domestic and international debit and credit cards." },
  { icon: "wallet", label: "Wallets & BNPL", text: "Popular wallets, pay-later and EMI options." },
  { icon: "globe", label: "Cross-border", text: "Accept international payments in multiple currencies." },
  { icon: "send", label: "Payout Rails", text: "IMPS, NEFT, RTGS and UPI payouts at scale." },
  { icon: "building", label: "Net Banking", text: "50+ banks for net banking checkout." },
];

export const solutions: { icon: IconName; title: string; text: string; image: string; alt: string }[] = [
  {
    icon: "card",
    title: "Online Checkout",
    text: "High-converting checkout for websites and apps — cards, net banking, wallets and EMI through one integration.",
    image: "/images/online-checkout.jpg",
    alt: "Customer paying online with a card on a laptop",
  },
  {
    icon: "smartphone",
    title: "UPI & QR Payments",
    text: "UPI intent, collect requests, dynamic QR and payment links that work on every phone.",
    image: "/images/mobile-payments.jpg",
    alt: "Person making a mobile payment while working on a laptop",
  },
  {
    icon: "store",
    title: "In-store & Tap to Pay",
    text: "Accept payments at the counter with QR standees, soundboxes and card terminals.",
    image: "/images/in-store-payment.jpg",
    alt: "Customer paying with a phone at a shop counter",
  },
  {
    icon: "globe",
    title: "International Payments",
    text: "Sell globally and get paid in multiple currencies with cross-border solutions.",
    image: "/images/international.jpg",
    alt: "Banknotes in many international currencies",
  },
  {
    icon: "chart",
    title: "Dashboard & Reports",
    text: "Track every transaction, refund and settlement in real time from a clean merchant dashboard.",
    image: "/images/dashboard.jpg",
    alt: "Laptop showing a payments analytics dashboard",
  },
  {
    icon: "send",
    title: "Payouts & Settlements",
    text: "Bulk and API payouts to bank accounts and UPI IDs, with fast T+0 / T+1 settlement options.",
    image: "/images/merchant.jpg",
    alt: "Merchant completing a payment on a tablet at the front desk",
  },
];

export const benefits = [
  "One partner for every type of payment gateway solution",
  "We match you with the best-fit gateway for your business",
  "Competitive pricing through our partner network",
  "Quick KYC and onboarding — often live in 24–48 hours",
  "Backup gateways for higher success rates and less downtime",
  "A dedicated account manager, reachable 24/7 on Telegram",
];

export const industries: { icon: IconName; label: string }[] = [
  { icon: "bag", label: "E-commerce" },
  { icon: "gaming", label: "Gaming" },
  { icon: "graduation", label: "Education" },
  { icon: "app", label: "SaaS & Apps" },
  { icon: "plane", label: "Travel" },
  { icon: "store", label: "Retail" },
  { icon: "briefcase", label: "Services" },
  { icon: "repeat", label: "Subscriptions" },
  { icon: "layers", label: "Marketplaces" },
];

export const trustBadges: { icon: IconName; title: string; text: string }[] = [
  { icon: "shield", title: "PCI DSS Compliant", text: "Card data handled only by PCI DSS certified partners." },
  { icon: "lock", title: "256-bit SSL Secured", text: "Bank-grade encryption on every transaction." },
  { icon: "landmark", title: "RBI-Authorised Partners", text: "We work only with RBI-authorised payment aggregators." },
  { icon: "badge", title: "Verified KYC", text: "Transparent, documented KYC for every merchant." },
  { icon: "zap", title: "Fast Settlements", text: "T+0 / T+1 settlement options available." },
  { icon: "headset", title: "24/7 Support", text: "Real people, always reachable on Telegram." },
];

// Seal-style badges shown in the "safe hands" band and the footer.
export const seals: { icon: IconName; title: string; sub: string }[] = [
  { icon: "shield", title: "100% Secure", sub: "Payments" },
  { icon: "lock", title: "SSL Encrypted", sub: "256-bit" },
  { icon: "landmark", title: "RBI Compliant", sub: "Partners" },
  { icon: "badge", title: "Verified", sub: "Business" },
  { icon: "radar", title: "Fraud", sub: "Monitoring" },
  { icon: "key", title: "Data Privacy", sub: "Protected" },
  { icon: "receipt", title: "Transparent", sub: "Pricing" },
  { icon: "headset", title: "24/7", sub: "Support" },
];

export const paymentMethods: { icon: IconName; label: string }[] = [
  { icon: "qr", label: "UPI" },
  { icon: "card", label: "Debit & Credit Cards" },
  { icon: "building", label: "Net Banking" },
  { icon: "wallet", label: "Wallets" },
  { icon: "repeat", label: "Pay Later & EMI" },
  { icon: "globe", label: "International Cards" },
];

export const navLinks = [
  { href: "/#markets", label: "Domestic & Intl" },
  { href: "/#network", label: "Network" },
  { href: "/#solutions", label: "Solutions" },
  { href: "/#why", label: "Why JIPAY" },
  { href: "/#trust", label: "Security" },
  { href: "/#faq", label: "FAQ" },
];

export const steps = [
  { title: "Message us on Telegram", text: "Tell us about your business, monthly volume and the payment modes you need." },
  { title: "Share your documents", text: "We pick the best-fit solution and handle KYC and onboarding paperwork with you." },
  { title: "Go live & get paid", text: "Receive live API keys or payment links and start accepting payments." },
];

export const faqs = [
  {
    q: "Which payment gateway solutions do you offer?",
    a: "We have partners and networks for all types of domestic and international payment gateway solutions — online checkout, UPI and QR, cards, net banking, wallets, payouts and international payments. We recommend the best fit for your business category and volume.",
  },
  {
    q: "How long does onboarding take?",
    a: "Most merchants are live within 24–48 hours once documents are complete. Some business categories need additional checks and can take a little longer.",
  },
  {
    q: "What documents do I need?",
    a: "Typically PAN, GST (if applicable), business registration proof, a cancelled cheque or bank statement, and a live website or app. We'll share an exact checklist on Telegram.",
  },
  {
    q: "Do you charge any setup fee?",
    a: "Pricing depends on the solution and your business profile. Message us on Telegram for a transparent quote — there are no hidden charges.",
  },
  {
    q: "Is my money and customer data safe?",
    a: "Yes. Payments are processed and settled by RBI-authorised, PCI DSS compliant partners directly into your own bank account.",
  },
];
