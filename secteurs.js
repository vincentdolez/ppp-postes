// Contenu de la séance 3 : page, fiche de route et deck lisent ce fichier.

// Le d8 tire un poste : numéro de la face → id du poste, dans l'ordre de la chaîne.
export const D8 = ["PO", "UX", "DEV", "QA", "OPS", "SUP", "DATA", "CYB"];

// La carte des secteurs : montrée après l'exercice « Où travaille un informaticien ? ».
export const SECTEURS = [
  { nom: "Santé", besoins: ["Prise de rendez-vous en ligne", "Dossier patient partagé entre soignants", "Suivi des stocks de médicaments"] },
  { nom: "Banque, assurance", besoins: ["Application mobile de comptes", "Détection des fraudes à la carte", "Virements instantanés"] },
  { nom: "Industrie", besoins: ["Supervision des machines d’une usine", "Logiciel embarqué d’une voiture ou d’un avion", "Maintenance prévue à partir des capteurs"] },
  { nom: "Transport, logistique", besoins: ["Suivi des colis en temps réel", "Tournées de livraison", "Information des voyageurs en gare"] },
  { nom: "Énergie", besoins: ["Compteurs communicants", "Équilibre entre production et consommation d’électricité", "Protection des centrales contre les cyberattaques"] },
  { nom: "Commerce", besoins: ["Site de vente en ligne", "Caisses et stocks des magasins", "Recommandations de produits"] },
  { nom: "Agriculture", besoins: ["Capteurs d’humidité pour piloter l’irrigation", "Traçabilité d’un produit du champ au magasin", "Suivi du troupeau"] },
  { nom: "Mairie, région, État", besoins: ["Inscription à la cantine en ligne", "Réseau et ordinateurs des écoles", "Démarches en ligne accessibles à tous"] },
  { nom: "Éducation", besoins: ["Espace numérique de travail des élèves", "Notes et emplois du temps", "Inscriptions dans le supérieur"] },
  { nom: "Médias, culture", besoins: ["Plateforme de streaming", "Billetterie de spectacles", "Site d’information un soir d’élection"] },
  { nom: "Jeu vidéo", besoins: ["Serveurs de parties en ligne", "Anti-triche", "Équilibrage du jeu à partir des données des joueurs"] },
  { nom: "Sport", besoins: ["Inscriptions et licences d’un club", "Analyse des performances avec des capteurs GPS", "Billetterie et abonnements du stade"] },
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

// Quiz « Qui est mon employeur ? ». Le réflexe : qui signe la fiche de paie ? bonne = index dans choix.
export const QUIZ_EMPLOYEUR = {
  choix: ["ESN", "Éditeur de logiciels", "Service informatique interne", "Freelance"],
  questions: [
    { situation: "Je travaille depuis trois ans dans les locaux de la Société Générale, mais ma fiche de paie vient de Sopra Steria.", bonne: 0, pourquoi: "Le client n’est pas l’employeur : Sopra Steria place ses salariés chez ses clients." },
    { situation: "Je suis développeur chez Doctolib, et je passe une partie de mes journées avec des médecins.", bonne: 1, pourquoi: "Doctolib vend son propre logiciel. Un éditeur vit souvent dans un secteur précis, ici la santé." },
    { situation: "Je suis développeur chez Decathlon, sur l’application que les clients utilisent en magasin.", bonne: 2, pourquoi: "Decathlon vend des articles de sport, pas des logiciels : l’application sert son commerce." },
    { situation: "Je facture mes journées directement à une banque, trouvée sur une plateforme de missions.", bonne: 3, pourquoi: "À son compte : pas de fiche de paie, des factures. Rare en sortie d’études." },
  ],
};

export const SONDAGE_EMPLOYEUR = { question: "Pour votre premier emploi, quel employeur vous attire ?", choix: ["Une ESN", "Un éditeur de logiciels", "Le service informatique d’une entreprise", "Une start-up", "À mon compte (freelance)", "Je ne sais pas encore"] };

// Ancrage en début de séance 3 : rappel de la séance 2, sans support.
export const ANCRAGE_S3 = [
  { question: "Quel maillon traverse toute la chaîne ?", choix: ["Construire", "Sécuriser", "Mesurer"], bonne: 1 },
  { question: "Le jour J, les scanners ne lisent plus les QR codes. Qui intervient en premier ?", choix: ["Le product owner", "Le technicien support", "L’UX designer"], bonne: 1 },
  { question: "8 dilemmes, 2 réponses chacun : combien de profils possibles ?", choix: ["16", "64", "256"], bonne: 2 },
];

export const PHRASE_S3 = {
  modele: ["Dans ", "[secteur]", ", pour ", "[besoin]", ", le ou la ", "[poste]", " doit savoir ", "[ce qu’il faut connaître du secteur]", ", sinon ", "[ce qui casse]", "."],
  exemple: ["Dans ", "un festival", ", pour ", "le contrôle d’accès à l’entrée", ", l’", "admin systèmes", " doit savoir ", "que 30 000 téléphones saturent le réseau mobile", ", sinon ", "les scanners s’arrêtent dès que les portes ouvrent", "."],
};

// Phrases des groupes, mises en ligne pendant la séance. Anonymes : ni nom ni prénom.
// { classe: "A" | "D", secteur, poste: id du poste, texte }
export const PHRASES = [];
