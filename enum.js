/**
 *  1. 数字枚举
 *  从 0 开始
 */
var Num;
(function (Num) {
    Num[Num["One"] = 3] = "One";
    Num[Num["Two"] = 4] = "Two";
    Num[Num["Three"] = 5] = "Three";
    Num[Num["Four"] = 6] = "Four";
})(Num || (Num = {}));
console.log(Num.One); // 3
console.log(Num.Two); // 4
/**
 *  2. 字符串枚举
 */
var StringEnum;
(function (StringEnum) {
    StringEnum["One"] = "123";
    StringEnum["Two"] = "456";
})(StringEnum || (StringEnum = {}));
console.log(StringEnum.One);
