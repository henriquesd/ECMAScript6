let contacts = ["Mary", "Joel", "Danny"];

// When this variable is created, this array is actually acting as a reference type;
// So when saying "personalFriends equal to contacts", is not creating a new array,
// but it is making a reference to the "let contacts ..." in line 1.
// So if some value change in contacts, the personalFriends will also change; in order to avoid this,
// we can use the spread operator ("...xxx") (see line 12);
let personalFriends = contacts;

// Now it is making a new copy of the array and saving it into the variable personalFriendsWithSpreadOperator,
// and if something changes in the contacts variable, the values in personalFriendsWithSpreadOperator will not change;
let personalFriendsWithSpreadOperator = [ ...contacts ];

let editedPersonalFriendsWithSpreadOperator = [ "David", ...contacts, "Lily" ];

console.log('Contacts before adding: ' + contacts);
console.log('personalFriends: ' + personalFriends);
console.log('personalFriendsWithSpreadOperator: ' + personalFriendsWithSpreadOperator);
console.log('editedPersonalFriendsWithSpreadOperator: ' + editedPersonalFriendsWithSpreadOperator);
console.log("-------");

contacts.push("John");

console.log('Contacts after adding: ' + contacts);
console.log('personalFriends: ' + personalFriends);
console.log('personalFriendsWithSpreadOperator: ' + personalFriendsWithSpreadOperator);
console.log('editedPersonalFriendsWithSpreadOperator: ' + editedPersonalFriendsWithSpreadOperator);
console.log("--------------");

// ----------------------------------------------

let person = {
    name: "Adam",
    age: 25,
    city: "Manchester"
}

let employee = {
    ...person, // here it is copying all the values of person variable (line 32);
    salary: 50000,
    position: "Software Developer"
}

console.log(employee);