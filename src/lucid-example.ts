import {Lucid, generateSeedPhrase} from "@anastasia-labs/lucid-cardano-fork"
process.env.ENV_VARIABLE
const seedPhrase = generateSeedPhrase()
console.log(seedPhrase)
const lucid = (await Lucid.new(undefined,undefined))
lucid.selectWalletFromSeed(seedPhrase)
const addr = await lucid.wallet.address()
console.log(addr)
// instantiate lucid - provider (blockfrost | Maestro | local cardano-node)
// Skip
// await lucid.wallet.getUtxos() - ask to the provider for information (Promise)
// Continue following computatioin

console.log(lucid.utils.getAddressDetails(addr))
// 01 bc83d1474fafc0669e360c6ef389d3874f5eff99c31f343ff2cdab0b cb68eb5507f1a2a0cb4ddb095125f0f9878568cfe2466f2969db1ed3

// PubKeyHash = bc83d1474fafc0669e360c6ef389d3874f5eff99c31f343ff2cdab0b

// StakeHash = cb68eb5507f1a2a0cb4ddb095125f0f9878568cfe2466f2969db1ed3