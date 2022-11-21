var assert = require("assert");
var Calculate = require("../index.js");

describe("Calculate", () => {
  describe(".factorial", () => {
    it("return the correct result of 5!", () => {
      // setup
      const inputNumber = 5;
      const expectedResult = 120;

      // exercise
      const result = Calculate.factorial(inputNumber);

      // verify
      assert.equal(result, expectedResult);
    });

    it("return the correct result of 3!", () => {
      // setup
      const inputNumber = 3;
      const expectedResult = 6;

      // exercise
      const result = Calculate.factorial(inputNumber);

      // verify
      assert.equal(result, expectedResult);
    });

    it("returns correct result of 0!", () => {
      // setup
      const inputNumber = 0;
      const expectedResult = 1;

      // exercise
      const result = Calculate.factorial(inputNumber);

      // verify
      assert.equal(result, expectedResult);
    });
  });
});
