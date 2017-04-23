//Product
//构造函数
function Product(option) {
    this._init(option);
}
//原型函数
Product.prototype = {
    constructor:Product,
    //属性
    _init:function (option) {
        this.name = option.name;
        this.price = option.price;
        this.img = option.img;
        this.description = option.description;
    }
};