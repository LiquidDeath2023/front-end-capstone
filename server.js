const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, './client/dist')));

const QuestionAndAnswersRoutes = require('./server/qanda-routes');

app.use('/qa/questions', QuestionAndAnswersRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});