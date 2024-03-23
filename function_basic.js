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
