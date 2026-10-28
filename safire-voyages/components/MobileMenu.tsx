import Link from "next/link";
import { navLinks } from "./SiteHeader";

// Phone-only menu; a <details> element needs no client JavaScript.
export default function MobileMenu({ light = false }: { light?: boolean }) {
  return (
    <details className={light ? "mnav mnav--light" : "mnav"}>
      <summary aria-label="Menu">Menu</summary>
      <nav aria-label="Mobile">
        <Link href="/">Home</Link>
        {navLinks.map((l) => (
          <Link key={l.href} href={l.href}>
            {l.label}
          </Link>
        ))}
      </nav>
    </details>
  );
}
