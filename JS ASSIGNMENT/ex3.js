// 3 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let person = "karnain kamal";

console.log(person.toLocaleLowerCase());
console.log(person.toLocaleUpperCase());

function titleCase(text) {
  return text.replace(/\w\S*/g, function (person) {
    return person.charAt(0).toUpperCase() + person.substr(1).toLowerCase();
  });
}

titleCase(person);