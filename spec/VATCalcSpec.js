describe('calculate VAT', () => {
  it('should calculate how much of a price is VAT', () => {
    let price = 112;

    let result = calcVAT(price);

    expect(result).toEqual(12);
  });

  it('should add 1 to counter', () => {
    let tabCounter = 0;
    let result = tabCounterUpdater();

    expect(result).toEqual(1);
  })
});