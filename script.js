//Promises introduces asynchronous programming
// returning stuff as promises
// meaning


const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        isReady = [true, false][Math.floor(Math.random() * 2)]
        isReady ? resolve("✅ soup is ready 🥣") : reject("❌ no soup today")
    }, 2000)
})

/*console.log(
    promise1
    .then(success => console.log({
        success
    }))
    .catch(error => console.log({
        error
    }))
)*/

// instead of the above we can turn it into async function 
const getSoup = async () => {
    const data = {
        rating: null,
        tip: null,
        pay: null,
        review: null
    }
    // instead of .then().catch() we have to try catch
    try {
        const soup = await promise1
        console.log(soup)
        //pay for soup + tip the waiter
        data.rating = 5
        data.tip = .2
        data.pay = 10
        data.review = 5
        return data
    } catch (error) {
        console.log(error)
        //leave a bad review + no tip
        data.rating = 1
        data.tip = 0
        data.pay = 0
        data.review = 1
        return data
    }
}

// since it's a promise we can't just call it and expect it to return
// the data object with console.log, we have to do it in the following way

// IMPORTANT
// the way to get data from an async task/function
// always test with console.log(await getSoup()) or .then()
getSoup().then(value => console.log(value))


// whenever you have a resolve and a reject
// you gotta have a then and a catch

// Async & Await 
// makes it easier to write async programming
// basically syntatic sugar making .then().then() chaining simpler

//whenever we wanna use await we gotta use async
// means this is an async function
// meaning this function will run out of order
// whenever we speak to a website, db or something'
// we almost every time use async
// whenever we do fetch request, API-request we think async function

// rules for using async / await
// 1. You must create a function
// 2. You must use keyword async
// 3. Use the word await for anything we are waiting for

const getDog = async () => {
    // instead of chaining fetch().then().then() we can do
    const url = "https://dog.ceo/api/breeds/image/random"
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}

getDog()

// MORE NOTES


/* 
🌟 Promises

What is a promise? 👇
========================================

- asking for data/information and it can come back to you or NOT.
- Compare it to a promise in real life.

Ex: 
    - You are at a restaurant and you order soup.
    - The waiter PROMISES YOU that he will bring back the soup you ordered
    - What are the outcomes of his promise?
    - He gets you the soup (Resolved)
    - OR He does NOT give you the soup(Rejected)

*/

//  Variables that describe the scenario
let YourTip = 15;
let waiterMoney = 0;
let badReview = false;

// ** Create a Promise object through javascript
let promise = new Promise((resolve, reject) => {
    let hasSoup = true;

    if (hasSoup == true) {
        resolve('Success!');
    } else {
        reject('Failed!');
    }
});

// What does this print IF hasSoup is true? What if it's false?
console.log(promise)


/* 

How do we handle a promise? 👇
========================================

- We just learned a promise can return value of resolved or rejected but we can then write code to do something with that return (resolved or rejected)
- Below is the real world example

Ex: 
    - The waiter resolves his promise and gives us soup, we will THEN thank him and give him a nice tip!

    - The waiter rejects his prmise and does NOT give us soup, we THEN complain and leave a bad review of the restaurant.
========================================

- You can handle promises with .then()
- .then() is a method that will handle a resolved promise
- .then() takes in an arrow function with WHAT you want to do with the resolved  promise!

- .catch() method can get called whenever an error is encountered at any point in the promise resulting in the promise getting rejected
- You can chain .catch() after a .then() if you want to handle for errors or log a message!


*/

// ** Get the promise variable again and handle the result by adding .then() after it

// promise.then(()=> {
//   console.log("Thank you here's a tip!")
//   return waiterMoney += YourTip
// }).catch(()=> {
//   console.log("This is terrible service!")
//   return badReview = true
// })

/* 

Async Await + Try Catch? 👇
========================================

- If this is making sense to you let's start to use real coding example now using a promise to get back data from an api

- async await is just "syntatical sugar" makes code easier to read/understand

*/

// Ex:
async function getUserData() {
    // instead of .then and .catch we can use try and catch
    try {
        const userData = await fetch('https://jsonplaceholder.typicode.com/users/1')
        const user = await userData.json()

        // If you console log user what would get printed out?
        return user
    } catch (error) {
        console.error(error)
    }

}

console.log(getUserData())

//  ** Test what you understand about getUserData() **

// What part of this function is the promise? try catch

// What part of this function is handling if the promise is resolved? the try block

// What part of this function is handling if the promise is rejected? the catch block

// What does asynchronous mean and how does it affect the function? it means it runs out of order, running by itself by its own priority waiting for responses by the api call