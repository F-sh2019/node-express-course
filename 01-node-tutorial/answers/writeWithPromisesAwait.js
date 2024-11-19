

const { writeFile, readFile } = require("fs").promises; 

const writer =async ()=>{
    try{

    await writeFile('./temp.txt' , `This is the FirstLine.\n` ) ;
       
    await writeFile("./temp.txt", `This is line 2\n`, { flag: 'a' });

   
    await writeFile("./temp.txt", "This is line 3\n", { flag: 'a' });

    console.log("All lines written successfully!");
    }
    catch(e){
        console.log("There is an error on writing on temp file " & {e})
    }

}


const reader= async()=>{
    try{
   
        const content = await readFile("temp.txt", "utf8");
    console.log("File contents:\n", content);

  } catch (error) {
    console.error("Error reading file:", error);
  }
}


const  writeRead= async () => {
    await writer() ;
    await reader() ;

}

writeRead() ;
