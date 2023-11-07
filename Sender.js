import React, { useState } from 'react';

const SenderComponent = ({ sendData }) => {
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = () => {
    const data={
      name:'haidar',
      age:'23'
    }
    sendData(data);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter data"
      />
      <button onClick={handleButtonClick}>Send Data</button>
    </div>
  );
};

export default SenderComponent;
