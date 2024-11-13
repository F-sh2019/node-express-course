const { createReadStream } = require("fs");
const path = require("path");


const filePath = path.join(__dirname, "../content/big.txt");


const stream = createReadStream(filePath, { encoding: "utf8", highWaterMark: 200 });

let counter = 0;


stream.on("data", (chunk) => {
  counter++;
  console.log(`Chunk ${counter}:`, chunk);
});

// Handle the "end" event
stream.on("end", () => {
  console.log(`Stream ended. Total chunks received: ${counter}`);
});

// Handle the "error" event
stream.on("error", (error) => {
  console.error("An error occurred:", error.message);
});