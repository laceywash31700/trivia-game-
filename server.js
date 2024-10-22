const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files (like CSS or JS files)
app.use(express.static(path.join(__dirname, 'public')));

// Render the trivia.ejs file when visiting the root URL
app.get('/', (req, res) => {
  res.render('trivia', {
    gameName: 'Trivia Game', // You can pass variables like gameName here
    mode: 'easy',
    tokensUsed: 0
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
