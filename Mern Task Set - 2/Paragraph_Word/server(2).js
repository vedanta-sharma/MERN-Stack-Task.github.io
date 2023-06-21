const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost/wordCounterDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

// WordCounter model
const WordCounterSchema = new mongoose.Schema({
  text: String,
  wordCount: Number,
});

const WordCounter = mongoose.model('WordCounter', WordCounterSchema);

// API routes
app.post('/api/wordCounter', (req, res) => {
  const { text } = req.body;
  const wordCount = text.trim().split(/\s+/).length;

  WordCounter.create({ text, wordCount })
    .then((wordCounter) => {
      res.json(wordCounter);
    })
    .catch((err) => {
      res.status(500).json({ error: 'Failed to save the word counter' });
    });
});

app.get('/api/wordCounter/:id', (req, res) => {
  const { id } = req.params;

  WordCounter.findById(id)
    .then((wordCounter) => {
      if (wordCounter) {
        res.json(wordCounter);
      } else {
        res.status(404).json({ error: 'Word counter not found' });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: 'Failed to retrieve the word counter' });
    });
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
