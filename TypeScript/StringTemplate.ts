let firstname:string = "Jyothsna";
let lastname: string = "Mukhee";
let num : number = 512;
let text = `Welcome ${firstname}, ${lastname} ! ${num}`;
console.log(text);

// String method
let str: string = "Hello Jyo!!";
console.log(str.charAt(0)); // H

let str1: string = "Hello";
let str2 : string = "Princess";
console.log(str1.concat(str2));// HelloPrincess 
console.log(str1.concat(" ",str2)); // Hello Princess

let str3:string = "Hello Princess Jyo!";
console.log(str3.replace("Princess","jyo")); // Hrllo jyo Jyo!