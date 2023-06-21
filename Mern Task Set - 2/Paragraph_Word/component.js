import React from 'react';
import ColorPicker from './ColorPicker';

const App = () => {
  const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF'];

  return (
    <div>
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;
