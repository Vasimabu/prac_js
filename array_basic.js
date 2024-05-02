//array basic
var actors=["vijay",0.2,"dhnaush","surya"]
console.log(actors[0])
console.log(actors[1])
console.log(actors[2])
//heterogeneous elements means multiple data types
//homogeneous means single type of data
//arrays
let cities=["chennai","madurai","tuty"]
let marks=[40,50,40,40]
console.log(cities.length)
console.log(cities)
console.log(cities.push("ngl"))
console.log(cities)
console.log(cities.pop())
console.log(cities)
//shift method also removes the first values
console.log(cities.shift())
console.log(cities)
//unshift is also adds the value in first position
console.log(cities.unshift("kodai"))
console.log(cities)
delete cities[2]
/*console.log(cities)
// delete alternative method is splice
//splice
console.log(cities.splice(2,1))// 2means 2 elemtb in 1position
console.log(cities)
console.log(cities.splice(1,1,'m'))//delet and after replace
console.log(cities)
console.log(cities.splice(1,2,'x','y'))//delete 2values and alternative to insert 2values
console.log(cities)
console.log(cities.splice(1,0,'b'))//no deletion insert 1st position values
console.log(cities)*/
//slice method
/*console.log(cities.slice(1,2))
console.log(cities)
console.log(cities.reverse())
console.log(cities)
let str=cities.join()//convert into string
console.log(str)
//split -converts string to arrary
let str3="g,t,j,r"
let arr3=str3.split(',')
console.log(arr3)*/

//arrays in depth concept

//adding elemnt in array
/*const n=[4,5,6]
console.log(n)

let user=prompt("enter the fruits")
let a=["apple","banana"]
a.push("gauva")
for(i=0;i<1;i++)
     a.unshift(user)
console.log(a);*/



console.log(cities)
// delete alternative method is splice
//splice
console.log(cities.splice(2,1))// 2means 2 elemtb in 1position
console.log(cities)
console.log(cities.splice(1,1,'m'))//delet and after replace
console.log(cities)
console.log(cities.splice(1,2,'x','y'))//delete 2values and alternative to insert 2values
console.log(cities)
console.log(cities.splice(1,0,'b'))//no deletion insert 1st position values
console.log(cities)
//slice method
console.log(cities.slice(1,2))
console.log(cities)
console.log(cities.reverse())
console.log(cities)
let str=cities.join()//convert into string
console.log(str)
//split -converts string to arrary
let str3="g,t,j,r"
let arr3=str3.split(',')
console.log(arr3)

//guvi array problems
//3.
/*Sample Input :
3
7 4 9
Sample Output :
3
*/
/*let user=Number(prompt("enter the fruits"))
let a=[]
let count=0
for(i=1;i<=user;i++){
     let n=Number(prompt("enter the fruits"));
     a.push(n)
     count=+i
}
console.log(count);
*/

/*4.Input Description:
First line contains a number denoting size of array ‘n’.Next line contains n space separated numbers
Output Description:
Print the number which is repeated twice
Sample Input :
5
13 12 13 12 13
Sample Output :
12*/

// solvable

let user=Number(prompt("enter the number"))
let a=[]
for(i=1;i<=user;i++){
     let n=Number(prompt("enter the array"));
     a.push(n);
}

let value=0
let count=0
for(i=0;i<a.length;i++){
     for(j=0;j<i;j++){
           //if(i!=j)
                if(a[i]==a[j])
                     count=count+1
     if(count==2)
           console.log(a[i]);
               //console.log(count)
          }
    //if(count==2)
      //   value=a[i]
    //console.log(value);
}
//if(count==2)
//console.log(count);
//console.log(value);

/*You are given an array of ids of prisoners. The jail authority found that there are some prisoners of same id. Your task is to help the authority in finding the common ids.
Input Description:
First line contains a number ‘n’ representing no of prisoners. Next line contains n space separated numbers.
Output Description:
Print the ids which are not unique. Print -1 if all ids are unique
Sample Input :
7
1 1 11 121 131 141 98
Sample Output :
1*/

//solvable

/*let user=Number(prompt("enter the number"))
let a=[]
for(i=1;i<=user;i++){
     let n=Number(prompt("enter the array"));
     a.push(n);
}
for(i=0;i<a.length;i++)  
      for(j=0;j<i;j++)
           if(i!=j)
                if(a[i]==a[j])
                     console.log("1")*/
//array methods
/*var array=[1,2,3,4,5] 
let obj={id:1}
let other= undefined
let string="abu"              
function checkIfArray(val){
     if(typeof val=="string"){
          console.log("it is an string");
     }
     else if(typeof val=="number"){
          console.log("it is an number");
     }
     else if(typeof val=="undefined"){
          console.log("it is an undefined");
     }
     else{
          console.log("it is an array");
     }
}
checkIfArray(string)*/
