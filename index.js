function addIncome() {
    
    const income1 = document.getElementById("salary").value;
    const income2 = document.getElementById("bonus").value;
    const income3 = document.getElementById("tips").value;
    const income4 = document.getElementById("other").value;

   
    const sum = Number(income1) + Number(income2) + Number(income3) + Number(income4);
    

    document.getElementById("total").value = `$` + sum;
    

    const monthlyIncome = sum / 12;


    for (let i = 1; i <= 12; i++) {
        document.getElementById("inctablerow" + i).innerHTML = `$${monthlyIncome.toFixed(2)}`;
    
    }
}

function addExpenses(){


    const expense1 = document.getElementById("mortgage").value;
    const expense2 = document.getElementById("insurance").value;
    const expense3 = document.getElementById("car").value;
    const expense4 = document.getElementById("utilities").value;
    const expense5 = document.getElementById("expense5").value;

    const sum = Number(expense1)+Number(expense2)+Number(expense3)+Number(expense4)+Number(expense5);

    document.getElementById("expensetotal").value = `$`+sum;



    const monthlyExpenses = sum;
    for (let i = 1; i <= 12; i++) {
        document.getElementById("exptablerow" + i).innerHTML = `$${monthlyExpenses.toFixed(2)}`;
    
    }
}






function takeHomePay(){

    const totalIncome = document.getElementById("total").value.replace('$','');
    const totalExpenses = document.getElementById("expensetotal").value.replace('$','');

    const incomeAmount = Number(totalIncome);
    const expenseAmount = Number(totalExpenses);

    const monthlyTakeHomePay = (incomeAmount/12)-expenseAmount;
    

    for (let i = 1; i <= 12; i++) {
        document.getElementById("takeHomePay" + i).innerHTML = `$${monthlyTakeHomePay.toFixed(2)}`;
    }

}