/**
 * Informations légales (page /mentions-legales).
 * `null` = information à fournir : la page affiche un emplacement « À compléter ».
 */
export const LEGAL = {
  raisonSociale: "Perlina By L",
  formeJuridique: "SAS", // déjà indiqué dans le pied de page — à confirmer
  capital: "500 €", // déjà indiqué dans le pied de page — à confirmer
  rcs: "RCS Montpellier 103 610 143",
  siret: null as string | null,
  tva: "FR 52 103 610 143",
  siege: "15 rue Frédéric Mistral, 34280 La Grande-Motte", // siège = adresse de l'institut ? à confirmer
  directricePublication: null as string | null,
  email: null as string | null,
  hebergeur: {
    nom: "Vercel Inc.",
    adresse: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
    site: "https://vercel.com",
  },
};
