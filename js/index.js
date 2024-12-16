document.getElementById('donate').addEventListener('click',function(){
    
   const donate=inputFiledValue('amount');
 
    const balance=parseFloat(document.getElementById('balance').innerText);
const noakhali=balance+ donate;

console.log(noakhali);
document.getElementById('balance').innerText=noakhali;
const totalAmount=parseFloat(document.getElementById('total-amount').innerText)
const newAmount=totalAmount-donate;
document.getElementById('total-amount').innerText=newAmount


})