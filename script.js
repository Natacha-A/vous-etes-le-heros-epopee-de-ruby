let lanceTrouver = false; //Booléen pour changer l'état de la lance: condition requis pour réussir le rituel et pour gagner le combat final
let rituelReussi = false; //Faux par défault
let gunthraVivante = true; //Etat que gunthra est vivante au début de l'histoire

//Faire la condition pour vérifier si la lance a été trouvé ou non. Si l'état de la variable a changé tu récupère le localStorage, si non tu laisse la valeur par défault de la variable par défault.
//Récupérer la valeur sauvegardée dans le localStorage des variables d'états.
//Si ce qui est sauvegardé équivaut è la string "true" alors la valeur sera un boolean true, sinon un boolean false
if (localStorage.getItem("lanceTrouver") != undefined) {
  lanceTrouver = localStorage.getItem("lanceTrouver") == "true"; //Me retourne la valeur récupérer dans le localStorage
}

if (localStorage.getItem("gunthraVivante") != undefined) {
  gunthraVivante = localStorage.getItem("gunthraVivante") == "true"; //Me retourne la valeur récupérer dans le localStorage
}

if (localStorage.getItem("rituelReussi") != undefined) {
  rituelReussi = localStorage.getItem("rituelReussi") == "true"; //Me retourne la valeur récupérer dans le localStorage
}

let tempsRestant = 0;
//Cette fonction va servir à gerer l'état du temps restant
function compteurTemps(nombreJour, prochainChapitre) {
  //Stocker et ajouter le temps avec la valeur dans le paramètre nombreJour
  tempsRestant += nombreJour;
  //Appeller la fonction goToChapter pour afficher le prochain chapitre et mettre comme paramètre le prochain chapitre
  goToChapter(prochainChapitre);

  //Sauvegarder la valeur du temps restant dans le localStorage
  localStorage.setItem("tempsRestant", tempsRestant);
}

//Fonction qui détermine si le joueur est arrivé à temps ou non: Ça fonctionne, mais ce n'est pas parfait
//Reste à cacher les boutons input du chapitre rencontre gunthrà et de changer l'état de la variable lanceTrouver à true
function arriverTemps() {
  //Cacher les boutons quand cette fonction est appellé: pour le moment laisser les boutons dans rencontre_gunthra
  let choix = document.querySelector(".choix");

  if (tempsRestant < 7) {
    //Appeler la fonction etatTrouveLance() pour changer la valeur de la variable lanceTrouver à true
    //Changer la valeur de lanceTrouver à true avec un égale
    lanceTrouver = true;
    //Sauvegarder le nouveau état pour la variable lanceTrouver seulement
    localStorage.setItem("lanceTrouver", lanceTrouver);
    
    //Gunthrà est vivante: état par défault
    gunthraVivante = true;
    //Sauvegarder le nouveau état pour la variable gunthraVivante seulement
    localStorage.setItem("gunthraVivante", gunthraVivante);

    goToChapter(`gunthra_vivante`);

  } else if (tempsRestant === 7) {
    //Fjorm a la lance:
    //Changer la valeur de lanceTrouver à true avec un égale
    lanceTrouver = true;
    //Sauvegarder le nouveau état pour la variable lanceTrouver seulement
    localStorage.setItem("lanceTrouver", lanceTrouver);
    
    //Gunthra est morte: changer la valeur de la variable gunthraVivante à false
    gunthraVivante = false;
    //Sauvegarder le nouveau état pour la variable gunthraVivante seulement
    localStorage.setItem("gunthraVivante", gunthraVivante);

    goToChapter(`gunthra_lance`);

  } else if (tempsRestant > 7) {
    //Fjorm n'a pas la lance: état par défault
    lanceTrouver = false;
    //Sauvegarder le nouveau état pour la variable lanceTrouver seulement
    localStorage.setItem("lanceTrouver", lanceTrouver);

    //Gunthra est morte: changer la valeur de la variable gunthraVivante à false
    gunthraVivante = false;
    //Sauvegarder le nouveau état pour la variable gunthraVivante seulement
    localStorage.setItem("gunthraVivante", gunthraVivante);

    goToChapter(`gunthra_morte`);
  }
}
//Réinitialiser la valeur du temps restant et changer la valeur de gunthraVivante à true quand le joueur clique sur l'option retourner dans le temps dans le chapitre gunthrà morte
function resetTempsRestant() {
  tempsRestant = 0;
  lanceTrouver = false;
  gunthraVivante = true;
  rituelReussi = false;
  
  //Sauvegarder la nouvelle valeur de chaque variable.
  localStorage.clear();

  goToChapter(`le_reveil`);
}

