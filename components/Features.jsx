import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Swipeable } from 'react-swipeable';
import Card from './Card';

const Features = ({ cards }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(activeIndex - 1);
  };

  const handleNext = () => {
    setActiveIndex(activeIndex + 1);
  };

  const handlePaginationClick = (index) => {
    setActiveIndex(index);
  };

  let cardWidth;
  if (cards && cards.length > 0) {
    cardWidth = `${100 / cards.length}%`;
  }

  return (
    <div className='card-carousel'>
      <Swipeable onSwipedLeft={handleNext} onSwipedRight={handlePrev}>
        <div
          className='card-wrapper'
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {cards &&
            cards.map((card, index) => (
              <Card
                key={card.id}
                image={card.image}
                title={card.title}
                description={card.description}
                style={{ width: cardWidth }}
              />
            ))}
        </div>
      </Swipeable>
      <div className='pagination'>
        {cards &&
          cards.map((card, index) => (
            <button
              key={card.id}
              className={index === activeIndex ? 'active' : ''}
              onClick={() => handlePaginationClick(index)}
            />
          ))}
      </div>
      <button className='prev' onClick={handlePrev}>
        <i className='fa fa-chevron-left' />
      </button>
      <button className='next' onClick={handleNext}>
        <i className='fa fa-chevron-right' />
      </button>
    </div>
  );
};

Features.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Features;
