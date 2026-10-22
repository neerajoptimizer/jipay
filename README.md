# JIPAY — Payment Gateway Solution landing page

Premium single-page Next.js 16 + Tailwind CSS 4 landing page: Telegram call-to-action buttons, trust badges, partner-network visual, photo solution cards, industries, how-it-works and FAQ.

```bash
cd jipay
npm install
cp .env.example .env.local   # set your Telegram link/handle
npm run dev                  # http://localhost:3000
npm run build && npm start
```

- **Telegram link**: set `NEXT_PUBLIC_TELEGRAM_URL` / `NEXT_PUBLIC_TELEGRAM_HANDLE` (defaults to `https://t.me/jipay`).
- **Copy, network categories, solutions, stats, trust badges, FAQ**: edit `lib/content.ts`.
- **Logo**: `public/logo.jpg`.
- **Photos**: `public/images/` — free-to-use photos from [Unsplash](https://unsplash.com/license). Replace with your own anytime (keep the same file names).
