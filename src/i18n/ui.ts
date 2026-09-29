export const languages = {
  de: 'Deutsch',
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'de';

const TREATWELL_URL =
  'https://buchung.treatwell.de/ort/salon-maria-augusta-foelsener/?utm_source=widget&utm_medium=partners&utm_campaign=website_booknow';

export const bookingUrl = TREATWELL_URL;

export const ui = {
  de: {
    meta: {
      homeTitle: 'Maria Augusta Fölsener — Ganzheitskosmetik in Berlin',
      homeDesc:
        'Ganzheitliche Kosmetik in Berlin — individuell abgestimmt auf deine Bedürfnisse. Gesichtsbehandlungen, Massagen mit Ayurveda & Lomi-Lomi, Hand- & Fußpflege.',
      leistungenTitle: 'Leistungen & Preise — Maria Augusta Fölsener Kosmetik',
      leistungenDesc:
        'Alle Behandlungen & Preise: Gesichtsbehandlungen, Massagen (Lomi-Lomi, Ayurveda), Hand- & Fußpflege sowie weitere Anwendungen im Studio in Berlin-Mitte.',
      impressumTitle: 'Impressum — Maria Augusta Fölsener Kosmetik',
      impressumDesc: 'Impressum von Maria Augusta Fölsener Kosmetik, Berlin.',
      datenschutzTitle: 'Datenschutzerklärung — Maria Augusta Fölsener Kosmetik',
      datenschutzDesc: 'Datenschutzerklärung von Maria Augusta Fölsener Kosmetik, Berlin.',
    },
    nav: {
      brand: 'Maria Augusta Fölsener',
      tagline: 'Ganzheitskosmetik · Berlin',
      about: 'Über mich',
      services: 'Leistungen',
      contact: 'Kontakt',
      book: 'Termin buchen',
      menuOpen: 'Menü öffnen',
      menuClose: 'Menü schließen',
      langLabel: 'Sprache',
    },
    hero: {
      eyebrow: 'Ganzheitskosmetik · Berlin',
      title: ['Wellness für', 'Körper und Seele'],
      sub: 'Ganzheitliche Kosmetik – individuell abgestimmt auf deine Bedürfnisse.',
      book: 'Jetzt Termin buchen',
      view: 'Behandlungen ansehen →',
    },
    about: {
      eyebrow: 'Über mich',
      title: 'Ganzheitskosmetik mit Herz',
      text: 'Ich bin Maria und arbeite seit über 10 Jahren als Ganzheitskosmetikerin. Ich sehe und behandle den Körper als Ganzes und kombiniere Techniken wie Ayurveda und Lomi-Lomi. Ursprünglich komme ich aus Ecuador und spreche fließend Deutsch, Spanisch und Englisch. Ich bringe meine Herzlichkeit zur Arbeit und schaffe für jeden Kunden genau die richtige Balance aus Entspannung und Lebendigkeit.',
      stat1: 'Jahre Erfahrung',
      stat2: 'Sprachen',
      stat3: 'Herzlichkeit',
    },
    servicesPreview: {
      eyebrow: 'Leistungen',
      title: 'Meine Behandlungen',
      cards: [
        { title: 'Gesichtsbehandlung', text: 'Individuelle Pflege für deine Haut.' },
        { title: 'Massagen', text: 'Entspannung mit Ayurveda & Lomi-Lomi.' },
        { title: 'Hand- & Fußpflege', text: 'Verwöhnprogramm für deine Hände und Füße.' },
      ],
      all: 'Alle Leistungen & Preise',
      bookTreatwell: 'Auf Treatwell buchen',
    },
    partners: {
      eyebrow: 'Produktpartner',
      title: 'Womit ich arbeite',
      lead: 'Hochwertige Pflege von Marken, denen ich vertraue — für sichtbare und spürbare Ergebnisse.',
    },
    reviews: {
      eyebrow: 'Kundenstimmen',
      title: 'Was Kundinnen sagen',
      badge: 'Treatwell Top Rated 2020',
      items: [
        { quote: 'Maria nimmt sich Zeit und geht auf jeden Wunsch ein. Ich fühle mich rundum wohl.', name: 'Tizia' },
        { quote: 'Die Lomi-Lomi Massage war pure Entspannung. Absolute Wohlfühloase.', name: 'Finja' },
        { quote: 'So herzlich und professionell – meine Haut hat noch nie besser ausgesehen.', name: 'Paula' },
      ],
    },
    gallery: {
      eyebrow: 'Einblicke',
      title: 'Mein Studio',
      alt: {
        schaufenster: 'Studio-Schaufenster in der Tieckstraße',
        behandlung: 'Behandlungsraum mit warmem Licht und Buddha-Figur',
        lounge: 'Wartebereich mit gemütlichen Sesseln',
        flur: 'Eingangsflur zum Behandlungsraum',
        empfang: 'Empfangsbereich mit Pflegeprodukten',
        fusspflege: 'Fußpflege-Platz an der Bambuswand',
        produkte: 'Pflegeprodukte im Studio',
        eingang: 'Eingang des Studios – Tieckstraße 1b',
        wartebereich: 'Gemütlicher Wartebereich mit Tageslicht',
      },
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Ich freue mich auf deinen Besuch!',
      lead: 'Ich biete Termine im Studio sowie Hausbesuche an. Schreib mir oder ruf mich an.',
      directLabel: 'Direkt erreichen',
      mobileLabel: 'Mobil',
      landlineLabel: 'Festnetz',
      emailLabel: 'E-Mail',
      whatsapp: 'Per WhatsApp schreiben',
      hoursLabel: 'Öffnungszeiten',
      days: [
        { day: 'Montag', time: 'Geschlossen' },
        { day: 'Dienstag – Freitag', time: '09:00 – 19:00' },
        { day: 'Samstag', time: 'Auf Anfrage' },
        { day: 'Sonntag', time: 'Geschlossen' },
      ],
      hoursNote: 'Hausbesuche nach Vereinbarung.',
      addressLabel: 'Adresse',
      addressName: 'Maria Augusta Fölsener Kosmetik',
      addressLines: ['Tieckstr. 1b, 10115 Berlin'],
      followLabel: 'Folgen',
      mapConsentText:
        'Aus Datenschutzgründen wird die Karte von Google Maps erst nach deiner Zustimmung geladen. Dabei können Daten an Google übertragen werden.',
      mapConsentBtn: 'Karte laden',
      mapConsentLink: 'oder direkt auf Google Maps öffnen ↗',
      mapTitle: 'Standort auf Google Maps',
    },
    footer: {
      tagline: 'Ganzheitliche Kosmetik in Berlin — Behandlungen mit Herz für Körper und Seele.',
      quickMenu: 'Schnellmenü',
      home: 'Startseite',
      about: 'Über mich',
      services: 'Leistungen & Preise',
      contact: 'Kontakt',
      book: 'Termin buchen',
      contactLabel: 'Kontakt',
      impressum: 'Impressum',
      datenschutz: 'Datenschutz',
      copyright: '© 2026 Maria Augusta Fölsener Kosmetik',
    },
    leistungen: {
      back: '← Zurück zur Startseite',
      title: 'Leistungen & Preise',
      intro:
        'Jede Behandlung beginnt mit einem erholsamen Ritual, das von Kopf bis Fuß in tiefe Entspannung führt. In ruhiger Atmosphäre finden Körper und Geist zurück zur Balance.',
      ctaTitle: 'Bereit für deine Auszeit?',
      ctaText: 'Buche bequem online oder melde dich direkt bei mir. Geschenkgutscheine sind für alle Anwendungen erhältlich.',
      ctaBook: 'Auf Treatwell buchen',
      ctaContact: 'Kontakt aufnehmen',
    },
    impressum: {
      title: 'Impressum',
      sub: 'Angaben gemäß § 5 DDG',
      sections: [
        {
          h: 'Diensteanbieter',
          p: 'Maria Augusta Fölsener<br>Tieckstr. 1b<br>10115 Berlin<br>Deutschland',
        },
        {
          h: 'Kontakt',
          p: 'Telefon: 030 28 24 080<br>Mobil: 0176 10 10 60 22<br>E-Mail: <a href="mailto:kosmetik@mariafoelsener.com">kosmetik@mariafoelsener.com</a>',
        },
        {
          h: 'Umsatzsteuer-Identifikationsnummer',
          p: 'Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br>DE274493311',
        },
        { h: 'Berufsbezeichnung', p: 'Kosmetikerin (Berufsbezeichnung verliehen in: Deutschland)' },
        {
          h: 'Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV',
          p: 'Maria Augusta Fölsener<br>Tieckstr. 1b, 10115 Berlin',
        },
        {
          h: 'Verbraucherstreitbeilegung / Universalschlichtungsstelle',
          p: 'Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
        },
        {
          h: 'Haftung für Inhalte',
          p: 'Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.',
        },
        {
          h: 'Haftung für Links',
          p: 'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.',
        },
        {
          h: 'Urheberrecht',
          p: 'Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung der jeweiligen Autorin bzw. Erstellerin.',
        },
      ],
      note: 'Diese Seite liegt in deutscher Sprache in ihrer rechtsverbindlichen Fassung vor. Die deutsche Version ist maßgeblich.',
    },
    datenschutz: {
      title: 'Datenschutzerklärung',
      sub: 'Information nach Art. 13 DSGVO',
      sections: [
        {
          h: '1. Verantwortliche Stelle',
          p: [
            'Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br>Maria Augusta Fölsener<br>Tieckstr. 1b, 10115 Berlin<br>E-Mail: <a href="mailto:kosmetik@mariafoelsener.com">kosmetik@mariafoelsener.com</a><br>Telefon: 030 28 24 080',
          ],
        },
        {
          h: '2. Ihre Rechte',
          p: ['Sie haben jederzeit das Recht:'],
          ul: [
            'Auskunft über Ihre gespeicherten Daten zu erhalten (Art. 15 DSGVO),',
            'die Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO),',
            'die Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO),',
            'die Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO),',
            'der Verarbeitung zu widersprechen (Art. 21 DSGVO),',
            'Ihre Daten in einem übertragbaren Format zu erhalten (Art. 20 DSGVO).',
          ],
          p2: [
            'Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Zudem haben Sie das Recht, sich bei einer Aufsichtsbehörde zu beschweren. Zuständig ist die Berliner Beauftragte für Datenschutz und Informationsfreiheit, Alt-Moabit 59–61, 10555 Berlin.',
          ],
        },
        {
          h: '3. Hosting und Server-Logfiles',
          p: [
            'Diese Website wird bei einem externen Dienstleister gehostet (Netlify, Inc., 512 2nd Street, Suite 200, San Francisco, CA 94107, USA – <a href="https://www.netlify.com" target="_blank" rel="noopener">netlify.com</a>). Beim Aufruf der Seiten werden durch den Anbieter automatisch Informationen in sogenannten Server-Logfiles erfasst, die Ihr Browser übermittelt: IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, übertragene Datenmenge, Browsertyp und Betriebssystem.',
            'Diese Daten dienen der technischen Bereitstellung und Sicherheit der Website. Rechtsgrundlage ist unser berechtigtes Interesse an einem stabilen und sicheren Betrieb (Art. 6 Abs. 1 lit. f DSGVO). Mit dem Hosting-Anbieter besteht ein Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO. Da Netlify seinen Sitz in den USA hat, kann es zu einer Übermittlung von Daten in ein Drittland kommen; die Übermittlung wird auf Grundlage der EU-Standardvertragsklauseln abgesichert.',
          ],
        },
        {
          h: '4. Schriftarten (Fonts)',
          p: [
            'Diese Website verwendet die Schriftarten „Cormorant Garamond" und „Jost". Diese werden lokal von unserem eigenen Server geladen und <strong>nicht</strong> von externen Servern (z. B. Google Fonts) abgerufen. Beim Laden der Schriften wird daher keine Verbindung zu Servern Dritter hergestellt und Ihre IP-Adresse nicht an Dritte übermittelt.',
          ],
        },
        {
          h: '5. Google Maps (Einbindung nur nach Einwilligung)',
          p: [
            'Auf der Kontaktseite bieten wir eine Karte des Anbieters Google Maps an (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland). Die Karte wird <strong>erst geladen, nachdem Sie aktiv auf „Karte laden" geklickt</strong> und damit eingewilligt haben. Vorher wird keine Verbindung zu Google hergestellt.',
            'Mit dem Klick willigen Sie ein, dass Daten – insbesondere Ihre IP-Adresse – an Google übertragen und ggf. in Drittländer (USA) weitergeleitet werden. Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Weitere Informationen finden Sie in der Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">https://policies.google.com/privacy</a>.',
          ],
        },
        {
          h: '6. Kontaktaufnahme',
          p: [
            'Wenn Sie uns per E-Mail, Telefon oder WhatsApp kontaktieren, verarbeiten wir die von Ihnen übermittelten Daten (z. B. Name, Telefonnummer, Anliegen) zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Anbahnung/Erfüllung eines Vertragsverhältnisses) bzw. Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden gelöscht, sobald sie für die Bearbeitung nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungsfristen entgegenstehen.',
            'Bei einer Kontaktaufnahme über <strong>WhatsApp</strong> (Anbieter: WhatsApp Ireland Limited) gelten zusätzlich die Datenschutzbestimmungen von WhatsApp. Bitte beachten Sie, dass dabei Verbindungsdaten an WhatsApp übertragen werden.',
          ],
        },
        {
          h: '7. Externe Links und Buchung',
          p: [
            'Unsere Website verlinkt auf externe Dienste (z. B. das Buchungsportal Treatwell sowie unsere Profile bei Instagram und Facebook). Erst wenn Sie einen solchen Link anklicken, gelangen Sie zum jeweiligen Anbieter, für dessen Datenverarbeitung dessen eigene Datenschutzbestimmungen gelten. Auf den Umfang der dort erhobenen Daten haben wir keinen Einfluss.',
          ],
        },
        {
          h: '8. Cookies',
          p: ['Diese Website setzt keine Cookies und verwendet keine Analyse- oder Tracking-Dienste.'],
        },
      ],
      note: 'Diese Seite liegt in deutscher Sprache in ihrer rechtsverbindlichen Fassung vor. Die deutsche Version ist maßgeblich.',
      stand: 'Stand: Juni 2026',
    },
  },

  en: {
    meta: {
      homeTitle: 'Maria Augusta Fölsener — Holistic Beauty in Berlin',
      homeDesc:
        'Holistic beauty treatments in Berlin — tailored individually to your needs. Facials, massages with Ayurveda & Lomi Lomi, hand & foot care.',
      leistungenTitle: 'Treatments & Prices — Maria Augusta Fölsener Kosmetik',
      leistungenDesc:
        'All treatments & prices: facials, massages (Lomi Lomi, Ayurveda), hand & foot care and additional treatments at the studio in Berlin-Mitte.',
      impressumTitle: 'Legal Notice — Maria Augusta Fölsener Kosmetik',
      impressumDesc: 'Legal notice (Impressum) for Maria Augusta Fölsener Kosmetik, Berlin.',
      datenschutzTitle: 'Privacy Policy — Maria Augusta Fölsener Kosmetik',
      datenschutzDesc: 'Privacy policy of Maria Augusta Fölsener Kosmetik, Berlin.',
    },
    nav: {
      brand: 'Maria Augusta Fölsener',
      tagline: 'Holistic Beauty · Berlin',
      about: 'About me',
      services: 'Treatments',
      contact: 'Contact',
      book: 'Book appointment',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      langLabel: 'Language',
    },
    hero: {
      eyebrow: 'Holistic Beauty · Berlin',
      title: ['Wellness for', 'body and soul'],
      sub: 'Holistic beauty treatments – tailored individually to your needs.',
      book: 'Book an appointment',
      view: 'View treatments →',
    },
    about: {
      eyebrow: 'About me',
      title: 'Holistic beauty, made with heart',
      text: "I'm Maria, and I've worked as a holistic beauty therapist for over 10 years. I see and treat the body as a whole, combining techniques such as Ayurveda and Lomi Lomi. I originally come from Ecuador and speak fluent German, Spanish and English. I bring warmth to my work and create exactly the right balance of relaxation and vitality for every client.",
      stat1: 'Years of experience',
      stat2: 'Languages',
      stat3: 'Warmth',
    },
    servicesPreview: {
      eyebrow: 'Treatments',
      title: 'My treatments',
      cards: [
        { title: 'Facial treatments', text: 'Individual care for your skin.' },
        { title: 'Massages', text: 'Relaxation with Ayurveda & Lomi Lomi.' },
        { title: 'Hand & foot care', text: 'A pampering programme for your hands and feet.' },
      ],
      all: 'All treatments & prices',
      bookTreatwell: 'Book on Treatwell',
    },
    partners: {
      eyebrow: 'Product partners',
      title: 'What I work with',
      lead: 'High-quality care from brands I trust — for visible and noticeable results.',
    },
    reviews: {
      eyebrow: 'Testimonials',
      title: 'What clients say',
      badge: 'Treatwell Top Rated 2020',
      items: [
        { quote: 'Maria takes her time and responds to every wish. I feel completely at ease.', name: 'Tizia' },
        { quote: 'The Lomi Lomi massage was pure relaxation. An absolute oasis of wellbeing.', name: 'Finja' },
        { quote: "So warm and professional – my skin has never looked better.", name: 'Paula' },
      ],
    },
    gallery: {
      eyebrow: 'A closer look',
      title: 'My studio',
      alt: {
        schaufenster: 'Studio shopfront on Tieckstraße',
        behandlung: 'Treatment room with warm light and a Buddha figure',
        lounge: 'Waiting area with cosy armchairs',
        flur: 'Entrance hallway to the treatment room',
        empfang: 'Reception area with care products',
        fusspflege: 'Foot care station by the bamboo wall',
        produkte: 'Care products at the studio',
        eingang: 'Studio entrance – Tieckstraße 1b',
        wartebereich: 'Cosy waiting area with daylight',
      },
    },
    contact: {
      eyebrow: 'Contact',
      title: "I look forward to your visit!",
      lead: 'I offer appointments at the studio as well as home visits. Message or call me.',
      directLabel: 'Reach me directly',
      mobileLabel: 'Mobile',
      landlineLabel: 'Landline',
      emailLabel: 'Email',
      whatsapp: 'Message on WhatsApp',
      hoursLabel: 'Opening hours',
      days: [
        { day: 'Monday', time: 'Closed' },
        { day: 'Tuesday – Friday', time: '9:00 – 19:00' },
        { day: 'Saturday', time: 'By request' },
        { day: 'Sunday', time: 'Closed' },
      ],
      hoursNote: 'Home visits by arrangement.',
      addressLabel: 'Address',
      addressName: 'Maria Augusta Fölsener Kosmetik',
      addressLines: ['Tieckstr. 1b, 10115 Berlin, Germany'],
      followLabel: 'Follow',
      mapConsentText:
        'For privacy reasons, the Google Maps map is only loaded after your consent. Doing so may transfer data to Google.',
      mapConsentBtn: 'Load map',
      mapConsentLink: 'or open directly in Google Maps ↗',
      mapTitle: 'Location on Google Maps',
    },
    footer: {
      tagline: 'Holistic beauty in Berlin — treatments made with heart, for body and soul.',
      quickMenu: 'Quick menu',
      home: 'Home',
      about: 'About me',
      services: 'Treatments & prices',
      contact: 'Contact',
      book: 'Book appointment',
      contactLabel: 'Contact',
      impressum: 'Legal notice',
      datenschutz: 'Privacy policy',
      copyright: '© 2026 Maria Augusta Fölsener Kosmetik',
    },
    leistungen: {
      back: '← Back to home',
      title: 'Treatments & Prices',
      intro:
        'Every treatment begins with a soothing ritual that guides you into deep relaxation from head to toe. In a calm atmosphere, body and mind find their way back to balance.',
      ctaTitle: 'Ready for your time-out?',
      ctaText: 'Book conveniently online or get in touch with me directly. Gift vouchers are available for all treatments.',
      ctaBook: 'Book on Treatwell',
      ctaContact: 'Get in touch',
    },
    impressum: {
      title: 'Legal Notice',
      sub: 'Information pursuant to § 5 DDG (German Digital Services Act)',
      sections: [
        {
          h: 'Service provider',
          p: 'Maria Augusta Fölsener<br>Tieckstr. 1b<br>10115 Berlin<br>Germany',
        },
        {
          h: 'Contact',
          p: 'Phone: +49 30 28 24 080<br>Mobile: +49 176 10 10 60 22<br>Email: <a href="mailto:kosmetik@mariafoelsener.com">kosmetik@mariafoelsener.com</a>',
        },
        {
          h: 'VAT identification number',
          p: 'VAT ID pursuant to § 27a of the German VAT Act:<br>DE274493311',
        },
        { h: 'Professional title', p: 'Beauty therapist (professional title awarded in: Germany)' },
        {
          h: 'Responsible for content pursuant to § 18 (2) MStV',
          p: 'Maria Augusta Fölsener<br>Tieckstr. 1b, 10115 Berlin',
        },
        {
          h: 'Consumer dispute resolution',
          p: 'We are not willing and not obliged to participate in dispute resolution proceedings before a consumer arbitration board.',
        },
        {
          h: 'Liability for content',
          p: 'As a service provider, we are responsible for our own content on these pages in accordance with general law pursuant to § 7 (1) DDG. However, pursuant to §§ 8 to 10 DDG, we as a service provider are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under general law remain unaffected. However, liability in this regard is only possible from the point in time at which a concrete infringement becomes known. Upon becoming aware of any such infringements, we will remove this content immediately.',
        },
        {
          h: 'Liability for links',
          p: "Our website contains links to external third-party websites over whose content we have no influence. We therefore cannot accept any liability for this external content. The respective provider or operator of the linked pages is always responsible for their content. The linked pages were checked for possible legal violations at the time of linking. No illegal content was identifiable at the time of linking.",
        },
        {
          h: 'Copyright',
          p: 'The content and works created by the site operator on these pages are subject to German copyright law. Reproduction, editing, distribution and any kind of use outside the limits of copyright law require the written consent of the respective author or creator.',
        },
      ],
      note: 'This page is legally binding in its German-language version. The German version takes precedence over this translation.',
    },
    datenschutz: {
      title: 'Privacy Policy',
      sub: 'Information pursuant to Art. 13 GDPR',
      sections: [
        {
          h: '1. Data controller',
          p: [
            'The controller responsible for data processing on this website is:<br>Maria Augusta Fölsener<br>Tieckstr. 1b, 10115 Berlin, Germany<br>Email: <a href="mailto:kosmetik@mariafoelsener.com">kosmetik@mariafoelsener.com</a><br>Phone: +49 30 28 24 080',
          ],
        },
        {
          h: '2. Your rights',
          p: ['You have the right at any time to:'],
          ul: [
            'obtain information about your stored data (Art. 15 GDPR),',
            'request correction of inaccurate data (Art. 16 GDPR),',
            'request deletion of your data (Art. 17 GDPR),',
            'request restriction of processing (Art. 18 GDPR),',
            'object to the processing (Art. 21 GDPR),',
            'receive your data in a portable format (Art. 20 GDPR).',
          ],
          p2: [
            'You may withdraw any consent given at any time with effect for the future. You also have the right to lodge a complaint with a supervisory authority. The competent authority is the Berlin Commissioner for Data Protection and Freedom of Information, Alt-Moabit 59–61, 10555 Berlin.',
          ],
        },
        {
          h: '3. Hosting and server log files',
          p: [
            'This website is hosted by an external provider (Netlify, Inc., 512 2nd Street, Suite 200, San Francisco, CA 94107, USA – <a href="https://www.netlify.com" target="_blank" rel="noopener">netlify.com</a>). When you access the pages, the provider automatically collects information in so-called server log files transmitted by your browser: IP address, date and time of access, page accessed, amount of data transferred, browser type and operating system.',
            'This data is used for the technical provision and security of the website. The legal basis is our legitimate interest in stable and secure operation (Art. 6(1)(f) GDPR). A data processing agreement pursuant to Art. 28 GDPR is in place with the hosting provider. As Netlify is based in the USA, data may be transferred to a third country; this transfer is safeguarded on the basis of the EU Standard Contractual Clauses.',
          ],
        },
        {
          h: '4. Fonts',
          p: [
            'This website uses the typefaces "Cormorant Garamond" and "Jost". These are loaded locally from our own server and <strong>not</strong> from external servers (e.g. Google Fonts). No connection to third-party servers is therefore established when loading the fonts, and your IP address is not transmitted to third parties.',
          ],
        },
        {
          h: '5. Google Maps (embedded only with consent)',
          p: [
            'On the contact page we offer a map from the provider Google Maps (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland). The map is <strong>only loaded after you actively click "Load map"</strong>, thereby giving your consent. No connection to Google is established beforehand.',
            'By clicking, you consent to data – in particular your IP address – being transferred to Google and possibly forwarded to third countries (USA). The legal basis is your consent (Art. 6(1)(a) GDPR). Further information can be found in Google\'s privacy policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">https://policies.google.com/privacy</a>.',
          ],
        },
        {
          h: '6. Getting in touch',
          p: [
            'If you contact us by email, phone or WhatsApp, we process the data you provide (e.g. name, phone number, request) to handle your enquiry. The legal basis is Art. 6(1)(b) GDPR (initiation/performance of a contract) or Art. 6(1)(f) GDPR. The data will be deleted as soon as it is no longer required for processing and no statutory retention periods apply.',
            'If you contact us via <strong>WhatsApp</strong> (provider: WhatsApp Ireland Limited), WhatsApp\'s own privacy terms additionally apply. Please note that connection data is transmitted to WhatsApp in this case.',
          ],
        },
        {
          h: '7. External links and booking',
          p: [
            'Our website links to external services (e.g. the Treatwell booking portal as well as our Instagram and Facebook profiles). Only once you click such a link do you reach the respective provider, whose own privacy policy applies to their data processing. We have no influence over the scope of data collected there.',
          ],
        },
        {
          h: '8. Cookies',
          p: ['This website does not use cookies and does not use any analytics or tracking services.'],
        },
      ],
      note: 'This page is legally binding in its German-language version. The German version takes precedence over this translation.',
      stand: 'Last updated: June 2026',
    },
  },

  es: {
    meta: {
      homeTitle: 'Maria Augusta Fölsener — Cosmética Holística en Berlín',
      homeDesc:
        'Cosmética holística en Berlín, adaptada individualmente a tus necesidades. Tratamientos faciales, masajes con Ayurveda y Lomi Lomi, cuidado de manos y pies.',
      leistungenTitle: 'Tratamientos y Precios — Maria Augusta Fölsener Kosmetik',
      leistungenDesc:
        'Todos los tratamientos y precios: faciales, masajes (Lomi Lomi, Ayurveda), cuidado de manos y pies, y otros tratamientos en el estudio en Berlín-Mitte.',
      impressumTitle: 'Aviso Legal — Maria Augusta Fölsener Kosmetik',
      impressumDesc: 'Aviso legal de Maria Augusta Fölsener Kosmetik, Berlín.',
      datenschutzTitle: 'Política de Privacidad — Maria Augusta Fölsener Kosmetik',
      datenschutzDesc: 'Política de privacidad de Maria Augusta Fölsener Kosmetik, Berlín.',
    },
    nav: {
      brand: 'Maria Augusta Fölsener',
      tagline: 'Cosmética Holística · Berlín',
      about: 'Sobre mí',
      services: 'Tratamientos',
      contact: 'Contacto',
      book: 'Reservar cita',
      menuOpen: 'Abrir menú',
      menuClose: 'Cerrar menú',
      langLabel: 'Idioma',
    },
    hero: {
      eyebrow: 'Cosmética Holística · Berlín',
      title: ['Bienestar para', 'cuerpo y alma'],
      sub: 'Cosmética holística, adaptada individualmente a tus necesidades.',
      book: 'Reservar cita ahora',
      view: 'Ver tratamientos →',
    },
    about: {
      eyebrow: 'Sobre mí',
      title: 'Cosmética holística con corazón',
      text: 'Soy Maria y trabajo desde hace más de 10 años como esteticista holística. Veo y trato el cuerpo como un todo, combinando técnicas como el Ayurveda y el Lomi Lomi. Originaria de Ecuador, hablo con fluidez alemán, español e inglés. Aporto mi calidez a cada sesión y creo para cada clienta el equilibrio perfecto entre relajación y vitalidad.',
      stat1: 'Años de experiencia',
      stat2: 'Idiomas',
      stat3: 'Calidez',
    },
    servicesPreview: {
      eyebrow: 'Tratamientos',
      title: 'Mis tratamientos',
      cards: [
        { title: 'Tratamiento facial', text: 'Cuidado individual para tu piel.' },
        { title: 'Masajes', text: 'Relajación con Ayurveda y Lomi Lomi.' },
        { title: 'Manos y pies', text: 'Un programa de mimos para tus manos y pies.' },
      ],
      all: 'Todos los tratamientos y precios',
      bookTreatwell: 'Reservar en Treatwell',
    },
    partners: {
      eyebrow: 'Marcas asociadas',
      title: 'Con qué trabajo',
      lead: 'Productos de alta calidad de marcas en las que confío, para resultados visibles y perceptibles.',
    },
    reviews: {
      eyebrow: 'Opiniones',
      title: 'Lo que dicen las clientas',
      badge: 'Treatwell Top Rated 2020',
      items: [
        { quote: 'Maria se toma su tiempo y atiende cada deseo. Me siento completamente a gusto.', name: 'Tizia' },
        { quote: 'El masaje Lomi Lomi fue pura relajación. Un auténtico oasis de bienestar.', name: 'Finja' },
        { quote: 'Tan cálida y profesional: mi piel nunca había estado mejor.', name: 'Paula' },
      ],
    },
    gallery: {
      eyebrow: 'Un vistazo',
      title: 'Mi estudio',
      alt: {
        schaufenster: 'Escaparate del estudio en la Tieckstraße',
        behandlung: 'Sala de tratamiento con luz cálida y una figura de Buda',
        lounge: 'Sala de espera con sillones acogedores',
        flur: 'Pasillo de entrada a la sala de tratamiento',
        empfang: 'Zona de recepción con productos de cuidado',
        fusspflege: 'Puesto de podología junto a la pared de bambú',
        produkte: 'Productos de cuidado en el estudio',
        eingang: 'Entrada del estudio – Tieckstraße 1b',
        wartebereich: 'Acogedora sala de espera con luz natural',
      },
    },
    contact: {
      eyebrow: 'Contacto',
      title: '¡Será un placer recibir tu visita!',
      lead: 'Ofrezco citas en el estudio y también visitas a domicilio. Escríbeme o llámame.',
      directLabel: 'Contacto directo',
      mobileLabel: 'Móvil',
      landlineLabel: 'Fijo',
      emailLabel: 'Correo',
      whatsapp: 'Escribir por WhatsApp',
      hoursLabel: 'Horario',
      days: [
        { day: 'Lunes', time: 'Cerrado' },
        { day: 'Martes – Viernes', time: '09:00 – 19:00' },
        { day: 'Sábado', time: 'Bajo petición' },
        { day: 'Domingo', time: 'Cerrado' },
      ],
      hoursNote: 'Visitas a domicilio previa cita.',
      addressLabel: 'Dirección',
      addressName: 'Maria Augusta Fölsener Kosmetik',
      addressLines: ['Tieckstr. 1b, 10115 Berlín, Alemania'],
      followLabel: 'Sígueme',
      mapConsentText:
        'Por motivos de protección de datos, el mapa de Google Maps solo se carga tras tu consentimiento. Al hacerlo, pueden transmitirse datos a Google.',
      mapConsentBtn: 'Cargar mapa',
      mapConsentLink: 'o abrir directamente en Google Maps ↗',
      mapTitle: 'Ubicación en Google Maps',
    },
    footer: {
      tagline: 'Cosmética holística en Berlín — tratamientos hechos con corazón para cuerpo y alma.',
      quickMenu: 'Menú rápido',
      home: 'Inicio',
      about: 'Sobre mí',
      services: 'Tratamientos y precios',
      contact: 'Contacto',
      book: 'Reservar cita',
      contactLabel: 'Contacto',
      impressum: 'Aviso legal',
      datenschutz: 'Privacidad',
      copyright: '© 2026 Maria Augusta Fölsener Kosmetik',
    },
    leistungen: {
      back: '← Volver al inicio',
      title: 'Tratamientos y Precios',
      intro:
        'Cada tratamiento comienza con un ritual reparador que conduce, de la cabeza a los pies, a una profunda relajación. En un ambiente tranquilo, el cuerpo y la mente recuperan el equilibrio.',
      ctaTitle: '¿Lista para tu momento de descanso?',
      ctaText: 'Reserva cómodamente en línea o contáctame directamente. Hay vales de regalo disponibles para todos los tratamientos.',
      ctaBook: 'Reservar en Treatwell',
      ctaContact: 'Ponerse en contacto',
    },
    impressum: {
      title: 'Aviso Legal',
      sub: 'Información conforme al § 5 DDG (ley alemana de servicios digitales)',
      sections: [
        {
          h: 'Prestadora del servicio',
          p: 'Maria Augusta Fölsener<br>Tieckstr. 1b<br>10115 Berlín<br>Alemania',
        },
        {
          h: 'Contacto',
          p: 'Teléfono: +49 30 28 24 080<br>Móvil: +49 176 10 10 60 22<br>Correo: <a href="mailto:kosmetik@mariafoelsener.com">kosmetik@mariafoelsener.com</a>',
        },
        {
          h: 'Número de identificación fiscal (IVA)',
          p: 'Número de IVA conforme al § 27a de la ley alemana del IVA:<br>DE274493311',
        },
        { h: 'Título profesional', p: 'Esteticista (título profesional otorgado en: Alemania)' },
        {
          h: 'Responsable del contenido conforme al § 18 (2) MStV',
          p: 'Maria Augusta Fölsener<br>Tieckstr. 1b, 10115 Berlín',
        },
        {
          h: 'Resolución de litigios de consumo',
          p: 'No estamos dispuestas ni obligadas a participar en procedimientos de resolución de litigios ante una junta de arbitraje de consumo.',
        },
        {
          h: 'Responsabilidad por el contenido',
          p: 'Como prestadoras de servicios, somos responsables de nuestro propio contenido en estas páginas conforme a la legislación general según el § 7 (1) DDG. No obstante, conforme a los §§ 8 a 10 DDG, no estamos obligadas a supervisar la información de terceros transmitida o almacenada ni a investigar circunstancias que indiquen actividades ilegales. Las obligaciones de eliminar o bloquear el uso de información conforme a la legislación general permanecen inalteradas. Sin embargo, la responsabilidad al respecto solo es posible desde el momento en que se tiene conocimiento de una infracción concreta. En cuanto tengamos conocimiento de tales infracciones, eliminaremos este contenido de inmediato.',
        },
        {
          h: 'Responsabilidad por enlaces',
          p: 'Nuestro sitio contiene enlaces a sitios web externos de terceros sobre cuyo contenido no tenemos ninguna influencia. Por ello, no podemos asumir ninguna responsabilidad sobre dicho contenido externo. El respectivo proveedor u operador de las páginas enlazadas es siempre responsable de su contenido. En el momento de enlazarlas, se comprobó que las páginas enlazadas no presentaban infracciones legales. En el momento de establecer el enlace no se identificó ningún contenido ilegal.',
        },
        {
          h: 'Derechos de autor',
          p: 'Los contenidos y obras creados por la operadora del sitio en estas páginas están sujetos a la legislación alemana de derechos de autor. La reproducción, edición, distribución y cualquier tipo de uso fuera de los límites de la ley de derechos de autor requieren el consentimiento por escrito de la autora o creadora correspondiente.',
        },
      ],
      note: 'Esta página es legalmente vinculante en su versión en alemán. La versión alemana prevalece sobre esta traducción.',
    },
    datenschutz: {
      title: 'Política de Privacidad',
      sub: 'Información conforme al Art. 13 RGPD',
      sections: [
        {
          h: '1. Responsable del tratamiento',
          p: [
            'La responsable del tratamiento de datos en este sitio web es:<br>Maria Augusta Fölsener<br>Tieckstr. 1b, 10115 Berlín, Alemania<br>Correo: <a href="mailto:kosmetik@mariafoelsener.com">kosmetik@mariafoelsener.com</a><br>Teléfono: +49 30 28 24 080',
          ],
        },
        {
          h: '2. Tus derechos',
          p: ['Tienes derecho en cualquier momento a:'],
          ul: [
            'obtener información sobre tus datos almacenados (art. 15 RGPD),',
            'solicitar la rectificación de datos incorrectos (art. 16 RGPD),',
            'solicitar la supresión de tus datos (art. 17 RGPD),',
            'solicitar la limitación del tratamiento (art. 18 RGPD),',
            'oponerte al tratamiento (art. 21 RGPD),',
            'recibir tus datos en un formato transferible (art. 20 RGPD).',
          ],
          p2: [
            'Puedes revocar en cualquier momento, con efecto futuro, un consentimiento otorgado. Asimismo, tienes derecho a presentar una reclamación ante una autoridad de control. La autoridad competente es la Comisionada de Berlín para la Protección de Datos y la Libertad de Información, Alt-Moabit 59–61, 10555 Berlín.',
          ],
        },
        {
          h: '3. Alojamiento y archivos de registro del servidor',
          p: [
            'Este sitio web está alojado por un proveedor externo (Netlify, Inc., 512 2nd Street, Suite 200, San Francisco, CA 94107, EE. UU. – <a href="https://www.netlify.com" target="_blank" rel="noopener">netlify.com</a>). Al acceder a las páginas, el proveedor recoge automáticamente información en los llamados archivos de registro del servidor que transmite tu navegador: dirección IP, fecha y hora de acceso, página visitada, cantidad de datos transferidos, tipo de navegador y sistema operativo.',
            'Estos datos se utilizan para la provisión técnica y la seguridad del sitio web. La base jurídica es nuestro interés legítimo en un funcionamiento estable y seguro (art. 6.1.f RGPD). Con el proveedor de alojamiento existe un contrato de encargo de tratamiento conforme al art. 28 RGPD. Dado que Netlify tiene su sede en EE. UU., los datos pueden transferirse a un tercer país; dicha transferencia está garantizada mediante las cláusulas contractuales tipo de la UE.',
          ],
        },
        {
          h: '4. Tipografías (Fonts)',
          p: [
            'Este sitio web utiliza las tipografías «Cormorant Garamond» y «Jost». Estas se cargan localmente desde nuestro propio servidor y <strong>no</strong> desde servidores externos (p. ej., Google Fonts). Por lo tanto, al cargar las tipografías no se establece ninguna conexión con servidores de terceros ni se transmite tu dirección IP a terceros.',
          ],
        },
        {
          h: '5. Google Maps (integración solo con consentimiento)',
          p: [
            'En la página de contacto ofrecemos un mapa del proveedor Google Maps (Google Ireland Limited, Gordon House, Barrow Street, Dublín 4, Irlanda). El mapa <strong>solo se carga después de que hagas clic activamente en «Cargar mapa»</strong>, dando así tu consentimiento. Antes de eso no se establece ninguna conexión con Google.',
            'Al hacer clic, aceptas que se transmitan datos —en particular tu dirección IP— a Google y, en su caso, se transfieran a terceros países (EE. UU.). La base jurídica es tu consentimiento (art. 6.1.a RGPD). Encontrarás más información en la política de privacidad de Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">https://policies.google.com/privacy</a>.',
          ],
        },
        {
          h: '6. Contacto',
          p: [
            'Si nos contactas por correo electrónico, teléfono o WhatsApp, procesamos los datos que nos facilites (p. ej., nombre, número de teléfono, motivo de la consulta) para gestionar tu solicitud. La base jurídica es el art. 6.1.b RGPD (inicio/ejecución de una relación contractual) o el art. 6.1.f RGPD. Los datos se eliminarán en cuanto ya no sean necesarios para su tramitación y no existan plazos legales de conservación que lo impidan.',
            'Si nos contactas a través de <strong>WhatsApp</strong> (proveedor: WhatsApp Ireland Limited), se aplican adicionalmente las condiciones de privacidad de WhatsApp. Ten en cuenta que, en ese caso, se transmiten datos de conexión a WhatsApp.',
          ],
        },
        {
          h: '7. Enlaces externos y reservas',
          p: [
            'Nuestro sitio web enlaza a servicios externos (p. ej., el portal de reservas Treatwell, así como nuestros perfiles de Instagram y Facebook). Solo al hacer clic en dicho enlace accederás al proveedor correspondiente, cuya propia política de privacidad se aplicará al tratamiento de tus datos. No tenemos ninguna influencia sobre el alcance de los datos recopilados allí.',
          ],
        },
        {
          h: '8. Cookies',
          p: ['Este sitio web no utiliza cookies ni servicios de análisis o seguimiento.'],
        },
      ],
      note: 'Esta página es legalmente vinculante en su versión en alemán. La versión alemana prevalece sobre esta traducción.',
      stand: 'Última actualización: junio de 2026',
    },
  },
} as const;

export type UiDict = typeof ui.de;
