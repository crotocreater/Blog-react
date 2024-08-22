 import bodyParser from 'body-parser';

const middle = (app) =>{
   app.use(bodyParser.urlencoded({extended:true}));
   app.set("view engine", 'ejs');
}

const post = (req, res, next)=>{
    
}



export default {
    middle, 
    post
}