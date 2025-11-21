"use client";

import Link from 'next-intl/link';
import {useLocale, useTranslations} from 'next-intl';

export default function NotFound() {
  const t = useTranslations('NotFound');
  const locale = useLocale();

  return (
    <main className="hero">
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <Link className="button" href="/" locale={locale}>
        {t('action')}
      </Link>
    </main>
  );
}
