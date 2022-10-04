// 32 Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

let current_users = ["zed", "john", "eric", "max", "jane"];

let new_users = ["zed", "john", "cass", "dean", "sam"]

new_users.map((elem) => {
    current_users.includes(elem.toLowerCase()) ?
        console.log("Username already exist"):
        console.log("Username is availabe")
})