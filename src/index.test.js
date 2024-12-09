const calculatePPN = require("./index");

describe('Negative Test Case Check', () => {
  test('Should sending an error for invalid itemQty', () => {
    const result = calculatePPN();
    expect(result).toBe('500. Please defined itemQty correctly.');
  });
  test('Should sending an error for invalid itemPrice', () => {
    const result = calculatePPN(10);
    expect(result).toBe('500. Please defined itemPrice correctly.');
  });
  test('Should sending an error for invalid percentDiscount', () => {
    const result = calculatePPN(10, 100000);
    expect(result).toBe('500. Please defined percentDiscount correctly.');
  });
  test('Should sending an error for invalid pecentVAT', () => {
    const result = calculatePPN(10, 100000, 10);
    expect(result).toBe('500. Please defined pecentVAT correctly.');
  });

  test('Should sending an error for invalid type of itemQty', () => {
    const result = calculatePPN('10', 10000, 10, 11);
    expect(result).toBe('500. Please defined itemQty correctly.');
  });
  test('Should sending an error for invalid type of itemPrice', () => {
    const result = calculatePPN(10, '10000', 10, 11);
    expect(result).toBe('500. Please defined itemPrice correctly.');
  });
  test('Should sending an error for invalid type of percentDiscount', () => {
    const result = calculatePPN(10, 10000, '10', 11);
    expect(result).toBe('500. Please defined percentDiscount correctly.');
  });
  test('Should sending an error for invalid type of pecentVAT', () => {
    const result = calculatePPN(10, 10000, 10, '11');
    expect(result).toBe('500. Please defined pecentVAT correctly.');
  });
});

describe('Positive Test Case Check', () => {
  test('Calculation should return the correct value', () => {
    const result = calculatePPN(110, 15000, 10, 11);
    expect(result).toMatchObject({
      item_qty: 110, 
      item_price: 15000, 
      percent_discount: 10, 
      percent_vat: 11, 
      total_dpp: 1486486.10, 
      total_discount: 148648.50, 
      total_vat: 147162.40
    });
  });
});