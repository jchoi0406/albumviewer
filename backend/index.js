import express from "express";
import mysql from "mysql2";
import cors from "cors";
import { searchForAlbum } from "./spotify.js";
// spotify setup



const app = express();
const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"Jack2381777",
    database:"albumdatabase"
})

app.use(express.json())  // allows us to send json data 
app.use(cors());
app.get("/", (req, res)=>{
    res.json("Hello this is the backend");
});

app.get("/albums", (req,res)=>{
    const q = "SELECT * FROM albums"
    db.query(q, (err, data)=>{
        return (err ? res.json(err) : res.json(data));
    });
});
app.get("/albums/:albumName", (req, res)=>{
    const q = "SELECT * FROM albums WHERE albumName LIKE ?"
    const value = `%${req.params.albumName}%`;
    db.query(q, value, (err, data)=>{
        return (err ? res.json(err): res.json(data));
    })
})
app.get("/albums/:id", (req, res)=>{
    const q = "SELECT * FROM albums WHERE id = ?"
    const value = req.params.id;
    console.log("AAAAAAAAAAA");
    db.query(q, [value], (err, data)=>{
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


app.post("/albums", (req,res)=>{
    const album = req.body.album;
    const userInput = req.body.userInput;
    if (!album || !userInput.albumReview || !userInput.albumRating){
        return false;
    }
    const q = "INSERT INTO albums (`id`, `albumName`, `albumRating`, `albumReview`, `albumArtist`, `albumCover`) VALUES (?)"
    const values = [
        album['id'],
        album['name'],
        userInput.albumRating,
        userInput.albumReview,
        album['artists'][0]['name'],
        album['images'][1]['url'],
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

