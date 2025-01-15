import Express from 'express';
import cors from 'cors';
import path from 'path';

const app = Express();

// app.use(Express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send({ message: 'Hello World 2' });
});

app.get('/img/:filename', (req, res) => {
    try {
        const file = req.params.filename;
        const imagePath = path.resolve('images', file);
        res.sendFile(imagePath);
    } catch(e) {
        res.send('error');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3011');
});