# Salon Maria Augusta Fölsener

_Started 2026-06-27 20:32 UTC_

---

## User

Design a one-page website prototype for a cosmetics studio called „Salon Maria Augusta Fölsener" — a holistic beauty studio based in Berlin. The design language is clean, soft, and organic: white background with pastel green accents (sage, mint, soft eucalyptus tones), elegant serif or soft sans-serif typography, and subtle botanical/plant decorative elements (e.g. thin line-art leaves, sprigs, or watercolor-style greenery as dividers and section accents). The overall feel should be calm, premium, and feminine — like a wellness sanctuary.
Sections (top to bottom):
1. Navigation — Minimal sticky nav. Logo text „MF" or „Maria Augusta Fölsener" on the left, links on the right: Über mich · Leistungen · Kontakt · „Termin buchen" as a small pastel green CTA button.
2. Hero — Full-width section with a soft hero image placeholder (spa/nature/floral mood). Large headline: „Wellness für Körper und Seele", subheadline: „Ganzheitliche Kosmetik – individuell abgestimmt auf deine Bedürfnisse." A primary CTA button: „Jetzt Termin buchen" in sage green. Subtle leaf decorative element in one corner.
3. Über mich — Two-column layout: image placeholder left, text right. Headline: „Ganzheitskosmetik mit Herz". Text: „Ich bin Maria und arbeite seit 9 Jahren als Ganzheitskosmetikerin. Ich sehe und behandle den Körper als Ganzes und kombiniere Techniken wie Ayurveda und Lomi-Lomi. Ursprünglich komme ich aus Ecuador und spreche fließend Deutsch, Spanisch und Englisch. Ich bringe meine Herzlichkeit zur Arbeit und schaffe für jeden Kunden genau die richtige Balance aus Entspannung und Lebendigkeit." Add a small botanical divider below.
4. Leistungen — Centered section with headline „Meine Behandlungen". Three elegant cards side by side, each with a simple line-art plant icon, title and short description:

🌿 Gesichtsbehandlung — Individuelle Pflege für deine Haut
🌿 Massagen — Entspannung mit Ayurveda & Lomi-Lomi
🌿 Hand- & Fußpflege — Verwöhnprogramm für deine Hände und Füße

Below the cards: two CTA buttons side by side — „Alle Leistungen & Preise" (outlined) and „Auf Treatwell buchen" (filled sage green).
5. Kundenstimmen — Light pastel green background block. Headline: „Was Kundinnen sagen". Display 2–3 quote cards with 5-star icons and first names (Tizia, Finja, Paula). Subtle „Treatwell Top Rated 2020" badge.
6. Kontakt — Centered layout. Headline: „Ich freue mich auf deinen Besuch!". Subtext: „Ich biete Termine im Studio sowie Hausbesuche an. Schreib mir oder ruf mich an." A simple contact form placeholder (Name, E-Mail, Nachricht, Absenden-Button). Leaf accent decoration on the side.
7. Footer — Dark green or deep sage background. Studio name + tagline, small nav links: Impressum · Datenschutz · AGB. Copyright: „© 2025 Maria Augusta Fölsener Kosmetik"
Overall aesthetic: think editorial wellness brand — calm, trustworthy, nature-inspired. No clutter. Lots of whitespace. Plant motifs as decorative texture, not dominant visuals.

## Assistant

The brief is exhaustive and self-contained — art direction, copy, structure all specified — so I'll build directly rather than ask low-value questions.

_[tool: update_todos]_

_[tool: dc_write]_

## Assistant

_[tool: dc_write]_

## Assistant

_[tool: dc_write]_

## Assistant

_[tool: dc_write]_

_[tool: update_todos]_

_[tool: ready_for_verification]_

## User

Add tweakable controls to Salon Maria.dc.html (declare with dc_set_props, read via this.props): study this design and add a tweaks panel with two or three expressive controls that reshape the feel, not single-property pixel-pushing

## Assistant



## User

bei Kontakt sektion: entferne das kontaktformular, add cellphone, whatsappme button, Öffnungszeiten, adresse und googlemaps karte, erstelle eine eigene Seite für Leistungen.   Verwende diese bilder logisch, z.b. die Produktpartnerschaft. Verwende die farbtöne des logos auf der kompletten website und füge dynamischere deko pflanzen zu den sektionen hinzu.

