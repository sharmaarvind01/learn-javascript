// To Access date

// let myDate = new Date();
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())

// To create date
// let createDate = new Date(2023,11,23)
let createDate = new Date("09-07-2023")
// console.log(createDate.toString());

let myTimeStamp = Date.now()
console.log(Math.floor(myTimeStamp/1000))
console.log(Math.floor(createDate.getTime() / 1000))
console.log(`The time difference is ${Math.floor(myTimeStamp/1000) - Math.floor(createDate.getTime() / 1000)}`)

