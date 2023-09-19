const express = require("express");
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post("/bfhl", (req, res) => {
    const { data } = req.body;

    const alpha = [];
    const numbers = [];

    let higestAlpha = "";

    for (const elem of data) {
        let num = Number.parseInt(elem);

        if (isNaN(num)) {
            alpha.push(elem);
            let result = elem.localeCompare(higestAlpha);
            if (result == 1) {
                higestAlpha = elem;
            }
        } else {
            numbers.push(num)
        }

    }


    const response = {
        is_success: true,
        user_id: "harsh_valambe_27102002",
        email: "valambeharsh.ashok2020@vitstudent.ac.in",
        roll_number: "20BRS1197",
        numbers,
        alpha,
        higestAlpha
    }

    res.status(200).json(response);
})

app.get("/bfhl", (req, res) => {
    res.status(200).json({
        operation_code: 1
    })
})

app.listen(5000, () => {
    console.log("SERVER STARTED AT PORT 5000")
})