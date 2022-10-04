// 14 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

var guestList = ["Afsar", "Mubarak", "Jawed", "Adnan"];

for(i = 0; i < guestList.length; i++){
    console.log(`I would like to you on a dinner, ${guestList[i]}.`)
}

// 15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

console.log(guestList[1] + " Cant Come to the Dinner")

var guestList = ["Afsar", "Saeeda", "Jawed", "Adnan"];

for(i = 0; i < guestList.length; i++){
    console.log(`I would like to you on a dinner, ${guestList[i]}.`)
}

// 16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

console.log("found a bigger dinner table")

guestList.unshift("Sikandar")
let middle = Math.ceil(guestList.length  / 2);
guestList.splice(middle, 0, "Tariq")
guestList.push("Khalid")

// 17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

console.log("I can only Invite 2 people for dinenr")

for(i = 2; i < guestList.length; i++){
    console.log(`sorry I can’t invite you to dinner, ${guestList[i]}.`)
}

guestList.splice(2, guestList.length)

for(i = 0; i < guestList.length; i++){
    console.log(`You are Still Invited, ${guestList[i]}.`)
}


// 19 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log(guestList)
