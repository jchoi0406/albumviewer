import express from "express";
import mysql from "mysql2";
import cors from "cors";
import bcrypt from "bcrypt";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";
import { searchForAlbum } from "./spotify.js";
// spotify setup
const saltRounds = 10;


const app = express();
const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"Jack2381777",
    database:"albumdatabase"
})
let username = "";
app.use(express.json())  // allows us to send json data 
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
    
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    key: "userId",
    secret: "1234",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24 * 1000,
    },
}))
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
    console.log(req);
    db.query(q, value, (err, data)=>{
        return (err ? res.json(err): res.json(data))
    })
})
app.put("/albums/:id", (req, res)=>{
    const q = "UPDATE albums SET `albumRating` = ?, albumReview = ? WHERE id = ?";
    const albumId = req.params.id;
    const userInput = req.body;
    console.log(albumId);
    console.log(userInput);
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
    console.log(req.params.id);
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
        console.log(data);
        return (err ? res.json(err): res.json(true));
    })


})

app.get("/search/:albumName", async (req, res)=>{
    const albumName = req.params.albumName;
    const albumSearch = await searchForAlbum(albumName);
    return res.json(albumSearch);
})

app.post("/register", (req, res)=>{
    const q = "INSERT INTO users (username, password) VALUES (?,?)";
    const username = req.body.username;
    const password = req.body.password;
    bcrypt.hash(password, saltRounds, (err, hash)=>{
        db.query(q, [username, hash], (err,data)=>{
            return (err ? res.json(err):res.json(data))
        })
    })

})

app.post("/login", (req, res)=>{
    const q = "SELECT * FROM users WHERE username = ?";
    const username = req.body.username;
    const password = req.body.password;
    db.query(q, username, (err, data)=>{
        if (err){
            res.send({err: err});  // send error to frontend
        }
        if (data.length > 0){
            bcrypt.compare(password, data[0].password, (err, response)=>{
                if (response){
                    req.session.user = data;
                    res.send(data);
                }
                else{
                    res.send({message: "Wrong username/password"});
                }
            })  
        }
        else{
            res.send({message: "User doesn't exist"})
        }

    })
})

app.get("/login", (req, res)=>{
    if (req.session.user){
        username = req.session.user;
        res.send({loggedIn: true, user: req.session.user})
    }
    else{
        res.send({loggedIn: false});
    }
})

app.listen(8800, ()=>{
    console.log("Connected to backend!");
});

