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
} from "@anastasia-labs/lucid-cardano-fork";

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
type Assets_ = Record<"lovelace" | string, BigInt>;
const myAsset: Assets = {
  lovelace: BigInt(10),
  ["mypolicy1myToken1"]: BigInt(1),
  mypolicy2myToken2: BigInt(1),
};
const unit =
  "2c04fa26b36a376440b0615a7cdf1a0c2df061df89c8c055e26505056d79746f6b656e";
  "d5f723df3649bef0872f57a1c820d493df549d457b161536f7bbe568 53505f624b616f4a64"

test("lucid emulator example", async () => {
  const user1 = await generateAccountSeedPhrase({
    lovelace: BigInt(100_000),
    [toUnit(
      "2c04fa26b36a376440b0615a7cdf1a0c2df061df89c8c055e2650505",
      fromText("mytoken")
    )]: 10n,
  });
  const user2 = await generateAccountSeedPhrase({
    lovelace: BigInt(100_000),
  });

  // const user = {
  //   address: userAddr,
  //   assets: { lovelace: BigInt(100_000) , [toUnit("2c04fa26b36a376440b0615a7cdf1a0c2df061df89c8c055e2650505", fromText("mytoken"))]: BigInt(10)},
  // };

  const emulator = new Emulator([user]);
  const lucid = await Lucid.new(emulator);
  console.log(
    await lucid.selectWalletFromSeed(user.seedPhrase).wallet.getUtxos()
  );
  expect(sum(1, 2)).toBe(3);
});
