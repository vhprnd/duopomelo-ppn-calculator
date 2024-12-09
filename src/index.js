/**
 * @typedef {Object} PriceCalculator
 * @property {function(number, number, number, number): number} calculatePrice - The function for calculating price.
 */

/**
 * PriceCalculator Module.
 * @type {PriceCalculator}
 */

/**
 * Menghitung PPN dan menghasilkan nilai before PPN, after PPN, dan grand total.
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

    const dpp_division = mathRounding(1 + (percent_vat / 100));
    const discounted_price_with_vat = item_price - mathRounding((item_price * percent_discount / 100)); // Column H
    const dpp_item = mathRounding(item_price / dpp_division); // Column I
    const dpp_discount = mathRounding(dpp_item * percent_discount / 100); // Column J
    const dpp_vat = mathRounding((dpp_item - dpp_discount) * percent_vat / 100); // Column K
    const dpp_rounding = mathRounding(discounted_price_with_vat - (dpp_item - dpp_discount + dpp_vat)); // Column L
    const dpp_item_final = mathRounding((dpp_item + dpp_rounding)); // Column M
    const dpp_discount_final = mathRounding(dpp_item_final * percent_discount / 100); // Column N
    const dpp_vat_final = mathRounding((dpp_item_final - dpp_discount_final) * percent_vat / 100); // Column O

    const total_dpp = mathRounding(dpp_item_final * item_qty); // Column P
    const total_discount = mathRounding(dpp_discount_final * item_qty); // Column Q
    const total_vat = mathRounding(dpp_vat_final * item_qty); // Column R

    return { item_qty, item_price, percent_discount, percent_vat, total_dpp, total_discount, total_vat };
  } catch (error) {
    return error.message;
  }
}

function mathRounding(value) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

function processNumbers(data, type) {
  if (data === 'undefined' || data === 'null' || typeof data !== 'number' || !Number.isFinite(data)) {
    throw new Error(`500. Please defined ${type} correctly.`);
  }

  return data;
}

module.exports = { calculatePrice };