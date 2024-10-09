const express = require('express');
const app = express();

app.get('/feature/:code', (req, res) => {
  const code = req.params.code;
  res.json({ code: code, enabled: true });
});

app.listen(3000, () => {
  console.log('API is running on port 3000');
});