import React, { useState } from 'react';

const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  const handleCalculate = () => {
    fetch('/api/ageCalculator', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ birthdate }),
    })
      .then((response) => response.json())
      .then((data) => {
        setAge(data.age);
      })
      .catch((error) => {
        console.error('Error calculating age:', error);
      });
  };

  return (
    <div>
      <h2>Age Calculator</h2>
      <label htmlFor="birthdate">Enter your birthdate:</label>
      <input
        type="date"
        id="birthdate"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />
      <button onClick={handleCalculate}>Calculate Age</button>
      {age && <p>Your age is {age} years.</p>}
    </div>
  );
};

export default AgeCalculator;
