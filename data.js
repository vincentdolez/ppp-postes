// Contenu commun de la séance 2 : page, fiche de route et deck lisent ce fichier.

export const DILEMMES = [
  ["Comprendre comment ça marche", "Que ça marche"],
  ["Inventer du neuf", "Améliorer ce qui existe"],
  ["Seul et concentré", "En équipe"],
  ["Devant l’écran", "Sur le terrain, avec les gens"],
  ["Un problème précis", "Un problème flou"],
  ["Vite et imparfait", "Lent et parfait"],
  ["Expliquer aux autres", "Qu’on me laisse faire"],
  ["Jouer au jeu", "Créer le jeu"],
];

export const MAILLONS = [
  { id: "comprendre", nom: "Comprendre le besoin" },
  { id: "concevoir", nom: "Concevoir" },
  { id: "construire", nom: "Construire" },
  { id: "verifier", nom: "Vérifier" },
  { id: "exploiter", nom: "Exploiter" },
  { id: "mesurer", nom: "Mesurer" },
  { id: "securiser", nom: "Sécuriser", transverse: true },
];

export const POSTES = [
  {
    id: "PO", nom: "Product owner", maillon: "comprendre",
    mission: "Traduit le besoin des utilisateurs en une liste de fonctionnalités, et décide de l’ordre.",
    journee: "Ateliers avec les utilisateurs, rédaction des récits utilisateur, arbitrage des priorités avec l’équipe, démo en fin de sprint.",
    technos: "Jira, Figma (en lecture), un peu de SQL, tableaux de bord",
    ia: "L’IA rédige les spécifications plus vite. Choisir quoi construire, et pour qui, reste humain : ce rôle prend de la valeur.",
    acces: "Rarement en sortie de BUT : on y arrive après du développement, du support ou du test.",
  },
  {
    id: "UX", nom: "UX designer", maillon: "concevoir",
    mission: "Conçoit les écrans et les parcours pour que l’application soit simple à utiliser.",
    journee: "Entretiens avec des utilisateurs, maquettes, tests d’un prototype avec de vraies personnes, échanges avec les devs.",
    technos: "Figma, HTML/CSS, prototypage",
    ia: "L’IA produit des maquettes en quelques secondes. Observer de vrais utilisateurs et comprendre où ils bloquent reste irremplaçable.",
    acces: "Possible en sortie de BUT avec un portfolio ; souvent complété par une formation en design.",
  },
  {
    id: "DEV", nom: "Développeur·se", maillon: "construire",
    mission: "Écrit et fait évoluer le code de l’application : web, mobile, serveur.",
    journee: "Réunion de 15 minutes le matin, code, relecture du code des collègues, correction de bugs.",
    technos: "Java, Python, JavaScript/TypeScript, SQL, Git",
    ia: "Le maillon le plus transformé : l’IA écrit une grande partie du code. Le dev relit, vérifie, assemble, et doit comprendre le métier du client.",
    acces: "Le débouché naturel du parcours développement, mais les postes juniors se raréfient.",
  },
  {
    id: "QA", nom: "Testeur·se QA", maillon: "verifier",
    mission: "S’assure que l’application fait ce qu’elle doit, avant que les utilisateurs ne tombent sur les bugs.",
    journee: "Scénarios de test, tests automatisés, reproduction des bugs signalés, feu vert ou rouge avant une mise en production.",
    technos: "Playwright, Selenium, Python, outil de suivi de bugs",
    ia: "L’IA génère des tests. Mais plus elle produit de code, plus il faut le vérifier : ce maillon devient plus important.",
    acces: "Accessible en sortie de BUT ; une bonne porte d’entrée vers le développement.",
  },
  {
    id: "OPS", nom: "Admin systèmes / DevOps", maillon: "exploiter",
    mission: "Fait tourner l’application sur les serveurs, la met en production et la garde debout.",
    journee: "Automatisation des déploiements, surveillance des tableaux de bord, astreinte la nuit quand ça tombe.",
    technos: "Linux, réseau, Docker, cloud (AWS, Azure, OVH), scripts",
    ia: "L’IA écrit les scripts. Quand tout tombe à 3 h du matin, la responsabilité reste humaine.",
    acces: "Le débouché naturel du parcours réseau ; accessible en sortie de BUT.",
  },
  {
    id: "SUP", nom: "Technicien·ne support", maillon: "exploiter",
    mission: "Aide les utilisateurs quand ça ne marche pas, et fait remonter les problèmes à l’équipe.",
    journee: "Tickets, appels, diagnostic à distance, documentation, remontée des bugs aux devs.",
    technos: "Outil de tickets, systèmes, réseau, bases de données",
    ia: "Les chatbots absorbent les questions simples. Restent les cas difficiles et la relation avec l’utilisateur.",
    acces: "Porte d’entrée fréquente après un BUT, vers l’admin système, le test ou le produit.",
  },
  {
    id: "DATA", nom: "Data analyst", maillon: "mesurer",
    mission: "Transforme les données d’usage en réponses : qui achète, quand, pourquoi.",
    journee: "Requêtes SQL, nettoyage de données, tableaux de bord, présentation des résultats aux décideurs.",
    technos: "SQL, Python, Power BI ou Metabase",
    ia: "L’IA écrit les requêtes. Poser la bonne question et repérer un résultat absurde reste humain.",
    acces: "Accessible après un BUT orienté données ; souvent poursuivi en licence ou master.",
  },
  {
    id: "CYB", nom: "Analyste cybersécurité (SOC)", maillon: "securiser",
    mission: "Surveille les attaques, enquête sur les alertes, réagit quand un incident survient.",
    journee: "Tri des alertes, lecture de journaux, enquête, rapport d’incident, veille sur les nouvelles attaques.",
    technos: "SIEM, réseau, Linux, Python",
    ia: "Les attaquants utilisent l’IA aussi : le métier est en tension et recrute.",
    acces: "Le débouché du parcours cyber ; accessible en sortie de BUT, en SOC.",
  },
];

