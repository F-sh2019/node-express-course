const { Console } = require("console");
const { randomInt } = require("crypto");
const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// here, you could declare one or more variables to store what comes back from the form.
let item = "";
let randomNum = randomInt(1, 100);

// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = () => {
  return `
  <body>
  <p>Guess game</p>
  <p>Guess game2</p>
  <form method="POST">
  <input name="item" type="number"></input>
  <button type="submit">Submit</button>
  <p>${item}<p>
  </form>
  </body>
  `;
};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      // here, you can add your own logic
      if (body["item"]) {
          console.log(randomNum) ;
          console.log(body["item"]);
         
          if (body["item"] < randomNum){
              console.log(randomNum) ;
              console.log(body["item"]);
              item ="your guess in less than the target!";
         }
         else if(body["item"] > randomNum){
              item ="your guess in bigger than the target!";
         }
         else{
              item ="You Guessed correct!";
         }
          
      } else {
          item = "Nothing was entered.";
      }
      // Your code changes would end here
      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.end(form());
  }
});
server.on("request", (req) => {  
  console.log("event received: ", req.method, req.url);  
});  
server.listen(3000);
console.log("The server is listening on port 3000.");
