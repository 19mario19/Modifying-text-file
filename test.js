//Adding the module that allows us to work with files
const fs = require("fs");

//Reading the file.txt
const read = fs.readFileSync("file.txt","utf8");
console.log(read);
//Transforming it into an array
const array = read.split("\n");
// "\n", the separator is the new line 
console.log(array);
//removing "\r" from the array 
const clean = array.map(value => {
    return value.replace("\r", "");
})
console.log(clean);
//Adding after each element ","
const withComma = clean.map(value => {
    return value+",";
})
console.log(withComma);

let lengthArrray = withComma.length-1;

//Removing the comma "," from the last item
//Splice (where you start, where you stop, with what )
withComma.splice(lengthArrray,lengthArrray,withComma[lengthArrray].replace(",",""));
console.log(withComma);

//From array into a string, because writeFile does not accept arrays
const final = withComma.join("");
console.log(final, typeof final);

fs.writeFileSync("end.txt", final);

