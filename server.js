const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const dotenv = require('dotenv');
const router = require('./route');
const connectDB = require('./database')

app.use(express.json());
dotenv.config();
connectDB();


app.use('/api/prices',router);

// 404 Middleware
app.use((req, res, next) => {
    res.status(404).json({ error: 'Not Found' });
});

app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({ error: 'Something went wrong' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
