let inputMessage= document.getElementById("message");
console.log(inputMessage);
let submitBtn = document.getElementById("submitBtn");
let errorMessage = document.getElementsByClassName("error");
let inputPhone = document.getElementById("phone");
let errorPhone = document.getElementsByClassName("errorPhone");


submitBtn.addEventListener("click", (event) => {
// PrecentDefault para la acción, en el paso específico, pero continúan los siguientes pasos
   if(inputMessage.value.length > 50){
        event.preventDefault();
// con el block muestra el error
        errorMessage[0].style.display = "block";
   }else{
// si no cu ple con la primera condición, no muestra el error
        errorMessage[0].style.display= "none";
   }
   if(inputPhone.value.slice(0,1) !== "+"){
//evalua que en la posición 0,1 esté el signo +
    event.preventDefault();
    errorPhone[0].style.display = "block";
   }else{
    errorPhone[0].style.display= "none";
   }
   console.log(inputPhone.value.slice(0,1));
});
console.log(errorMessage[0]);

/*let apiKey = 'a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H';
let url = 'https://database.deta.sh/v1/a0wwnrex/contactmessages/items';

let options = {
   method: 'POST',
   header: {
      'X-API-Key': 'a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H'
   }
}
console.log(fetch(url,options));*/

// si el formulario es correcto, también hay que impedir que se haga ek submit 
//i hay que hacer una peticion, enviar esos datos a deta (que no vuelva a cargar la pagina y enviaremos los datos a deta)
// detectar cuando el usuario pinche en submit y recoger esos datos, asignando esa información y enviarlo a DETA. 
//Una vez hecho todo eso, mostraremos un mensaje confirmando que los datos se han enviado bien y limpiaremos el formulario
const url = 'https://database.deta.sh/v1/a0wwnrex/contactmessages/items';

const data = {
   fullName:
   email:
   phone:
   meaage:
}