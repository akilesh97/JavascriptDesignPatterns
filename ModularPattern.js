// Modular design pattern

// this pattern is used to encapsulate the piece of the application module seperately, provided the
//   private and public access of fields and methods


var mod = (function () {
    //private variable and function
    var privateVariable = 0;
    var privateFun = () => {
        ++privateVariable;
        console.log("I am private " + privateVariable);
    };

    //public 
    var publicVariable = 0;

    var add = () => {
        privateFun();
        ++publicVariable;
        console.log("inside add")
    };
    var sub = () => console.log("inside sub");

    // fields and methods exposed
    return {
        publicVariable:publicVariable,
        add: add,
        sub: sub
    };
})();

console.log(mod1.add());
console.log(mod1.sub());


//Question 1: Can we achieve inheritance using the modular pattern ??
// Yes !!!!
// we can achieve inheritance using the modular pattern

var mod1 = (function (m) {
    var mul = () => console.log("inside mul");
    var div = () => console.log("inside div");
    return {
        add: m.add, // reusing the add function
        sub: m.sub, // reusing the sub function
        mul: mul,
        div: div
    };
})(mod);


console.log(add.mul());
console.log(mod1.mul());
console.log(mod1.div());


// Question 2: Can we override the parent class method ? if yes, Can I still use the parent and overidden methods ??
// yes, we can !!
// override the parent method and access the parent method and newly overridden method

var mod2 = (function (m) {
    var parent = m;
    var mul = () => console.log("inside mul");
    var div = () => console.log("inside div");
    var add = () => console.log("parent add method overridden");
    var add = () => console.log("parent add method overridden");
    return {
        parentAdd: parent.add, // reuse the parent method
        add: add, // override function
        sub: parent.sub, // reusing the sub function
        mul: mul,
        div: div
    };
})(mod);


console.log(add.mul());
console.log(mod1.mul());
console.log(mod1.div());

// Question 3: Can we simpley extend the same module ??
// Yes.

var mod = (function (m) {
    m.print = () => console.log("Yes I am extendable");
})(mod);

//Question 4: Is it possible to extend it in different file ?? If yes, Do I need to bother about which file to be loaded first ??
// yes and we dont have to bother about the file loading.

var mod = (function (m) {
    m.print = () => console.log("Yes I am extendable");
})(mod || {}); // this will create a new object if the object is not declared.


// jquery chaining implementation using Modular design pattern
var Jquery = (function () {
    var name = '';
    var concat = function (str) {
        name = name + ' ' + str;
        return this;
    };
    var print = function () {
        console.log(name);
        return this;
    };
    return {
        concat: concat,
        print: print
    };
})();

Jquery.concat('Akil').concat('Akula').concat('test').print();


