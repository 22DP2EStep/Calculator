let string = "";
let textField = document.getElementById("textField");
let buttons = document.querySelectorAll("button");
let records = [];

buttons.forEach((button) => {
   
    if (button.id === "clearHistory") {
        button.addEventListener('click', clearHistory); 
    } else {
        button.addEventListener('click', f); 
    }
});

function f(event) {
    let buttonText = event.target.innerHTML;

    if (buttonText === 'C') {
        textField.value = "";
        string = "";
    }
    else if (buttonText === 'DEL') {
        string = string.slice(0, -1);
        textField.value = string;
    }
    else if (buttonText === '=') {
        let result = execute(string);
        textField.value = result;
        string = result;
        records.push(string);

        
        if (records.length > 5) {
            records.shift(); 
        }

        updateHistory();
    }
    else {
        string += buttonText;
        textField.value = string;
    }
}

function execute(expression) {
    try {
        return eval(expression); 
    } catch (error) {
        console.log(error);
        return 'ERROR';
    }
}

function updateHistory() {
    let historyList = document.getElementById("historyList");
    historyList.innerHTML = ""; 

    records.forEach((entry, index) => {
        
        let li = document.createElement("li");
        li.textContent = entry;

       
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.style.marginLeft = "10px";
        
        
        deleteButton.addEventListener("click", () => {
            deleteHistoryItem(index); item
        });

       
        li.appendChild(deleteButton);
        
        
        historyList.appendChild(li);
    });
}

function deleteHistoryItem(index) {
    
    records.splice(index, 1);
    
    
    updateHistory();
}

function clearHistory() {
    
    records = [];
    
    
    updateHistory();
    
   
    textField.value = "";
    string = "";
}
