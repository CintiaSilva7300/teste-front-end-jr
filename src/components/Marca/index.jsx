import './Carousel.css';
import styles from './styles';
import React, { useState } from 'react';
import next from '../../utils/img/next.svg';

const Carousel = () => {
  const data = [
    { img: '1' },
    { img: '2' },
    { img: '3' },
    { img: '4' },
    { img: '5' },
    { img: '6' },
    { img: '7' },
    { img: '8' },
    { img: '9' },
    { img: '10' },
    { img: '11' },
    { img: '12' },
    { img: '13' },
    { img: '14' },
    { img: '15' },
  ];

  const imageWidth = 250;
  const imagesPerPage = Math.floor(window.innerWidth / imageWidth); // Número de imagens por página

  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex(Math.max(startIndex - imagesPerPage, 0));
  };

  const handleNext = () => {
    setStartIndex(
      Math.min(startIndex + imagesPerPage, data.length - imagesPerPage)
    );
  };

  const visibleData = data.slice(startIndex, startIndex + imagesPerPage);

  return (
    <div style={styles.carousel}>
      <div style={styles.imageList}>
        {visibleData.map((item, index) => (
          <div key={index} style={styles.image}>
            <div className="imgTrans" style={{ width: 230 }}>
              <img
                style={{
                  width: 172,
                  height: 62.664,
                  marginTop: 85,
                  marginLeft: 10,
                }}
                src={require('../../utils/img/goup123.svg').default}
                alt={`Imagem ${startIndex + index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>
      <button className="next-button" onClick={handleNext}>
        <img
          style={{ marginLeft: 1193, width: 56, height: 56, cursor: 'pointer' }}
          src={next}
          alt="imagem"
        />
      </button>
    </div>
  );
};

export default Carousel;
