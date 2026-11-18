# Spec Delta: GPS & PC Service Landing Page (`gps-pc-service`)

## Requirements

### 1. Ukrainian-First Messenger & SEO Metadata
- The site must set `lang="uk"` and export Next.js `Metadata` with Ukrainian `title`, `description`, and `openGraph` fields tailored for Viber/Telegram/WhatsApp link previews.
- The root layout must include a `LocalBusiness` JSON-LD script describing GPS firmware/map updates and Windows/Linux installation services.

#### Scenario: Sharing the website link in Viber or Telegram
- **GIVEN** a truck driver shares the site URL in a Viber or Telegram chat
- **WHEN** the messenger fetches page metadata
- **THEN** it reads an `og:title` and `og:description` in Ukrainian clearly stating GPS navigator firmware/maps (Garmin, iGO) for trucks/cars and Windows/Linux installation.

### 2. Clear Dual-Service Presentation (GPS Navigators & PC Setup)
- The page must present two distinct service areas:
  1. **GPS Navigators**: Changing English/foreign interfaces to Ukrainian voice & menus, installing updated truck/car maps, configuring truck parameters (weight, height, ADR), and supporting Garmin, iGO, WinCE, and Android devices.
  2. **Windows & Linux Setup**: Complete "під ключ" operating system installation, hardware drivers, and everyday software suite explained in plain language for non-tech-savvy users.

#### Scenario: Truck driver checking if their English Garmin navigator can be updated
- **GIVEN** a visitor lands on the page with an English-only GPS navigator
- **WHEN** they view the GPS Services and FAQ sections
- **THEN** they see supported device types, Ukrainian language/voice installation details, and truck map capabilities.

### 3. In-Person Workflow & Frictionless Contact CTAs
- The page must explain the 4-step in-person process (Contact -> Bring device in spare time -> Setup & verification -> Pick up ready device).
- Primary contact links (`tel:`, `viber://`, `https://t.me/`, `https://wa.me/`) must be accessible in the Hero section, Contact footer, and a mobile sticky bar with tap targets >= 48x48px.

#### Scenario: Visitor tapping a contact button on mobile
- **GIVEN** a visitor views the site on a smartphone
- **WHEN** they tap Phone, Viber, Telegram, or WhatsApp
- **THEN** the link triggers the corresponding native dialer or messenger app URI.
