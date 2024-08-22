const { expect } = require("chai");

describe("CalculateAreaOfShapes", function () {
  async function deployCalculateAreaOfShapesFixture() {
    const CalculateAreaOfShapes = await ethers.getContractFactory(
      "CalculateAreaOfShapes"
    );
    const calculateAreaOfShapes = await CalculateAreaOfShapes.deploy();
    return { calculateAreaOfShapes };
  }

  describe("Area Calculations", function () {
    it("Should correctly calculate the area of a triangle", async function () {
      const { calculateAreaOfShapes } =
        await deployCalculateAreaOfShapesFixture();
      const base = 10;
      const height = 20;
      const expectedArea = (base * height) / 2;

      expect(
        await calculateAreaOfShapes.getAreaOfTriangle(base, height)
      ).to.equal(expectedArea);
    });

    it("Should correctly calculate the area of a square", async function () {
      const { calculateAreaOfShapes } =
        await deployCalculateAreaOfShapesFixture();
      const side = 15;
      const expectedArea = side * side;

      expect(await calculateAreaOfShapes.getAreaOfSquare(side)).to.equal(
        expectedArea
      );
    });

    it("Should correctly calculate the area of a rectangle", async function () {
      const { calculateAreaOfShapes } =
        await deployCalculateAreaOfShapesFixture();
      const width = 10;
      const length = 30;
      const expectedArea = width * length;

      expect(
        await calculateAreaOfShapes.getAreaOfRectangle(width, length)
      ).to.equal(expectedArea);
    });
  });
});
