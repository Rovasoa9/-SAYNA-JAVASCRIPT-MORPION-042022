var layer = document.querySelector(".layer");
var layer2 = document.querySelector(".layer2");
var layer3 = document.querySelector(".layer3");
var container = document.querySelector(".container");
var grilles = document.querySelector(".grid-container");
var range = document.querySelector(".range");
let tsipika1 = document.querySelector("#tsipika1");
var cases = document.querySelectorAll(".grid-item");
var etatjeu=["","","","","","","","",""];
var Turn = null;
var clicked = 0;
function start(){
    layer.style.display = 'none';
    container.style.display ="block";
    grilles.style.display ="grid";
    return true;
};
// choisir le joueur 
function startMorpion(clicked_id){
    start();
// c'est à dire que le joueur (choose1)commence le jeu
    if(clicked_id === "choose1"){
        Turn = true;
    }else {
        Turn = false;
// quand on clic sur le joueur (choose2),tsipika1 chane de place ,c'est a dire que c'est le tour du joueur choose2 
        tsipika1.style.left ='50%';
    }
}
// si on click sur la case choisi par le joueur on affiche X ou O a partir du fonction choisir le joueur 
function choiseCase(clicked_id){
    if (Turn === true ){
        document.getElementById(clicked_id).innerHTML = "X";
        Turn = false;
        tsipika1.style.left ='40%';
    }else {
        document.getElementById(clicked_id).innerHTML = "O"; 
        Turn = true;
        tsipika1.style.left ='50%';
        }
}
const conditionvictoire =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
function gagner (){
    let tourgagnant = false;
    choiseCase();
    for (let conditionvictoire of probabiliteGagner ){
        let valeur1 = etatjeu[conditionvictoire[0]];
        let valeur2 = etatjeu[conditionvictoire[1]];
        let valeur3 = etatjeu[conditionvictoire[2]];
        if(valeur1 === "" || valeur2 === "" || valeur3 === ""){
            continue
        }
        if(valeur1 === valeur2 && valeur2 === valeur3){
            tourgagnant=true;
            break
        }
    }
    container.style.display ="none";
    layer2.style.display="block";
}

