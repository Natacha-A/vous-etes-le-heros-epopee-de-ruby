let chaptersObj = {
    le_reveil: {  
        subtitle: "L'aventure Commence!!",
        text: "Tu te reveille au son de quelqu'un qui cogne à la porte. C'est Fjorm, elle vous supplie de l'aider contre le royaume de Muspel qui menace de détruire son royaume Nifl",
        img: "royaume_askr.png"
    },
    village_brule: {  
        subtitle: "Un Dilemme incontournable",
        text: "Tu entend des cris venant d'un village assez proche. Vous vous précipiteriez vers celui-ci. Une fois arrivée au village, un villageois gravement blessé vous demande de les aider `À l'aide notre village est entrain de se faire attaquer, aider nous je vous ensupplie` il dit avant de succomber à ces blessures.",
        img: "village_brule_02.png"
    },
    armee_muspel: {  
        subtitle: "Un Choix Mortel",
        text: "L'armée enemie vous prend par surprise. Laveaten, le premier général de Muspel attaque le joueur, mais tu esquive son attaque prématuré assez facilement. Alfonse et le reste de ton équipe se précipitent à tes côtés, les villageois encore vivant ce tasse du chemin le plus vite possible et le reste sont entrain de brûler vivant à cause de la flame éternelle. Le combat commence tous les armes sont pointées vers l'enemi qui va gagner? ",
        img: "laevatein_combat.png"
    },
    royaume_nifl: {
        subtitle: "Les nouveaux occupants",
        text: "Vous arrivez à Nifl et le territoire est remplis d'enemis. Vous décidez de vous aventurier pour trouver la soeur de Fjorm, car elle est la seul qui possède le pouvoir de vous aider à vaincre Surtr, le roi de Muspel. Soudainement, tu entend une dizaine de pas s'approcher vers vous, ce sont des soldats de Muspel avec leur général Laegjarn. Vous voulez éviter le combat le plus que possible, car les soldats peuple le territoire de Nifl. Quoi faire? ",
        img: "laergarn_debout.png"
    },
}

function goToChapter(chapterName) {
    let chapter = chaptersObj[chapterName];
    console.log(chapter.subtitle);
    console.log(chapter.text);
    console.log(chapter.img);
}