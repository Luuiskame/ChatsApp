const express = require('express')
const axios = require('axios')
const cors = require("cors")
const PORT = 3001

const app = express()

app.use(express.json())
app.use(cors({origin:true}))

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    // return res.json({ username: username, secret: "sha256..." });
    try {
        const response = await axios.put( "https://api.chatengine.io/users/",{username: username, secret: username, first_name: username},{headers: {"private-key": "c75f8c8b-fdf1-49ab-a9a2-a19e4579ef8c"}})

        return res.status(response.status).json(response.data)
    } catch (error) {
        res.status(500).json(error.response.data)
    }
});

app.listen(PORT, ()=>{
    console.log(`server running on port: ${PORT}`)
})