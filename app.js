/* const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'html')));

app.get('/', (req, res) =>  {
    res.sendFile(path.join(__dirname, 'html', 'index.html')); 
});

app.listen(7700, () => {
   console.log("Server success!");
});



 */