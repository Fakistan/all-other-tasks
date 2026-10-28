import Needle from "./Needle";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export default function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main className="page">
        <header className="page__head wrap">
          <p className="eyebrow eyebrow--dark">
            <Needle /> {eyebrow}
          </p>
          <h1 className="display display--xl">{title}</h1>
          {intro && <p className="lede">{intro}</p>}
        </header>
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
