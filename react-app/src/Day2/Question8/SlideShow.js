import React, { useState, useEffect } from 'react';

const SlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [intervalTime, setIntervalTime] = useState(3000);

  const images = [
    '/Photos/60111.jpg',
    '/Photos/1.jpg',
    '/Photos/2.jpg',
    '/Photos/3.jpg'
  ];

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
      }, intervalTime);
    }

    return () => clearInterval(interval);
  }, [isPaused, intervalTime, images.length]);

  const handlePausePlay = () => {
    setIsPaused((prevPaused) => !prevPaused);
  };

  const handleIntervalChange = (event) => {
    if(event.target.value) {
      setIntervalTime(Number(event.target.value) * 1000);
    } else {
      setIntervalTime('');
    }
  };

  return (
    <div>
      <h1>My Slide Show</h1>
      <div>
        <img src={images[currentSlide]} alt="Slide" style={{ width: '200px', height: 'auto' }} />
      </div>
      <div>
        <button onClick={handlePausePlay}>{isPaused ? 'Play' : 'Pause'}</button>
        <label>
          Interval Time (seconds):
          <input type="number" min="1" value={intervalTime ? intervalTime / 1000 : ''} onChange={handleIntervalChange} />
        </label>
      </div>
    </div>
  );
};

export default SlideShow;
