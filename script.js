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