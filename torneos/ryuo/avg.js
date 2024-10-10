function calc(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return (sum / arr.length).toFixed(0);
}

// Div 1
let aniquil = calc([6, 5]);
let gera = calc([10, 4]);
let incursor = calc([3, 10]);
let LM = calc([5, 2]);
let marc = calc([2, 3]);

document.getElementById('aniquil').innerHTML = aniquil;
document.getElementById('gera').innerHTML = gera;
document.getElementById('incursor').innerHTML = incursor; 
document.getElementById('LM').innerHTML = LM;
document.getElementById('marc').innerHTML = marc;

// Div 2
let grcajsf = calc([9, 6]);
let lennon = calc([8, 7]);
let ronin = calc([11, 12]);
let Tyrf1ng = calc([7, 14]);
let yan = calc([4, 11]);
let zuriel = calc([8]);

document.getElementById('grcajsf').innerHTML = grcajsf;
document.getElementById('lennon').innerHTML = lennon;
document.getElementById('ronin').innerHTML = ronin;
document.getElementById('Tyrf1ng').innerHTML = Tyrf1ng;
document.getElementById('yan').innerHTML = yan;
document.getElementById('zuriel').innerHTML = zuriel;

// Div 3
let gisari = calc([12, 15]);
let workman = calc([9]);

document.getElementById('gisari').innerHTML = gisari;
document.getElementById('workman').innerHTML = workman;