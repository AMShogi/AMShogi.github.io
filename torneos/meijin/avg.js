function calc_avg(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return (sum / arr.length).toFixed(1);
}

// Clase A
let gera_avg = (1.2);
let LMavg = (1.3);
let marc_avg = (1.4);

document.getElementById('gera_avg').innerHTML = gera_avg;
document.getElementById('LMavg').innerHTML = LMavg;
document.getElementById('marc_avg').innerHTML = marc_avg;

// Clase B
let lennon_promo = 1;
let ronin_avg = calc_avg([2, 1.7]);

document.getElementById('lennon').innerHTML = lennon_promo;
document.getElementById('ronin_avg').innerHTML = ronin_avg;

// Clase C
// let Gisari_promo
