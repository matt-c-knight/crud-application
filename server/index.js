const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'CRUDDataBase',
});

app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());
app.post("/api/insert", (req,res)=> {

    const movieName = req.body.movieName
    const movieReview = req.body.movieReview
  
    const sqlInsert = 
    "INSERT INTO movie_reviews (movieName, movieReview) VALUES (?,?)"
    db.query(sqlInsert, [movieName, movieReview], (err, result)=> {});
    console.log(result)
});
// app.get("/", (req,res)=>{
    
//     const sqlInsert = 'Insert INTO movie_reviews (movieName, movieReview) Values ("Total Recall", "great movie");'
//     db.query(sqlInsert, (err, result)=> {
//         res.send("Hello Matt!")
//     })
// });


app.listen(3001, () => {
    console.log('Running on port 3001')
});