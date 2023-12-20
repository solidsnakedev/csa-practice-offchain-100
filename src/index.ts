// import PlutusTx qualified
// PlutusTx.Address
import * as test from "./test_yourname.js"
import * as test_Mazen from "./test_Mazen.js"
import * as test_Darjan from "./test_Darjan.js"

test_Mazen.usersLog
test_Darjan.printStatusCodeError()

// Server API  returns a "number", "231312adasdadasda" runtime issue
const mynumber = "2dssk:what" // Blockfrost
console.log(+mynumber)
console.log(Number(mynumber))