//Fonction pour vérifier si le joueur a trouvé la lance et gunthrà est vivante: Les conditions sont séparé pour afficher les 3 boutons
function trouveLanceOui() {
  //Sauvegarder la valeur de la lanceTrouver et de gunthraVivante du localStorage.
  //lanceTrouver = true;
  //gunthraVivante = true;
  //lanceTrouver = localStorage.setItem("lanceTrouver", lanceTrouver);
  //gunthraVivante = localStorage.setItem("gunthraVivante", gunthraVivante);

  if (lanceTrouver == true && gunthraVivante == true) {
    rituelReussi = true;
    goToChapter(`rituel_reussi`);

    //Sauvegarder la valeur du rituelReussi dans le localStorage
    localStorage.setItem("rituelReussi", rituelReussi);
  }
}
//Fonction ou Fjorm reçoit la lance, mais évite de faire le rituel, car sa soeur est morte
function eviterRituel() {
  //Récuperer la valeur de la lanceTrouver et de gunthraVivante du localStorage.
  //lanceTrouver = localStorage.getItem("lanceTrouver");
  //gunthraVivante = localStorage.getItem("gunthraVivante");

  if (lanceTrouver == true && gunthraVivante == false) {
    rituelReussi = false;
    goToChapter(`rituel_evite`);

    //Sauvegarder la valeur du rituelReussi dans le localStorage
    localStorage.setItem("rituelReussi", rituelReussi);
  }
}
//Fonction pour vérifier si le joueur n'a pas trouvé la lance et que gunthrà est morte
function trouveLanceNon() {
  //Récuperer la valeur de la lanceTrouver et de gunthraVivante du localStorage.
  //lanceTrouver = localStorage.getItem("lanceTrouver");
  //gunthraVivante = localStorage.getItem("gunthraVivante");

  if (lanceTrouver == false && gunthraVivante == false) {
    rituelReussi = false;
    goToChapter(`rituel_echoue`);

    //Sauvegarder la valeur du rituelReussi dans le localStorage
    localStorage.setItem("rituelReussi", rituelReussi);
  }
}
//Faire 3 fonctions pour chaque fin: bonne, mauvaise et neutre
function goToBonneFin() {
  //Doit avoir la lance, réussi le rituel et gunthrà doit être vivante pour avoir la bonne fin
  if (lanceTrouver == true && rituelReussi == true && gunthraVivante == true) {
    goToChapter(`bonne_fin`);
  }
}
function goToFinNeutre() {
  //Doit avoir la lance, mais n'a pas fait le rituel et gunthrà est morte
  if (
    lanceTrouver == true &&
    rituelReussi == false &&
    gunthraVivante == false
  ) {
    goToChapter(`fin_neutre`);
  }
}
function goToMauvaiseFin() {
  //Tous les conditions sont faux pour avoir la mauvaise fin
  if (
    lanceTrouver == false &&
    rituelReussi == false &&
    gunthraVivante == false
  ) {
    goToChapter(`mauvaise_fin`);
  }
}

