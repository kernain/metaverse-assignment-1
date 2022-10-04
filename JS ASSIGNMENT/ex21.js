// They think of something you could store in a JavaScript Object. Write a program that creates Objects containing these items.

function User(fname, lname){
    this.FirstName = fname
    this.lastName = lname
}

let user = new User("Karnain", "Kamal")

console.log(user)