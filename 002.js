/*In JavaScript, the splice() method is used to modify an array by removing, replacing, or adding elements at any position in the array.
 This method alters the original array. */
// Here we declare a new array to understand splic() method clearly.
let countries=["Pakistan","Iran","Afghanistan","Saudi Arabia","Kuwait","Iraq"]; // 6 country names declared
console.log(countries);

countries.splice(1,3); //removing operation started from index 1 (Iran) and 3 elements removed in sequence (Iran, Afghanistan, Saudi Arabia)
console.log(countries); // 1 is used for starting index no. and 3 is used for number of entries need to be removed.