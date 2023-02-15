


document.getElementById('calculate=btn').addEventListener('click', function(){
    const foodFiled = document.getElementById('food').value;
    const rentFiled = document.getElementById('rent').value;
    const clothesFiled = document.getElementById('clothes').value;

    const totalCost = parseInt(foodFiled) + parseInt(rentFiled) + parseInt(clothesFiled)
    
    const expenses = document.getElementById('expenses');
    expenses.innerText = totalCost
    const totalIncome = document.getElementById('total-income').value;
    const balenceLeft = document.getElementById('Balance');
    const leftTaka = totalIncome - totalCost;
     balenceLeft.innerText = leftTaka;
    
})

document.getElementById("saving-btn").addEventListener('click', function(){
    const totalIncomestring = document.getElementById('total-income').value;
    const totalIncome = parseFloat(totalIncomestring);

    const saving = document.getElementById('Saving');
    
    const savingField = document.getElementById('save-input').value;
    // console.log(savingField)
     const totalIncomeSave = (totalIncome/100)* savingField;
     saving.innerText = totalIncomeSave;

     const balenceLeftString = document.getElementById('Balance').innerText;
     const balenceLeft = parseFloat(balenceLeftString)

     const remainingBalence = balenceLeft - totalIncomeSave;

     const remaining = document.getElementById('remaining');
     remaining.innerText = remainingBalence
     
})