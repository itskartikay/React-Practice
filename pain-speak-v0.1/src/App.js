import React from 'react';
import PainCard from './PainCard';

const App = () => {
  const pains = [
    {
      type: 'Period Pain',
      nativeTranslation: 'पीरियड दर्द',
      englishTranslation: 'Period Pain',
    },
    {
      type: 'Chest Pain',
      nativeTranslation: 'सीने में दर्द',
      englishTranslation: 'Chest Pain',
    },
    {
      type: 'Burning Feeling',
      nativeTranslation: 'जलन का अनुभव',
      englishTranslation: 'Burning Feeling',
    },
    {
      type: 'Acidity',
      nativeTranslation: 'एसिडिटी',
      englishTranslation: 'Acidity',
    },
  ];

  return (
    <div className="app">
      <h1>Painspeak - Universal Pain Translator</h1>
      <div className="pain-cards">
        {pains.map((pain, index) => (
          <PainCard key={index} type={pain.type} nativeTranslation={pain.nativeTranslation} englishTranslation={pain.englishTranslation} />
        ))}
      </div>
    </div>
  );
};

export default App;
