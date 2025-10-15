function calc(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return (sum / arr.length).toFixed(1);
}

// Clase A
let gera_avg = calc([1.2]);
let LMavg = calc([1.3]);
let marc_avg = calc([1.4]);

document.getElementById('gera_avg').innerHTML = gera_avg;
document.getElementById('LMavg').innerHTML = LMavg;
document.getElementById('marc_avg').innerHTML = marc_avg;

// Clase B
let incursor_avg = calc([1.5, 2]);
let lennon_avg = calc([2.2, 2.4]);
let ronin_avg = calc([2, 2.2]);
let yan_avg = calc([3, 2.3]);
// let zuriel_avg = calc([3]);

document.getElementById('incursor_avg').innerHTML = incursor_avg;
document.getElementById('lennon_avg').innerHTML = lennon_avg;
document.getElementById('ronin_avg').innerHTML = ronin_avg;
document.getElementById('yan_avg').innerHTML = yan_avg;
// document.getElementById('zuriel_avg').innerHTML = zuriel_avg;

// Clase C
let gisari_avg = calc([2.3]);
let work_avg = calc([3.3]);
// let grcajsf_avg = calc([2.4]);
// let Tyrf1ng_avg = calc([])

document.getElementById('gisari_avg').innerHTML = gisari_avg;
document.getElementById('work_avg').innerHTML = work_avg;
// document.getElementById('grcajsf_avg').innerHTML = grcajsf_avg;
