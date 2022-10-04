// 43 Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


let magician = ["zed", "john", "eric", "max", "jane"];

function show_magicians(magician){
    for(i = 0; i < magician.length; i++){
        console.log(magician[i])
    }
}

function make_great(magician){
    let arr = [...magician]
    for(i = 0; i < arr.length; i++){
       arr[i] = `The great ${arr[i]}` 
    }

    return arr
}


let greatMags = make_great(magician)

console.log(greatMags)
console.log(magician)

show_magicians(magician)