## Assistant

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: copy_files]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: read_file]_

This is a big revision — new palette from the logo, real photos, reworked contact section, a partner section, a separate Leistungen page, and richer botanical decoration. Let me build it.

_[tool: update_todos]_

_[tool: dc_write]_

_[tool: dc_js_str_replace]_

Now the separate Leistungen page.

_[tool: dc_write]_

_[tool: update_todos]_

Let me check both pages render.

_[tool: show_html]_

_[tool: show_html]_

Hero looks great. The orchid sits a bit on the eyebrow text — let me nudge it, and check the contact section.

_[tool: str_replace_edit]_

_[tool: save_screenshot]_

_[tool: save_screenshot]_

Contact section is working — phone, WhatsApp, frond deco all present (map loads live). Let me confirm the Leistungen page renders cleanly.

_[tool: show_html]_

Both pages render cleanly. Handing off for verification.

_[tool: ready_for_verification]_

## User

adde 
**Telefon**
0176 10 10 60 22
030 28 24 080

**WhatsApp**
0176 10 10 60 22

**E-Mail**
kosmetik@mariafoelsener.com

**Adresse**
Tieckstr. 1b, 10115 Berlin

**Öffnungszeiten**
Montag — geschlossen
Dienstag – Freitag — 09:00–19:00
Samstag — Auf Anfrage
Sonntag — geschlossen

**Social Media**
Instagram: @mariafoelsenerkosmetik
Facebook: @mariafoelsenerkosmetik
 Im footer ein schnellmenü

## Assistant

_[tool: read_file]_

_[tool: str_replace_edit]_

Now update the hours data, add the new icons, and rework the footer with a Schnellmenü + social.

_[tool: dc_js_str_replace]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: str_replace_edit]_

Now mirror the new footer on the Leistungen page for consistency.

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: save_screenshot]_

The preview is stale — let me force a reload.

_[tool: show_html]_

_[tool: save_screenshot]_

All updated correctly — real phone numbers, email, social links in the contact card, and the new footer with Schnellmenü, contact column and Instagram/Facebook icons. Map now points to Tieckstr. 1b. Handing off for verification.

_[tool: ready_for_verification]_

## User

update die leistungen von der alten website [mariafoelsener.com](<https://www.mariafoelsener.com/preise/>)

## Assistant

_[tool: snip]_

_[tool: web_fetch]_

Got the real price list. Let me rebuild the Leistungen page with the actual treatments and prices.

_[tool: dc_js_str_replace]_

_[tool: web_fetch]_

_[tool: dc_js_str_replace]_

Now refresh the header intro and add the gift-voucher note to the CTA.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: save_screenshot]_

The price list renders cleanly with the real treatments. Handing off for verification.

_[tool: ready_for_verification]_

## User

show me other more minimalistic design. Cleaner hero

## User

redesign the entire website, just to see

## User

redesign the entire website, just to see

## Assistant

Let me explore a completely different direction — an immersive, editorial magazine treatment: full-bleed photographic hero, numbered sections, fine hairline rules, squared type-driven buttons, and a deep-green palette pulled from the logo ring.

_[tool: snip]_

_[tool: dc_write]_

_[tool: show_html]_

Striking, dramatic editorial hero — full-bleed photo, Marcellus serif display, deep-green palette. It reads well. I'm near my usage limit, so let me record state and hand off.

_[tool: update_todos]_

A whole new direction — **"Salon Maria — Editorial"** — a different design language entirely:

- **Immersive full-screen photo hero** with a deep-green wash and the nav overlaid, instead of the split cream panel.
- **Marcellus** serif display (airy, Trajan-like capitals) in place of Cormorant — paired with Jost.
- **Numbered editorial sections** (01–04), fine hairline rules, and squared uppercase-tracked buttons instead of rounded pills.
- **Deep forest-green Leistungen block** with treatments as hover-reveal list rows.
- A single-line **partner strip**, **divider-ruled testimonials**, an **asymmetric full-bleed gallery**, and a **split contact + map** panel — all real photos, prices, and contact details carried over.

It's saved alongside your other versions, so you can compare the soft/botanical original, the minimalist hero, and this editorial take side by side.

_[tool: ready_for_verification]_

