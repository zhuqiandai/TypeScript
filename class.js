var Gretter = /** @class */ (function () {
    function Gretter(message) {
        this.gretting = message;
    }
    // 静态方法
    Gretter.getClassName = function () {
        return 'Class name is Greeter';
    };
    // 成员方法
    Gretter.prototype.greet = function () {
        return 'Hello, ' + this.gretting;
    };
    Gretter.cname = 'Gretter';
    return Gretter;
}());
