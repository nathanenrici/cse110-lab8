// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('8675309 is not a phone number', () => {
    expect(functions.isPhoneNumber("8675309")).toBe(false);
});
test('925-299-8966 is a phone number', () => {
    expect(functions.isPhoneNumber("925-299-8966")).toBe(true);
});
test('dn is not a phone number', () => {
    expect(functions.isPhoneNumber("dn")).toBe(false);
});
test('111-111-1111 is a phone number', () => {
    expect(functions.isPhoneNumber("111-111-1111")).toBe(true);
});

test('my email is an email', () => {
    expect(functions.isEmail("nenrici@ucsd.edu")).toBe(true);
});
test('email must have an at', () => {
    expect(functions.isEmail("nenriciucsd.edu")).toBe(false);
});
test('email must have a period', () => {
    expect(functions.isEmail("nenrici@ucsdedu")).toBe(false);
});
test('short email works', () => {
    expect(functions.isEmail("w@a.ss")).toBe(true);
});

test('a is not a strong password', () => {
    expect(functions.isStrongPassword("a")).toBe(false);
});
test('aaaaaaaaaaaaaaaa is not a strong password', () => {
    expect(functions.isStrongPassword("aaaaaaaaaaaaaaaa")).toBe(false);
});
test('a_12 is a strong password', () => {
    expect(functions.isStrongPassword("a_12")).toBe(true);
});
test('abcd is a strong password', () => {
    expect(functions.isStrongPassword("abcd")).toBe(true);
});

test('abcd is not a date', () => {
    expect(functions.isDate("abcd")).toBe(false);
});
test('13/32/2002 is a date', () => {
    expect(functions.isDate("13/32/2002")).toBe(true);
});
test('1/32/202 is not a date', () => {
    expect(functions.isDate("1/32/202")).toBe(false);
});
test('1/1/2000 is a date', () => {
    expect(functions.isDate("1/1/2000")).toBe(true);
});

test('isHexColor rejects based on length', () => {
    expect(functions.isHexColor("x3")).toBe(false);
});
test('000 is a color', () => {
    expect(functions.isHexColor("000")).toBe(true);
});
test('rejects based on wrong characters', () => {
    expect(functions.isHexColor("x33000")).toBe(false);
});
test('000000 is a color', () => {
    expect(functions.isHexColor("000000")).toBe(true);
});