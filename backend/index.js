import express from "express";
import mysql from "mysql2";
import cors from "cors";
import { searchForAlbum } from "./spotify.js";
import dotenv from "dotenv";
dotenv.config();
// spotify setup


const app = express();
const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password: process.env.SQL_PASSWORD,
    database:"albumdatabase"
})
app.use(express.json())  // allows us to send json data 
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
    
}));


app.get("/", (req, res)=>{
    res.json("Hello this is the backend");
});

app.get("/albums", (req,res)=>{
    const q = "SELECT * FROM albums"
    db.query(q, (err, data)=>{
        return (err ? res.json(err) : res.json(data));
    });
});
app.get("/albums/filter/:albumName", (req, res)=>{
    const q = "SELECT * FROM albums WHERE albumName LIKE ?"
    const value = `%${req.params.albumName}%`;
    db.query(q, value, (err, data)=>{
        return (err ? res.json(err): res.json(data));
    })
})
app.get("/albums/:id", (req, res)=>{
    const q = "SELECT * FROM albums WHERE id = ?"
    const value = req.params.id;
    db.query(q, value, (err, data)=>{
        return (err ? res.json(err): res.json(data))
    })
})
app.put("/albums/:id", (req, res)=>{
    const q = "UPDATE albums SET `albumRating` = ?, albumReview = ? WHERE id = ?";
    const albumId = req.params.id;
    const userInput = req.body;
    const values = [
        userInput.albumRating,
        userInput.albumReview,
        albumId,
    ]

    db.query(q, values, (err,data)=>{
        return (err ? res.json(err): res.json(data))
    })
})
app.delete("/albums/:id", (req, res)=>{
    const q = "DELETE FROM albums WHERE id = ?";
    const albumId = req.params.id;
    db.query(q, albumId, (err,data)=>{
        return (err ? res.json(err): res.json(data));
    })
})


app.post("/albums", async (req,res)=>{
    const album = req.body.album;
    const userInput = req.body.userInput;
    if (!album || !userInput.albumReview || !userInput.albumRating){
        return false;
    }    
    const q = "INSERT INTO albums (`id`, `albumName`, `albumRating`, `albumReview`, `albumArtist`, `albumCover`, `dateAdded`) VALUES (?)"
    const values = [
        album['id'],
        album['name'],
        userInput.albumRating,
        userInput.albumReview,
        album['artists'][0]['name'],  
        album['images'][1]['url'],
        new Date().toJSON().slice(0,10),  // make new date object

    ]
    db.query(q, [values], (err,data)=>{
        return (err ? res.json(err): res.json(true));
    })


})

app.get("/search/:albumName", async (req, res)=>{
    const albumName = req.params.albumName;
    const albumSearch = await searchForAlbum(albumName);
    return res.json(albumSearch);
})


app.listen(8800, ()=>{
    console.log("Connected to backend!");
});

