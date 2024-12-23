# Features
- Calculating the final price, discount, and vat.
- Returning the exact rounding value.

# Installing

### Package manager

Using npm:
```
npm install duopomelo-ppn-calculator
```

Using yarn:
```
yarn add duopomelo-ppn-calculator
```

Using pnpm:
```
pnpm add duopomelo-ppn-calculator
```

Once the package is installed, you can import the library using import or require approach:
```
import { calculatePrice, numberRounding } from 'duopomelo-ppn-calculator';
```
```
const { calculatePrice, numberRounding } = require('duopomelo-ppn-calculator');
```

# Example
```
import { calculatePrice } from 'duopomelo-ppn-calculator';
//const { calculatePrice } = require('duopomelo-ppn-calculator'); // legacy way

/*
Try the calculation for example the item have:
- The Qty: 110
- The Price: 15000
- The Discount (%): 10
- The VAT (%): 11
*/

const theFinalPrice = calculatePrice(110, 15000, 10, 11);
console.log(theFinalPrice);

/*
And the output is:
{
  item_qty: 110, 
  item_price: 15000, 
  percent_discount: 10, 
  percent_vat: 11, 
  total_price: 1650000,
  total_dpp: 1486486.1, 
  total_discount: 148648.5, 
  total_vat: 147162.4 
}
*/

```

Or you want to rounding the number?
```
import { numberRounding } from 'duopomelo-ppn-calculator';
//const { numberRounding } = require('duopomelo-ppn-calculator'); // legacy way

const theNumber = numberRounding(3.1415926535897, 3);
console.log(theFinalPrice); // output: 3.142

```