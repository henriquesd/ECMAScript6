// The Rest operator gives the ability to get the arguments out of the function,
// and it is used in a case in which we don't know how many inputs are going be used;

function add(...nums) {

    console.log(nums);
}

add(4, 5, 7, 8, 12);


// old way \/
// function add(nums) {

//     console.log(nums);
//     console.log(arguments); // old way
// }

// add(4, 5, 7, 8, 12);