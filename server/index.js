const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'CRUDDataBase',
});



app.get("/", (req,res)=>{
    
    const sqlInsert = 'Insert INTO movie_reviews (movieName, movieReview) Values ("Inception", "good movie");'
    db.query(sqlInsert, (err, result)=> {
        res.send("Hello Pedro!")
    })
});


app.listen(3001, () => {
    console.log('Running on port 3001')
});