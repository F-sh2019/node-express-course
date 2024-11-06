const { writeFile , appendFile } = require("fs") ;

console.log('Just started!');
const filePath="./temporary/fileB.txt" ;

writeFile(filePath , `This is line 1\n` , (err, res) => {
  console.log("at point 1");
  if(err){
    console.log("Error Happend!" , err) ;
  }
  console.log('First Line appended')
  
  writeFile(filePath , `This is the line 2. \n` ,  { flag: 'a'},(err, res) =>{
    console.log("at point 2");
    if(err){
      console.log("Error Happend!" , err) ;} 
      })
  console.log('second Line appended') ;
  
  writeFile(filePath , `This is the line 3. \n` , { flag: 'a'}, (err, res) =>{
    console.log("at point 3");
    if(err){
      console.log("Error Happend!" , err) ;} 
     })
   console.log('Third Line appended') ;
}) ;

console.log('End');
