import React, { useState, useEffect } from 'react';

export const Background = ({ palette = '', ...props }) => {
  const [style, setStyle] = useState(props.style);

  const changePalette = () => {
    if (palette === 'primary') {
      setStyle((prevStyle) => ({ ...prevStyle, background: '#34dbb7' }));
    } else if (palette === 'secondary') {
      setStyle((prevStyle) => ({
        ...prevStyle,
        background: '#e6eaed',
      }));
    }
  };

  useEffect(() => {
    changePalette();
  }, [palette]);
  return <div style={style} className="background" palette={palette}></div>;
};
