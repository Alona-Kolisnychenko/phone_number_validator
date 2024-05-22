const input = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultBlock = document.getElementById('results-div');

const regexpNumber = /^1?(\s)?((\(\d{3}\))|(\d{3}))(\s|-)?(\d{3})(\s|-)?(\d{4})$/; 

const checkNumber = (number)=>{
    return regexpNumber.test(number)
}
const createResponse = (isValid, number)=>{
    const elem = document.createElement('p');
    elem.className = 'result';
    elem.innerText = isValid? `Valid US number: ${number}` : `Invalid US number:  ${number}`;
    return elem
}

const setResult = ()=>{
    const phoneNumber = input.value;
    if(!phoneNumber){
        alert('Please provide a phone number')
    } else {
        resultBlock.appendChild(createResponse(checkNumber(phoneNumber), phoneNumber))
    }
    
}

const clearResultBlock = ()=>{
    resultBlock.innerHTML = '';
}

checkBtn.addEventListener('click', setResult)
clearBtn.addEventListener('click', clearResultBlock)