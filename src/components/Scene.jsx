import React from 'react';
import Spline from '@splinetool/react-spline';

const Scene = ({ isWideScreen, onLoad }) => {
  return (
    <>
      {isWideScreen ? (
        <Spline className='scene' scene="https://prod.spline.design/Zky3yicYLH7wXaXk/scene.splinecode" onLoad={onLoad} />
      ) : (
        <Spline scene="https://prod.spline.design/N3BgizkLX322t6wG/scene.splinecode" />
      )}
    </>
  );
};

export default Scene;
