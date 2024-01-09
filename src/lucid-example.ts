import {Lucid, generateSeedPhrase} from "@anastasia-labs/lucid-cardano-fork"
process.env.ENV_VARIABLE
const seedPhrase = generateSeedPhrase()
console.log(seedPhrase)
const lucid = (await Lucid.new(undefined,undefined))
lucid.selectWalletFromSeed(seedPhrase)
console.log(await lucid.wallet.address())
// instantiate lucid - provider (blockfrost | Maestro | local cardano-node)
// Skip
// await lucid.wallet.getUtxos() - ask to the provider for information (Promise)
// Continue following computatioin
