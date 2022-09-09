const url = 'https://database.deta.sh/v1/a0wwnrex/contactmessages/items';

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


