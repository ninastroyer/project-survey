import React from 'react';
import { Button } from 'components/button';

const travelPlaces = [
  'winter',
  'summer', 'fall', 'spring'
]

export const FourthQuestion = ({ place, setPlace }) => {
  const handleTravelPlaces = (event) => {
    setPlace(event.target.value)
  }
  return (
    <>
      <div className="radioBtn">
        <p>When do you prefer to travel?</p>
        {travelPlaces.map((group) => (
          <label key={group} htmlFor="lang">
            <input
              type="radio"
              id={group}
              value={group}
              onChange={handleTravelPlaces}
              checked={place === group}
              name={travelPlaces}
              required />
            {group}
          </label>
        ))}
      </div>
      <Button button="Next question" />
    </>
  );
}