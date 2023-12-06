import React, { useState } from 'react';

const BodyMap = ({ onAreaClick }) => {
  const [selectedAreas, setSelectedAreas] = useState([]);

  const handleAreaClick = (areaNumber) => {
    setSelectedAreas([...selectedAreas, areaNumber]);
    onAreaClick([...selectedAreas, areaNumber]);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img
        src="/BodyMap.png" 
        alt="Body Map"
        useMap="#bodyMap"
        style={{ maxWidth: '100%' }}
      />
      <map name="bodyMap">
        <area
          shape="circle"
          coords="100,100,50"
          alt="Area 1"
          onClick={() => handleAreaClick(1)}
        />
        <area
          shape="circle"
          coords="200,200,50"
          alt="Area 2"
          onClick={() => handleAreaClick(2)}
        />
      </map>
    </div>
  );
};

export default BodyMap;
