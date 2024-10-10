function calc_avg(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return (sum / arr.length).toFixed(0);
}

// Div 1
let gera_avg = calc_avg([10, 4]);
let LMavg = calc_avg([5, 2]);
let marc_avg = calc_avg([2, 3]);

document.getElementById('gera_avg').innerHTML = gera_avg;
document.getElementById('LMavg').innerHTML = LMavg;
document.getElementById('marc_avg').innerHTML = marc_avg;