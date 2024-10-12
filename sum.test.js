
const { sum } = require('./sum');


describe('sum function', () => {
    test('Cộng hai số có cùng độ dài', () => {
        expect(sum("1234", "897")).toBe("2131");
    });

    test('Cộng hai số khác độ dài', () => {
        expect(sum("123", "45678")).toBe("45801");
    });

    test('Cộng hai số lớn', () => {
        expect(sum("999999999999999999", "1")).toBe("1000000000000000000");
    });

    test('Cộng hai số nhỏ', () => {
        expect(sum("5", "5")).toBe("10");
    });

    test('Cộng với số 0', () => {
        expect(sum("12345", "0")).toBe("12345");
    });

    test('Cộng hai số 0', () => {
        expect(sum("0", "0")).toBe("0");
    });

    test('Cộng với chuỗi rỗng', () => {
        expect(sum("12345", "")).toBe("12345");
    });

    test('Cộng hai chuỗi rỗng', () => {
        expect(sum("", "")).toBe("");
    });
});