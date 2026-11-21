// Contenu de la séance 3 : page, fiche de route et deck lisent ce fichier.

// Le d8 tire un poste : numéro de la face → id du poste, dans l'ordre de la chaîne.
export const D8 = ["PO", "UX", "DEV", "QA", "OPS", "SUP", "DATA", "CYB"];

// Secteurs de secours, si le devoir n'a pas été fait.
export const SECTEURS = [
  { nom: "Santé", besoins: ["Prise de rendez-vous en ligne", "Dossier patient partagé entre soignants", "Suivi des stocks de médicaments"] },
  { nom: "Sport", besoins: ["Inscriptions et licences d’un club", "Analyse des performances avec des capteurs GPS", "Billetterie et abonnements du stade"] },
  { nom: "Agriculture", besoins: ["Capteurs d’humidité pour piloter l’irrigation", "Traçabilité d’un produit du champ au magasin", "Suivi du troupeau"] },
  { nom: "Banque", besoins: ["Application mobile de comptes", "Détection des fraudes à la carte", "Virements instantanés"] },
  { nom: "Jeu vidéo", besoins: ["Serveurs de parties en ligne", "Anti-triche", "Équilibrage du jeu à partir des données des joueurs"] },
  { nom: "Mairie", besoins: ["Inscription à la cantine en ligne", "Réseau et ordinateurs des écoles", "Démarches en ligne accessibles à tous"] },
];

// Un même poste, trois secteurs : ce qu'il faut savoir du secteur.
export const MEME_POSTE = {
  poste: "DEV",
  cas: [
    { secteur: "Santé", savoir: "Une donnée de santé ne s’héberge pas n’importe où : il faut un hébergeur certifié pour les données de santé (HDS)." },
    { secteur: "Banque", savoir: "Un virement ne doit jamais être perdu ni passé deux fois, même si le serveur tombe au milieu." },
    { secteur: "Jeu vidéo", savoir: "Quelques dizaines de millisecondes de retard, et le joueur a l’impression que le jeu triche." },
  ],
};

export const EMPLOYEURS = [
  { nom: "ESN", long: "Entreprise de services du numérique", quoi: "Vend des projets et des informaticiens à des clients de tous les secteurs.", exemples: "Capgemini, Sopra Steria, et de nombreuses ESN régionales", pour: "On change souvent de client et de secteur : on voit beaucoup de choses." },
  { nom: "Éditeur", long: "Éditeur de logiciels", quoi: "Vend son propre logiciel, souvent à un secteur précis.", exemples: "Doctolib (santé), Cegid (comptabilité), Ubisoft (jeu vidéo)", pour: "On connaît un produit et un secteur à fond." },
  { nom: "Service interne", long: "Service informatique d’une entreprise (DSI)", quoi: "Travaille pour sa propre entreprise, dont l’informatique n’est pas le métier.", exemples: "Une banque, un hôpital, une mairie, Decathlon", pour: "On est au plus près des utilisateurs, mais l’informatique n’est pas le cœur de la maison." },
];

// Quiz « Qui est mon employeur ? ». bonne = index dans EMPLOYEURS.
export const QUIZ_EMPLOYEUR = [
  { situation: "Je suis salarié de Capgemini, en mission six mois chez Airbus.", bonne: 0 },
  { situation: "Je développe le logiciel de caisse que mon entreprise vend à 2 000 boulangeries.", bonne: 1 },
  { situation: "Je gère le réseau de l’hôpital où je suis salarié.", bonne: 2 },
];

export const SONDAGE_EMPLOYEUR = { question: "Pour votre premier emploi, quel employeur vous attire ?", choix: ["Une ESN", "Un éditeur de logiciels", "Le service informatique d’une entreprise", "Une start-up", "Je ne sais pas encore"] };

// Ancrage en début de séance 3 : rappel de la séance 2, sans support.
export const ANCRAGE_S3 = [
  { question: "Quel maillon traverse toute la chaîne ?", choix: ["Construire", "Sécuriser", "Mesurer"], bonne: 1 },
  { question: "Le jour J, les scanners ne lisent plus les QR codes. Qui intervient en premier ?", choix: ["Le product owner", "Le technicien support", "L’UX designer"], bonne: 1 },
  { question: "8 dilemmes, 2 réponses chacun : combien de profils possibles ?", choix: ["16", "64", "256"], bonne: 2 },
];

export const PHRASE_S3 = {
  modele: ["Dans ", "[secteur]", ", pour ", "[besoin]", ", le ou la ", "[poste]", " doit savoir ", "[ce qu’il faut connaître du secteur]", ", sinon ", "[ce qui casse]", "."],
  exemple: ["Dans ", "un festival", ", pour ", "le contrôle d’accès à l’entrée", ", l’", "admin systèmes", " doit savoir ", "qu’un champ avec 30 000 téléphones sature le réseau mobile", ", sinon ", "les scanners s’arrêtent dès que les portes ouvrent", "."],
};

// Phrases des groupes, mises en ligne pendant la séance. Anonymes : ni nom ni prénom.
// { classe: "A" | "D", secteur, poste: id du poste, texte }
export const PHRASES = [];
