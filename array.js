const arr = ["apple", "banana", "pinapple"]
// document.getElementById("demo").innerHTML = arr

// length of an array
let len = arr.length
console.log(len);

// looping through the array
// for(let i = 0; i< len; i++){
//     console.log(arr[i]);
// }

// adding item to array at last 
// arr[len] = 'Mango'
// using push
arr.push("Mango")
console.log(arr);

// using foreach
function myFunc(value){
    console.log(value);
}
arr.forEach(myFunc)

// check wheather is array or not
console.log(Array.isArray(arr));

// array methods

// converting array to string

// document.getElementById("demo").innerHTML = arr.toString()

// using join
document.getElementById("demo").innerHTML = arr.join(" ")


// remove the las item
arr.pop()
console.log(arr)

// add item to last
arr.push("mango")

console.log(arr);

// shift array (removing the first element)

arr.shift()
console.log(arr);

// unshift (add item in beginning)
arr.unshift("apple")
console.log(arr);


// changing array elements

arr[0] = "Watermelon"
console.log(arr);


// merging arrays

let a1 = [1, 2, 3, 4]
let a2 = [5, 6, 7, 8]

let result = a1.concat(a2)
console.log(result);

let a3 = ['a', 'b']

console.log(result.concat(a3))


// Splicing and Slicing Arrays

// The splice() method can be used to add new items to an array:
a1.splice(2, 0, 'new_val')
console.log(a1);

// removing array item using splice
/*
The first parameter (0) defines the position where new elements should be added (spliced in).

The second parameter (1) defines how many elements should be removed.

The rest of the parameters are omitted. No new elements will be added.
*/
a1.splice(1, 1)
console.log(a1);

// array slice

let new_arr = ['vanila_js', 'node_js', 'express_js']
let sliced_arr = new_arr.slice(2)
console.log(sliced_arr);
let x = new_arr.slice(1, 2)
console.log(x);

// array soring
let points = [40, 100, 1, 5, 25, 10];
console.log(points.sort()); // for string

// for number need to compare with next number
/*
If the result is negative, a is sorted before b.

If the result is positive, b is sorted before a.

If the result is 0, no changes are done with the sort order of the two values.
*/
console.log(points.sort(function(a, b){return a - b}));

let rev = points.reverse()
console.log(rev);