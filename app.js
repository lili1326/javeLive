 
// console.log('test 1');

// je récupére le id :form
 const form = document.getElementById('form');
 //console.log(form);


 //en code propre avec fonction:
 //recupérer toutes les erreurs et effacer le message dans l'interface
// affiche avec console NodeList [ div.error, div.error ] 

 function clearFormError(form){
  form.querySelectorAll('.error').forEach(element =>{
    element.innerHTML='';
  //  console.log(element); 
   }) 
 }

 // fonction pour écrirer le message d errors
 function writeFormErrorMessage(element,message){
  const errorsDiv =element.parentElement.querySelector('.errors');
  errorsDiv.innerHTML=message;
 }

 //valide le formulaire 
function validateFormElement(element){
  if('submit'=== element.type){
    return true;
  }
  if('text'=== element.type && element.value.length < element.min || element.value.length > element.max){ 
  // ligne ci dessous passée en fonction
  //  const errorDiv =element.parentElement.querySelector('.error');
  //  errorDiv.innerHTML = 'Le contenu du champ doit être compris entre : '+ element.min + ' et '+element.max +' caractères';
  writeFormErrorMessage(element,'Le contenu du champ doit être compris entre : '+ element.min + ' et '+element.max +' caractères')
   return false;
}
if('text'=== element.type && element.value.length < element.min ){  
  writeFormErrorMessage(element,'Le nombre doit être supérieur a 15 : '+ element.min )
   return false;
}
  return true;
}

form.addEventListener('submit', (event) => {
   event.preventDefault();
   console.log('test 2');
   let errors =false;//pour actualisé le navigateur et valider le formulairesi pas d errors

   //appel la fintion clearFormError arget récupére le event "subimit de form"
clearFormError(event.currentTarget)
 


   for(let element of form.elements){
    if(validateFormElement(element)=== false){
      errors = true;
    }

    // ne pas récupérer submit
   // if('submit'=== element.type){
    //  continue;
    }
    //   ex:1 autre facon de gérer l'error :affiche sur l'interface l'erreur
   // if('text'=== element.type && element.value.length < element.minlength || element.value.length > element.maxlength){
   //affiche l'erreur dans la console
  // if('text'=== element.type && element.value.length < element.min || element.value.length > element.max){ 
  // console.log(' error : '+ element.id);
  //récupérer div error
  //const errorDiv =element.parentElement.querySelector('.error');
 // errorDiv.innerHTML = 'Le contenu du champ doit être compris entre : '+ element.min + ' et '+element.max +' caractères';
// errors=true;
  //console.log(errorDiv);
//    }
   // console.log(element);
 // }

   // réactualise le navigateur et valide le formulaire si pas d'error
   if (errors === false){
    event.currentTarget.submit();
   }
 });
 
