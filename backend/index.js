import express from 'express';

const app = express();

console.log('changed');

app.listen(3000, () => {
    console.log('Server is serving')
});