//Terminer la création des objets principaux (les lozanges) et commencer les objets des options(les rectangles)
const chaptersObj = {
  //Chapitre 1
  le_reveil: {
    subtitle: "L'aventure Commence!!",
    text: "Tu te reveille au son de quelqu'un qui cogne à la porte. C'est Fjorm, elle vous supplie de l'aider contre le royaume de Muspel qui menace de détruire son royaume Nifl.",
    img: "assets/image/fjorm_determine.jpg",
    options: [
      {
        text: "Tu suis Fjorm dans sa quête",
        action: "goToChapter(`voyage_nifl`)",
      },
      {
        text: "Tu refuse de te lever du lit",
        action: "goToChapter(`le_sommeil`)",
      },
    ],
  },
  //Condition if else if pour les choix du tableau des options: goToChapter(chapterName);
  le_sommeil: {
    subtitle: "Je suis fatigué...",
    text: "*Yawn* je veux dormir encore, je ne veux pas me lever, quitte sans moi Alfonse, tu dit. Mais sérieux!? Cette jeune femme nous demande de l'aide et toi tu ne pense qu'à dormir!? Si tu ne veux pas te lever je vais te prendre par force tacticien! dit Alfonse. *THUD* OUCH!! ok ok ok, je vais venir, tu dit. Sheesh Alfonse, tu exagère un peu, tu chuchote à toi même.",
    img: "assets/image/royaume_askr.png",
    options: [
      {
        text: "Tu te dirige vers la porte pour saluer l'étranger",
        action: "goToChapter(`voyage_nifl`)",
      },
    ],
  },
  //Chapitre 2: Ajouter une propriété vidéo
  voyage_nifl: {
    subtitle: "Le Voyage Vers le Royaume de Nifl",
    text: "Tu prend la main de Fjorm avec beaucoup d'enthousiasme et tu te précipite dehors avec elle. `*Soupir* Tu est comme un enfant, dit Alfonse en hochant sa tête.` `Hey! Ce n'est pas ma faute que j'aime l'aventure!! tu répond avec embarras. Ah, avant que j'oublie, Fjorm raconte nous ta situation, tu as dit que t'avais besoin de l'aide n'est-ce pas? tu dis.` `Nifl a été attaqué par Muspel, j'ai été séparé de ma famille, je ne sais même pas s'ils sont encore vivants, dit Fjorm avec des larmes qui coule de ses yeux.` `Ok on va t'aider Fjorm, allons-y à Nifl pour retrouver ta soeur!!`",
    img: "assets/image/fjorm_lance.png",
    options: [
      {
        text: "Votre groupe voyage à travers Askr",
        action: "goToChapter(`village_brule`)",
      },
    ],
  },
  //Chapitre 3: la décision ici affect si Fjorm reçoit la lance ou non.
  village_brule: {
    subtitle: "Un Dilemme incontournable",
    text: "Tu entend des cris venant d'un village assez proche. Vous vous précipiteriez vers celui-ci. Une fois arrivée au village, un villageois gravement blessé vous demande de les aider `À l'aide notre village est entrain de se faire attaquer, aider nous je vous ensupplie` il dit avant de succomber à ces blessures.",
    img: "assets/image/village_brule_02.png",
    options: [
      {
        text: "Tu ignore leurs cris",
        action: "goToChapter(`massacre_paysans`)",
      },
      {
        text: "Tu évacue village",
        action: "goToChapter(`armee_muspel`)",
      },
      {
        text: "Tu dévisage un plan",
        action: "goToChapter(`pression_equipe`)",
      },
    ],
  },
  //Condition if else if pour les choix du tableau des options: goToChapter(chapterName);
  //Choix 1 du village qui brûle.
  massacre_paysans: {
    subtitle: "Sacrifice Essentiel",
    text: "Tu ignore les cris désepérer des paysans et tout le monde meurt. `Comment ose tu les laisser mourrir comme ça!? dit Alfonse et Fjorm simultanément.` `On doit faire vite, on n'a pas le temps à perdre! Il faut qu'on retrouve la soeur de Fjorm le plus rapidement possible!! tu dis pressé.`",
    img: "assets/image/summoner_heros_retraite.png",
    options: [
      {
        text: "Tu quitte le village sans regarder derrière toi",
        action: "compteurTemps(2, `village_detruit`)",
      },
    ],
  },
  //Résultat 1 du vilage qui brûle.
  village_detruit: {
    subtitle: "Monstre",
    text: "Le village est complétement détruit et il n'y a aucun survivant. Tu poursuis ton voyage sans remord. Bravo, tu as laisser tous les citoyens du villages mourrir! J'espère que tu est fière de toi même... Tu est un monstre!!",
    img: "assets/image/summoner_heros_souri.png",
    options: [
      {
        text: "Tu continue vers Nifl.",
        action: "goToChapter(`royaume_nifl`)",
      },
    ],
  },
  //Choix 3 du village qui brûle.
  pression_equipe: {
    subtitle: "Un Risque Morale",
    text: "Ton équipe te presse de te dépecher, car l'armée enemie s'avance vers vous.",
    img: "assets/image/alfonse.png",
    options: [
      {
        text: "Tu surprend l'enemi",
        action: "goToChapter(`assassinat_secret`)",
      },
    ],
  },
  //Résultat 3 du vilage qui brûle.
  assassinat_secret: {
    subtitle: "Le Plan Secret",
    text: "Vous séparez des petits group de soldats pour mieux les abattres sans ce faire voir par les autres qui sont occupés à détruire le village et à pourchasser les villageois.",
    img: "assets/image/alfonse_attaque.png",
    options: [
      {
        text: "L'armée vous remarque",
        action: "goToChapter(`armee_muspel`)",
      },
      {
        text: "Vous tuez les autres soldats!",
        action: "compteurTemps(4, `victoire_village`)",
      },
    ],
  },
  //Chapitre 4 et choix 2 du village qui brûle.
  armee_muspel: {
    subtitle: "Un Choix Mortel",
    text: "L'armée enemie vous prend par surprise. Laveaten, le premier général de Muspel attaque le joueur, mais tu esquive son attaque prématuré assez facilement. Alfonse et le reste de ton équipe se précipitent à tes côtés, les villageois encore vivant ce tasse du chemin le plus vite possible et le reste sont entrain de brûler vivant à cause de la flame éternelle. Le combat commence tous les armes sont pointées vers l'enemi qui va gagner?",
    img: "assets/image/laveaten_combat.jpg",
    options: [
      {
        text: "Tu défend le village de l'armée!",
        action: "compteurTemps(3, `survivant_village`)",
      },
      {
        text: "Tu t'enfuis avec ton équipe",
        action: "compteurTemps(2, `village_detruit`)",
      },
    ],
  },
  //Résultat 1 de l'armée de muspel
  survivant_village: {
    subtitle: "Première Victoire",
    text: "L'armée ce discipe et vous aidez les survivants à éteindre le feu. Ils vous remerci avec un peu de nourriture. Puis, vous dites vos adieux et vous quittez le village un peu déçu que vous n'avez pas sauvé tout les paysans.",
    img: "assets/image/village_brule_01.jpg",
    options: [
      {
        text: "Vous continuez vers Nifl.",
        action: "goToChapter(`royaume_nifl`)",
      },
    ],
  },
  //Résultat 2 de l'assassinat secret
  victoire_village: {
    subtitle: "Sains et Sauve!!",
    text: "Les autres soldats fuient les lieux. Vous avez sauvé tous les paysans. Vous les aidez à éteindre le reste du feu et ils vous remerci avec un grand festin et une soirée de repos dans une taverne.",
    img: "assets/image/village_askr.png",
    options: [
      {
        text: "Vous continuez vers Nifl.",
        action: "goToChapter(`royaume_nifl`)",
      },
    ],
  },
  //Chapitre 5 Le royaume de Nifl: la décision ici affect si Fjorm reçoit la lance ou non. Ajouter 4 jours blessureGrave choisit avec la fonction compteurTemps
  royaume_nifl: {
    subtitle: "Les nouveaux occupants",
    text: "Vous arrivez à Nifl et le territoire est remplis d'enemis. Vous décidez de vous aventurier pour trouver la soeur de Fjorm, car elle est la seul qui possède le pouvoir de vous aider à vaincre Surtr, le roi de Muspel. Soudainement, tu entend une dizaine de pas s'approcher vers vous, ce sont des soldats de Muspel avec leur général Laegjarn. Vous voulez éviter le combat le plus que possible, car les soldats peuple le territoire de Nifl. Quoi faire?",
    img: "assets/image/fjorm_lance.png",
    options: [
      {
        text: "Ce cacher",
        action: "goToChapter(`combat_evite`)",
      },
      {
        text: "Discuter avec elles",
        action: "goToChapter(`combat_general`)",
      },
      {
        text: "Les attaquer",
        action: "compteurTemps(4, `blessure_grave`)",
      },
    ],
  },
  //Choix 1 du royaume_nifl Ajouter 2 jours au résultat final du choix choisit avec la fonction compteurTemps
  combat_evite: {
    subtitle: "Infiltration Secrete",
    text: "Les générals passent prés de vous sans vous voir. Vous les observez pour s'assurer qu'ils ne retourne pas en arrière.",
    img: "assets/image/general_muspel.webp",
    options: [
      {
        text: "Vous restez caché jusqu'à l'aube.",
        action: "compteurTemps(2, `repos_group`)",
      },
    ],
  },
  //Résultat du choix 1 du royaume_nifl
  repos_group: {
    subtitle: "Une Pause Mérité!",
    text: "Vous décidez de prendre une pause avant que le soleil ce couche pour récuperer un peu d'énergie avant de continuer votre aventure.",
    img: "assets/image/nifl.jpg",
    options: [
      {
        text: "Vous reprenez votre chemin.",
        action: "goToChapter(`rencontre_gunthra`)",
      },
    ],
  },
  //Choix 2 du royaume_nifl Ajouter 3 jours au résultat final du choix choisit avec la fonction compteurTemps
  combat_general: {
    subtitle: "Combat Décisive",
    text: "Au début, Laergarn et sa soeur se moquent de vos efforts de résister à l'attaque de leur père Surtr. Parcontre, tu ne cède pas, tu les invites à un combat contre toi et ton équipe pour décider qu'est-ce qui va ce passer après. Si on perd tu peut nous tuer, mais si on gagne vous vous tassez de notre chemin. On va rencontrer Gunthrà que vous le voulez ou non!!",
    img: "assets/image/summoner_heros_souri.png",
    options: [
      {
        text: "Vous gagnez le combat contre les générals.",
        action: "compteurTemps(3, `nouveau_membre`)",
      },
    ],
  },
  //Résultat du choix 2 du royaume_nifl
  nouveau_membre: {
    subtitle: "Preuve de Force!!",
    text: "Laergarn et sa soeur épuissées sont impressionnées par votre prouesse sur le terrain. Elles prend la décision de rejoindre votre équipe en tant qu'espion. Elles vont vous faire part des prochaines étapes du plan de leur père. Elles te dit que le roi se prépare à sacrifier des enfants pour devenir plus fort et il faut l'arrêter avant qu'il réussi si non il va être impossible à vaincre. Vous dites vos adieux pour le moment et continuez votre recherche pour la soeur de Fjorm.",
    img: "assets/image/laergarn_debout.png",
    options: [
      {
        text: "Vous reprenez votre recherche dés que possible",
        action: "goToChapter(`rencontre_gunthra`)",
      },
    ],
  },
  //Choix 3 du royaume_nifl Ajouter 4 jours au résultat final du choix choisit avec la fonction compteurTemps
  blessure_grave: {
    subtitle: "Grave Erreur",
    text: "Tu décide de surprendre l'enemi avant qu'ils vous attaque. Votre tentative échoue et les générals délivrent une puissante contre attaque qui rend ton équipe incapable de ce battre. Affaibli, ton équipe décide de fuir la scène de bataille.",
    img: "assets/image/general_muspel.webp",
    options: [
      {
        text: "Vous prenez fuite",
        action: "goToChapter(`rencontre_gunthra`)",
      },
    ],
  },
  //Chapitre 6 remplacer la fonction goToChapter avec la fonction de gestion du temps et pour cacher la classe qui affiche les choix
  rencontre_gunthra: {
    subtitle: "À la rencontre de Gunthrà",
    text: "Fjorm dirige la recherche de sa soeur Gunthrà. Fjorm peut ressentir le pouvoir de sa soeur à cause de son lien avec le dieu de leur royaume Nifl. Fjorm vous dirige vers des ancients ruines causé par une guerre contre l'armée du Muspel qui a laissé beaucoup de citoyens de Nifl orphelin et sans maison. Plusieurs sont tué entrain de defendre leurs famille et d'autres ont été capturé pour être sacrifié au rituel de la flamme.",
    img: "assets/image/fjorm_presse.png",
    options: [
      {
        //Mettre un bouton qui est déterminé par les choix précédants du joueur
        //Pas besoin de 3 boutons, car les conditions sont dans la fonction arriverTemps()
        text: "Vous trouvez les ruines ou Gunthrà est cachée",
        action: "arriverTemps()",
      },
    ],
  },
  //Choix 1 du royaume_nifl: si tempsRestant == 7 executer ce choix. (Je ne suis pas sur si je mes le chapitre suivant dans les options. Ils n'y a pas d'option, il y a juste un résultat. Ça va s'afficher automatiquement.)
  gunthra_lance: {
    subtitle: "La lance légendaire",
    text: "Vous arrivez juste à temps pour que Gunthrà vous donne la lance, puis elle meurt de ses blessures.",
    img: "assets/image/fjorm_lance.png",
    options: [
      {
        text: "Fjorm vous guide vers le temple.",
        action: "goToChapter(`temple_glace`)",
      },
    ],
  },
  //Choix 2 du royaume_nifl: si tempsRestant < 7 executer ce choix.
  gunthra_vivante: {
    subtitle: "Réunion de Soeur",
    text: "Dans un rien de temps Fjorm retrouve Gunthrà cachée derrière des ruines d'une maison. Vous vous précipité vers elle, elle est blessée, elle ne sait pas combien de temps elle va survivre encore. Il ne reste pas beaucoup de temps, elle doit donner la lance à sa soeur pour qu'elle puisse faire le rituel de la glace afin d'avoir une chance contre Surtr. Il faut faire vite avant que l'armée de Muspel nous attrape. Fjorm cours embrasser sa soeur. Vous traitez les blessures de Gunthrà juste à temps, elle va survivre. Elle vous donne la lance et vous donne une carte du chemin vers le Temple de la Glace.",
    img: "assets/image/fjorm_determine.jpg",
    options: [
      {
        text: "Vous continuez vers le temple de glace.",
        action: "goToChapter(`temple_glace`)",
      },
    ],
  },
  //Choix 3 du royaume_nifl: si tempsRestant > 7 executer ce choix.
  gunthra_morte: {
    subtitle: "Le roi de la flame",
    text: "Gunthrà est morte tué par Surtr avant qu'elle puisse donner la lance à sa soeur Fjorm.",
    img: "assets/image/gunthra_battue.png",
    options: [
      {
        //Choix de recommencer du chapitre village brûle et reset le tempsRestant à 0
        text: "Tu retourne dans le temps",
        action: "resetTempsRestant()",
      },
      {
        //Choix de continuer malgré le fait que Fjorm n'a pas la lance
        text: "Vous continuez avec désespoir",
        action: "goToChapter(`temple_glace`)",
      },
    ],
  },
  //Chapitre 7: supprimer les choix de ce chapitre?
  temple_glace: {
    subtitle: "Le Rituel de Glace",
    text: "Arrivée au temple de la glace, Fjorm fait face à une décision entrer et faire le rituel ou non. Il y a un risque à faire ce rituel, mais Fjorm sait cela depuis longtemps. Sa détermination à vaincre Surtr et libérer le monde de ce dictateur écrase sa peur de mourrir, mais quand même... Le rituel pourrait ne simplement pas marcher et là quoi faire... Personne ne serait capable de tuer le roi avec le pouvoir de la flame éternelle. NON, il faut faire ce rituel à tout prix!! C'est notre seule chance de vaincre Surtr! dit Fjorm. Tacticien, c'est à toi de jouer, qu'est ce que vous allez faire?",
    img: "assets/image/royaume_nifl.png",
    options: [
      {
        text: "Fjorm rentre avec détermination",
        action: "goToChapter(`entrer_dedans`)",
      },
      {
        text: "Fjorm hésite de rentrer",
        action: "goToChapter(`rester_dehors`)",
      },
    ],
  },
  //Choix et résultat 1 du temple de  glace
  entrer_dedans: {
    subtitle: "Dans le Temple de Glace",
    text: "Fjorm décide de prendre un grand souffle avant d'entrer dans le temple de glace. Le reste de l'équipe l'attend dehors avec enthousiasme.",
    img: "assets/image/fjorm_determine.jpg",
    options: [
      {
        text: "Fjorm se prépare a faire le rituel de glace.",
        action: "goToChapter(`le_rituel`)",
      },
    ],
  },
  //Choix et résultat 2 du temple de  glace
  rester_dehors: {
    subtitle: "Mort Glacé",
    text: "Vous décidez d'attendre que Fjorm reprenne du courage, mais elle est envahit par le désespoir face au sort inconnu de sa famille, elle pleure sans cesse pendant des heures, rien ne peut l'aider maintenant. Vous mourrez a cause du froid glaciale causé par le pouvoir de Fjorm.",
    img: "assets/image/famille_nifl.jpg",
    options: [
      {
        text: "Tu utilise de la magie pour retourner dans le temps.",
        action: "resetTempsRestant()",
      },
    ],
  },
  //Chapitre 8: ce chapitre est important pour la fin. Si tu veux l'enlever il faut que tu modifie la mauvaise fin et la fin neutre.
  le_rituel: {
    subtitle: "La Lance Légendaire",
    text: "Une fois dans le temple Fjorm s'apprête à tout sacrifier pour sauver ce qui reste de son royaume et d'épargner le reste du monde de cette tragédie.",
    img: "assets/image/fjorm_temple.png",
    options: [
      {
        text: "Fjorm tient sa lance",
        action: "trouveLanceOui()",
      },
      {
        text: "Fjorm hésite de s'approcher",
        action: "trouveLanceNon()",
      },
      {
        text: "Fjorm quitte le temple",
        action: "eviterRituel()",
      },
    ],
  },
  //Choix et résultat 1 du rituel de glace: Faire avec booléen lanceTrouver == vrai
  rituel_reussi: {
    subtitle: "Rituel Réussi",
    text: "Fjorm transperce le voile glacé du autel avec la lance, puis une lumière éblouissante l'engloutie complètement. Cette lumière lève Fjorm du sol avant de la descendre réenergisée.",
    img: "assets/image/fjorm_temple.png",
    options: [
      {
        text: "Vous continuez votre voyage avec tant d'enthousiasme.",
        action: "goToChapter(`royaume_muspel`)",
      },
    ],
  },
  //Choix et résultat 2 du rituel de glace: Faire avec lanceTrouver == False
  rituel_echoue: {
    subtitle: "Mission Échoué",
    text: "Fjorm essaye de faire le rituel sans la lance légendaire, mais elle échoue. Elle meurt peut après le rituel de la glace, transformer en popsicle humain.",
    img: "assets/image/fjorm_perdue.jpg",
    options: [
      {
        //Recommencer du début de l'histoire
        text: "Tu retourne dans le temps",
        action: "resetTempsRestant()",
      },
      {
        //Tu continue malgré le fait que Fjorm est morte
        text: "Tu prend la lance en pleurant",
        action: "goToChapter(`royaume_muspel`)",
      },
    ],
  },
  //Choix et résultat 3 du rituel de glace: Autre état avec autre fonction? Le retirer si trop compliqué.
  rituel_evite: {
    subtitle: "Fuite de Fjorm",
    text: "Fjorm rentre dans le temple, elle semble voir quelque chose d'effrayant. Cette créature lui dit de quitter le temple et de ne jamais revenir, car la mort l'attend peu importe si elle fait le rituel ou non. Sa durée sur cette terre est très limité. Elle savais cela, mais elle a quand même peur, peur de ne plus être auprès de ces ami, peur que le rituel de glace ne soit pas assez puissant pour combattre Surtr. Elle quitte le temple en pleurant et te dit de l'amener le plus loin que possible du temple.",
    img: "assets/image/fjorm_presse.png",
    options: [
      {
        //Fjorm à la lance, mais gunthrà est morte
        text: "Vous continuez votre voyage déçu du résultat",
        action: "goToChapter(`royaume_muspel`)",
      },
    ],
  },
  //Chapitre 9: retirer le choix du group capturer de ce chapitre et ajouter une vidéo d'ambiance.
  royaume_muspel: {
    subtitle: "Le Royaume de Muspel",
    text: "Vous arrivez à Muspel juste à temps pour voir une énorme armée marchez vers vous. Tu propose à ton équipe de rester discrèt pour éviter un combat prolongué, mais Alfonse et Laergarn propose de séparer un petit group de soldat du reste de l'armée pour voler leurs vêtements de guerre dans le but de faciliter leur quête dans le royaume. Alfonse est entrain de réfléchir à une autre solution, mais il est d'accord avec les filles, il faut continuer de s'avancer sans ce faire repérer par les soldats ou tout autre personne de Muspel. À toi de jouer tacticien, qu'est-ce que tu va faire?",
    img: "assets/image/royaume_muspel.png",
    video: "assets/video/royaume_muspel.mp4",
    options: [
      {
        text: "Voler l'uniforme des soldats.",
        action: "goToChapter(`uniforme_soldat`)",
      },
      {
        text: "Faire face contre l'armée.",
        action: "goToChapter(`group_capturer`)",
      },
    ],
  },
  //Choix 1 du royaume de muspel
  uniforme_soldat: {
    subtitle: "Plan Déguisement",
    text: "Vous isolez un petit group de soldat et vous les tuez en cachette hors de vue des autres. Vous mettez l'uniforme, puis vous suivez un autre group de soldats qui vont vers le chateau.",
    img: "assets/image/summoner_heros_combat.png",
    options: [
      {
        text: "Vous rentrer dans le chateau.",
        action: "goToChapter(`mission_infiltration`)",
      },
    ],
  },
  //Choix 2 du royaume de muspel
  group_capturer: {
    subtitle: "Le rituel de la Flamme",
    text: "Vous êtes capturé rapidement par les soldats. Ils vous amènent dans le temple du rituel de la flamme ou vous êtes sacrifiés un après l'autre dans un bain de flamme et de souffrance.",
    img: "assets/image/soldat.jpg",
    video: "assets/video/group_capturer.mp4",
    options: [
      {
        text: "Tu retourne dans le temps avec ton pouvoir.",
        action: "goToChapter(`royaume_muspel`)",
      },
    ],
  },
  //Chapitre 10: retirer les choix de ce chapitre.
  mission_infiltration: {
    subtitle: "Mission infiltrer le Château de Flame",
    text: "Laegarn reussi de vous faire rentrer dans le chateau sans problème. Il reste maintenant de trouver où ils ont pris les enfants (Ygl et Veronica). Vous commencer votre recherche au premier niveau du chateau, vous ne trouvez pas les enfants, mais vous entendez des soldats parler des enfants: `J'espère qu'on va avoir une promotion après le sacrifice, dit le premier soldat.` `J'espère qu'il vont être sacrifier aujourd'hui, car celui du royaume Nifl est agassant, il ne cesse de me supplier de le laisser partir. Il est fou ce petit là!! Si le roi entend ça, il va tuer toute ma famille, puis il me laissera dans une cage remplit de feu, dit un autre soldat.` Les soldats descend un escalier pour aller dans le dungeon, votre équipe les suis sans faire du bruit. Les soldats continue de marcher au déla de la cellule des enfants. Tu libère les enfants de la cellule. Fjorm cours embrasser sa soeur Ygl et Veronica ce plein de notre retard.",
    img: "assets/image/soldat.jpg",
    options: [
      {
        text: "Vous continuez vers la chambre du roi",
        action: "goToChapter(`combat_final`)",
      },
    ],
  },
  //Chapitre 11: Créer une fonction qui gère les 3 conditions positive, négative et neutre
  combat_final: {
    subtitle: "Un Combat Décisive!!",
    text: "C'est maintenant ou jamais! Le temps pour faire face au roi de la flame éternelle Surtr est arrivée. Surtr vous regarde avec une grimace qui forme sur son visage, `Je suis surpris que vous avez réussi de trucquer mon armée, mais c'est fini ici et maintenant!! Vous allez faire une très bonne addition au sacrifice, le pouvoir que ça va me donné, je serais invincible!! Mwuahahahahahaha!!!` `On va voir qui va avoir le dernier mot Surtr!! Fjorm cri en ce précipitant vers le roi pour l'attaquer.` Est-ce que vous êtes prés pour le combat ultime?",
    img: "assets/image/surtr_debout.webp",
    options: [
      {
        text: "Fjorm attaque Surtr",
        action: "goToBonneFin()",
      },
      {
        text: "Tu essaye de blesser Surtr",
        action: "goToMauvaiseFin()",
      },
      {
        text: "Fjorm tente de blesser Surtr",
        action: "goToFinNeutre()",
      },
    ],
  },
  //Choix et résultat 1 combat final: condition avec la lance, gunthrà est vivante et rituel réussi
  bonne_fin: {
    subtitle: "Espoir pour le future",
    text: "Après un long combat féroce, avec l'aide de Laergarn et sa soeur, Fjorm réussi de planter sa lance dans le coeur du roi de la flamme Surtr et libérer le monde de ce tyrant immortel.",
    img: "assets/image/surtr_perdue.jpg",
    options: [
      {
        text: "Youpi, le monde est sauvé!!",
        action: "resetTempsRestant()",
      },
    ],
  },
  //Choix et résultat 2 combat final (Fjorm): condition sans la lance, gunthrà est morte et le rituel évité
  mauvaise_fin: {
    subtitle: "Un Nouveau Maître",
    text: "Sans Fjorm vous n'avez aucune chance de battre Surtr. Il réduit tous les membres de ton équipe en cendre en moins de quelques minutes. Tu est encore vivant, mais pas pour longtemps. Avant de fermer tes yeux pour la dernière fois, tu voix Surtr entrain de s'éclatter de rire face à votre impuissance.",
    img: "assets/image/surtr.jpg",
    options: [
      {
        text: "Tu as perdu, rejouer!",
        action: "resetTempsRestant()",
      },
    ],
  },
  //Choix et résultat 3 combat final: Retirer la fin neutre. (Condition Fjorm à la lance, mais elle a évité le rituel et gunthrà est morte)
  fin_neutre: {
    subtitle: "Battaille Perdue",
    text: "Les enfants sont tués avec la flamme de Surtr, mais le reste de ton équipe est gravement blessé. Tu décide d'utiliser le peu de force qui te reste pour retourner dans le temps, au moment de ta première rencontre avec Fjorm.",
    img: "assets/image/surtr_combat.png",
    options: [
      {
        text: "Tu est blessé, rejouer!",
        action: "resetTempsRestant()",
      },
    ],
  },
};

