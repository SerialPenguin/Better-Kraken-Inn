describe("calculate VAT", () => {
  it("should calculate how much of a price is VAT", () => {
    let price = 112;

    let result = calcVAT(price);

    expect(result).toEqual(12);
  });

  it("VAT should be an INT", () => {
    let price = 112;

    let result = calcVAT(price);

    expect(result).toEqual(jasmine.any(Number));
  });
});

