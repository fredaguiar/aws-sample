import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from './controllers/userRouter';

dotenv.config();
const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // TODO: might be built in. Double check

app.use('/v1', userRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

function signalHandler(signal: string) {
  console.log(`Process ${process.pid} received a SIGTERM signal:`, signal);
  process.exit();
}
process.on('SIGINT', signalHandler);
process.on('SIGTERM', signalHandler);
process.on('SIGQUIT', signalHandler);
