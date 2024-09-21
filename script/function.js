// utility function add this side

function inputValue(id){
    const inputValue = document.getElementById(id).value ;
    const newInputValue = parseFloat(inputValue);
    return newInputValue ;
}

function inputText(id){
    const inputText = document.getElementById(id).innerText ;
    return inputText;
}

function inputEl(id){
    const inputElement = document.getElementById(id);
    return inputElement ; 
}

// feature and button section ...

function showForm(id){
    document.getElementById('expense-form').classList.add('hidden')
    document.getElementById('history-section').classList.add('hidden')

    // show add section.....
    document.getElementById(id).classList.remove('hidden');
}