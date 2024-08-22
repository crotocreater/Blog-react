import path from 'path';
import express from 'express';
const config = (app)=>{
    app.use(express.static(path.join("./src", "public")));
    app.set("view engine", "ejs");
    app.set("views", path.join('./src', 'views'));
}


export default config;