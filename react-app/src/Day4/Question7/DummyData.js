import React from 'react';
import SearchFilter from './SearchFilter';

const DummyData = () => {
  const items = [
    'spray', 'elite', 'exuberant', 'destruction', 'present'
  ];

  return (
    <div>
      <h2>Search Filter Example</h2>
      <SearchFilter data={items} />
    </div>
  );
};

export default DummyData;
