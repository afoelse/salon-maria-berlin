import type { Lang } from '../i18n/ui';
import { servicesData } from './services';

export const SITE = 'https://mariafoelsener.com';

/** Structured data for the studio (schema.org BeautySalon), shared by every page. */
export function businessSchema(lang: Lang, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    '@id': `${SITE}/#business`,
    name: 'Maria Augusta Fölsener Kosmetik',
    alternateName: 'Ganzheitskosmetik Maria Augusta Fölsener',
    description,
    url: `${SITE}/`,
    image: [`${SITE}/assets/og-image.jpg`, `${SITE}/assets/maria.jpg`],
    logo: `${SITE}/assets/logo.png`,
    telephone: '+49 176 10106022',
    email: 'kosmetik@mariafoelsener.com',
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Tieckstr. 1b',
      postalCode: '10115',
      addressLocality: 'Berlin',
      addressRegion: 'Berlin',
      addressCountry: 'DE',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 52.52884, longitude: 13.38639 },
    hasMap: 'https://www.google.com/maps?q=Tieckstr.+1b,+10115+Berlin',
    areaServed: { '@type': 'City', name: 'Berlin' },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    knowsLanguage: ['de', 'es', 'en'],
    founder: {
      '@type': 'Person',
      name: 'Maria Augusta Fölsener',
      jobTitle: lang === 'de' ? 'Ganzheitskosmetikerin' : lang === 'es' ? 'Cosmetóloga holística' : 'Holistic beautician',
    },
    sameAs: [
      'https://instagram.com/mariafoelsenerkosmetik',
      'https://facebook.com/mariafoelsenerkosmetik',
      'https://buchung.treatwell.de/ort/salon-maria-augusta-foelsener/',
    ],
  };
}

/** Parse "68 €", "ab 45 €" or "0,50 €" into a number for schema.org prices. */
function priceValue(price: string): number | undefined {
  const match = price.replace(',', '.').match(/\d+(\.\d+)?/);
  return match ? Number(match[0]) : undefined;
}

/** Full price list as an OfferCatalog, so search engines and AI answers can quote it. */
export function offerCatalogSchema(lang: Lang, name: string, pageUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name,
    url: pageUrl,
    provider: { '@id': `${SITE}/#business` },
    itemListElement: servicesData[lang].map((group) => ({
      '@type': 'OfferCatalog',
      name: group.title,
      description: group.subtitle,
      itemListElement: group.rows.map((row) => ({
        '@type': 'Offer',
        priceCurrency: 'EUR',
        // "ab 45 €" / "from" / "desde" are starting prices, not fixed ones.
        ...(/^(ab|from|desde)\s/i.test(row.price)
          ? { priceSpecification: { '@type': 'PriceSpecification', minPrice: priceValue(row.price), priceCurrency: 'EUR' } }
          : { price: priceValue(row.price) }),
        itemOffered: {
          '@type': 'Service',
          name: row.name,
          ...(row.desc || row.dur ? { description: [row.desc, row.dur].filter(Boolean).join(' · ') } : {}),
        },
      })),
    })),
  };
}

/** The two rental rooms as a lease offer, so "Behandlungsraum mieten Berlin" searches can surface it. */
export function rentalSchema(name: string, description: string, pageUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name,
    description,
    url: pageUrl,
    businessFunction: 'http://purl.org/goodrelations/v1#LeaseOut',
    availability: 'https://schema.org/InStock',
    eligibleQuantity: { '@type': 'QuantitativeValue', value: 2 },
    offeredBy: { '@id': `${SITE}/#business` },
    itemOffered: {
      '@type': 'Place',
      name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Tieckstr. 1b',
        postalCode: '10115',
        addressLocality: 'Berlin',
        addressCountry: 'DE',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 52.52884, longitude: 13.38639 },
    },
  };
}
