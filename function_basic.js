//functions
// function wish(name){
//     console.log("all the best"+name)
// }
// name=prompt("enter your name")
// wish(name)
// aruguments name was change
// function wish(abc){
//     console.log("all the best"+abc)
// }
// name=prompt("enter your name")
// wish(name)
//aruguments and valies are change
/*function repay(amount){
    console.log("you repaid" + amount)
}
salary=10000
repay(salary)*/
//muliply with return statement,this method also outside the values
function multiply(no1,no2){
    return no1*no2
}
var result=multiply(10,20)
console.log(result)
//its arguments passed methods,marks based functions ,get inputs in the user
function calculate(tamil_mark, english_mark){
    return tamil_mark + english_mark
}
var tamil = Number(prompt("enter tamil mark:"))
var english = Number(prompt("enter english marks:"))
var result = calculate(tamil,english)
console.log(result)
//local and global variable
var salary=25000//global variable
function buy_veg(){
    amount=200/objects for loop in for..in
let item={
    name:'phone',
    parice:25000,
    quantity:1
}
for(let key in item){
    console.log(key,item[key])
}*/
//function declarition
/*function Num(num){
    return num
}
console.log(Num(4))
function sayHello(){
    console.log('hello')
}
sayHello()*/
//default parameters
/*function greet(name='there'){// defalut value
    console.log('hi',name)
}
greet('abu')
greet()*/
//recursion - function calling itself same function
//factorial - product of first n numbers
/*function factorial(n){
    if(n==1)
        return 1
    return n*factorial(n-1)
}
console.log(factorial(5))*/
//function expression
//assigned to a variable as object
let a=100
let isEven =function(num){
    return num%2==0
}
console.log(isEven(5))
//arrow fumction
    console.log("buying vegetables")
    console.log(salary)
}
//console.log(amount) beacuse the amount is local variable
//console.log()
buy_veg()
console.log(salary)
//object access methods
/*let item={
    name:'phone',
    parice:25000,
    quantity:1
}
console.log(item)
let item2 = new Object()
item2.name='charger'
item2.price=700
item2.quantity=1
item2.warranty='1 year'
item2.gurantee='1 year'
console.log(item2)
//dot notation
console.log(item.parice)
item.parice=28000
console.log(item)
//add  new items
item.warranty='1year'
console.log(item)
//square bracket notation
console.log(item['parice'])
item['warranty']='Not avilable'
console.log(item)*/
//object inside methods
/*let item={
    name:'phone',
    parice:25000,
    quantity:1,
    buy: function(){
        console.log('item added to cart')
    },
    addtolist(){
        console.log('item added to list')
    }
}
item.buy()
item.addtolist()*/
//object access methods
/*let item={
    name:'phone',
    parice:25000,
    quantity:1
}
//for in loop
/*const person={
    name:"abu",
    age: 20,
    sex: 'male'
}
for(let key in person){
    console.log(key +" : ",person[key]);
}
//for in loop in array
let color=['red','blue','green','yellow']
for(let key in color){
    console.log(key +" : ", color[key]);
}*/
//for of loop
/*let color=['red','blue','green','yellow']
for(let colors of color){
    console.log("colors: "+ color);
}*/
//object creation and function calling
//object oriented programming
/*let person={
    name:"abu",
    age: 20,
    sex: 'male',
    interest: ['creating, teaching new things.'],
    isAlive: true,
    address:{
        city:"chennai",
        state:"Tamilnadu"
    },
    greeting: function(){
        let msg=`my name is ${this.name},i love${this.interest}`
        console.log(msg);
    }
}
person.greeting()*/
//factory function -- dynamic functions
function createperson(name){
    return{
        name: name,
        greeting(){
            let msg=`mhy name is${this.name}`
            console.log(msg);
        }
    }
}
let abu=createperson("abu")
let trisha=createperson("trisha")
abu.greeting()
trisha.greeting()
//factory function
/*function createperson(name){
    return{
        name,
        greeting(){
            console.log(`mhy name is${this.name}`)
        }
    }
}
//constructor function
function Person(name){//pascal -> MyFirstName (first chracter capital)
    this.name=name
    this.greeting=function(){
        console.log(`my name is ${this.name}`);
    }
}
let person=new Person("abu")
person.greeting()*/
//dynamic object
const person={
    name:"abu"
}
person.age=24
person.greeting=function(){}
delete person.greeting
console.log(person);


