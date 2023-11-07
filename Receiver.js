import React from 'react';

const ReceiverComponent = ({ receivedData }) => {
  console.log('Received Data:', receivedData);

  return (
    <div>
      <h2>Received Data:</h2>
      <p>{receivedData.name}</p>
      <p>{receivedData.age}</p>
    </div>
  );
};

export default ReceiverComponent;
