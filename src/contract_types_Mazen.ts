import { Data } from "@anastasia-labs/lucid-cardano-fork";
import { AddressSchema, fromAddress } from "./lucid-schema.js";

// SimpleSaleSchema
export const SimpleSaleSchema = Data.Object ({
        sellerAddress: AddressSchema,
        priceOfAsset: Data.Integer()
})
export type SimpleSale = Data.Static<typeof SimpleSaleSchema>;
export const SimpleSale = SimpleSaleSchema as unknown as SimpleSale;

// MarketRedeemerSchema
export const MarketRedeemerSchema = Data.Enum ([
    Data.Literal ("Buy"),
    Data.Literal ("Withdraw")
])
export type MarketRedeemer = Data.Static<typeof MarketRedeemerSchema>;
export const MarketRedeemer = MarketRedeemerSchema as unknown as MarketRedeemer;

// Examples
export const Ex_SimpleSale = Data.to (
    {
        sellerAddress: fromAddress("addr_test1qz7g8528f7huqe57xcxxauuf6wr57hhln8p37dpl7tx6kz7tdr442pl352svknwmp9gjtu8es7zk3nlzgehjj6wmrmfshwf3ux"),
        priceOfAsset: 100_000_000n
    },
    SimpleSale
);
export const Ex_Buy = Data.to ("Buy",MarketRedeemer);
export const Ex_Withdraw = Data.to ("Withdraw",MarketRedeemer);

console.log("--------------------------------------------");
console.log("Ex_SimpleSale: ", Ex_SimpleSale);
console.log("Ex_Buy: ", Ex_Buy);
console.log("Ex_Withdraw: ", Ex_Withdraw);
console.log("Ex_SimpleSale: ", Data.from (Ex_SimpleSale));
console.log("Ex_Buy: ", Data.from (Ex_Buy));
console.log("Ex_Withdraw: ", Data.from (Ex_Withdraw));
