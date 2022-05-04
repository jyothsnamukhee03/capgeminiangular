// General method
function mine1(){
    console.log("Hello World")
}
mine1();

// initializing method

var storing = function(){
    return "this is done by jyo!!"
}
console.log(storing());

// arrow function
var arrow = () => {
    return"this is arrow function"
}
console.log(arrow());

// parameters
var parameterresult = function(name,id){
    return name + id;
}
console.log(parameterresult("jyo",22));

// parameters with datatype
var sum = function(first: number,second: number){
    var c = first+second;
    return c;
}
console.log(2,3);