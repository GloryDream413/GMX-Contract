const {
  deployContract,
  contractAt,
  writeTmpAddresses,
  sendTxn,
} = require("../shared/helpers");

async function main() {
  const tokenManager = await deployContract(
    "TokenManager",
    [1],
    "TokenManager"
  );

  const signers = ["0x39C9A89AAC2989D7Bf152e97aD8342791ae4977d"];

  await sendTxn(tokenManager.initialize(signers), "tokenManager.initialize");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
