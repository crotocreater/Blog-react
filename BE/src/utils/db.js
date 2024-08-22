import pg from 'pg';

// database
const db = new pg.Client({
    user: "postgres",
    host: "localhost", 
    database: "BLOG",
    password: "hoang2k5@",
    port: 3000,
})

db.connect();


export default db;