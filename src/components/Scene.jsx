import React from 'react';
import Spline from '@splinetool/react-spline';
import "../styles/SceneSmall.scss"

const Scene = ({ isWideScreen, onLoad }) => {
  return (
    <>
      {isWideScreen ? (
        <Spline className='scene' scene="https://prod.spline.design/Zky3yicYLH7wXaXk/scene.splinecode" onLoad={onLoad} />
      ) : (
        // <Spline scene="https://prod.spline.design/N3BgizkLX322t6wG/scene.splinecode" />
        <div class="stars">
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
</div>
      )}
    </>
  );
};

export default Scene;
