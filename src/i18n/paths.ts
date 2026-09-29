import type { Lang } from './ui';

export type PageKey = 'home' | 'leistungen' | 'impressum' | 'datenschutz';

const slugs: Record<Lang, Record<PageKey, string>> = {
  de: { home: '', leistungen: 'leistungen', impressum: 'impressum', datenschutz: 'datenschutz' },
  en: { home: '', leistungen: 'leistungen', impressum: 'impressum', datenschutz: 'datenschutz' },
  es: { home: '', leistungen: 'leistungen', impressum: 'impressum', datenschutz: 'datenschutz' },
};

export function localizedPath(page: PageKey, lang: Lang): string {
  const legal = page === 'impressum' || page === 'datenschutz';
  const prefix = lang === 'de' || legal ? '' : `/${lang}`;
  const slug = slugs[legal ? 'de' : lang][page];
  const path = `${prefix}/${slug}`.replace(/\/+$/, '') || '/';
  return path === '' ? '/' : path;
}
