const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const { userRouter } = require('./controllers/userRouter');

dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // TODO: might be built in. Double check

// app.use('/', (req, res) => {
//   return res.send('TEST ROOT');
// });

app.use('/', userRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

function signalHandler(signal) {
  console.log(`Process ${process.pid} received a SIGTERM signal:`, signal);
  process.exit();
}
process.on('SIGINT', signalHandler);
process.on('SIGTERM', signalHandler);
process.on('SIGQUIT', signalHandler);
