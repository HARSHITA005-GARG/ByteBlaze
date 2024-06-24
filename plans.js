// js for plans-duration button
const plansSwitch = document.querySelector(".plans-switch");
const basicPrice = document.querySelector(".basic-price");
const professionalPrice = document.querySelector(".professional-price");
const businessPrice = document.querySelector(".business-price");
const planDuration = document.querySelectorAll(".plan-duration");

plansSwitch.addEventListener('change',() =>{
  if(plansSwitch.checked){
    basicPrice.innerText= "$349";
    professionalPrice.innerText= "$499";
    businessPrice.innerText= "$799";
    planDuration.forEach(span =>{
      span.innerText= "/ year";
    })
  } else{
    basicPrice.innerText= "20K INR";
    professionalPrice.innerText= "50K INR";
    businessPrice.innerText= "80K INR";
    planDuration.forEach(span =>{
      span.innerText= "/ month";
    })
  }
}
)

