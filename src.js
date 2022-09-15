let inputMessage= document.getElementById("message");
console.log(inputMessage);
let submitBtn = document.getElementById("submitBtn");
let errorMessage = document.getElementsByClassName("error");
let inputPhone = document.getElementById("phone");
let errorPhone = document.getElementsByClassName("errorPhone");
let inputFullName = document.getElementById("name");
let inputEmail = document.getElementById("email");
let inputErrorMessage = false;
let inputErrorPhone = false;
let result_api = document.getElementsByClassName('result_api');
let register = document.getElementById('register');
const url = 'https://database.deta.sh/v1/a0wwnrex/contactmessages/items';

submitBtn.addEventListener("click", (event) => {

// PrecentDefault para la acción, en el paso específico, pero continúan los siguientes pasos
   if(inputMessage.value.length > 50){
      event.preventDefault();

// con el block muestra el error
        errorMessage[0].style.display = "block";
        inputErrorMessage = true;
   }else{
// si no cumple con la primera condición, no muestra el error
        errorMessage[0].style.display= "none";
        inputErrorMessage = false;
   }
   if(inputPhone.value.slice(0,1) !== "+"){
      event.preventDefault();

//evalua que en la posición 0,1 esté el signo +
    errorPhone[0].style.display = "block";
    inputErrorPhone = true;
   }else{
    errorPhone[0].style.display= "none";
    inputErrorPhone = false;
   }
   console.log(inputPhone.value.slice(0,1));
   if(inputErrorMessage == false && inputErrorPhone == false){
      const data = {
         fullName: inputFullName.value,
         email: inputEmail.value,
         phone: inputPhone.value,
         message: inputMessage.value,
      }
      console.log(data);
   
      const body = {item: data};
   
      const fetchParams = {
         method: 'POST',
         headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
            'X-API-Key': 'a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H'
         },
         body: JSON.stringify(body),
        
      };
      console.log(result_api);
   
      fetch(url, fetchParams)
         .then(res => res.json())
         .then(result => {
            if(result.errors){
               result_api[0].innerHTML = 'error';
               console.log('Error');

            }else{
               result_api[0].innerText= 'Thank you! Your message has been sent.';
               console.log('Thank you! Your message has been sent.');
               register.reset();

            };
         });  

   }
});




// si el formulario es correcto, también hay que impedir que se haga ek submit 
//i hay que hacer una peticion, enviar esos datos a deta (que no vuelva a cargar la pagina y enviaremos los datos a deta)
// detectar cuando el usuario pinche en submit y recoger esos datos, asignando esa información y enviarlo a DETA. 
//Una vez hecho todo eso, mostraremos un mensaje confirmando que los datos se han enviado bien y limpiaremos el formulario
/*const url = 'https://database.deta.sh/v1/a0wwnrex/contactmessages/items';

const data = {
   fullName:
   email:
   phone:
   meaage:
};
const body{item: data};

const fetchParams = {
   method: 'POST',
   headers: {
      "Accept": 'aplication/json',
      "Content-Type": 'aplication/json',
      'a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H'
   },
   body:JSON.stringify(body)
};

fetch(url, fetchParams)
   .then(response => {
      if(response.ok) return response.json();
   })
   .then(json => {
      console.log(json);
   });*/