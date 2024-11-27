

const { products, people } = require('./data');

const express= require('express') ;
const logger=require('./logger') ;
const app=express() ;

app.use(logger) ;

app.use(express.json()) 
app.use(express.urlencoded({extended: false}))


app.use(express.static('./methods-public'));

const peopleRouter = require('./routes/people');

app.use('/api/v1/people', peopleRouter);



// app.get('/api/v1/people' , (req , res) =>{
//     res.status(200).json({success:true , data:people}) 
// })



// app.post('/api/v1/people', (req, res) => {
//     const { name } = req.body;
//     if (!name) {
//         return res.status(400).json({ success: false, message: "Please provide a name" });
//     }
//     people.push({ id: people.length + 1, name });
//     res.status(201).json({ success: true, name });
// });




// app.get('/api/v1/test' , (req, res)=>{
//     res.json({ message: "It worked!" });
//     })

// app.get('/api/v1/products' , (req , res)=>{
//     res.json(products);
// })    

// app.get('/api/v1/products/:productID' , (req , res)=>{
//     const idToFind = parseInt(req.params.productID); 
    
//     const product = products.find((p) => p.id === idToFind);

    
//     if (!product){
//         res.status(404).send('That product was not found.');
//     }
//     res.json(product);
//    })  

//    app.get('/api/v1/query', (req, res) => {
//     const { search, limit } = req.query;
//     let filteredProducts = [...products];

//     if (search) {
//         filteredProducts = filteredProducts.filter((product) =>
//             product.name.toLowerCase().startsWith(search.toLowerCase())
//         );
//     }

//     if (limit) {
//         filteredProducts = filteredProducts.slice(0, parseInt(limit));
//     }

//     res.json(filteredProducts);
// });

// app.all('*', (req, res) => {
//     res.status(404).send('Resource not found');
// });

app.listen( 3000 , ()=> {
    console.log('Server is working on port 3000')
})
//app.use(express.static("./public")) 