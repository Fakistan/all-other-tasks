import Link from "next/link";
import { site, whatsappLink } from "@/content/site";
import { navLinks } from "./SiteHeader";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="site-footer__logo" src="/brand/wordmark-ivory.png" alt="SAFIRÉ" />
          <p className="site-footer__tag">{site.tagline}</p>
        </div>
        <nav aria-label="Footer">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
          <Link href="/policies">Policies</Link>
        </nav>
        <div className="site-footer__contact">
          <a href={whatsappLink("Hello SAFIRÉ")} target="_blank" rel="noopener noreferrer">
            WhatsApp {site.whatsappDisplay}
          </a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer">
            {site.handle}
          </a>
        </div>
      </div>
      <p className="site-footer__legal">
        © {new Date().getFullYear()} {site.name}. {site.licences.join(" · ")}
      </p>
    </footer>
  );
}
