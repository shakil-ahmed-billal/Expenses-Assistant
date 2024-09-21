

let balance = 0 ;
let totalExpenses = 0 ;
const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', function(){

    totalExpenses = inputValue('software') + inputValue('courses') + inputValue('internet')
    const newBalance =  inputValue('income') ;
    balance = newBalance - totalExpenses ;

    if(balance > totalExpenses){
        // result section dom function
        const resultSection = inputEl('results');
        resultSection.classList.remove('hidden')

        // show output result section
        inputEl('total-expenses').innerText = totalExpenses ;
        inputEl('balance').innerText = balance ;

        // show history section result ....
        const div = document.createElement('div');
        div.innerHTML = `
                  <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
                  <p class="text-xs text-gray-500">Income: ${newBalance}</p>
                  <p class="text-xs text-gray-500">Expenses: ${totalExpenses}</p>
                  <p class="text-xs text-gray-500">Balance: ${balance}</p>
        `
        inputEl('history-list').appendChild(div);
    }
    else{
        return alert('more income genaret');
    }

})

inputEl('calculate-savings').addEventListener('click', function(){
    // saving section calculate
    const savings = balance * inputValue('savings') / 100 ;
    inputEl('savings-amount').innerText = savings ;

    // remaining balance calculate 
    const remaining = balance - savings ;
    inputEl('remaining-balance').innerText = remaining
})

// button function section.........

// history button style.......
inputEl('history-tab').addEventListener('click', function(){
    showForm('history-section');
    inputEl('assistant-tab').classList.remove(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600",)
    
    
        inputEl('history-tab').classList.add(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600",)
})


// assistant button style ........
inputEl('assistant-tab').addEventListener('click', function(){
    showForm('expense-form');


    inputEl('history-tab').classList.remove(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600",)
    
    
        inputEl('assistant-tab').classList.add(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600",)
})
