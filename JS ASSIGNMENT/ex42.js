// 42 Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magician = ["zed", "john", "eric", "max", "jane"];

function show_magicians(magician){
    for(i = 0; i < magician.length; i++){
        console.log(magician[i])
    }
}

function make_great(magician){
    for(i = 0; i < magician.length; i++){
      console.log( magician[i] = `The great ${magician[i]}`) 
    }
}

make_great(magician)

show_magicians(magician)
