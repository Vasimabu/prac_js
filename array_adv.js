//array of objects will bw used
const hobies=new Array("cockong","walking")
console.log(hobies);

//array of objects

const foods=[
    {id:1, title:'biriyani', dietry:'non-veg'},
    {id:2, title:'sambar', dietry:'veg'},
    {id:3, title:'curdrice', dietry:'veg'}
]
/*console.log(foods);
//access particular key in array of object
console.log(foods[1].title);*/

//print in UI
//document.getElementById("msg").innerHTML =foods[1].title

//for loops to all value

/*for(let i=0;i<foods.length;i++){
    console.log('food itens- for-loop,',foods[i].id,foods[i].title,foods[i].dietry);
}*/

//another method for in loop method
/*for(let fooditem in foods){
    console.log(foods[fooditem]);
}*/

//for of loop
/*for(let fooditem of foods){
    console.log(fooditem);
}*/

//for each method