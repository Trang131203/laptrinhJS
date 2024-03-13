//This//
var student = {
    name: 'Mai ha Thi',
    getName: function() {
        console.log(this.name);
        return this.name;
    }
};
var_deStudent = student.getName();

//Copes, call/apply //

var person1 = {name: 'Nhat Minh', age: 12};
var person2 = {name: 'Huu Trung', age: 32};

var sayHello = function(){alert('Hello,' + this.name);};
var sayGoodbye = function(){alert('Goodbye,' + this.name);};

sayHello.call(person1);
sayGoodbye.call(person2);
sayHello.apply(person1);
sayGoodbye.apply(person2);

//chain//

function step1 () {
    console.log(te);
}

function step2 (){
    te = 2;
    step1 ();
}
step2();
var te = "Global variables";

//bind//

var checkNumericRange = function (value) {
    if (typeof value !== 'number') {
        return false;
    } else {
        return value >= this.minimum && value <= this.maximum;
    }
}

var range = { minimum: 10, maximum: 20 };
var boundCheckNumericRange = checkNumericRange.bind(range);
var result = boundCheckNumericRange(12);
console.log(result);

var checkNumericRange = function (value) {
    if (typeof value !== 'number') {
        return false;
    } else {
        return value >= this.minimum && value <= this.maximum;
    }
}
var range1 = { minimum: 15, maximum: 20 };
var boundCheckNumericRange = checkNumericRange.bind(range1);
var result = boundCheckNumericRange(12);
console.log(result);


//lexical
function fOuter(){
    var x = "Hello";
    function fInner(){
        x = "World";
    }
    fInner();
    return x;
}
document.write(fOuter());


var myFunction = function () {
    var name = 'Ha Thi';
    var myOtherFunction = function () {
        console.log('I am ' + name);
    };
    console.log(name);
    myOtherFunction();
};
myFunction();

// Closures 
function outerF(){
    var x = "World";
    function innerFsetX(val){
        x = val;
    }
    return innerFsetX;
}
var a = outerF();
a("Hello");

var  sayBye = function (name) {
var text = 'Bye, ' + name;
    return () =>{
        console.log(text);
    }
}
sayBye('Me');
var calledMe = sayBye('Me');
calledMe();

//Curry 
function add(a, b, c) {
    return a + b + c;
}

console.log(add(1 , 2, 3));
function addCurries(a) {
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}

console.log(addCurries(1)(2)(3));
const ad1 = addCurries(1);
const ad2 = ad1(2);
const ad3 = ad2(4);

console.log(ad3);

//clousure

var registrations = {
    class: "Databases",
    students: [
        {studentId: "001", name:"Mai ha Thi"},
        {studentId: "002", name:"Nguyen Van A"},
        {studentId: "003", name:"Mai An Thuy"}
    ],

    clickEnrollment: function() {
        this.students.forEach((student) => {
            console.log(student.name + " already enrolled in class", this.class);
        })
    }
}

registrations.clickEnrollment();

//