import type { Lang } from './ui';

export type PageKey = 'home' | 'leistungen' | 'raummiete' | 'impressum' | 'datenschutz';

const slugs: Record<Lang, Record<PageKey, string>> = {
  de: { home: '', leistungen: 'leistungen', raummiete: 'raummiete', impressum: 'impressum', datenschutz: 'datenschutz' },
  en: { home: '', leistungen: 'leistungen', raummiete: 'raummiete', impressum: 'impressum', datenschutz: 'datenschutz' },
  es: { home: '', leistungen: 'leistungen', raummiete: 'raummiete', impressum: 'impressum', datenschutz: 'datenschutz' },
};

export function localizedPath(page: PageKey, lang: Lang): string {
  const legal = page === 'impressum' || page === 'datenschutz';
  const prefix = lang === 'de' || legal ? '' : `/${lang}`;
  const slug = slugs[legal ? 'de' : lang][page];
  // Always end in a slash: the host serves directory indexes and 301s the bare form.
  return `${prefix}/${slug}/`.replace(/\/+$/, '/');
}
