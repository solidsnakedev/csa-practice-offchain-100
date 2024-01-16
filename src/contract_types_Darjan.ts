import { Address, Data, getAddressDetails } from "@anastasia-labs/lucid-cardano-fork";
import { AddressSchema, fromAddress } from ./lucid-AddressSchema.js

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
console.log(datum);

//MarketRedeemer Schema
export const MarketRedeemerSchema = Data.Enum([
  Data.Object({ Buy:      Data.Object({})}),
  Data.Object({ Withdraw: Data.Object({})})
]);
export type MarketRedeemer    = Data.Static<typeof MarketRedeemerSchema>;
export const MarketRedeemer   = MarketRedeemerSchema as unknown as MarketRedeemer;

const redeemer = Data.to(
  {
    Buy: Data.Object()
  },
  MarketRedeemer
)
console.log(redeemer);