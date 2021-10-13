//Terminer la création des objets principaux (les lozanges) et commencer les objets des options(les rectangles)
const chaptersObj = {
    //Chapitre 1
        le_reveil: {
            subtitle: "L'aventure Commence!!",
            text: "Tu te reveille au son de quelqu'un qui cogne à la porte. C'est Fjorm, elle vous supplie de l'aider contre le royaume de Muspel qui menace de détruire son royaume Nifl.",
            img: "image/fjorm_determine.jpg",
            options: [
                choix = {
                    text: "Tu refuse de te lever de ton lit",
                    action: "goToChapter(le_sommeil)",
                },
                choix = {
                    text: "Tu choisit de suivre Fjorm dans sa quête",
                    action: "goToChapter(voyage_nifl)",
                },
            ],
        },
        //Condition if else if pour les choix du tableau des options: goToChapter(chapterName);
        le_sommeil: {
            subtitle: "Je suis fatigué...",
            text: "*Yawn* je veux dormir encore, je ne veux pas me lever, quitte sans moi Alfonse, tu dit. Mais sérieux!? Cette jeune femme nous demande de l'aide et toi tu ne pense qu'à dormir!? Si tu ne veux pas te lever je vais te prendre par force tacticien! dit Alfonse. *THUD* OUCH!! ok ok ok, je vais venir, tu dit. Sheesh Alfonse, tu exagère un peu, tu chuchote à toi même.",
            img: "image/royaume_askr.png",
            options: [
                choix = {
                    text: "Tu suis Fjorm réticent dans sa quête",
                    action: "goToChapter(voyage_nifl)",
                },
            ],
        },
    //Chapitre 2
        voyage_nifl: {
            subtitle: "Le Voyage Vers le Royaume de Nifl",
            text: "Tu prend la main de Fjorm avec beaucoup d'enthousiasme et tu te précipite dehors avec elle. `*Soupir* Tu est comme un enfant, dit Alfonse en hochant sa tête.` `Hey! Ce n'est pas ma faute que j'aime l'aventure!! tu répond avec embarras. Ah, avant que j'oublie, Fjorm raconte nous ta situation, tu as dit que t'avais besoin de l'aide n'est-ce pas? tu dis.` `Nifl a été attaqué par Muspel, j'ai été séparé de ma famille, je ne sais même pas s'ils sont encore vivants, dit Fjorm avec des larmes qui coule de ses yeux.` `Ok on va t'aider Fjorm, allons-y à Nifl pour retrouver ta soeur!!`",
            img: "image/fjorm_lance.png",
            options: [
                choix = {
                    text: "Votre groupe voyage à travers Askr",
                    action: "goToChapter(village_brule)",
                },
            ],
        },
    //Chapitre 3
        village_brule: {
            subtitle: "Un Dilemme incontournable",
            text: "Tu entend des cris venant d'un village assez proche. Vous vous précipiteriez vers celui-ci. Une fois arrivée au village, un villageois gravement blessé vous demande de les aider `À l'aide notre village est entrain de se faire attaquer, aider nous je vous ensupplie` il dit avant de succomber à ces blessures.",
            img: "image/village_brule_02.png",
            options: [
                choix = {
                    text: "Tu ignore leurs cris de désespoir",
                    action: "goToChapter(massacre_paysans)",
                },
                choix = {
                    text: "Tu essaye d'évacuer tout le monde du village",
                    action: "goToChapter(armee_muspel)",
                },
                choix = {
                    text: "Tu prend du temps pour trouver une meilleure solution",
                    action: "goToChapter(pression_equipe)",
                },
            ],
        },
        //Condition if else if pour les choix du tableau des options: goToChapter(chapterName);
        //Choix 1 du village qui brûle.
        massacre_paysans: {
            subtitle: "Sacrifice Essentiel",
            text: "Tu ignore les cris désepérer des paysans et tout le monde meurt. `Comment ose tu les laisser mourrir comme ça!? dit Alfonse et Fjorm simultanément.` `On doit faire vite, on n'a pas le temps à perdre! Il faut qu'on retrouve la soeur de Fjorm le plus rapidement possible!! tu dis pressé.`",
            img: "image/summoner_heros.webp",
            options: [
                choix = {
                    text: "Tu continue de traverser le village sans regarder derrière toi",
                    action: "goToChapter(village_detruit)",
                },
            ],
        },
        //Résultat 1 du vilage qui brûle.
        village_detruit: {
            subtitle: "Monstre",
            text: "Le village est complétement détruit et il n'y a aucun survivant. Tu poursuis ton voyage sans remord. Bravo, tu as laisser tous les citoyens du villages mourrir! J'espère que tu est fière de toi même... Tu est un monstre!!",
            img: "image/summoner_heros_souri.png",
            options: [
                choix = {
                    text: "Tu continue ton voyage vers Nifl.",
                    action: "goToChapter(royaume_nifl)",
                },
            ],
        },
        //Choix 3 du village qui brûle.
        pression_equipe: {
            subtitle: "Un Risque Morale",
            text: "Ton équipe te presse de te dépecher, car l'armée enemie s'avance vers vous.",
            img: "image/alfonse.png",
            options: [
                choix = {
                    text: "Tu surprend l'enemi entrain d'encercler des paysans!",
                    action: "goToChapter(assassinat_secret)",
                },
            ],
        },
        //Résultat 3 du vilage qui brûle.
        assassinat_secret: {
            subtitle: "Le Plan Secret",
            text: "Vous séparez des petits group de soldats pour mieux les abattres sans ce faire voir par les autres qui sont occupés à détruire le village et à pourchasser les villageois.",
            img: "image/alfonse_attaque.png",
            options: [
                choix = {
                    text: "L'armée remarque votre présence.",
                    action: "goToChapter(armee_muspel)",
                },
                choix = {
                    text: "L'armée ce discipe pour de bon!",
                    action: "goToChapter(victoire_village)",
                },
            ],
        },
    //Chapitre 4 et choix 2 du village qui brûle.
        armee_muspel: {  
            subtitle: "Un Choix Mortel",
            text: "L'armée enemie vous prend par surprise. Laveaten, le premier général de Muspel attaque le joueur, mais tu esquive son attaque prématuré assez facilement. Alfonse et le reste de ton équipe se précipitent à tes côtés, les villageois encore vivant ce tasse du chemin le plus vite possible et le reste sont entrain de brûler vivant à cause de la flame éternelle. Le combat commence tous les armes sont pointées vers l'enemi qui va gagner?",
            img: "image/laveaten_combat.jpg",
            options: [
                choix = {
                    text: "Tu défend le village de l'armée avec ton équipe!",
                    action: "goToChapter(survivant_village)",
                },
                choix = {
                    text: "Tu t'enfuis avec ton équipe.",
                    action: "goToChapter(village_detruit)",
                },
            ]
        },
        //Résultat 1 de l'armée de muspel
        survivant_village: {
            subtitle: "Première Victoire",
            text: "L'armée ce discipe et vous aidez les survivants à éteindre le feu. Ils vous remerci avec un peu de nourriture. Puis, vous dites vos adieux et vous quittez le village un peu déçu que vous n'avez pas sauvé tout les paysans.",
            img: "image/village_brule_01.jpg",
            options: [
                choix = {
                    text: "Vous continuez votre voyage vers Nifl.",
                    action: "goToChapter(royaume_nifl)",
                },
            ],
        },
        //Résultat 2 de l'assassinat secret
        victoire_village: {
            subtitle: "Sains et Sauve!!",
            text: "Vous avez sauvé tous les paysans. Vous les aidez à éteindre le reste du feu et ils vous remerci avec un grand festin et une soirée de repos dans une taverne.",
            img: "image/village_askr.png",
            options: [
                choix = {
                    text: "Vous continuez votre voyage vers Nifl.",
                    action: "goToChapter(royaume_nifl)",
                },
            ],
        },
    //Chapitre 5 Le royaume de Nifl
        royaume_nifl: {
            subtitle: "Les nouveaux occupants",
            text: "Vous arrivez à Nifl et le territoire est remplis d'enemis. Vous décidez de vous aventurier pour trouver la soeur de Fjorm, car elle est la seul qui possède le pouvoir de vous aider à vaincre Surtr, le roi de Muspel. Soudainement, tu entend une dizaine de pas s'approcher vers vous, ce sont des soldats de Muspel avec leur général Laegjarn. Vous voulez éviter le combat le plus que possible, car les soldats peuple le territoire de Nifl. Quoi faire?",
            img: "image/fjorm_lance.png",
            options: [
                choix = {
                    text: "Vous vous cachez derrière un arbre.",
                    action: "goToChapter(combat_evite)",
                },
                choix = {
                    text: "Vous décidez de les approcher et de parler avec eux.",
                    action: "goToChapter(combat_general)",
                },
                choix = {
                    text: "Vous décidez de les confronter!",
                    action: "goToChapter(blessure_grave)",
                },
            ],
        },
        //Choix 1 du royaume_nifl
        combat_evite: {
            subtitle: "Infiltration Secrete",
            text: "Les générals passent prés de vous sans vous voir.",
            img: "image/general_muspel.webp",
            options: [
                choix = {
                    text: "Vous évitez un combat inutile.",
                    action: "goToChapter(repos_group)",
                },
            ],
        },
        //Résultat du choix 1 du royaume_nifl
        repos_group: {
            subtitle: "Une Pause Mérité!",
            text: "Vous décidez de prendre une pause avant que le soleil ce couche pour récuperer un peu d'énergie avant de continuer votre aventure.",
            img: "image/nifl.jpg",
            options: [
                choix = {
                    text: "Vous reprenez votre recherche de la soeur de Fjorm.",
                    action: "goToChapter(rencontre_gunthra)",
                },
            ],
        },
        //Choix 2 du royaume_nifl
        combat_general: {
            subtitle: "Combat Décisive",
            text: "Au début, Laergarn et sa soeur se moquent de vos efforts de résister à l'attaque de leur père Surtr. Parcontre, tu ne cède pas, tu les invites à un combat contre toi et ton équipe pour décider qu'est-ce qui va ce passer après. Si on perd tu peut nous tuer, mais si on gagne vous vous tassez de notre chemin. On va rencontrer Gunthrà que vous le voulez ou non!!",
            img: "image/summoner_heros.webp",
            options: [
                choix = {
                    text: "Vous gagnez le combat contre les générals.",
                    action: "goToChapter(nouveau_membre)",
                },
            ],
        },
        //Résultat du choix 2 du royaume_nifl
        nouveau_membre: {
            subtitle: "Preuve de Force!!",
            text: "Laergarn et sa soeur épuissées sont impressionnées par votre prouesse sur le terrain. Elles prend la décision de rejoindre votre équipe en tant qu'espion. Elles vont vous faire part des prochaines étapes du plan de leur père.",
            img: "image/laergarn_debout.png",
            options: [
                choix = {
                    text: "Vous reprenez votre recherche de la soeur de Fjorm.",
                    action: "goToChapter(rencontre_gunthra)",
                },
            ],
        },
        //Choix 3 du royaume_nifl
        blessure_grave: {
            subtitle: "Grave Erreur",
            text: "Tu décide de surprendre l'enemi avant qu'ils vous attaque. Votre tentative échoue et les générals délivrent une puissante contre attaque qui rend ton équipe incapable de ce battre. Affaibli, ton équipe décide de fuir la scène de bataille.",
            img: "image/general_muspel.webp",
            option: [
                choix = {
                    text: "Vous prenez fuite sans regarder derrière vous.",
                    action: "goToChapter(fuite_blessure)",
                }
            ]
        },
        //Résultat du choix 3 du royaume_nifl
        fuite_blessure: {
            subtitle: "Échec Humiliant",
            text: "Vous avez réussi de vous échapper des générals et de leur armée, mais tous les membres de l'équipe sont blessé. Vous arrêtez votre quête pendant quelques jours pour traiter vos blessures.",
            img: "image/summoner_heros_retraite.png",
            options: [
                choix = {
                    text: "Vous reprenez votre recherche de la soeur de Fjorm.",
                    action: "goToChapter(rencontre_gunthra)",
                },
            ],
        },
    //Chapitre 6
        rencontre_gunthra: {
            subtitle: "À la rencontre de Gunthrà",
            text: "Fjorm dirige la recherche de sa soeur Gunthrà. Fjorm peut ressentir le pouvoir de sa soeur à cause de son lien avec le dieu de leur royaume Nifl. Dans un rien de temps Fjorm retrouve Gunthrà cachée derrière des ruines d'une maison. Vous vous précipité vers elle, elle est blessée, elle ne sait pas combien de temps elle va survivre encore. Il ne reste pas beaucoup de temps, elle doit donner la lance à sa soeur pour qu'elle puisse faire le rituel de la glace afin d'avoir une chance contre Surtr. Il faut faire vite, est-ce que tu est arrivée avant 7 jours tacticien?",
            img: "image/fjorm_presse.png",
            options: [
                choix = {
                    text: "Vous êtes arrivé en 7 jours pille.",
                    action: "goToChapter(gunthra_lance)",
                },
                choix = {
                    text: "Vous êtes arrivé en moins de 7 jours.",
                    action: "goToChapter(gunthra_vivante)",
                },
                choix = {
                    text: "Vous êtes arrivé en plus de 7 jours.",
                    action: "goToChapter(gunthra_morte)",
                },
            ],
        },
        //Choix 1 du royaume_nifl (Je ne suis pas sur si je mes le chapitre suivant dans les options. Ils n'y a pas d'option, il y a juste un résultat. Ça va s'afficher automatiquement.)
        gunthra_lance: {
            subtitle: "La lance légendaire",
            text: "Vous arrivez juste à temps pour que Gunthrà vous donne la lance, puis elle meurt de ses blessures.",
            img: "image/fjorm_lance.png",
            options: [
                choix = {
                    text: "Vous continuez vers le temple de glace.",
                    action: "goToChapter(temple_glace)",
                },
            ],
        },
        //Choix 2 du royaume_nifl
        gunthra_vivante: {
            subtitle: "Réunion de Soeur",
            text: "Tu arrive avant 7 jours. Vous avez traités les blessures de Gunthrà juste à temps, elle va survivre. Elle vous donne la lance et vous donne une carte du chemin vers le Temple de la Glace.",
            img: "image/fjorm_determine.jpg",
            options: [
                choix = {
                    text: "Vous continuez vers le temple de glace.",
                    action: "goToChapter(temple_glace)",
                },
            ],
        },
        //Choix 3 du royaume_nifl
        gunthra_morte: {
            subtitle: "Le roi de la flame",
            text: "Gunthrà est morte tué par Surtr et vous n'avez pas recu la lance.",
            img: "image/gunthra_battue.png",
            options: [
                choix = {
                    text: "Tu utilise de la magie pour retourner dans le temps.",
                    action: "goToChapter(royaume_nifl)",
                },
                choix = {
                    text: "Tu décide de continuer votre voyage avec désespoir.",
                    action: "goToChapter(temple_glace)",
                },
            ],
        },
    //Chapitre 7
        temple_glace: {
            subtitle: "Le Rituel de Glace",
            text: "Arrivée au temple de la glace, Fjorm fait face à une décision entrer et faire le rituel ou non. Il y a un risque à faire ce rituel, mais Fjorm sait cela depuis longtemps. Sa détermination à vaincre Surtr et libérer le monde de ce dictateur écrase sa peur de mourrir, mais quand même... Le rituel pourrait ne simplement pas marcher et là quoi faire... Personne ne serait capable de tuer le roi avec le pouvoir de la flame éternelle. NON, il faut faire ce rituel à tout prix!! C'est notre seule chance de vaincre Surtr! dit Fjorm. Tacticien, c'est à toi de jouer, qu'est ce que vous allez faire?",
            img: "image/temple.jpg",
            options: [
                choix = {
                    text: "Fjorm hésite de rentrer au temple.",
                    action: "goToChapter(rester_dehors)",
                },
                choix = {
                    text: "Fjorm rentre avec détermination dans le temple.",
                    action: "goToChapter(entrer_dedans)",
                },
            ],
        },
        //Choix et résultat 1 du temple de  glace
        rester_dehors: {
            subtitle: "Mort Gracé",
            text: "Vous décidez d'attendre que Fjorm reprenne du courage, mais elle est envahit par le désespoir face au sort inconnu de sa famille, elle pleure sans cesse pendant des heures, rien ne peut l'aider maintenant. Vous mourrez a cause du froid glaciale causé par le pouvoir de Fjorm.",
            img: "image/famille_nifl.jpg",
            options: [
                choix = {
                    text: "Tu utilise de la magie pour retourner dans le temps.",
                    action: "goToChapter(royaume_nifl)",
                },
            ],
        },
        //Choix et résultat 2 du temple de  glace
        entrer_dedans: {
            subtitle: "Dans le Temple de Glace",
            text: "Fjorm décide de prendre un grand souffle avant d'entrer dans le temple de glace. Le reste de l'équipe l'attend dehors avec enthousiasme.",
            img: "image/fjorm_determine.jpg",
            options: [
                choix = {
                    text: "Fjorm se prépare a faire le rituel de glace.",
                    action: "goToChapter(le_rituel)",
                },
            ],
        },
    //Chapitre 8
        le_rituel: {
            subtitle: "La Lance Légendaire",
            text: "Une fois dans le temple Fjorm s'apprête à tout sacrifier pour sauver ce qui reste de son royaume et d'épargner le reste du monde de cette tragédie.",
            img: "image/fjorm_temple.png",
            options: [
                choix = {
                    text: "Fjorm essaye de faire le rituel sans la lance.",
                    action: "goToChapter(rituel_echoue)",
                },
                choix = {
                    text: "Fjorm utilise la lance pour faire le rituel.",
                    action: "goToChapter(rituel_reussi)",
                },
                choix = {
                    text: "Fjorm quitte le temple sans faire le rituel.",
                    action: "goToChapter(rituel_evite)",
                },
            ],
        },
        //Choix et résultat 1 du rituel de glace
        rituel_echoue: {
            subtitle: "Mission Échoué",
            text: "Fjorm meurt pendant le rituel de la glace, car elle ne possède pas la lance légendaire de Gunthra.",
            img: "image/fjorm_perdue.jpg",
            options: [
                choix = {
                    text: "Tu utilise de la magie pour retourner dans le temps.",
                    action: "goToChapter(royaume_nifl)",
                },
            ],
        },
        //Choix et résultat 2 du rituel de glace
        rituel_reussi: {
            subtitle: "Rituel Réussi",
            text: "",
            img: "image/fjorm_temple.png",
            options: [
                choix = {
                    text: "Vous continuez votre voyage avec tant d'enthousiasme.",
                    action: "goToChapter(royaume_muspel)",
                },
            ],
        },
        //Choix et résultat 3 du rituel de glace
        rituel_evite: {
            subtitle: "Fuite de Fjorm",
            text: "",
            img: "image/fjorm_presse.png",
            options: [
                choix = {
                    text: "Vous continuez votre voyage avec déçu du résultat.",
                    action: "goToChapter(royaume_muspel)",
                },
            ],
        },
    //Chapitre 9
        royaume_muspel: {
            subtitle: "Le Royaume de Muspel",
            text: "Vous arrivez à Muspel juste à temps pour voir une énorme armée marchez vers vous. Tu propose à ton équipe de rester discrèt pour éviter un combat prolongué, mais Fjorm et Laergarn propose de séparer un petit group de soldat du reste de l'armée pour voler leurs vêtements de guerre dans le but de faciliter leur quête dans le royaume. Alfonse est entrain de réfléchir à une autre solution, mais il est d'accord avec les filles, il faut continuer de s'avancer sans ce faire repérer par les soldats ou tout autre personne de Muspel. À toi de jouer tacticien, qu'est-ce que tu va faire?",
            img: "image/royaume_muspel.png",
            options: [
                choix = {
                    text: "Voler les déguisements d'un petit group de soldats.",
                    action: "goToChapter(uniforme_soldat)",
                },
                choix = {
                    text: "Faire face contre l'armée.",
                    action: "goToChapter(group_capturer)",
                },
            ],
        },
    //Chapitre 10
        mission_infiltration: {
            subtitle: "Mission infiltrer le Château de Flame",
            text: "Laegarn reussi de vous faire rentrer dans le chateau sans problème. Il reste maintenant de trouver où ils ont pris les enfants (Ygl et Veronica). Vous commencer votre recherche au premier niveau du chateau, vous ne trouvez pas les enfants, mais vous entendez des soldats parler des enfants: `J'espère qu'on va avoir une promotion après le sacrifice, dit le premier soldat.` `J'espère qu'il vont être sacrifier aujourd'hui, car celui du royaume Nifl est agassant, il ne cesse de me supplier de le laisser partir. Il est fou ce petit là!! Si le roi entend ça, il va tuer toute ma famille, puis il me laissera dans une cage remplit de feu, dit un autre soldat.` Les soldats descend un escalier pour aller dans le dungeon, votre équipe les suis sans faire du bruit. Les soldats continue de marcher au déla de la cellule des enfants. Tu n'est pas sur si c'est une bonne idée de sauver les enfants maintenant, tu réfléchis avec ton équipe pour prendre la meilleure décision. Est-ce que vous voulez les sauver maintenant ou attendre un peu?",
            img: "image/soldat.png",
            options: [
                choix = {
                    text: "Voler les déguisements d'un petit group de soldats.",
                    action: "goToChapter(sauve_enfant)",
                },
                choix = {
                    text: "Faire face contre l'armée.",
                    action: "goToChapter(ne_sauve_pas_enfant)",
                },
            ],
        },
    //Chapitre 11
        combat_final: {
            subtitle: "Un Combat Décisive!!",
            text: "C'est maintenant ou jamais! Le temps pour faire face au roi de la flame éternelle Surtr est arrivée. Surtr vous regarde avec une grimace qui forme sur son visage, `Je suis surpris que vous avez réussi de trucquer mon armée, mais c'est fini ici et maintenant!! Vous allez faire une très bonne addition au sacrifice, le pouvoir que ça va me donné, je serais invincible!! Mwuahahahahahaha!!!` `On va voir qui va avoir le dernier mot Surtr!! Fjorm cri en ce précipitant vers le roi pour l'attaquer.` Est-ce que vous êtes prés pour le combat ultime?",
            img: "image/surtr_debout.webp",
            options: [
                choix = {
                    text: "Fjorm perçe le coeur de Surt avec sa lance.",
                    action: "goToChapter(bonne_fin)",
                },
                choix = {
                    text: "Fjorm essaye de fuir la battaille.",
                    action: "goToChapter(mauvaise_fin)",
                },
                choix = {
                    text: "Fjorm tente de blesser Surtr avec sa lance.",
                    action: "goToChapter(fin_neutre)",
                },
            ],
        },
};

//Créer un tableau pour mettre l'objet chaptersObj
//let chapitreArr = [chaptersObj];

function goToChapter(chapterName) {
    let chapter = chaptersObj[chapterName];
    console.log(chapter.subtitle);
    console.log(chapter.text);
    console.log(chapter.img);
    console.log(chapter.options);
}
//Appeler la fonction, n'oublie pas les guillemets: goToChapter("le_reveil");