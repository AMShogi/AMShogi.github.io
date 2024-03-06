function rank_calc() {
    let t = 1.21
    let c = Math.round((1 + (((t/300)**0.8 - 1)/(9**0.8 + 1))) * 100) / 100
    
}

rank_calc()