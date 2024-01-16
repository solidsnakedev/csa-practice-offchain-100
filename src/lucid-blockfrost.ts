import { Blockfrost, Lucid } from "@anastasia-labs/lucid-cardano-fork";

const projectId = "preprodOr3zZOkFc8Sqa5sp3aa9oGTb1wxulzhy"
const lucid = await Lucid.new(
  new Blockfrost("https://cardano-preprod.blockfrost.io/api/v0", projectId),
  "Preprod",
);

const seedPhrase = "truck typical feature program section horn quote dial retreat lecture force cattle space tonight toss sketch hamster science oyster dream head square upper prize"

lucid.selectWalletFromSeed(seedPhrase);

console.log(await lucid.wallet.address())

console.log(await lucid.wallet.getUtxos())

const tx = await lucid.newTx()
  .payToAddress("addr_test1qp4cgm42esrud5njskhsr6uc28s6ljah0phsdqe7qmh3rfuyjgq5wwsca5camufxavmtnm8f6ywga3de3jkgmkwzma4sqv284l", { lovelace: 5_000_000n })
  .complete(); // phase 1 validation offline

const signedTx = await tx.sign().complete();
const txHash = await signedTx.submit();

console.log(txHash);