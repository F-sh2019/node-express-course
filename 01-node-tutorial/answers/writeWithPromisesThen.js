
const { writeFile, readFile } = require("fs").promises; 

console.log("Starting the writeWithPromisesThen program");

writeFile('./temp.txt' ,'This is the First Line.\n')  
.then(() => {
    console.log("First line written");  
   return writeFile('./temp.txt' , 'This is the Second Line' ,{flag: 'a'})  // write line 2.  
   
})  
.then (()=>{
    console.log("Second line written");
    writeFile('./temp.txt' , 'This is the Third Line' , {flag:'a'})})

.then (()=> {
    console.log("Third line written");
    return readFile("./temp.txt", "utf-8");
})

.then((data)=>{
    console.log("File contents:");
    console.log(data);
})
.catch((error) => {  
    console.log("An error occurred: ", error)  
})  




// console.log("Starting the writeWithPromisesThen program");

// // Write the first line to temp.txt
// writeFile("./temp.txt", "This is line 1\n")
//   .then(() => {
//     console.log("First line written");
//     // Write the second line with append mode
//     return writeFile("./temp.txt", "This is line 2\n", { flag: "a" });
//   })
//   .then(() => {
//     console.log("Second line written");
//     // Write the third line with append mode
//     return writeFile("./temp.txt", "This is line 3\n", { flag: "a" });
//   })
//   .then(() => {
//     console.log("Third line written");
//     // Read the contents of temp.txt
//     return readFile("./temp.txt", "utf-8");
//   })
//   .then((data) => {
//     // Log the file contents to the console
//     console.log("File contents:");
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("An error occurred:", error);
//   });