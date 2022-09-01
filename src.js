let inputMessage= document.getElementById("message");
console.log(inputMessage);
let submitBtn = document.getElementById("submitBtn");
let errorMessage = document.getElementsByClassName("error");
let inputPhone = document.getElementById("phone");
let errorPhone = document.getElementsByClassName("errorPhone");


submitBtn.addEventListener("click", (event) => {
   if(inputMessage.value.length > 50){
        event.preventDefault();
        errorMessage[0].style.display = "block";
   }else{
        errorMessage[0].style.display= "none";
   }
   if(inputPhone.value.slice(0,1) !== "+"){
    event.preventDefault();
    errorPhone[0].style.display = "block";
   }else{
    errorPhone[0].style.display= "none";
   }



   console.log(inputPhone.value.slice(0,1));
});
console.log(errorMessage[0]);


