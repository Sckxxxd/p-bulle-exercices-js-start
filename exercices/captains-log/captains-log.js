// @ts-check

/**
 * Génère un numéro d'immatriculation de vaisseau aléatoire.
 *
 * @returns {string} Le numéro d'immatriculation généré.
 */
export function randomShipRegistryNumber() {
  const min = 1000;
  const max = 9999;
  const number = Math.floor(Math.random() * (max - min + 1)) + min;
  return `NCC-${number}`;
}

/**
 * Génère une stardate aléatoire.
 *
 * @returns {number} Une stardate entre 41000 (inclus) et 42000 (exclus).
 */
export function randomStardate() {
  const min = 41000;
  const max = 42000;
  return min + Math.random() * (max - min);
}

/**
 * Génère une classe de planète aléatoire.
 *
 * @returns {string} Une classe de planète (une lettre).
 */
export function randomPlanetClass() {
  const classes = ['D', 'H', 'J', 'K', 'L', 'M', 'N', 'R', 'T', 'Y'];
  const index = Math.floor(Math.random() * classes.length);
  return classes[index];
}
