const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();


//middleware for express
app.use(express.urlencoded({extended: false }));
app.use(express.json());








app.get('/', (req,res) => {
    res.json({
        message: 'hello world'
    });
});

app.use((req,res) => {
    res.status(404).end();
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});