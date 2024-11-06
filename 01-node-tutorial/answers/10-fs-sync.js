const { readFileSync, writeFileSync, appendFile } = require('fs')

const filePath='./temporary/fileA.txt' ;


writeFileSync(filePath, `Here is the test of writing 3 lines of text in the temporary file.\n`) ;
writeFileSync(filePath, `This is th second line.\n` , { flag: 'a'}) ;
writeFileSync(filePath, `This is th second line.\n` , { flag: 'a'} );  
   
const fileContents= readFileSync(filePath ,'utf8') ;

console.log(fileContents);
