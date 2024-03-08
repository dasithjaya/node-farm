const fs = require("fs");

// Blocking, Synchrinous....................
// const textIn = fs.readFileSync('./input.txt', 'utf-8');
// console.log(textIn)
// const textOut = `This is about me...\n${textIn}\nCreated on: ${ Date.now()}`
// console.log(textOut)
// fs.writeFileSync('./output.txt', textOut);

// Non-blocking, Asynchronous.........................
fs.readFile("./short.txt", "utf-8", (err, data1) => {
  fs.readFile(`./${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile("./output.txt", "utf-8", (err, data3) => {
      console.log(data3);
      fs.writeFile("./last.txt", `${data2}\n${data3}`, "utf-8", (err) => {
        console.log("Your file has been written");
      });
    });
  });
});
console.log("Will read file..................");