//46 objets oof!!
//Créer un tableau pour mettre l'objet chaptersObj
//let chapitreArr = [chaptersObj];

let chbsoundTrack = document.querySelector(".chb-soundTrack");
//Mettre le audio en dehors de la fonction goToChapter pour éviter la multiplication du son
let sound = new Audio("assets/sound/son_temporaire.mp3");

function goToChapter(chapterName) {
  //Récupérer les éléments du DOM (HTML)
  let chapter = document.getElementById("chapitre");
  let textDescription = document.getElementById("text");
  let media = document.getElementById("media");
  let options = document.getElementById("options");

  //Afficher le soustire, la description de l'histoire et l'image à l'aide d'une variable qui contient le tableau des objets des chapitres, le nom de chaque chapitre et la propriété spécifiée dans l'objet.
  chapter.textContent = chaptersObj[chapterName].subtitle;
  textDescription.textContent = chaptersObj[chapterName].text;

  //Condition pour afficher la vidéo si la propriété video est dans le chapitre
  //Si la valeur de la propriété vidéo n'égale pas à undefined afficher la vidéo dans la balise div de l'image
  if (chaptersObj[chapterName].video != undefined) {
    //Insérer une balise vidéo dans la variable vidéo: note: mettre la vidéo et l'image dans la même balise pour que ça fonctionne
    media.innerHTML = `<video class="video" src="${chaptersObj[chapterName].video}" type="video/mp4" loop muted autoplay></video>`;
  } else { //Si non afficher l'image comme les autres chapitres
    //Insérer une balise img dans la variable du même nom
    media.innerHTML = `<img class="image" src="${chaptersObj[chapterName].img}" alt="image_chapitre"/>`;
  }

  //Il n'y a pas d'erreur dans la console quand j'appelle la fonction, mais l'image ne s'affiche pas.
  console.log(chapter.textContent);
  console.log(textDescription.textContent);
  console.log(media.innerHTML);

  //Créer la boucle for() pour afficher les choix dans chaque champ de text.
  let textButton = "";
  for (let i = 0; i < chaptersObj[chapterName].options.length; i++) {
    textButton += `<button class="choix" onclick="${chaptersObj[chapterName].options[i].action}">${chaptersObj[chapterName].options[i].text}</button>`;
    console.log(textButton);
  }
  //Relier le tableau des options au bouton text pour afficher le text à la bonne place.
  options.innerHTML = textButton;

  //Si le checkbox est coché jouer le son sinon le mettre sur pause
  if (chbsoundTrack.checked == true) {
    //console.log(chbsoundTrack.checked);
    sound.currentTime = 0; // Mettre le son au début
    sound.play(); // Jouer le son
  } else {
    sound.pause();
  }

  console.log(sound);
  console.log(options);

  //Boucle forEach à l'extérieur de la fonction pour ajouter classe quand le chapitre charge
  let body = document.querySelector("body");
  if (chaptersObj[chapterName] == chaptersObj[chapterName]) {
    body.classList.add(chapterName);
  } else {
    body.remove(chapterName);
  }
  console.log(body);

  //Sauvegarder le chapitre que l'utilisateur est rester sur.
  localStorage.setItem("chapterName", chapterName);
}

