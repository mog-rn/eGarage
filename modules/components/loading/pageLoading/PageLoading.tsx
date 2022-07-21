import React from 'react';
import { useState, CSSProperties } from 'react';
import HashLoader from 'react-spinners/HashLoader';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};

const PageLoading = () => {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState('green');
  return (
    <div className="h-screen bg-white flex items-center justify-center">
      <HashLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={100}
      />
    </div>
  );
};

export default PageLoading;
