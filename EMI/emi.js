const btn=document.getElementById("btn")
const result=document.getElementById("result")
result.textContent=""
btn.addEventListener('click',()=>{
const loan=document.getElementById("loan")
const rate=document.getElementById("rate")
const year=document.getElementById("year")

if(loan.value && rate.value && year.value){
   let loanInput = parseFloat(loan.value);
    let interestRate = parseFloat(rate.value) / 100/12;
    let yearsInput = parseFloat(year.value);
       
    let x = Math.pow(1 + interestRate, yearsInput);
    let monthly = (loanInput * x * interestRate)/(x-1);
    result.textContent="Your Monthly EMI is: $"+ monthly.toFixed(2);

}
else{
    alert("Please fill all input value")
}





}
)














