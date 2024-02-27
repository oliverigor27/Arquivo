const express = require("express");
const cors = require('cors');
const axios = require("axios");

const app = express();

app.use(cors());


app.get("/", async (req, res) => {

    try{
        let { data } = await axios(`https://www.superheroapi.com/api.php/3246243112132664/70`)

        const { powerstats, image, work, appearance } = data; 

        const batman = {
            powerstats,
            image,
            work,
            appearance
        }

        return res.json(batman)
    } catch(error) {
        console.error(error);
    }
});

app.listen(4567)

