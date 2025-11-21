"use client";

import {useTranslations} from 'next-intl';

export default function HomePage() {
  const t = useTranslations('Home');

  return (
    <main>
      <section className="hero">
        <p className="notice">{t('notice')}</p>
        <h1>{t('title')}</h1>
        <p>{t('subtitle')}</p>
        <div className="cta-row">
          <button className="button" type="button">
            {t('primaryCta')}
          </button>
          <span>{t('secondaryCta')}</span>
        </div>
      </section>

      <section className="card-grid">
        <article className="card">
          <h3>{t('cards.localization.title')}</h3>
          <p>{t('cards.localization.body')}</p>
        </article>
        <article className="card">
          <h3>{t('cards.routing.title')}</h3>
          <p>{t('cards.routing.body')}</p>
        </article>
        <article className="card">
          <h3>{t('cards.translation.title')}</h3>
          <p>{t('cards.translation.body')}</p>
        </article>
      </section>

      <div className="footer">
        <span>{t('footer')}</span>
        <a href="https://next-intl-docs.vercel.app/" target="_blank" rel="noreferrer">
          {t('docsLink')}
        </a>
      </div>
    </main>
  );
}
