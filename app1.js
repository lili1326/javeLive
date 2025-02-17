
 

// je récupére le id :form
const form = document.getElementById('form');
  
 
function clearFormError(form){
 form.querySelectorAll('.error').forEach(element =>{
   element.innerHTML='';
 
  }) 
}

// fonction pour écrirer le message d errors
function writeFormErrorMessage(element,message){
 const errorDiv =element.parentElement.querySelector('.error');
 errorDiv.innerHTML=message;
}

//valide le formulaire 
function validateFormElement(element){
 if('submit'=== element.type){
   return true;
 }

 element.classList.remove('succes');

 if('text' === element.type && element.value.length < element.min ){ 
 writeFormErrorMessage(element,'Le contenu du champ doit être compris entre : '+ element.min + ' et '+element.max +' caractères');

  return false;
}
if('number' === element.type && element.min && element.value < element.min ){  
 writeFormErrorMessage(element, 'le nombre doit être supérieur à ' + element.min );

 return false;
}

element.classList.add('succes');
 return true;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let errors =false; 

clearFormError(event.currentTarget)

  for(let element of form.elements){
 
  if(validateFormElement(element)=== false){
     errors = true;
   }
}
  if (errors === false){
   event.currentTarget.submit();
  }
});

