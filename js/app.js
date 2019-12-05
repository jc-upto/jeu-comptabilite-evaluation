
document.getElementById("add-spending").addEventListener("click", function(event) {
    appendElement("spending-fieldset", "Dépense personnalisée");
});

document.getElementById("add-income").addEventListener("click", function() {
    appendElement("income-fieldset", "Entrée personnalisée");
});

document.getElementById("add-saving").addEventListener("click", function(){
    appendElement("saving-fieldset", "Autre épargne");

});

document.getElementById("reset").addEventListener("click", function(){
    let elements = document.getElementsByTagName("input");
    for(let element of elements) {
        element.value = "";
    }
});


document.getElementById("result").addEventListener("click", function() {
    let elementsSpendings = document.querySelectorAll("#spending-fieldset input");
    let elementsIncomes = document.querySelectorAll("#income-fieldset input");
    let elementsSavings = document.querySelectorAll("#saving-fieldset input");
    let outputMessage = document.getElementById("balance-div-message");

    let spendingTotal = 0;
    let incomeTotal = 0;
    let savingTotal = 0;
    let diff = 0;

    for(let spending of elementsSpendings) {
        if(!isNaN(parseFloat(spending.value))) {
            spendingTotal += parseFloat(spending.value);
        }
    }

    for(let income of elementsIncomes) {
        if(!isNaN(parseFloat(income.value))) {
            incomeTotal += parseFloat(income.value);
        }
    }

    for(let saving of elementsSavings) {
        if(!isNaN(parseFloat(saving.value))) {
            savingTotal += parseFloat(saving.value);
        }
    }

    document.getElementById("total-spending-div").innerHTML = "Total des dépenses: " + spendingTotal + "€";
    document.getElementById("total-income-div").innerHTML = "Total des rentrées: " + incomeTotal + "€";
    document.getElementById("total-saving-div").innerHTML = "Total de l'épargne: " + savingTotal + "€";
    diff = incomeTotal - spendingTotal;
    document.getElementById("balance-div").innerHTML = "Balance: " + diff + "€";

    if(diff < 0) {
        outputMessage.innerHTML = "Vous êtes en déficit. Il vous faudra trouver une solution !";
    }
    else if(diff > 0 && diff < 300) {
        outputMessage.innerHTML = "Un mois difficile s'annone !";
    }
    else {
        outputMessage.innerHTML = "Tout semble se dérouler correctement !";
    }
});


function appendElement(parentId, label) {
    let parent = document.getElementById(parentId);
    let element = document.createElement("input");
    let elementLabel = document.createElement("label");

    elementLabel.innerHTML = label;
    element.type = "number";

    parent.appendChild(elementLabel);
    parent.appendChild(element);
}