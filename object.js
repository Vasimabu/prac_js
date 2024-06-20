// const person= {
//     firstname:  "Syed",
//     lastname: "Abuthakir",
//     age: 21,
//     /*Fullname:function(){
//         //return this.firstname+' '+this.lastname 
//         //another  method
//         return `${this.firstname} ${this.lastname}`
//     } */
//     //another method of function cration
//     fullname(){
//         return `${this.firstname} ${this.lastname}`
//     }  
// }
//console.log(person.fullname());

//object merging
 /*const personmethod={
    yearofbirth(){
        const DOB=2024-person.age
        console.log(DOB);
        return new Date().getFullYear() - this.age
        //new aboject will use construyctor of the date 
        //getfull year will bw use for the current year y
    },
    favcolor:"red",
    favnum:[1,3,5,7,9],
    get favnumcount(){//its will be use for like a propeerty metghod
        return this.favnum.length
    }
 }*/
 //object merging
 //Object.assign(person,personmethod)//object merging functions
 //console.log(person);
 //console.log(person.yearofbirth());

 //object cloning method - it's means copy the object
 //const copiedobj= Object.assign({}, person)
 //console.log(copiedobj);

 //object spread method
 /*const finalobj={...person, ...personmethod}
 console.log(finalobj);
 console.log(person.favnumcount);*///its called like property methoid nmot a function method

//types of object declarations

/*Using an Object Literal
Using the new Keyword
Using an Object Constructor
Using Object.assign()
Using Object.create()
Using Object.fromEnties()
*/

//Create an empty JavaScript object using {}
//Using an Object Literal

/*const person = {};
// Add Properties
person.firs_tName = "John";
person.last_Name = "Doe";
person.age = 50;
person.eyeColor = "blue";
console.log(person);*/

//Create an empty JavaScript object using new Object()
//Using the new Keyword

/*const person = new Object();

person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

console.log(person);*/

// Note:
// The examples above do exactly the same.
// But, there is no need to use new Object().
// For readability, simplicity and execution speed, use the object literal method.

//Using an Object Constructor

// Sometimes we need to create many objects of the same type.
// To create an object type we use an object constructor function.
// It is considered good practice to name constructor functions with an upper-case first letter.

