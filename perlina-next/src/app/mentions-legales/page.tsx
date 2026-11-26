import type { ReactNode } from "react";
import Link from "next/link";
import SectionTitle from "../../components/SectionTitle";
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from "../../lib/contact";
import { LEGAL } from "../../lib/legal";
import { pageMetadata } from "../../lib/site";

export const metadata = pageMetadata("/mentions-legales", { title: "Mentions légales" });

/** Affiche la valeur, ou un emplacement bien visible si l'information manque encore. */
function Field({ value, label }: { value: ReactNode | null; label: string }) {
  if (value) return <>{value}</>;
  return <mark className="legal-todo">[À compléter : {label}]</mark>;
}

export default function MentionsLegales() {
  return (
    <section className="page-head">
      <div className="container legal-page">
        <SectionTitle eyebrow="Informations légales" center>
          Mentions <em>légales</em>
        </SectionTitle>

        <div className="legal-body">
          <h2>Éditeur du site</h2>
          <p>
            Le site www.perlinabyl.fr est édité par <b>{LEGAL.raisonSociale}</b>,{" "}
            <Field value={LEGAL.formeJuridique} label="forme juridique" /> au capital de{" "}
            <Field value={LEGAL.capital} label="capital social" />.
          </p>
          <ul>
            <li>Siège social : <Field value={LEGAL.siege} label="adresse du siège" /></li>
            <li>Immatriculation : <Field value={LEGAL.rcs} label="numéro RCS" /></li>
            <li>SIRET : <Field value={LEGAL.siret} label="numéro SIRET" /></li>
            <li>TVA intracommunautaire : <Field value={LEGAL.tva} label="numéro de TVA" /></li>
            <li>
              Téléphone : <a href={`tel:${CONTACT_PHONE_E164}`}>{CONTACT_PHONE_DISPLAY}</a>
            </li>
            <li>
              E-mail :{" "}
              <Field
                value={LEGAL.email && <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>}
                label="adresse e-mail de contact"
              />
            </li>
          </ul>

          <h2>Directrice de la publication</h2>
          <p>
            <Field value={LEGAL.directricePublication} label="nom et prénom de la directrice de publication" />
          </p>

          <h2>Hébergement</h2>
          <p>
            Le site est hébergé par <b>{LEGAL.hebergeur.nom}</b>, {LEGAL.hebergeur.adresse} —{" "}
            <a href={LEGAL.hebergeur.site} target="_blank" rel="noopener noreferrer">
              vercel.com
            </a>
            .
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus de ce site (textes, photographies, logos, éléments graphiques) est la propriété
            de {LEGAL.raisonSociale} ou fait l&apos;objet d&apos;une autorisation d&apos;utilisation. Toute reproduction,
            même partielle, sans autorisation préalable est interdite. INDIBA® est une marque déposée de son
            propriétaire.
          </p>

          <h2>Données personnelles</h2>
          <p>
            Le formulaire de{" "}
            <Link href="/reservation">demande de rendez-vous</Link> prépare un message que vous envoyez vous-même par
            SMS : aucune donnée n&apos;est enregistrée sur ce site. Les informations que vous nous transmettez servent
            uniquement à organiser votre rendez-vous. Conformément au RGPD, vous pouvez demander l&apos;accès, la
            rectification ou la suppression de vos données en nous contactant au {CONTACT_PHONE_DISPLAY}
            {LEGAL.email ? ` ou à ${LEGAL.email}` : ""}.
          </p>
          <p>
            Le site utilise la mesure d&apos;audience Vercel Analytics, qui fonctionne sans cookie et sans collecter
            de données permettant de vous identifier.
          </p>
        </div>
      </div>
    </section>
  );
}
