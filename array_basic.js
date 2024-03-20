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
