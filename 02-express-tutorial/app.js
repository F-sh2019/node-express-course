const { products } = require("./data");
const express= require('express') ;
const app=express() ;

app.use(express.static("./public")) 

app.get('/api/v1/test' , (req, res)=>{
    res.json({ message: "It worked!" });
    })

app.get('/api/v1/products' , (req , res)=>{
    res.json(products);
})    

app.get('/api/v1/products/:productID' , (req , res)=>{
    const idToFind = parseInt(req.params.productID); 
    
    const product = products.find((p) => p.id === idToFind);

    
    if (!product){
        res.status(404).send('That product was not found.');
    }
    res.json(product);
   })  

   app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query;
    let filteredProducts = [...products];

    if (search) {
        filteredProducts = filteredProducts.filter((product) =>
            product.name.toLowerCase().startsWith(search.toLowerCase())
        );
    }

    if (limit) {
        filteredProducts = filteredProducts.slice(0, parseInt(limit));
    }

    res.json(filteredProducts);
});

app.all('*', (req, res) => {
    res.status(404).send('Resource not found');
});

app.listen( 3000 , ()=> {
    console.log('Server is working on port 3000')
})
app.use(express.static("./public")) 