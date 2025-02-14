console.log('test');


// moyenne de........

const notes= [10,15,20,0];
let total=0;

for(let element of notes){
 total += element ;
console.log(total);
}

const moyenne = total/notes.length;
console.log("la moyenne est de ; "+ moyenne);

if(moyenne>=15 & moyenne<=20){
    console.log("votre moyenne est de "+ moyenne+ " toutes nos félicitations");
}else if(moyenne>=10 & moyenne <15){
    console.log( "votre moyenne est de "+ moyenne+ " tous nos encouragements")
}else if(moyenne>=8 & moyenne<10){
    console.log( "votre moyenne est de "+ moyenne+ " continuez votre progression")
}else if(moyenne<8 & moyenne>=0){
    console.log( "votre moyenne est de "+ moyenne+ " vous devez vous ressaisir")
}else{
    console.log('erreur dans le calcul de votre moyenne')
};


console.log("--------------------");
//...........................................................

 function calculMoyenne(note,prenom){

    let total=0;

    for(let element of note){
        total += element ;
       //console.log(total);
       }
       
       const moyenne = total/notes.length;
       console.log("la moyenne est de ; "+ moyenne);
       
       if(moyenne>=15 & moyenne<=20){
           console.log(prenom +" votre moyenne est de "+ moyenne+ " toutes nos félicitations");
       }else if(moyenne>=10 & moyenne <15){
           console.log( prenom +" votre moyenne est de "+ moyenne+ " tous nos encouragements")
       }else if(moyenne>=8 & moyenne<10){
           console.log( prenom +" votre moyenne est de "+ moyenne+ " continuez votre progression")
       }else if(moyenne<8 & moyenne>=0){
           console.log(prenom + " votre moyenne est de "+ moyenne+ " vous devez vous ressaisir")
       }else{
           console.log('erreur dans le calcul de votre moyenne')
       };

}

const notesAure= [10,15,20,0];
const notesLili= [15,15,20,20];



calculMoyenne(notesAure,"Aure");
console.log("--------------------");
calculMoyenne(notesLili,"Lili");