import Link from "next/link";
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from "../lib/contact";
import { PUBLISHED_SOCIAL_LINKS } from "../lib/social";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="foot-mark" aria-hidden="true">
        Perlina
      </div>
      <div className="foot-grid">
        <div className="foot-brand">
          <div className="script">Perlina</div>
          <div className="foot-sub">By L</div>
          <div className="orn" style={{ marginTop: "1.2rem" }}>
            <span className="pearl sm" />
            <span className="pearl" />
            <span className="pearl sm" />
          </div>
        </div>
        <div className="foot-col">
          <h4>L&apos;institut</h4>
          <p>15 rue Frédéric Mistral</p>
          <p>34280 La Grande-Motte</p>
          <a href={`tel:${CONTACT_PHONE_E164}`}>{CONTACT_PHONE_DISPLAY}</a>
          <p>Uniquement sur rendez-vous</p>
        </div>
        <div className="foot-col">
          <h4>Navigation</h4>
          <nav aria-label="Pied de page">
            <Link href="/">Accueil</Link>
            <Link href="/a-propos">À propos</Link>
            <Link href="/soins">Nos soins</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/reservation">Rendez-vous</Link>
            <Link href="/mentions-legales">Mentions légales</Link>
          </nav>
        </div>
        {PUBLISHED_SOCIAL_LINKS.length > 0 ? (
          <div className="foot-col">
            <h4>Suivez-nous</h4>
            {PUBLISHED_SOCIAL_LINKS.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer">
                {s.name} · {s.handle}
              </a>
            ))}
          </div>
        ) : null}
      </div>
      <div className="foot-legal">
        © {new Date().getFullYear()} Perlina By L — Institut de beauté · Sur rendez-vous
        <br />
        Perlina By L, SAS au capital de 500 € · RCS Montpellier 103 610 143 · TVA FR 52 103 610 143 · Technologie INDIBA® Deep Beauty ·{" "}
        <Link href="/mentions-legales">Mentions légales</Link>
      </div>
    </footer>
  );
}
