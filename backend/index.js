import express from 'express';
import userRoutes from './routes/user-route.js';
import commentRoutes from './routes/comment-route.js';
import postRoutes from './routes/post-route.js';
import webhookRoutes from "./routes/webhook.route.js";
import connectDB from './lib/connectDb.js';


const app = express();

app.use(express.json())

app.use('/user', userRoutes);
app.use(commentRoutes);
app.use(postRoutes);
app.use('/webhooks', webhookRoutes);

app.use((error, req, res, next) => {
    res.status(error.status || 500);

    res.json({
        message: error.message || 'Something went wrong',
        stack: error.stack,
        status: error.status
    })
})

app.listen(3000, () => {
    connectDB();
    console.log('Server is serving')
});