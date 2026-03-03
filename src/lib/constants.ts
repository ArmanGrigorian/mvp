export interface NavLink {
  href: string;
  label: string;
}

export const NAVBAR_LINKS: NavLink[] = [
  {
    href: "/",
    label: "home",
  },
  {
    href: "/about-the-foundation",
    label: "about_the_foundation",
  },
  {
    href: "/projects",
    label: "projects",
  },
  {
    href: "/news",
    label: "news",
  },
  {
    href: "/contact-us",
    label: "contact_us",
  },
];
