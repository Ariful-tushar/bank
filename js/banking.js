document.getElementById('deposite-button').addEventListener('click', function(){
    const depositeInput = document.getElementById('deposite-input') ;
    const newDepositeAmountText = depositeInput.value;
    const newDepositeAmount = parseFloat(newDepositeAmountText);
    // console.log(depositeAmount);

    // upadate deposite 
    const depositeElem = document.getElementById('deposite-total');
    const prevDepositeTotalText = depositeElem.innerText
    const prevDepositeAmount = parseFloat(prevDepositeTotalText)
    const newDepositeTotal = prevDepositeAmount+newDepositeAmount; 
    depositeElem.innerText = newDepositeTotal;
    depositeInput.value = ''

    // update balance  

    const balanceElem = document.getElementById('balance-total'); 
    const prevBalanceTotalText = balanceElem.innerText; 
    const prevBalanceTotal = parseFloat(prevBalanceTotalText);

    const newBalanceTotal = prevBalanceTotal+newDepositeAmount; 

    balanceElem.innerText = newBalanceTotal;
    
})