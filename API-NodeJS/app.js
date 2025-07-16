const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const newsRoutes = require('./routes/newsRoutes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/news', newsRoutes);

app.listen(PORT, () => {
  console.log(`News API running on http://localhost:${PORT}`);
});
