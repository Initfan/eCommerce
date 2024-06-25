import { useState, useEffect } from 'react'
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlace, setAvailablePlace] = useState([])

  useEffect(() => {
    const fetchPlaces = async () => {
      const res = await fetch('http://localhost:3000/places')
      const data = await res.json()
      setAvailablePlace(data.palces)
    }

    fetchPlaces()

  }, []);

  return (
    <Places
      title="Available Places"
      places={availablePlace}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}


