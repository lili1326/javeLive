console.log(document);


// récupérer les éléments avec :
const prenom = document.getElementById('prenom');
console.log(prenom);


//ou 


const nom =document.querySelector("#nom"); //# pour un id et . pour une classe 
console.log(nom.value);
console.log(nom.id);
console.log(nom.type);

// jouer sur les styles
prenom.style.background ="#b2b2b2";

//style en css pour ajouter ou changer MAIS CSS dans fichier scc
nom.classList.add('test-class');


const notes= [10,15,20,5];
console.log(notes);

const fruits=["pomme","poire","fraise"];
//console.log(fruits);
console.log("je mange le fruit: "+ fruits[1])

console.log("--------------------");
//.................... FOR   avec compterur  on utilise l'index........................

// de counter  0    a counter max tableau    de 1 en 1 
for(let counter=0; counter<fruits.length ; counter++){
   // console.log(counter);
  console.log("je mange le fruit:"+fruits[counter]+"!");
}

console.log("--------------------");
//...............................for of  on utilise la valeur.............................

for(let element of fruits){
 console.log("je mange le fruit: "+ element +"!");
}

console.log("--------------------");
//.......................forEach. boucle sur des element html................

fruits.forEach((element) =>{
    console.log("je mange le fruit: "+ element+"!") ;
});

console.log("--------------------");
//....................... Séléction des élément dans le html

let formgroup=document.querySelectorAll('.form-group');//renvoie une collection
//console.log(formgroup);NodeList [ div.form-group, div.form-group ]

//passer la collection en tableaux
Array.from(formgroup).forEach((element)=>{
    console.log(element);//affiche chaque element de formgroup
    //element.remove() :pour supprimer les deux éléments
})

 


