const {
  deployContract,
  contractAt,
  writeTmpAddresses,
} = require("../shared/helpers");

async function main() {
  await deployContract("EsZOMI", []);
  await deployContract("MintableBaseToken", ["EsZOMI IOU", "EsZOMI:IOU", 0]);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
