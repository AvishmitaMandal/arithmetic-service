const { add } = require("../arithmetica")

test('2+3 is equal to 5', () =>{
    expect(add(2, 3)).toBe(5)
});

test('2+7 is equal to 9', () =>{
    expect(add(2, 7)).toBe(9)
});

test('12+71 is equal to 83', () =>{
    expect(add(12, 71)).toBe(83)
});