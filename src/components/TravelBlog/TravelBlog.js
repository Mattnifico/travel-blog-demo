import React from 'react';
import TravelData from '../../TravelData';
import './TravelBlog.css';

function TravelCard() {
  return (
    <card>
      {TravelData.map(destination => (
        <div className='card' key={destination.id}>
          <h2>{destination.placeHeading}</h2>
          <div className='imageRow'>
            <img src={destination.placeImg1} alt="Image 1" />
            <img src={destination.placeImg2} alt="Image 2" />
            <img src={destination.placeImg3} alt="Image 3" />
          </div>
          <p>{destination.placeDescription}</p>
        </div>
      ))}
    </card>
  );
};

export default TravelCard;

// needs centered heading, 3 images side by side with gaps, and a 2-3 sentence description