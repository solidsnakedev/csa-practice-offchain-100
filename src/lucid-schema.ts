import {
  Address,
  Data,
  fromText,
  getAddressDetails,
} from "@anastasia-labs/lucid-cardano-fork";

export function fromAddress(address: Address): AddressD {
  // We do not support pointer addresses!

  const { paymentCredential, stakeCredential } = getAddressDetails(address);

  if (!paymentCredential) throw new Error("Not a valid payment address.");

  return {
    paymentCredential:
      paymentCredential?.type === "Key"
        ? {
            PublicKeyCredential: [paymentCredential.hash],
          }
        : { ScriptCredential: [paymentCredential.hash] },
    stakeCredential: stakeCredential
      ? {
          Inline: [
            stakeCredential.type === "Key"
              ? {
                  PublicKeyCredential: [stakeCredential.hash],
                }
              : { ScriptCredential: [stakeCredential.hash] },
          ],
        }
      : null,
  };
}

export const CredentialSchema = Data.Enum([
  Data.Object({
    PublicKeyCredential: Data.Tuple([
      Data.Bytes({ minLength: 28, maxLength: 28 }),
    ]),
  }),
  Data.Object({
    ScriptCredential: Data.Tuple([
      Data.Bytes({ minLength: 28, maxLength: 28 }),
    ]),
  }),
]);
export type CredentialD = Data.Static<typeof CredentialSchema>;
export const CredentialD = CredentialSchema as unknown as CredentialD;

// Address	 
// addressCredential :: Credential	 
// addressStakingCredential :: Maybe StakingCredential

// data StakingCredential
//     -- | The staking hash is the `Credential` required to unlock a transaction output. Either
//     -- a public key credential (`Crypto.PubKeyHash`) or
//     -- a script credential (`Scripts.ValidatorHash`). Both are hashed with /BLAKE2b-244/. 28 byte.
//     = StakingHash Credential
//     -- | The certificate pointer, constructed by the given
//     -- slot number, transaction and certificate indices.
//     -- NB: The fields should really be all `Word64`, as they are implemented in `Word64`,
//     -- but 'Integer' is our only integral type so we need to use it instead.
//     | StakingPtr
//         Integer -- ^ the slot number
//         Integer -- ^ the transaction index (within the block)
//         Integer -- ^ the certificate index (within the transaction)

export const AddressSchema = Data.Object({
  paymentCredential: CredentialSchema,
  stakeCredential: Data.Nullable(
    Data.Enum([
      Data.Object({ Inline: Data.Tuple([CredentialSchema]) }),
      Data.Object({
        Pointer: Data.Tuple([
          Data.Object({
            slotNumber: Data.Integer(),
            transactionIndex: Data.Integer(),
            certificateIndex: Data.Integer(),
          }),
        ]),
      }),
    ])
  ),
});
export type AddressD = Data.Static<typeof AddressSchema>;
export const AddressD = AddressSchema as unknown as AddressD;

export const AssetClassSchema = Data.Object(
  {
    symbol: Data.Bytes(),
    name: Data.Bytes(),
  },
  { hasConstr: false }
);
export type AssetClassD = Data.Static<typeof AssetClassSchema>;
export const AssetClassD = AssetClassSchema as unknown as AssetClassD;

export const VestingDatumSchema = Data.Object({
  beneficiary: AddressSchema,
  assetClass: AssetClassSchema,
  totalVestingQty: Data.Integer(),
  vestingPeriodStart: Data.Integer(),
  vestingPeriodEnd: Data.Integer(),
  firstUnlockPossibleAfter: Data.Integer(),
  totalInstallments: Data.Integer(),
});
export type VestingDatum = Data.Static<typeof VestingDatumSchema>;

export const VestingDatum = VestingDatumSchema as unknown as VestingDatum;

const datum = Data.to(
  {
    beneficiary: fromAddress(
      "addr_test1qz7g8528f7huqe57xcxxauuf6wr57hhln8p37dpl7tx6kz7tdr442pl352svknwmp9gjtu8es7zk3nlzgehjj6wmrmfshwf3ux"
    ),
    assetClass: {
      symbol: "2c04fa26b36a376440b0615a7cdf1a0c2df061df89c8c055e2650505",
      name: "63425443",
    },
    totalVestingQty: BigInt(1n),
    vestingPeriodStart: BigInt(1n),
    vestingPeriodEnd: BigInt(1n),
    firstUnlockPossibleAfter: BigInt(1n),
    totalInstallments: BigInt(1n),
  },
  VestingDatum
);
console.log(datum);
const deserializeddatum = Data.from(
  "d8799fd8799fd8799f581cbc83d1474fafc0669e360c6ef389d3874f5eff99c31f343ff2cdab0bffd8799fd8799fd8799f581ccb68eb5507f1a2a0cb4ddb095125f0f9878568cfe2466f2969db1ed3ffffffff9f581c2c04fa26b36a376440b0615a7cdf1a0c2df061df89c8c055e26505054463425443ff0101010101ff",
  VestingDatum
);
console.log(deserializeddatum.assetClass.name);
console.log(deserializeddatum);

// 121_0([_
//   121_0([_
//       121_0([_
//           h'bc83d1474fafc0669e360c6ef389d3874f5eff99c31f343ff2cdab0b',
//       ]),
//       121_0([_
//           121_0([_
//               121_0([_
//                   h'cb68eb5507f1a2a0cb4ddb095125f0f9878568cfe2466f2969db1ed3',
//               ]),
//           ]),
//       ]),
//   ]),
//   [_
//       h'2c04fa26b36a376440b0615a7cdf1a0c2df061df89c8c055e2650505',
//       h'63425443',
//   ],
//   1,
//   1,
//   1,
//   1,
//   1,
// ])beneficiary: AddressSchema,
// assetClass: AssetClassSchema,
// totalVestingQty: Data.Integer(),
// vestingPeriodStart: Data.Integer(),
// vestingPeriodEnd: Data.Integer(),
// firstUnlockPossibleAfter: Data.Integer(),
// totalInstallments: Data.Integer(),
// });
// export type VestingDatum = Data.Static<typeof VestingDatumSchema>;

// // stupid hack used everywhere to export types
// export const VestingDatum = VestingDatumSchema as unknown as VestingDatum;

// ])

// from bech32 to cbor
console.log(
  Data.to(
    fromAddress(
      "addr_test1qz7g8528f7huqe57xcxxauuf6wr57hhln8p37dpl7tx6kz7tdr442pl352svknwmp9gjtu8es7zk3nlzgehjj6wmrmfshwf3ux"
    ),
    AddressD
  )
);

// d8799fd8799f581cbc83d1474fafc0669e360c6ef389d3874f5eff99c31f343ff2cdab0bffd8799fd8799fd8799f581ccb68eb5507f1a2a0cb4ddb095125f0f9878568cfe2466f2969db1ed3ffffffff

// same address
// 121_0([_
//   121_0([_
//       h'bc83d1474fafc0669e360c6ef389d3874f5eff99c31f343ff2cdab0b',
//   ]),
//   121_0([_
//       121_0([_
//           121_0([_
//               h'cb68eb5507f1a2a0cb4ddb095125f0f9878568cfe2466f2969db1ed3',
//           ]),
//       ]),
//   ]),
// ])
// tag 121
// {
//   {
//     {
//       {

//       }
//     }
//   }

// }

console.log(fromText("mytoken"))