import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import type {ReactNode} from 'react';
import {locales} from '../../i18n';
import LanguageSetter from '../../components/LanguageSetter';
import LanguageSwitcher from '../../components/LanguageSwitcher';

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export const dynamicParams = false;

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: ReactNode;
  params: {locale: string};
}) {
  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages} defaultTranslationValues={{appName: 'Next.js'}}>
      <LanguageSetter />
      <div className="container">
        <header className="navbar">
          <div className="logo">NEXT-INTL</div>
          <LanguageSwitcher />
        </header>
        {children}
      </div>
    </NextIntlClientProvider>
  );
}
