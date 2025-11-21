# Next.js + next-intl Multilingual Starter

A full Next.js 14 starter configured with the [`next-intl`](https://next-intl-docs.vercel.app/) package for locale-aware routing, translations, and client helpers. The project includes two locales (English and Spanish) with easily extendable message catalogs.

## Features

- 🌐 **Internationalization first**: Locale-prefixed routes, middleware redirection, and typed locale config.
- ⚡ **App Router ready**: Uses the `app/[locale]` segment with server components and client-side translation hooks.
- 🧭 **Language switcher**: Seamlessly switch between locales without losing your place.
- 🎨 **Modern UI**: Gradient hero, call-to-action buttons, and informational cards styled with global CSS.

## Project Structure

- `app/layout.tsx` – Root layout loading global styles.
- `app/[locale]/layout.tsx` – Locale layout that loads translations and wraps pages with `NextIntlClientProvider`.
- `app/[locale]/page.tsx` – Example landing page content using `useTranslations`.
- `app/[locale]/not-found.tsx` – Localized 404 view.
- `messages/` – JSON translation files for each locale.
- `middleware.ts` & `next.config.mjs` – Locale-aware routing powered by `next-intl` middleware and plugin.

## Getting Started

1. **Install dependencies** (requires Node 18+)

   ```bash
   yarn install
   # or
   npm install
   ```

2. **Run the development server**

   ```bash
   yarn dev
   # or
   npm run dev
   ```

   Visit the printed URL (default: `http://localhost:3000`). You will be redirected to `/en` and can toggle to `/es` using the language switcher.

3. **Build for production**

   ```bash
   yarn build
   # or
   npm run build
   ```

4. **Start the production server**

   ```bash
   yarn start
   # or
   npm start
   ```

## Extending Locales

1. Add a new locale code to `locales` in `i18n.ts`.
2. Create a corresponding JSON file in `messages/` (e.g., `messages/fr.json`).
3. Add translated copy mirroring the existing message structure.
4. Restart the dev server to pick up the new locale.

## License

This starter is provided without a specific license. Review your dependencies' licenses before distributing.
