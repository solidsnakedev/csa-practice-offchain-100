import { Address, Data, getAddressDetails } from "@anastasia-labs/lucid-cardano-fork";
import { AddressSchema, fromAddress } from "./lucid-schema.js"

// SimpleSaleDatum Schema
export const SimpleSaleDatumSchema = Data.Object({
  sellerAddress:  AddressSchema,
  priceOfAsset:   Data.Integer()
});
export type SimpleSaleDatum     = Data.Static<typeof SimpleSaleDatumSchema>;
export const SimpleSaleDatum    = SimpleSaleDatumSchema as unknown as SimpleSaleDatum;

const datum = Data.to(
  {
    sellerAddress: fromAddress(
      "addr_test1qz7g8528f7huqe57xcxxauuf6wr57hhln8p37dpl7tx6kz7tdr442pl352svknwmp9gjtu8es7zk3nlzgehjj6wmrmfshwf3ux"
    ),
    priceOfAsset: BigInt(1n),
  },
  SimpleSaleDatum
);
console.log("datum", datum);

// redeemer -> attach the contract -> phase 1 validation (contract serialization failed) -> submittx
// data PMarketRedeemer (s :: S)
//     = PBuy (Term s (PDataRecord '[]))
//     | PWithdraw (Term s (PDataRecord '[]))
//MarketRedeemer Schema
export const MarketRedeemerSchema = Data.Enum([
  Data.Literal("PBuy"),
  Data.Literal("PWithdraw")
]);
export type MarketRedeemer    = Data.Static<typeof MarketRedeemerSchema>;
export const MarketRedeemer   = MarketRedeemerSchema as unknown as MarketRedeemer;

const buyRedeemer = Data.to("PBuy", MarketRedeemer)
const withdrawRedeemer = Data.to("PWithdraw", MarketRedeemer)

console.log("redeemer", buyRedeemer);
console.log("withdraw", withdrawRedeemer);

// example
// toData(Buy) -> Constr[0,""] == 121_0([])
// toData(Withdraw) -> Constr[1,""] == 122_0([])
// Constr[0, ""] -> PBuy
// Constr[1, ""] -> PWithdraw
// Constr[0, Constr[0, ""]] -> PWithdraw
// export const CredentialSchema = Data.Enum([
//   Data.Object({
//     PublicKeyCredential: Data.Tuple([
//       Data.Bytes({ minLength: 28, maxLength: 28 }),
//     ]),
//   }),
//   Data.Object({
//     ScriptCredential: Data.Tuple([
//       Data.Bytes({ minLength: 28, maxLength: 28 }),
//     ]),
//   }),
// ]);