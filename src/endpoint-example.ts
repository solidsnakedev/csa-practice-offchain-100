const tx = await lucid.newTx()
  .payToAddress("addr_test...", { lovelace: 5000000n })
  .complete();

const signedTx = await tx.sign().complete();

const txHash = await signedTx.submit();