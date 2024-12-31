/* Array Mutator Methods are used in this section */

let cities=["Karachi","Lahore","Faisalabad"] /* An array named 'cities' is created with 3 elements */
console.log(cities); /* array has 3 elements*/

cities.push("New York"); /* 4th element 'New York' is added at the last of the array by using push method */
console.log(cities); /* array has 4 elements*/

cities.push("Maxico City", "Mumbai" , "Banglore", "New Dehli"); /* more than one elements can be added by using push method */
console.log(cities); /* array has 8 elements*/


cities.pop();
 /* Last element of the arrray is removed by using pop method.  
The pop() method in JavaScript is specifically designed to remove only one element,
 and that element is always the last item of the array.*/
console.log(cities); 

cities.unshift("London"); /* an element 'London' is add at the start of the array by using unshift method */
console.log(cities); 

cities.unshift("Tehran","Jalalabad","Khost","Bejing","Tokyo"); /* 5 elements added at the start of the array */
console.log(cities); 

cities.shift(); /* 1st element of the array is removed by using shift method.
The shift() method in JavaScript is specifically designed to remove only one element,
 and that element is always the first item of the array.*/
console.log(cities); 