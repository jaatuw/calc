
const resultado = document.querySelector(".visor");
var a = '';
var b = '';
var sinal = '';
var r;

function clearall() {
    resultado.innerHTML = 0;

}

function soma() {
    sinal = '+';
    clearall();
}   


function sub() {
    sinal = '-'
    clearall();
}

function mult() {
    sinal = '*'
    clearall();
}

function div() {

    sinal = '/'
    clearall();
}

function number(x) {

    if (sinal == '='){
        resultado.innerHTML = x;
        sinal = '';
    }
    else if (resultado.innerHTML == 0 ) {
        resultado.innerHTML = x;
    }
    else if (resultado.innerHTML <= 9999999999) {
        resultado.innerHTML += x;
    }

    if (sinal === '') {
        a = resultado.innerHTML;
    } else {
        b = resultado.innerHTML;
    }
    
}



function operate() {
    let p = parseFloat(a);
    let q = parseFloat(b);
    switch (sinal) {
        case '+':
            resultado.innerHTML = p + q;
            break;
        case '-':
            resultado.innerHTML = p - q;
            break;
        case '*':
            resultado.innerHTML = p * q;
            break;
        case '/':
            if (q != 0){
                resultado.innerHTML = p / q;
            } else resultado.innerHTML = "ERROR"; 
            break;
        case '%':
            resultado.innerHTML = p % q;
            break;
           }
    sinal = '=';
    a = resultado.innerHTML;
}
