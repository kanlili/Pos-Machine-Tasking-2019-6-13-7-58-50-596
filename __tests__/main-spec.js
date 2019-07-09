const IsArrayValid = require('../main');
const printReceiptMsg = require('../main');
const testReceipt = require('../main');
it ('should return error when call a IsArrayValid', () => {
    expect(IsArrayValid(['0001', '0003', '0005', '0033'])).toBe("[ERROR]:");
});
it ('should return error when call a IsArrayValid', () => {
   expect(IsArrayValid(['0101', '0003', '0005', '0033'])).toBe("[ERROR]:");
});
it ('should return error when call a IsArrayValid', () => {
    expect(IsArrayValid(['0101', '0013', '0005', '0033'])).toBe("[ERROR]:");
});
it ('should return error when call a IsArrayValid', () => {
    expect(IsArrayValid(['0101', '0013', '0015', '0033'])).toBe("[ERROR]:");
});
it ('should return receiptMessage when call a printReceiptMsg', () => {
    expect(printReceiptMsg(['0001', '0003', '0005'])).toBe(
	"Receipts" +
    "------------------------------------------------------------"+
    "Coca Cola"+" "+3+" "+1+
    "Pepsi-Cola"+" "+5+" "+1+
    "Dr Pepper"+" "+7+" "+1+
    "------------------------------------------------------------"+
    "Price:"+ 15
	);
});