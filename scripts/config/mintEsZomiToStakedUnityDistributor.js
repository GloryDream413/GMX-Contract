const { deployContract, contractAt, sendTxn } = require("../shared/helpers");
const { expandDecimals } = require("../../test/shared/utilities");
const { toUsd } = require("../../test/shared/units");
const { errors } = require("../../test/core/Vault/helpers");

async function main() {
  const esZOMI = await contractAt(
    "EsZOMI",
    "0x298f0FbFD6058218878745592a9455C6dCf45899"
  );

  const distributors = [
    "0x540B23d0430d6b0A5853bcad0f3543f8272e9bfE",
    "0xaff1a5B9C0DC649F854eA9168D8D5B40b2c93B7C",
  ];

  for (var i = 0; i < distributors.length; i++) {
    await sendTxn(
      esZOMI.mint(distributors[i], "1000000000000000000000000"),
      "esZOMI.mint"
    );
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
