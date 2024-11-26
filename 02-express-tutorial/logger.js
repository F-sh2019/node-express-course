const logger=(req, res, next)=>{
    console.log(req.methode) ;
    console.log(req.url) ;
    console.log(Date.now()) ;
    next() ;
}
module.exports = logger;