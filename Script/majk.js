function calcVAT(price) {
    const restauranngMoms = 0.12;
    let VAT = price - (price / (1 + restauranngMoms));
    
    return parseInt(VAT.toFixed(2));
}