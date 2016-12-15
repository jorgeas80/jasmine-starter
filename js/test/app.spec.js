describe("MathUtils", function() {
    var calc;

    // This will be called before running each spec
    beforeEach(function() {
        calc = new MathUtils();
    });

    // Spec for sum operation
    it("Should be able to calculate sum of 3 and 5", function() {
        expect(calc.sum(3, 5)).toEqual(8);
    });
});