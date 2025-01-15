import Express from 'express';
import cors from 'cors';
import path from 'path';

const app = Express();

// app.use(Express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send({ message: 'Hello World' });
});

app.get('/img/random', (req, res) => {
    try {
        const imgNumber = Math.floor(Math.random() * 15) + 1;
        const imagePath = path.resolve('images', `${imgNumber}.jpeg`);
        res.sendFile(imagePath);
    } catch(e) {
        res.send('error');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3011');
});