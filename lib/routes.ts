// Every URL in one place. Change a path here and links across the site follow.
export const routes = {
  home: "/",
  shop: "/shop",
  brands: "/brands",
  services: "/services",
  about: "/about",
  contact: "/contact",
  faq: "/faq",
  careers: "/careers",
  shipping: "/shipping",
  returns: "/returns",
  warranty: "/warranty",
  privacy: "/privacy",
  terms: "/terms",
  wishlist: "/wishlist",
  cart: "/cart",
  checkout: "/checkout",
  login: "/login",
  register: "/register",
  // Logged-in area (profile, orders, addresses). Visitors who are not logged in are sent to login.
  account: "/account",
} as const;

export const shopCategoryHref = (category: string) =>
  `/shop?category=${category.toLowerCase()}`;

export const shopBrandHref = (brand: string) =>
  `/shop?brand=${brand.toLowerCase()}`;

export const productHref = (slug: string) => `${routes.shop}/${slug}`;
