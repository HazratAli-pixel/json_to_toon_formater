'use client';

import {useLocale, usePathname, useRouter} from 'next-intl/client';
import {locales} from '../i18n';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const activeLocale = useLocale();

  const onSelect = (locale: (typeof locales)[number]) => {
    router.replace(pathname, {locale});
  };

  return (
    <div className="lang-switcher" role="group" aria-label="Language selector">
      {locales.map((locale) => (
        <button
          key={locale}
          className={activeLocale === locale ? 'active' : ''}
          onClick={() => onSelect(locale)}
          type="button"
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
