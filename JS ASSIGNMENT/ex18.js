// 18 Seeing the World: Think of at least five places in the world you’d like to visit.

let places = ["tokyo", "Niagra Falls", "Dubai", "Maldives", "New York"]

// • Print your array in its original order.

console.log(places)

// • Print your array in alphabetical order without modifying the actual list.

let sortedArr = [...places].sort();

console.log(sortedArr)

// • Show that your array is still in its original order by printing it.

console.log(places)

// • Print your array in reverse alphabetical order without changing the order of the original list.

sortedArr.reverse()

console.log(sortedArr)

// • Show that your array is still in its original order by printing it again.

console.log(places)

// • Reverse the order of your list. Print the array to show that its order has changed.

sortedArr.sort()

console.log(sortedArr)

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

sortedArr.reverse()

console.log(sortedArr)

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

sortedArr.sort()

console.log(sortedArr)

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

sortedArr.reverse()

console.log(sortedArr)