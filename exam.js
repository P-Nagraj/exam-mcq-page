let formEle=document.getElementById("questionForm");

let hydEle=document.getElementById("hyderabadCity");
let ChennaiEle=document.getElementById("ChennaiCity");
let delhiEle=document.getElementById("DelhiCity");
let mumbaiEle=document.getElementById("MumbaiCity");  
let submitBtnEle=document.getElementById("submitBtn");
let resultEle=document.getElementById("resultMsg");




formEle.addEventListener("submit",function(event){
  event.preventDefault();
});

let correctAnswer="Delhi";
let selectedCity=null;

hydEle.addEventListener("change",function(event){
  selectedCity=event.target.value;
});
ChennaiEle.addEventListener("change",function(event){
  selectedCity=event.target.value;
});

delhiEle.addEventListener("change",function(event){
  selectedCity=event.target.value;
});
mumbaiEle.addEventListener("change",function(event){
  selectedCity=event.target.value;
});

submitBtnEle.addEventListener("click",function(){
  if(selectedCity === null){
    resultEle.textContent="Please select the answer."
    resultEle.style.color="red";
  } else if(selectedCity === correctAnswer){
    resultEle.textContent="Correct answer";
    resultEle.style.color="green";
  }
  else{
    resultEle.textContent="Wrong answer";
    resultEle.style.color="red";
  }
});
 