// MATRICE[d][c] : points donnés à chaque poste quand on choisit le côté c (0 = gauche, 1 = droite) du dilemme d.
// 2 = lien fort, 1 = lien léger. Chaque poste peut gagner 8 points au maximum : aucun n'est favorisé.
export const MATRICE = [
  [{ CYB: 2, DEV: 1, DATA: 1 },                { SUP: 2, OPS: 1, PO: 1 }],
  [{ UX: 2, PO: 1 },                           { QA: 2, OPS: 1 }],
  [{ DEV: 2, QA: 2, DATA: 1, CYB: 1 },         { PO: 2, UX: 1, OPS: 1, SUP: 1 }],
  [{ DATA: 2, DEV: 1, OPS: 1 },                { SUP: 2, PO: 1, UX: 1 }],
  [{ DEV: 1, QA: 1, OPS: 1, CYB: 1 },          { PO: 2, DATA: 2, UX: 1 }],
  [{ UX: 1, DEV: 1 },                          { QA: 2, CYB: 2, OPS: 1, DATA: 1 }],
  [{ SUP: 2, PO: 1, DATA: 1 },                 { CYB: 2, OPS: 2 }],
  [{ UX: 2, QA: 1, SUP: 1 },                   { DEV: 2 }],
];

// profil : tableau de 8 valeurs 0 ou 1, une par dilemme.
export function orienter(profil) {
  const scores = {};
  for (const poste of POSTES) scores[poste.id] = 0;
  profil.forEach((choix, d) => {
    for (const [id, points] of Object.entries(MATRICE[d][choix])) {
      scores[id] += points;
    }
  });
  return POSTES
    .map((poste) => ({ ...poste, score: scores[poste.id] }))
    .sort((a, b) => b.score - a.score);
}

// Un moment de la billetterie par groupe. postes : la réponse attendue.
export const FESTIVAL = {
  nom: "Un festival de musique, 30 000 festivaliers",
  besoins: ["Billetterie en ligne", "Appli du festival", "Paiement sans espèces sur le site", "Contrôle d’accès à l’entrée", "Données de fréquentation"],
  moments: [
    { n: 1, quand: "Six mois avant", situation: "L’organisateur veut vendre ses billets en ligne, mais ne sait pas bien ce qu’il lui faut.", postes: ["PO", "UX"] },
    { n: 2, quand: "Quatre mois avant", situation: "Les maquettes du parcours d’achat sont validées : il faut que ça existe et que ça marche.", postes: ["DEV", "QA"] },
    { n: 3, quand: "Ouverture des ventes", situation: "50 000 connexions en deux minutes : le site ne répond plus.", postes: ["OPS", "DEV"] },
    { n: 4, quand: "Un mois avant", situation: "Des billets apparaissent en double sur un site de revente.", postes: ["CYB", "DATA"] },
    { n: 5, quand: "Le jour J", situation: "Les scanners de l’entrée ne lisent plus les QR codes, 3 000 personnes attendent.", postes: ["SUP", "OPS"] },
    { n: 6, quand: "Après le festival", situation: "L’organisateur se demande s’il faut une deuxième scène l’an prochain.", postes: ["DATA", "PO"] },
  ],
  phrase: "Quand …, c’est le ou la … qui intervient : il ou elle … . Il lui faut surtout … , parce que … .",
};

// Quiz Menti « Qui intervient quand… ? » : une situation, la bonne réponse, trois autres choix.
export const QUIZ = [
  { situation: "Un utilisateur ne trouve pas le bouton pour payer.", reponse: "UX", autres: ["DEV", "SUP", "QA"] },
  { situation: "3 h du matin : le site est inaccessible.", reponse: "OPS", autres: ["DEV", "SUP", "CYB"] },
  { situation: "Le directeur veut savoir pourquoi les ventes baissent le dimanche.", reponse: "DATA", autres: ["PO", "SUP", "DEV"] },
  { situation: "La nouvelle version casse une fonction qui marchait.", reponse: "QA", autres: ["DEV", "OPS", "SUP"] },
  { situation: "Le client hésite entre deux fonctionnalités : on ne peut en faire qu’une.", reponse: "PO", autres: ["UX", "DEV", "DATA"] },
  { situation: "Une cliente de 80 ans n’arrive pas à se connecter.", reponse: "SUP", autres: ["UX", "OPS", "CYB"] },
  { situation: "L’appli de la banque affiche le solde d’un autre client.", reponse: "CYB", autres: ["DEV", "QA", "OPS"] },
  { situation: "Il faut ajouter le paiement par carte dans l’appli.", reponse: "DEV", autres: ["PO", "UX", "OPS"] },
];

// Ancrage en début de séance : rappel de la séance 1, sans support. bonne = index de la bonne réponse.
export const ANCRAGE = [
  { question: "Dans le plan en 4 cases, « ce qui peut me bloquer » se cherche d’abord…", choix: ["dans le marché du travail", "chez moi", "chez les autres"], bonne: 1 },
  { question: "Les patients de Damasio, privés d’émotions en décidant…", choix: ["décidaient plus vite", "n’arrivaient plus à choisir", "devenaient plus intelligents"], bonne: 1 },
  { question: "Rêver seulement du résultat (le stage, le diplôme)…", choix: ["fait agir davantage", "fait moins agir", "ne change rien"], bonne: 1 },
];

export const SONDAGE_MODELE = { question: "Le modèle a-t-il raison pour vous ?", choix: ["Oui", "En partie", "Non"] };
