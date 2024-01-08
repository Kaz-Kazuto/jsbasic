// // let greet =" Hello there";
// // console.log(greet);

// // let myName = "Saw San Tun";
// // console.log(myName);

// // let myVar = `${greet} ${myName}`;
// // console.log(myVar);

// // let time=`3 o'clock`;
// // console.log(time);

// // let timeString= "It  is"+time+ "now" +myName;
// // console.log(timeString);

// // let myNum = 10;
// // let myNumber=20;
// // let myFloat=20.137;
// // console.log(myFloat);
// // let myName="Saw San Tun";
// // let myVar=Boolean(myName);
// // console.log(myVar);

// // falsey values
// // 1 ""
// // 2 0
// // 3 NaN
// // 4 undefined
// // 5 null
// // 6 false

// // let myAge=0;
// // let myVar=Boolean(myAge);
// // console.log(myVar);

// // let x;
// // console.log(Boolean(x));

// // let y=null;
// // console.log(Boolean(y));

// // let z;
// // let z2=2;
// // console.log(Boolean(z2+z));

// // let a=2*3;
// // console.log(a);

// // let b=100/5;
// // console.log(b);

// // let c=100%20;
// // console.log(c);

// // let d,e,f=0;
// // console.log(f);

// // let x=2;
// // x=2**5;

// // console.log(x);

// // let y=2;
// // y+=4
// // console.log(y);

// // let z=10;
// // z/=5;
// // console.log(z);

// let b=(10+2*12)-(7*8/2);
// console.log(b);

// function add(x,y,z) {
//     return sum = x + y + z;
// }

// add(1,2,3);
// console.log(sum);

// let currentYear=2023

// function calculateAge(years){
//     return age= currentYear - years;
// }
// calculateAge(2003);
// // console.log(age);

// function num(a,b,...c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// num(1,2,3,4,5,6,7,8,9,10);

// function sayName(name,fun){
//    let namefun=fun(name);
//    console.log(namefun);
// }
// sayName('KyawKyaw', function(name){
//     return name;
// })

// function twice(num, modifiers){
//     let result = modifiers(num)**2;
//     console.log(result);
// }
// twice(5, function(num){
//    return num + 5;
// });

// let twice=(num , modifiers)=> modifiers(num)**5;
// console.log(twice(5, modifiers=num=>num+5));

// let mixtures = new Array("dog",20,1.5,true);
// let mixtures=["dog",20,1.5,true];
// console.log(mixtures);

// let arr = [
//     [1,2,3],
//     ["a","b","c"]
// ]

// let c = arr[1][2]

// console.log(c);

// let names= ["MgMg","Kyaw Kyaw", "Htun Htun"]

// names=names.map(name=>{
//     return name=="MgMg";
// })

// console.log(names);

// let nums=[1,2,3,4,5,6,7,8,9];

// let filteredNumber=nums.filter(num=>{
//     return num===3;
// })
// console.log(filteredNumber);

// let nums =[1,2,3,4,5,6,7,8,9]

// let result=nums.reduce((prev,current)=>{
//     console.log(prev,current)
//     return current*prev;
// })

// console.log(result)

// let nums = [1,2,3,4,5,6,];

// let newArr = nums.map(num => num+100);
// console.log(newArr);

// let filteredNumber = nums.filter(num => num%2==0);
// console.log(filteredNumber);

// let result = nums.reduce((prev,current) => prev + current,)
// console.log(result);

// let persons = [{name: 'John', age:20}, {name: 'Doe', age:20}, {name: 'Doe', age:25}]

// let findPerson= persons.filter(person => person.name=='John');

// console.log(findPerson);

// let person ={
//     name: 'John',
//     eat(){
//         setTimeout(()=>{
//             console.log(this);
//         }, 3000)
//     }
// }

// person.eat()

// let persons = [
//     {name: 'Sai Sai', age:20, gender:'female'},
//     {name: 'Su Su', age:24, gender:'female'},
//     {name: 'Kyaw Kyaw', age:23, gender:'male'},
//     {name: 'Mg Mg', age:30, gender:'male'}

// ]

// // let searchPerson = prompt('Seach a person: ')

// let filteredPerson=persons.filter((person)=>{
//     return person.gender=== 'female';
// })

// console.log(filteredPerson);

// let person = '[{"name": "SU SU", "age":20}]'
// console.log(JSON.parse(person));

// let tired=prompt('Are you tired "yes/no :"')

// if (tired==='yes'){
//     console.log("rest well");
// }else if (tired==='no'){
//     console.log("got back to work");
// }else{
//     console.log("Please enter yes or no");
// }

// let persons = [
//     {
//         name: 'John',
//         age: 20,

