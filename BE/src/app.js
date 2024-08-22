import express from 'express';
import router from './controller/Acount/app.acount.js';
import config from './config/app.config.js';
import appMiddle from './middleware/app.middle.js';
import env from 'dotenv';
const app = express();
const port = 8080;

//config 
config(app);

env.config();



// middleware 
appMiddle.middle(app);


// router
app.use('/v1', router);


app.listen(port, ()=>{
    console.log(`server run in http://localhost:${port}`);
})