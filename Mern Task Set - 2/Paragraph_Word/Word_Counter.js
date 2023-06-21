import React, { useState } from 'react';

const WordCounter = () => {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleChange = (event) => {
    const { value } = event.target;
    setText(value);

    const count = value.trim().split(/\s+/).length;
    setWordCount(count);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('/api/wordCounter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Word counter saved:', data);
      })
      .catch((error) => {
        console.error('Error saving word counter:', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          placeholder="Enter your text..."
          value={text}
          onChange={handleChange}
        />
        <button type="submit">Save Word Count</button>
      </form>
      <p>Word Count: {wordCount}</p>
    </
