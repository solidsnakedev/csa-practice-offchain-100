import { expect, test } from "vitest";
import { sum } from "../src/sum.js";
import {
  Assets,
  Emulator,
  Lucid,
  fromText,
  generateSeedPhrase,
  toHex,
  toUnit,
  Data
} from "@anastasia-labs/lucid-cardano-fork";
import { SimpleSaleDatum, MarketRedeemer } from "../src/contract_types_Darjan.js"
import { AddressSchema, fromAddress } from "../src/lucid-schema.js"

export const generateAccountSeedPhrase = async (assets: Assets) => {
  const seedPhrase = generateSeedPhrase();
  return {
    seedPhrase,
    address: await (await Lucid.new(undefined, "Custom"))
      .selectWalletFromSeed(seedPhrase)
      .wallet.address(),
    assets,
  };
};

test("lucid emulator example", async () => {
  const alice = await generateAccountSeedPhrase({
    lovelace: BigInt(100_000_000)
  })
  const bob = await generateAccountSeedPhrase({
    lovelace: BigInt(20_000_000)
  })

  const emulator = new Emulator([alice, bob]);
  const lucid = await Lucid.new(emulator)
  
  const datum = Data.to(
    {
      sellerAddress:  fromAddress(alice.address),
      priceOfAsset:   BigInt(2_000_000)
    },
    SimpleSaleDatum
  );

  

  expect(sum(1, 2)).toBe(3);
});
