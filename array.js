const arr = ["apple", "banana", "pinapple"]
document.getElementById("demo").innerHTML = arr

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


