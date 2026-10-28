import Link from "next/link";
import { CurrencyToggle } from "./Currency";
import MobileMenu from "./MobileMenu";

export const navLinks = [
  { href: "/journeys", label: "Journeys" },
  { href: "/services", label: "More Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="SAFIRÉ Voyages home">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/wordmark-sapphire.png" alt="SAFIRÉ" />
      </Link>
      <nav className="site-nav" aria-label="Main">
        {navLinks.map((l) => (
          <Link key={l.href} href={l.href}>
            {l.label}
          </Link>
        ))}
      </nav>
      <CurrencyToggle />
      <MobileMenu />
    </header>
  );
}
