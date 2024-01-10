const tx = await lucid
.newTx()
.collectFrom(walletUtxos)
.payToContract(
  validatorAddress,
  { inline: datum },
  {
    [unit]: BigInt(
      config.totalVestingQty - config.totalVestingQty * PROTOCOL_FEE
    ),
  }
)
.payToAddress(
  lucid.utils.credentialToAddress(
    lucid.utils.keyHashToCredential(PROTOCOL_PAYMENT_KEY),
    lucid.utils.keyHashToCredential(PROTOCOL_STAKE_KEY)
  ),
  {
    [unit]: BigInt(config.totalVestingQty * PROTOCOL_FEE),
  }
)
.complete();

export declare type Assets = Record<Unit | "lovelace", bigint>;

const assetexample = {
  "mypolicy+tokenName" : 1n,
  "mypolicy+tokenName2" : 1n,
  "lovelace": 100_000_000n
}