let user = {
  firstname: "sagar",
  lastname: "karmoker",
  age: 23,
  isAdmin: true,
};

console.log(user.firstname);
console.log(user.isAdmin);

let now = new Date()
console.log(now)
console.log(now.getTime())
console.log(now.getFullYear())
console.log(now.getDay()) //week day
console.log(now.getDate())
console.log(now.getMinutes())

const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

let mydate = `${year}/${month}/${date}`;
console.log(mydate);

// if else

let age = 23

age > 18 ? console.log("you are adult") : console.log("you are not adult")

const agree = confirm("Are you sure?")
console.log(agree)