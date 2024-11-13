const EventEmitter = require("events");

const emitter1 = new EventEmitter();
const emitter2 = new EventEmitter();

console.log("Starting customEmitter.js");


emitter1.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
 
  emitter2.emit("respond", `${name}, welcome to our system!`);
});

// Event handler for the "respond" event on emitter2
emitter2.on("respond", (message) => {
  console.log("Response received:", message);
});

// Emit the "greet" event every 3 seconds with a different name
setInterval(() => {
  const name = `User${Math.floor(Math.random() * 100)}`;
  emitter1.emit("greet", name);
}, 3000);

// Using an async function that waits on a custom event
const waitForEvent = () => {
  return new Promise((resolve) => {
    emitter1.on("specialEvent", (msg) => resolve(msg));
  });
};

const handleSpecialEvent = async () => {
  console.log("Waiting for a special event...");
  const msg = await waitForEvent();
  console.log("Special event received:", msg);
};

// Trigger the special event after 5 seconds
setTimeout(() => {
  emitter1.emit("specialEvent", "This is a special event message!");
}, 5000);

handleSpecialEvent();

// Emit a custom "timer" event every 2 seconds
setInterval(() => {
  emitter1.emit("timer", "Timer event triggered");
}, 2000);

// Handler for the "timer" event
emitter1.on("timer", (msg) => console.log(msg));

console.log("End of customEmitter.js");