//Déclarer la variable chapterName et lui donner la valeur du localStorage
let chapterName = localStorage.getItem("chapterName");

//Faire la condition du local storage pour vérifier s'il y a quelques chose de sauvegardée dedans.
if (localStorage.getItem("chapterName") != undefined) {
  //Mettre la valeur du local storage dans la fonction goToChapter pour afficher le chapitre sauvegardé.
  chapterName = localStorage.getItem("chapterName");
  goToChapter(chapterName);
} else {
  //Cette partie ne fonctionne pas?
  goToChapter("le_reveil");
}

//Faire une condition pour chaque variable d'état pour s'assurer que tout fonctionne.
//Récupérer les valeurs de tous les variables d'états, je ne comprend pas, HELP!!!
//Si la valeur des variables égale à la valeur dans le localStorage les initialiser avec cette valeur, si non les donner leur valeur de base.
if (localStorage.getItem("tempsRestant") != undefined) {
  //Récuperer la valeur de la lanceTrouver, de gunthraVivante et du rituelReussi dans le localStorage
  tempsRestant = localStorage.getItem("tempsRestant");

  //Récipérer les données du chapterName stocké dans le localStorage et appeller la fonction pour afficher le prochain chapitre.
  chapterName = localStorage.getItem("chapterName");
  goToChapter(chapterName);
  //lanceTrouver = localStorage.getItem("lanceTrouver");
  //gunthraVivante = localStorage.getItem("gunthraVivante");
  //rituelReussi = localStorage.getItem("rituelReussi");
} //Pas besoin du else, car utilise la valeur par défault de la variable tempsRestant

//Essayer de mettre la condition de la lance, de gunthra et du rituel ensemble et regarder si ça marche: 3 conditions en 1 avec les getItem des 3 variables.

//Appeller la fonction goToChapter pour vérifier que tout fonctionne.
//goToChapter("le_reveil");
//Appeler la fonction, n'oublie pas les guillemets: goToChapter("le_reveil");
//Vérifier que le nombre s'incrémente : compteurTemps(3, "royaume_nifl");
//console.log(chaptersObj["combat_final"].video);