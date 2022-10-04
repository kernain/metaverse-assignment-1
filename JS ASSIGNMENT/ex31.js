// 31 No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

let users = [];

if (users.length == 0) {
  console.log("We need to find some users");
} else {
  for (i = 0; i < users.length; i++) {
    if (users[i] == "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${users[i]}, thank you for logging in again.`);
    }
  }
}
