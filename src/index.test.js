const { calculatePrice, numberRounding } = require("./index");

describe('Negative Test Case Check', () => {
  test('Should sending an error for invalid itemQty', () => {
    const result = calculatePrice();
    expect(result).toBe('500. Please defined itemQty correctly.');
  });
  test('Should sending an error for invalid itemPrice', () => {
    const result = calculatePrice(10);
    expect(result).toBe('500. Please defined itemPrice correctly.');
  });
  test('Should sending an error for invalid percentDiscount', () => {
    const result = calculatePrice(10, 100000);
    expect(result).toBe('500. Please defined percentDiscount correctly.');
  });
  test('Should sending an error for invalid pecentVAT', () => {
    const result = calculatePrice(10, 100000, 10);
    expect(result).toBe('500. Please defined pecentVAT correctly.');
  });

  test('Should sending an error for invalid type of itemQty', () => {
    const result = calculatePrice('10', 10000, 10, 11);
    expect(result).toBe('500. Please defined itemQty correctly.');
  });
  test('Should sending an error for invalid type of itemPrice', () => {
    const result = calculatePrice(10, '10000', 10, 11);
    expect(result).toBe('500. Please defined itemPrice correctly.');
  });
  test('Should sending an error for invalid type of percentDiscount', () => {
    const result = calculatePrice(10, 10000, '10', 11);
    expect(result).toBe('500. Please defined percentDiscount correctly.');
  });
  test('Should sending an error for invalid type of pecentVAT', () => {
    const result = calculatePrice(10, 10000, 10, '11');
    expect(result).toBe('500. Please defined pecentVAT correctly.');
  });
  test('Should sending an error for invalid numberToBeRounded', () => {
    const result = numberRounding();
    expect(result).toBe('500. Please defined numberToBeRounded correctly.');
  });
  test('Should sending an error for invalid type of numberToBeRounded', () => {
    const result = numberRounding('3.1415926535897');
    expect(result).toBe('500. Please defined numberToBeRounded correctly.');
  });
  test('Should sending an error for invalid type of roundDigit', () => {
    const result = numberRounding(3.1415926535897, '2');
    expect(result).toBe('500. Please defined roundDigit correctly.');
  });
});

describe('Positive Test Case Check', () => {
  test('Calculation should return the correct value', () => {
    const result = calculatePrice(110, 15000, 10, 11);
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
  test('Calculation should return the correct rounded value', () => {
    const result = numberRounding(3.1415926535897, 3);
    expect(result).toBe(3.142);
  });
});