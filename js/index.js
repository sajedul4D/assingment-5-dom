document.getElementById('donate').addEventListener('click',function(){
    


const donate=Number(document.getElementById('amount').value)

const balance =Number(document.getElementById('balance').innerText)
const total_amount=Number(document.getElementById('total-amount').innerText)
if(isNaN(donate) || donate<=0){
  
    return alert('Invalid')
}
if(total_amount < donate){
   
    return alert('Insufficient Balance');
}
else {
    const updatedNoakhaliNumber = donate + balance;
    document.getElementById('balance').innerText = updatedNoakhaliNumber.toFixed(2);

    let UpdatedBalanceNumber = total_amount - donate;
    document.getElementById('total-amount').innerText = UpdatedBalanceNumber.toFixed(2);

}

document.getElementById("my_modal_1").showModal();

})
// feni donate
document.getElementById('donate-2').addEventListener('click',function(){
    const donate=Number(document.getElementById('amount-2').value)

    const balance =Number(document.getElementById('balance-2').innerText)
    const total_amount=Number(document.getElementById('total-amount').innerText);
    if(isNaN(donate) || donate <=0){
        return alert('inValid')
    }
    if(total_amount<donate){
        return alert('Insufficient Balance');
    }
    else{
        feniAmount=balance+donate;
      document.getElementById('balance-2').innerText=feniAmount
       const MyAmount=total_amount-donate;
      document.getElementById('total-amount').innerText=MyAmount
    }
    document.getElementById("my_modal_1").showModal();
})

//Aid for Injured in the Quota Movement
document.getElementById('donate-3').addEventListener('click',function(){
    const donatAmount=Number(document.getElementById('amount-3').value);
    const balance=Number(document.getElementById('balance-3').innerText);
    const total_amount=Number(document.getElementById('total-amount').innerText);

   if(isNaN(donatAmount) || donatAmount<=0){
    return alert('Invalid')
   }
   if(total_amount<=donatAmount){
    return alert('Insufficient Balance');
   }
   else{
    const Quota=donatAmount+balance;
    document.getElementById('balance-3').innerText=Quota

    const QuotaBalance=total_amount-donatAmount;
    document.getElementById('total-amount').innerText=QuotaBalance
   }
   document.getElementById('my_modal_1').showModal();
})
// kids 
document.getElementById('donate-4').addEventListener('click',function(){
    const donatAmount=Number(document.getElementById('amount-4').value);
    const balance=Number(document.getElementById('balance-4').innerText);
    const total_amount=Number(document.getElementById('total-amount').innerText);

   if(isNaN(donatAmount) || donatAmount<=0){
    return alert('Invalid')
   }
   if(total_amount<=donatAmount){
    return alert('Insufficient Balance');
   }
   else{
    const kids=donatAmount+balance;
    document.getElementById('balance-4').innerText=kids

    const kidsBalance=total_amount-donatAmount;
    document.getElementById('total-amount').innerText=kidsBalance
   }
   document.getElementById('my_modal_1').showModal();
})