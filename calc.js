
const resultado = document.querySelector(".visor");
var a = '';
var b = '';
var sinal = '';
var r;

function dec() {
    if (resultado.innerHTML.includes('.')) {
        
    } else {
        resultado.innerHTML = resultado.innerHTML + ".";
        sinal = '';
    }
}
function deleter() {
    if (resultado.innerHTML.length > 1){
    resultado.innerHTML = resultado.innerHTML.slice(0, -1);
} else if(resultado.innerHTML.length == 1) {
    resultado.innerHTML = 0;
}
}

function clearall() {
    resultado.innerHTML = 0;
    a = '';
    b = '';
    sinal = '';
    resultado1 = '';
}
function check() {
    if (sinal !== '=' && sinal !== '' && b !== '' && a !== '') {
        operate();
    }
}
function soma() {
    check();
    sinal = '+';
}   

function sub() {
    check();
    sinal = '-'
}

function mult() {
    check();
    sinal = '*'
}

function div() {
    check();
    sinal = '/'
}
function modul() {
    check();
    sinal = '%'
}   

function number(x) {

    if (sinal == '='){
        resultado.innerHTML = x;
        sinal = ''; 
    } else if (resultado.innerHTML === a && sinal !== '') {
        resultado.innerHTML = x;
    }
    else if (resultado.innerHTML == 0  && resultado.innerHTML !== "0.") {
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
    var resultado1;
    switch (sinal) {
        case '+':
            resultado1 = p + q;
            resultado.innerHTML = parseFloat(resultado1.toPrecision(8));
            break;
        case '-':
            resultado1 = p - q;
            resultado.innerHTML = parseFloat(resultado1.toPrecision(8));
            break;
        case '*':
            resultado1 = p * q;
            resultado.innerHTML = parseFloat(resultado1.toPrecision(8));
            break;
        case '/':
            if (q != 0){
                resultado1 = p / q;
                resultado.innerHTML = parseFloat(resultado1.toPrecision(8));
            } else resultado.innerHTML = "ERROR"; 
            break;
        case '%':
            resultado.innerHTML = p % q;
            break;
           }
        
    sinal = '=';
    a = resultado.innerHTML;
    b = '';
}
