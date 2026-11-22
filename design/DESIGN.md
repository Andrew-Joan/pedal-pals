# Pedal Pals: Design Spec

Page mockups are in `/design` (one image per page). This file describes them in text.
If an image and this file disagree, this file wins. If something is missing, ask.

## Decisions that override the mockups

- **Currency:** Indonesian rupiah. Store integer rupiah, display with a `formatRupiah()` helper (e.g. "Rp 6.499.000"). The mockups show USD; ignore the dollar signs.
- **Shipping:** the fee is calculated at checkout from distance (`shippingFeeService`). Ignore the "free shipping" claims in the cart, product page and FAQ.
- **Login:** Google SSO only. Ignore the email/password forms, Apple button, "Remember me" and "Forgot password".
- **Not built:** product reviews and star ratings, "wishlist items stay for 30 days" text, "256-bit SSL" claims.
- **No mockup exists for:** Brands, Checkout, Admin, empty states. Build them in the same style (see "No mockup" below).
- **Content:** use realistic fake data. Store address "123 Cycling Ave, Jakarta, Indonesia", email info@pedalpals.id, phone +62 812 3456 7890.

## Visual language

Mood: gritty, hand-made, zine / torn-paper. Dark sections alternate with cream paper sections.

**Colors.** These are the only colors in the project. The hex values below are approximate; once sampled from the images they live here and in `app/globals.css` and nowhere else. Components use the token names only. Wherever this file says "amber", it means `brand-amber` (Tailwind already has its own `amber` palette, so we don't reuse that name).

| Token (CSS variable) | Hex | Use |
|---|---|---|
| `--color-ink` | `#0F0E0D` | dark sections, text on cream |
| `--color-ink-soft` | `#1A1816` | cards on dark sections |
| `--color-cream` | `#F2EADF` | cream sections, text on dark |
| `--color-paper` | `#F7F1E8` | cards on cream |
| `--color-brand-amber` | `#D9822B` | accents, underlines, "Book Now" |
| `--color-heart` | `#C0452F` | filled wishlist heart only |

**Fonts** (three, no more):
- Display brush font for H1 and hero titles (placeholder: Permanent Marker; swap later in one place)
- Condensed bold sans for section titles, product names, FAQ questions (e.g. Barlow Condensed)
- Clean sans for nav, body, buttons, forms (Inter)

**Texture and decoration** (all decorative, `aria-hidden`):
- Subtle paper grain on cream sections; scratch/ink-splatter grain on dark sections
- `<TornDivider />` torn-paper edge between every dark/cream pair of sections
- Brush underline under section headings and under the active nav item (amber or ink)
- Small hand-drawn doodles (crown, star, arrows, scribbles) as reusable SVGs, used sparingly (1 to 3 per section)

**Buttons:** pill shaped. Variants: solid ink with cream text (on cream), solid cream with ink text (on dark), outline, amber solid (Book Now). Primary calls to action end with an arrow "→".

**Cards:** paper color, 16 to 20px radius, soft shadow, occasionally a tiny doodle in a corner.

**Icons:** Lucide, thin line.

**Motion:** none in the first pass.

## Global layout

**Header (every page):** dark bar. Left: "PEDAL PALS" wordmark in the display font with a small crown doodle; it links to `/` (there is no separate Home item in the nav). Center nav: Shop, Brands, Services, About, Contact (active item gets a brush underline). Right icons: search, wishlist heart (count badge), account, cart (count badge).

**Footer, slim variant (most pages):** one line "© 2026 Pedal Pals. All rights reserved." with Privacy and Terms links (FAQ also shows Help Center).

**Footer, full variant (Home):** dark. Newsletter strip, then columns Shop (Bikes, Components, Accessories, Apparel), About (Our Story, Services, Careers, Contact), Support (FAQ, Shipping, Returns, Warranty), social icons (Instagram, YouTube, TikTok), copyright line.

**Container:** max width about 1200px, generous padding. Build mobile first.

## Pages

### Home `/`
1. **Hero** (dark, full-width photo of a silhouetted mountain biker against a moon): huge brush "PEDAL PALS" with crown doodle, slightly rotated tagline "RIDE MORE. RIDE TOGETHER.", cream pill "Shop Now →". Torn edge to cream.
2. **Featured Categories** (cream): heading with star doodle. Four image cards: Bikes, Groupsets, Wheels, Accessories, each with label and arrow, linking to `/shop?category=...`.
3. **Upgrade Your Ride** (dark, drivetrain close-up photo on the right, text on the left): brush "UPGRADE YOUR RIDE", "Premium gear. Unbeatable performance.", cream button "Explore Gear →".
4. **Our Brands** (cream): row of five brand names: Shimano, SRAM, Specialized, Cannondale, Trek.
5. **Community newsletter** (dark, rider silhouette background): "Join the Pedal Pals community", email field, Subscribe.
6. Full footer.

### Shop `/shop`
- **Hero** (dark, drivetrain photo background, brush bottom edge): brush "SHOP", tagline "Find your perfect ride and gear." with amber underline.
- **Body** (cream), two columns:
  - Left filter card: Category checkboxes (Bikes, Groupsets, Wheels, Components, Accessories, Apparel); Brand checkboxes (All Brands, Shimano, SRAM, Specialized, Cannondale, Trek); Price range slider; outline button "Clear All Filters". On mobile this becomes a drawer.
  - Right: toolbar "6 Products · Showing 1–6 of 6" plus "Sort by: Featured" select (Featured, Price low to high, Price high to low, Newest). Product grid 3 columns (2 on tablet, 1 to 2 on phone). Pagination "1 2 3 … 8 →" (active page is a dark square) and "Showing 6 of 48 products".
- Filter and sort state lives in URL search params; filtering happens on the server.

**ProductCard:** light gray image tile, wishlist heart top right (outline, filled red when saved), name in condensed bold, spec line like "Road • Carbon Frame • SRAM", bold price. Links to `/shop/[slug]`.

### Product detail `/shop/[slug]`
- Dark top section with breadcrumb "Home / Shop / Road Bikes / Product name".
- Left: vertical strip of 4 thumbnails (selected one has a cream rounded border). Center: large main image on a dark textured background.
- Right: cream info panel overlapping the image: small brand mark, name (large, condensed), price, short description, Color (swatch plus name), Size select, Quantity stepper, dark pill "Add to Cart →", outline pill "Add to Wishlist".
- Below, cream panel: row of three trust items (shipping, warranty, easy returns; text editable), then "Description" with heading "Engineered for Speed" and a paragraph, then accordions "Specifications" and "Features", then a highlights row with icons (for example Carbon Frame, Shimano Ultegra, 6.8kg).
- Omit the star rating and "See all reviews".

### Cart `/cart`
- Dark hero with bike photo background: giant brush "YOUR CART", "Check your items before checkout." Brush edge to cream.
- "CART ITEMS (n)" with brush underline. Left: list of torn-edge item cards (thumbnail, name, variant line like "Size: 56cm • Color: Black", price, dark quantity stepper − 1 +). Right: Order Summary card with a taped-corner doodle: Subtotal, Shipping ("Calculated at checkout"), Total, dark button "Checkout →".
- "← Continue Shopping" link with brush underline. Build an empty cart state too.

### Wishlist `/wishlist` (login required)
- Dark textured hero: brush "MY WISHLIST", "Save your favorite gear", "3 ITEMS SAVED" with a heart icon.
- Cream sheet with 3-column cards: image, filled red heart, name, spec line, price, dark pill "Add to Cart", text link "Remove" with trash icon.
- Bottom dark bar: "3 items • Estimated total if all added: ..." with outline "Continue Shopping" and cream "Add All to Cart".

### Account `/account`
- Hero with sunset rider photo: brush "MY ACCOUNT" with amber brush underline, script-style line "Welcome back, rider!"
- One cream card titled "LOGIN" (user icon, amber underline) with a single "Continue with Google" button. Logged-in view of the same route: profile, order history, saved addresses (no mockup; keep simple).

### Contact `/contact`
- Dark paper-texture background: brush "CONTACT US", script line "Let's ride together." with arrows.
- Left column: "Our Store" with pin icon and address, Business Hours (Mon–Sun 09:00–21:00), Get in Touch (email, phone), social icons (Instagram, Facebook, TikTok).
- Right: dark card with cream border, "SEND US A MESSAGE": Name, Email, Message (cream inputs), cream button "Send Message →", note "We typically reply within 24 hours • No spam, just good support".
- Below a torn edge: a cream stylized map band with a pin labeled "PEDAL PALS • JAKARTA STORE" (static image or map embed). Bottom trust row: Secure & Private, Real Support Real People, Fast Response. Slim footer.

### Services `/services`
- Torn-paper top, cream background: brush "OUR SERVICES" in ink, "Keep your bike in top shape."
- Four dark cards, each with an amber circular line icon, title, short description and an amber underline: Bike Repair, Bike Fitting, Maintenance, Custom Build.
- Split section: left, photo of a mechanic in a workshop with a torn edge. Right: brush "BOOK A SERVICE", "Professional service, booked in minutes.", three feature lines with amber icons (Easy online booking, Fast turnaround, Workmanship guarantee), amber brush-style button "BOOK NOW →" (opens a WhatsApp link for now), and a line with the phone number.
- Dark strip at the bottom: 90-Day Warranty, Certified Mechanics, Local Workshop, opening hours.

### About `/about`
- Dark hero with a night photo of the shopfront: brush "ABOUT US" with crown doodle, "More than a bike shop. A community for every cyclist." Torn edge.
- "Our Story" (condensed heading with amber underline): two text columns plus a rounded photo with an amber hand-drawn border (riders at sunset). Write clean copy; the mockup text is garbled.
- Dark stats band, three items with icon, large number and label: 5k+ Happy Customers, 10+ Years Experience, 1 Community.
- Cream call to action: "We host weekly group rides, workshops, and events for all levels..." with button "JOIN THE COMMUNITY RIDE →". Dark slim footer with social handles.

### FAQ `/faq`
- Dark background with a forest riders photo: giant brush "FAQ", "Find answers to common questions."
- Centered cream card (max width about 760px) with an accordion: question in condensed bold, plus/minus in a circle, one open at a time, first open by default. Questions: Do you offer international shipping? What is your return policy? Do you have a physical store? How can I track my order? Write plausible answers (shipping answer follows the shipping decision above). Slim footer with Help Center, Privacy, Terms.

### Order confirmed `/orders/[id]/confirmed`
- Dark top with a mountain photo, torn edge, then cream: ink circle with a brush checkmark, brush "ORDER CONFIRMED!", "Your order has been placed successfully.", brush divider, button "Back to Home →", and the line "A confirmation email has been sent to your inbox • Order #PP-84921".
- Mountain illustration band, then a footer strip "PEDAL PALS • Ride More. Ride Together." with two small cyclist icons. Order numbers use the format `PP-` plus 5 digits.

## No mockup (build in the same style)

- **Checkout `/checkout`:** one page. Address form, map pin with distance-based shipping fee line, payment (Midtrans or Xendit), summary card matching the cart's Order Summary.
- **Brands `/brands`:** reuse the Shop layout with the brand filter applied; brand names link to `/shop?brand=...`.
- **Admin `/admin`:** plain ink and cream palette with shadcn tables and Recharts; no torn edges or doodles.
- **Empty, loading and error states:** a cream card with one doodle and a clear message.

## Shared components (build in this order)

Container, Button, SectionHeading (with brush underline), TornDivider, PaperCard, Doodle set, Header, Footer (slim and full variants), PageHero, ProductCard, QuantityStepper, FormField.

## Responsive and accessibility

- Mobile first. The header collapses to the logo plus icons and a menu button. Two-column layouts stack, grids drop to 1 to 2 columns, hero text scales down.
- Decorative doodles and textures are `aria-hidden`. Keep readable contrast on dark backgrounds, visible amber focus rings, real `<button>` elements.