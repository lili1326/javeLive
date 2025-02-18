

// je récupére le id :form
const form = document.getElementById('form');
const firstname =document.getElementById('firstname');
const lastname = document.getElementById('lastname');
  
 
function clearFormValidation(form){
 form.querySelectorAll('.error').forEach(element =>{
   element.innerHTML= '';
  }) 
}

form.querySelectorAll('input.succes').forEach(element =>{
    element.classList.remove('succes'); 
})

 function clearElementValidation(element){
   const errorDiv =element.parentElement.querySelector('.error');  

if (errorDiv){
    errorDiv.innerHTML='';
}
 }

function writeFormErrorMessage(element,message){
    const errorDiv =element.parentElement.querySelector('.error');  
 errorDiv.innerHTML= message;
}

 
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

clearFormValidation(event.currentTarget)

  for(let element of form.elements){
 
  if(validateFormElement(element)=== false){
     errors = true;
   }
}
  if (errors === false){
   event.currentTarget.submit();
  }
});

form.querySelectorAll('input[type=text]').forEach((element)=>{
element.addEventListener('keyup', event =>{
if(validateFormElement(event.currentTarget)===true){
    clearElementValidation(event.currentTarget);
}
});
});

//au survol de l'élément
firstname.addEventListener('mouseover',event =>{
    const label =event.currentTarget.parentNode.querySelector('label');
    label.style.fontWeight="bold";
    event.currentTarget.style.color="blue";
})

firstname.addEventListener('mouseout',event =>{
    const label =event.currentTarget.parentNode.querySelector('label');
    label.style.removeProperty('font-Weight');
    
})

//quand on sort de l'élément
//firstname.addEventListener('mouseout',event =>{
   // console.log(event.currentTarget);
//})


const selectElement = document.getElementById('mySelect');

selectElement.addEventListener('change',function(event){
 const selectValue= event.target.value;
 console.log(`Vous avez sélectionné : ${selectValue}`);
});


const ecoCheckbox =form.querySelector("#eco");
 

ecoCheckbox.addEventListener('change',function(event){
  const isChecked= event.target.checked;
  console.log(`Vous avez sélectionné  voiture éléctrique: ${isChecked}`);
 });

 