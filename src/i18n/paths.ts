import type { Lang } from './ui';

export type PageKey = 'home' | 'leistungen' | 'impressum' | 'datenschutz';

const slugs: Record<Lang, Record<PageKey, string>> = {
  de: { home: '', leistungen: 'leistungen', impressum: 'impressum', datenschutz: 'datenschutz' },
  en: { home: '', leistungen: 'leistungen', impressum: 'impressum', datenschutz: 'datenschutz' },
  es: { home: '', leistungen: 'leistungen', impressum: 'impressum', datenschutz: 'datenschutz' },
};

export function localizedPath(page: PageKey, lang: Lang): string {
  const prefix = lang === 'de' ? '' : `/${lang}`;
  const slug = slugs[lang][page];
  const path = `${prefix}/${slug}`.replace(/\/+$/, '') || '/';
  return path === '' ? '/' : path;
}
