import React, { CSSProperties, useState } from 'react';
import { BeatLoader } from 'react-spinners';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: '#fff',
};

const Loading = () => {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState('#fff');

  return <BeatLoader color={color} loading={loading} cssOverride={override} size={5} />
};

export default Loading;
