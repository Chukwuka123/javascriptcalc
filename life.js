const num1 = parseFloat(prompt('Enter nr1: '));
const num2 = parseFloat(prompt('Enter nr2: '));

const operator = prompt ('enter operator(+,-,/,*)')
let result = 0;
if(isNaN(num1) || isNaN(num2)){
    alert('wrong input! please refresh the page again and input correct detail')
}else{
    if(operator == '+'){
        result = num1 + num2;
    }else if(operator == '-'){
        result = num1 - num2;
    }else if (operator == '/'){
        result = num1 / num2;
    }else if (operator == '*'){
        result = num1 * num2;
    }
    alert(num1+operator+num2+'=' + result);
}
