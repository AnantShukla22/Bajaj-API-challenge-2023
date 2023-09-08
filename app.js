const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(bodyParser.json());

const port = process.env.PORT || 3000;

// post request
app.post("/bfhl", (req, res) => {
  const data = req.body.data;
  console.log(data);

  const alphabets = data.filter(
    (item) => typeof item === "string" && /^[A-Za-z]$/.test(item)
  );
  const numbers = data.filter((item) => !isNaN(item));

  const highest_alphabet =
    alphabets.length > 0 ? alphabets.reduce((a, b) => (a > b ? a : b)) : 0;

  res.json({
    status: true,
    user_id: "anant_shukla_22012002",
    email: "as9829@srmist.edu.in",
    roll_number: "RA2011027020028",
    numbers,
    alphabets,
    highest_alphabet,
  });
});

// get method
app.get("/bfhl", (req, res) => {
  res.json({ operation_code: 1 });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
