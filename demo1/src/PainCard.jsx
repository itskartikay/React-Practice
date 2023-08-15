import React from 'react';

const PainCard = ({ type, nativeTranslation, englishTranslation }) => {
  return (
    <div className="pain-card" onClick={() => alert(`${type}: ${nativeTranslation} (${englishTranslation})`)}>
      <h3>{type}</h3>
      <p>Native Translation: {nativeTranslation}</p>
      <p>English Translation: {englishTranslation}</p>
    </div>
  );
};

export default PainCard;
