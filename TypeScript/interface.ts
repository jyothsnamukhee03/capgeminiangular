// interface interface_name {  
//     // variables' declaration  
//     // methods' declaration  
// }  

interface OS {  
    name: String; 
    language: String;
    sayHi: (a:number)=>string;
    hello():string;
    
}  
let Oreo:OS = {name: 'O', language: 'Java',  sayHi: (a:number):string =>{return "Hi there"+a}, hello(){return "hi"} }  

let variable=(abc:string):void=>{};
variable("");

let OperatingSystem = (var1: OS): void => {  
  console.log('Android ' + var1.name + ' has ' + var1.language + ' language '+var1.sayHi(6)+' ----- '+var1.hello());  
};  

OperatingSystem(Oreo);  

interface OS1{
  name: String; 
    language: String;
    sayHi: ()=>string;
}
class A implements OS1{
  name: String;
  language: String;
  constructor(name:string, language:string){
    this.name = name;
    this.language = language;
  }
 sayHi = () : string=>{
    return"hi";
  }
}

let os1:OS1 = new A('Jyothsna','Java');
let os2:OS1= new A('Mukhee','JavaScript');
console.log(os1.name+"  "+os1.language+" "+os1.sayHi());
console.log(os2.name+"  "+os2.language+" "+os2.sayHi());
