import React, {useEffect, useState} from 'react';
import Spline from '@splinetool/react-spline';
import "../styles/SceneSmall.scss"

const Scene = ({ onLoad }) => {

  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1100);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1100);
    };
    window.addEventListener('resize', handleResize);
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const starsArray = Array.from({ length: 10 }, (_, index) => (
    <div key={index} className="star"></div>
  ));

  return (
    <>
      {isWideScreen ? (
        <Spline className='scene' scene="https://prod.spline.design/Zky3yicYLH7wXaXk/scene.splinecode" onLoad={onLoad} />
      ) : (
        <div className="stars">
          {starsArray}
        </div>
      )}
    </>
  );
};

export default Scene;
