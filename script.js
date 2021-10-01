let le_reveil = document.getElementsByClassName("game");
let village_brule = document.getElementsByClassName("game");
let armee_muspel = document.getElementsByClassName("game");
let royaume_nifl = document.getElementsByClassName("game");
let rencontre_gunthra = document.getElementsByClassName("game");
let temple_glace = document.getElementsByClassName("game");
let le_rituel = document.getElementsByClassName("game");

const chaptersObj = {
        le_reveil: {
            subtitle: "L'aventure Commence!!",
            text: "Tu te reveille au son de quelqu'un qui cogne à la porte. C'est Fjorm, elle vous supplie de l'aider contre le royaume de Muspel qui menace de détruire son royaume Nifl.",
            img: "image/royaume_askr.png",
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