//     },
//     {
//         name: 'Mg Mg',
//         age : 18,
//         gender: 'm',
//     },
//     {
//         name: 'Su Su',
//         age : 21,
//         gender: 'f',
//     }

// ];

// // persons=persons.map((person) =>{
// //     if(person.gender){
// //         if(person.gender==='m'){
// //             person.gender='male';
// //         }
// //         if(person.gender==='f'){
// //             person.gender='female';
// //         }

// //     }
// //     else
// //       person.gender='unknown';

// //       return person
// // })

// // console.log(persons);

// // let age = 16;
// // let permission=age >18 ? 'authorized' : 'denied';

// // console.log(permission);

// let people = [
//     {
//         name: 'John',
//         age: 20,

//     },
//     {
//         name: 'Mg Mg',
//         age : 18,
//         gender: 'm',
//     },
//     {
//         name: 'Su Su',
//         age : 21,
//         gender: 'f',
//     }
// ]

// people=people.map((person)=>{
//     switch(person.gender){
//         case "m":
//             person.gender = 'male';
//             break
//         case "f":
//             person.gender = 'female';
//             break
//         default:
//         person.gender = 'unknown';

//         return person;
//     }
// })

// console.log(people);
//while loop
// let people = ["mgmg", "susu", "kyawkyaw","tuntun","John"]
// let x =0
// while (x<people.length) {
//     console.log(people[x]);
//     x++;
// }

//do while loop

// let x=0
// do{
//     console.log("hi "+ x);
//     x++;
// }while(x<10);

//for loop
// let people = ["mgmg", "susu", "kyawkyaw","tuntun","John"]
// for( let x=0;x<people.length;x++ ){
//     console.log(people[x]);
// }

//for of loop {use in array to loop}
// let people = ["mgmg", "susu", "kyawkyaw","tuntun","John"];
// for( person of people ){
//     console.log(person);
// }

//for in loop {use in object to loop}
// let person = {
//     name: "John",
//     age: 22,
// }

// for ( key in person ){
//     console.log(`${key} ` + "is" +  ` ${person[key]}`);
// }

// let people = ["mgmg", "susu", "kyawkyaw","tuntun","John"];
// for  ( person in people ){
//     console.log(people[person]);
// }

//Scoping

// let x=0// global scope can use any where

// console.log(x);
// function test(){
//     let y=10;// local Scope can only be use with {}
//     console.log(y);
//     console.log(x);
// }

//OBJ

// class Car{
//     wheels = 4;
//     color = "white";
//     test(){
//         console.log("Car is Driving!");
//     }
// }

// let car = new Car;
// console.log(car);

// let car2 = new Car
// car2.color = "Black";

// console.log(car2);

//OOP static methods

// class Calculator{
//     PI=3.14;
//     Name='Casio'
//     area(r) {
//         return this.PI*r**2;
//     }
//     volume(r,h) {
//         return this.area(r)*h;
//     }
//     static info(){
//         let calculator = new Calculator
//         console.log("It is " +calculator.Name + " Calculator");
//     }
// }

// Calculator.info();
// let calculator = new Calculator

// console.log(calculator.volume(2,4));

//OOP constructor

// class Car{
//     Name='';
//     wheels=4;
//     constructor(name,wheels) {
//         this.Name=name;
//         this.wheels=wheels
//         this.drive();
//     }
//     drive(){
//         console.log(this.Name + " is driving");
//     }
//     getWheels(){
//         console.log(this.Name + " Car has " + this.wheels + " wheels");
//     }
// }

// new Car("Mercedes",4);
// let toyota=new Car("Toyota",10);
// toyota.getWheels();

//OOP (access modifiers)

// class Car{
//     Name ='marcedes';
//     #hp = 300;
//     getHorsePower(){
//         console.log('Horser power is ' + this.#hp)
//     }
// }

// let car = new Car
// console.log(car.getHorsePower());

//asynchronous

// function test() {
//    return new Promise((resolve, reject)=>{
//        let result = 0;
//        for (let i=0; i<1000000000; i++) {
//         result+=i;
//        }
//        if (result){
//         resolve(result);
//        }
//        else{
//         reject('I have got an error')
//        }
//     })
// }

// console.log('work');
// test()
// .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
// });
// console.log('More important work')

//Fetch API
// let uerInput = prompt("Please enter id : ");
// fetch("https://jsonplaceholder.typicode.com/todos/" + uerInput)
//   .then((response) => {
//     return response.json();
//   })
//   .then((datas) => {
//     console.log(datas);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// function test() {
//   console.log("hi");
// }

const { minus, add, PT, PI } = require("./math");

console.log(PI);
