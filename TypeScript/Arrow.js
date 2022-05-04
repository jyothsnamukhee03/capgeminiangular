// normal function 
var hello = function () {
    return "Hello World!";
};
console.log(hello());
// Arraow Function
var hello1 = function () {
    return "Hello World";
};
console.log(hello1());
// is with parameter without  data type
var getResult = function (username, points) {
    return username + ' scored ' + points + ' points!';
};
console.log(getResult("Jyothsna", 100.5));
var getArr = function (u, p) { return u + ' scored ' + p + ' points!'; };
console.log(getArr("Princess", 100));
//with parameter with data type
var getResult1 = function (username, points) {
    return username + ' scored ' + points + ' points!';
};
console.log(getResult1("Jyo", 100.5));
//   create arrow function
