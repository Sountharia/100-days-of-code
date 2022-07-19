console.log("hello")
//alert("Hello")
document.getElementById("home").innerHTML="Hi There!"
var Sname="Sou"
document.getElementById("home").innerHTML="Hi "+ Sname

function greeting(Sname){
    var myName
    //myName=prompt("Enter your Name:")
    
    if (myName) {myName=myName} else {myName=Sname}
    if (true)
    {
        console.log("True")
    }
    myName= myName.toUpperCase()
    var res = "Hello "+ myName
    return res
}
document.getElementById("home").innerHTML=greeting("Guest")

var fruit = "apple"
var fruits = "apple, banana, kiwi, pear"
console.log(fruit.split())
console.log(fruits.split(','))
console.log(fruit.length)//lenght of string
console.log(fruits.length)//lenght of array
fruits = new Array("a","b","c") //another way of declaring array
console.log(fruits.length)

for (var i=0; i<fruits.length; i++){//loop thru array and print
    console.log(fruits[i])
}
console.log(fruits)
fruits.pop()
console.log(fruits)
fruits.shift()//adds to beginning of the Array
console.log(fruits)
fruits.unshift("test")
console.log(fruits.unshift("one")) //returns length
console.log(fruits)

fruits[0]="first"
console.log(fruits)
console.log(fruits.reverse())
var veggies=['tomato','potato','carrot']//declare an array
veggies.push("brinjal")//appends the array
console.log(veggies)
var groceries=fruits.concat(veggies)
console.log(groceries)
console.log(groceries.sort())

//number array
num=[1,10,4,14,11,2]
console.log(num)
console.log(num.sort())

function compareNumbers(a, b)
{
    console.log("A:"+a+" B:"+b+"a-b : "+(a-b))
    return a - b;
}

console.log(num.sort(compareNumbers));//ascending order
console.log(num.sort(function(a,b) { return b-a})) // descending order
//console.log(num.)

//objects in javascript

student = {
    first:"sou",
    last:"k",
    age:45,
    gender:'F',
    studentInfo : function(){
        return this.first+" "+this.last
    }
}

console.log(student.first)
console.log(student.studentInfo())

age=45
if ((age<=18) || (age>=35)){
    ageStatus="Too young or too old to play ;)"
}
else{
    ageStatus="Right age. Lets Go!"
}
console.log(ageStatus)

dayNum=6

switch(dayNum){
    case 6:
        text="Week end"
        break
    case 5:
        text="week end"
        break
    default:
        text="Week Day, kelambu kelambu"
    
}
console.log(text)

function findDay(dayNum){
    
    switch(dayNum){
        case 6:
            text="Week end"
            break
        case 5:
            text="week end"
            break
        default:
            text="Week Day, kelambu kelambu"
        
    }
    return text
}
console.log(findDay(6))
console.log(findDay(3))
