/** Réseaux sociaux de l'institut. `url: null` = pas encore renseigné (le lien n'est pas affiché). */
export type SocialLink = { name: string; handle: string; url: string | null };

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "Instagram", handle: "perlinabyl", url: "https://www.instagram.com/perlinabyl/" },
  // TODO : adresse exacte de la page Facebook « Perlina by L » à confirmer.
  { name: "Facebook", handle: "Perlina by L", url: null },
];

/** Liens effectivement publiés (URL connue). */
export const PUBLISHED_SOCIAL_LINKS = SOCIAL_LINKS.filter(
  (s): s is SocialLink & { url: string } => Boolean(s.url)
);
