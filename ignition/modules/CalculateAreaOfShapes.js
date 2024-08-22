const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("LockModule", (m) => {
  const CalculateAreaOfShapes = m.contract("CalculateAreaOfShapes");

  return { CalculateAreaOfShapes };
});
