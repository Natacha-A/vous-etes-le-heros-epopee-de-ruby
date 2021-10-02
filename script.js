//Terminer la création des objets principaux (les lozanges) et commencer les objets des options(les rectangles)
const chaptersObj = {
        le_reveil: {
            subtitle: "L'aventure Commence!!",
            text: "Tu te reveille au son de quelqu'un qui cogne à la porte. C'est Fjorm, elle vous supplie de l'aider contre le royaume de Muspel qui menace de détruire son royaume Nifl.",
            img: "image/fjorm_determine.jpg",
        },
        village_brule: {
            subtitle: "Un Dilemme incontournable",
            text: "Tu entend des cris venant d'un village assez proche. Vous vous précipiteriez vers celui-ci. Une fois arrivée au village, un villageois gravement blessé vous demande de les aider `À l'aide notre village est entrain de se faire attaquer, aider nous je vous ensupplie` il dit avant de succomber à ces blessures.",
            img: "image/village_brule_02.png",
        },
        armee_muspel: {  
            subtitle: "Un Choix Mortel",
            text: "L'armée enemie vous prend par surprise. Laveaten, le premier général de Muspel attaque le joueur, mais tu esquive son attaque prématuré assez facilement. Alfonse et le reste de ton équipe se précipitent à tes côtés, les villageois encore vivant ce tasse du chemin le plus vite possible et le reste sont entrain de brûler vivant à cause de la flame éternelle. Le combat commence tous les armes sont pointées vers l'enemi qui va gagner?",
            img: "image/laevatein_combat.png",
        },
        royaume_nifl: {
            subtitle: "Les nouveaux occupants",
            text: "Vous arrivez à Nifl et le territoire est remplis d'enemis. Vous décidez de vous aventurier pour trouver la soeur de Fjorm, car elle est la seul qui possède le pouvoir de vous aider à vaincre Surtr, le roi de Muspel. Soudainement, tu entend une dizaine de pas s'approcher vers vous, ce sont des soldats de Muspel avec leur général Laegjarn. Vous voulez éviter le combat le plus que possible, car les soldats peuple le territoire de Nifl. Quoi faire?",
            img: "image/laergarn_debout.png",
        },
        rencontre_gunthra: {
            subtitle: "À la rencontre de Gunthrà",
            text: "Fjorm dirige la recherche de sa soeur Gunthrà. Fjorm peut ressentir le pouvoir de sa soeur à cause de son lien avec le dieu de leur royaume Nifl. Dans un rien de temps Fjorm retrouve Gunthrà cachée derrière des ruines d'une maison. Vous vous précipité vers elle, elle est blessée, elle ne sait pas combien de temps elle va survivre encore. Il ne reste pas beaucoup de temps, elle doit donner la lance à sa soeur pour qu'elle puisse faire le rituel de la glace afin d'avoir une chance contre Surtr. Il faut faire vite, est-ce que tu est arrivée avant 7 jours tacticien?",
            img: "image/gunthra_debout.png",
        },
        temple_glace: {
            subtitle: "Le Rituel de Glace",
            text: "Arrivée au temple de la glace, Fjorm fait face à une décision entrer et faire le rituel ou non. Il y a un risque à faire ce rituel, mais Fjorm sait cela depuis longtemps. Sa détermination à vaincre Surtr et libérer le monde de ce dictateur écrase sa peur de mourrir, mais quand même... Le rituel pourrait ne simplement pas marcher et là quoi faire... Personne ne serait capable de tuer le roi avec le pouvoir de la flame éternelle. NON, il faut faire ce rituel à tout prix!! C'est notre seule chance de vaincre Surtr! dit Fjorm. Tacticien, c'est à toi de jouer, qu'est ce que vous allez faire?",
            img: "image/temple.jpg",
        },
        le_rituel: {
            subtitle: "La Lance Légendaire",
            text: "Une fois dans le temple Fjorm s'apprête à tout sacrifier pour sauver ce qui reste de son royaume et d'épargner le reste du monde de cette tragédie.",
            img: "image/fjorm_temple.png",
        },
        royaume_muspel: {
            subtitle: "Le Royaume de Muspel",
            text: "Vous arrivez à Muspel juste à temps pour voir une énorme armée marchez vers vous. Tu propose à ton équipe de rester discrèt pour éviter un combat prolongué, mais Fjorm et Laergarn propose de séparer un petit group de soldat du reste de l'armée pour voler leurs vêtements de guerre dans le but de faciliter leur quête dans le royaume. Alfonse est entrain de réfléchir à une autre solution, mais il est d'accord avec les filles, il faut continuer de s'avancer sans ce faire repérer par les soldats ou tout autre personne de Muspel. À toi de jouer tacticien, qu'est-ce que tu va faire?",
            img: "image/royaume_muspel.png",
        },
        mission_infiltration: {
            subtitle: "Mission infiltrer le Château de Flame",
            text: "Laegarn reussi de vous faire rentrer dans le chateau sans problème. Il reste maintenant de trouver où ils ont pris les enfants (Ygl et Veronica). Vous commencer votre recherche au premier niveau du chateau, vous ne trouvez pas les enfants, mais vous entendez des soldats parler des enfants: `J'espère qu'on va avoir une promotion après le sacrifice, dit le premier soldat.` `J'espère qu'il vont être sacrifier aujourd'hui, car celui du royaume Nifl est agassant, il ne cesse de me supplier de le laisser partir. Il est fou ce petit là!! Si le roi entend ça, il va tuer toute ma famille, puis il me laissera dans une cage remplit de feu, dit un autre soldat.` Les soldats descend un escalier pour aller dans le dungeon, votre équipe les suis sans faire du bruit. Les soldats continue de marcher au déla de la cellule des enfants. Tu n'est pas sur si c'est une bonne idée de sauver les enfants maintenant, tu réfléchis avec ton équipe pour prendre la meilleure décision. Est-ce que vous voulez les sauver maintenant ou attendre un peu?",
            img: "image/soldat.png",
        },
        combat_final: {
            subtitle: "Un Combat Décisive!!",
            text: "C'est maintenant ou jamais! Le temps pour faire face au roi de la flame éternelle Surtr est arrivée. Surtr vous regarde avec une grimace qui forme sur son visage, `Je suis surpris que vous avez réussi de trucquer mon armée, mais c'est fini ici et maintenant!! Vous allez faire une très bonne addition au sacrifice, le pouvoir que ça va me donné, je serais invincible!! Mwuahahahahahaha!!!` `On va voir qui va avoir le dernier mot Surtr!! Fjorm cri en ce précipitant vers le roi pour l'attaquer.` Est-ce que vous êtes prés pour le combat ultime?",
            img: "image/surtr_debout.webp",
        }
};

//Créer un tableau pour mettre l'objet chaptersObj
//let chapitreArr = [chaptersObj];

function goToChapter(chapterName) {
    let chapter = chaptersObj[chapterName];
    console.log(chapter.subtitle);
    console.log(chapter.text);
    console.log(chapter.img);
    //console.log(chapter.options);
}
//Appeler la fonction, n'oublie pas les guillemets: goToChapter("le_reveil");