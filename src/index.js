/**
 * @typedef {Object} PriceCalculator
 * @property {function(number, number, number, number): number} calculatePrice - The function for calculating price.
 * @property {function(number, number): number} numberRounding - The function for rounding number.
 */

/**
 * PriceCalculator Module.
 * @type {PriceCalculator}
 */

/**
 * Calculating the final price, after being discounted and vat.
 * @param {number} itemQty - Input The Item Quantity.
 * @param {number} itemPrice - Input The Item Price.
 * @param {number} percentDiscount - Input The Discount Item (%).
 * @param {number} pecentVAT - Input The VAT Item (%).
 * @returns {Object} - The object of the calculation like: { item_qty, item_price, percent_discount, percent_vat, total_dpp, total_discount, total_vat }
 */

function calculatePrice(itemQty, itemPrice, percentDiscount, pecentVAT) {
  try {
    const item_qty = processNumbers(itemQty, "itemQty");
    const item_price = processNumbers(itemPrice, "itemPrice");
    const percent_discount = processNumbers(percentDiscount, "percentDiscount");
    const percent_vat = processNumbers(pecentVAT, "pecentVAT");

    const dpp_division = numberRounding(1 + (percent_vat / 100), 2);
    const discounted_price_with_vat = item_price - numberRounding((item_price * percent_discount / 100), 2); // Column H
    const dpp_item = numberRounding(item_price / dpp_division, 2); // Column I
    const dpp_discount = numberRounding(dpp_item * percent_discount / 100, 2); // Column J
    const dpp_vat = numberRounding((dpp_item - dpp_discount) * percent_vat / 100, 2); // Column K
    const dpp_rounding = numberRounding(discounted_price_with_vat - (dpp_item - dpp_discount + dpp_vat), 2); // Column L
    const dpp_item_final = numberRounding((dpp_item + dpp_rounding), 2); // Column M
    const dpp_discount_final = numberRounding(dpp_item_final * percent_discount / 100, 2); // Column N
    const dpp_vat_final = numberRounding((dpp_item_final - dpp_discount_final) * percent_vat / 100, 2); // Column O

    const total_dpp = numberRounding(dpp_item_final * item_qty, 2); // Column P
    const total_discount = numberRounding(dpp_discount_final * item_qty, 2); // Column Q
    const total_vat = numberRounding(dpp_vat_final * item_qty, 2); // Column R

    return { item_qty, item_price, percent_discount, percent_vat, total_dpp, total_discount, total_vat };
  } catch (error) {
    return error.message;
  }
}

/**
 * Returning the exact rounded value.
 * @param {number} numberToBeRounded - Input The Number that to be rounded.
 * @param {number} roundDigit - The rounded value (will be ceiled).
 * @returns {number} - The exact rounded number.
 */
function numberRounding(numberToBeRounded, roundDigit = 0) {
  try {
    const valueTobeRounded = processNumbers(numberToBeRounded, 'numberToBeRounded');
    const theDigitRound = processNumbers(roundDigit, 'roundDigit');

    const rounded_value = Math.pow(10, Math.ceil(theDigitRound));
    return Math.round((valueTobeRounded + Number.EPSILON) * rounded_value) / rounded_value;
  } catch (error) {
    return error.message;
  }
}

function processNumbers(data, type) {
  if (data === 'undefined' || data === 'null' || typeof data !== 'number' || !Number.isFinite(data)) {
    throw new Error(`500. Please defined ${type} correctly.`);
  }

  return data;
}

module.exports = { calculatePrice, numberRounding };