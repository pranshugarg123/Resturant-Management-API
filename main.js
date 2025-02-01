var a=3
var b=4
var c=a+b
console.log(c)
console.log("hello")
let d=6
const name='pranshu'
console.log(typeof name) 
const cars=["saab","volvo","bmw",3]
console.log(typeof cars[3])
const person={
    name:"john",
    age:30,
    hobbies:["reading","writing"]
};
console.log(person.hobbies[1])
const ages=[10,20,30,40,50]
const sub=ages.filter(age=>{
    return age>18
})
console.log(sub)
const nw=[...ages,"gvagon"]
console.log(nw)
const pr={...person,city:"Chandigarh"}
console.log(pr)
const nage=ages.map(age=>age*2)
console.log(nage)
const red=ages.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue
},0)
console.log(red)
const add=(a,b,call)=>{
    var c=a+b
    console.log(c)
    call()
}
add(3,4,()=>{
    console.group("addition completed")
})

var lod=require('lodash')
const arr=[1,1,2,2,3]
const filter=lod.uniq(arr)
console.log(filter)
const obj={
    name:"Pranshu",
    rollno:10
}
//console.log(obj)
console.log(typeof obj)
js=JSON.stringify(obj)//converting object into json
console.log(js)
console.log(JSON.parse(js))//converting json into object


