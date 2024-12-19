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
const div=document.createElement('div');
div.classList=' font-bold space-y-4 p-6 border-2 border-gray-300 border-dotted'
div.innerHTML=`<p class=text-2xl font-bold >${donate} Taka is Donated for famine-2024 at Noakhali, Bangladesh</p>
<p>${new Date()}</p>`
const headContainer=document.getElementById('history-container');
headContainer.insertBefore(div,headContainer.firstChild)

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
    const div=document.createElement('div');
    div.classList=' font-bold space-y-4 p-6 border-2 border-gray-300 border-dotted'
    div.innerHTML=`<p class=text-2xl font-bold >${donate} Taka is Donated for famine-2024 at feni, Bangladesh</p>
    <p>${new Date()}</p>`
    const headContainer=document.getElementById('history-container');
    headContainer.insertBefore(div,headContainer.firstChild)

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

   const div=document.createElement('div');
div.classList=' font-bold space-y-4 p-6 border-2 border-gray-300 border-dotted'
div.innerHTML=`<p class=text-2xl font-bold >${donatAmount} Taka is Donated for Injured in the Quota, Bangladesh</p>
<p>${new Date()}</p>`
const headContainer=document.getElementById('history-container');
headContainer.insertBefore(div,headContainer.firstChild)
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
   const div=document.createElement('div');
   div.classList=' font-bold space-y-4 p-6 border-2 border-gray-300 border-dotted'
   div.innerHTML=`<p class=text-2xl font-bold >${donatAmount} Taka is Donated for  Palestinians kids gaza,  Palestinians</p>
   <p>${new Date()}</p>`
   const headContainer=document.getElementById('history-container');
   headContainer.insertBefore(div,headContainer.firstChild)

   document.getElementById('my_modal_1').showModal();
})



const Donation=document.getElementById('Donation');
const history=document.getElementById('History');
history.addEventListener('click',function(){
    history.classList.add('bg-[#B4F461]')
    Donation.classList.remove('bg-[#B4F461]');
    document.getElementById('history-container').classList.remove('hidden');
    document.getElementById('main-container').classList.add('hidden')
})

Donation.addEventListener('click',function(){
  Donation.classList.add('bg-[#B4F461]')
  history.classList.remove('bg-[#B4F461]')
  document.getElementById('main-container').classList.remove('hidden');
  document.getElementById('history-container').classList.add('hidden')

})
