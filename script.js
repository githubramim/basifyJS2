// TODO-1


function sum(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

// Example
console.log(sum(5));  

// TODO-2 

// Creating the book object
const book = {
    title: "Bela Furabar Age",
    author: "Dr. Arif Azad",
    year: 2020
};


function printBookInfo(book) {
    console.log(`Title: ${book.title}, Author: ${book.author}, Year: ${book.year}`);
}


printBookInfo(book);

// TODO-3 

function reverseArray(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}

// Example usage
console.log(reverseArray([1, 2, 3]));  

// TODO-4 



function countOccurrences(arr) {
    let occurrences = {};
    for (let str of arr) {
        occurrences[str] = (occurrences[str] || 0) + 1;
    }
    return occurrences;
}

// Example usage
console.log(countOccurrences(['apple', 'banana', 'apple']));  // Output: { apple: 2, banana: 1 }


// Medium Phase 

// TODO-1 

function multiplicationTable(n) {
    let table = [];
    for (let i = 1; i <= n; i++) {
        let row = [];
        for (let j = 1; j <= n; j++) {
            row.push(i * j);
        }
        table.push(row);
    }
    return table;
}

console.log(multiplicationTable(3));


// TODO-2 


function average(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum / arr.length;
}

console.log(average([1, 2, 3, 4, 5])); 

// TODO-3 


function flatten(arr) {
    let flatArray = [];
    for (let subArray of arr) {
        for (let item of subArray) {
            flatArray.push(item);
        }
    }
    return flatArray;
}

console.log(flatten([[1, 2], [3, 4]]));  



