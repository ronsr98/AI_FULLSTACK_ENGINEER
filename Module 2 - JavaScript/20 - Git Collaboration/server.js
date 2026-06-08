const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// 1. Host the dist folder
app.use(express.static(path.join(__dirname, 'dist')));

// 2. Create a get route called /message with a secret message
app.get('/message', (req, res) => {
    res.send({ secret: "This is the backend secret message!" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
