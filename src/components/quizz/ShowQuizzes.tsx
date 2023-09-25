import  { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

import './ShowQuizzes.css'
import { getPosition } from '../../helper/geolocation';
import { Position } from '../../Data/InterFaces';
import { Map } from '../map/Map';

export default function ShowQuizzes() {
    const navigate = useNavigate();
  const [position, setPosition] = useState<Position | null>(null);

    const {state} = useLocation()
    const { question, answer,  longitude, latitude } = state;

    const showUserQuizOnMap = () => {
      const locationBody = {longitude, latitude}
      setPosition(locationBody)
    } 

  return (
    <div>
      
        <main className="ShowInfo-container">
        <h1> The question: {question}</h1>
        <h1>The answer: {answer}</h1>
        <h1> Location: lng {longitude}</h1>
        <h1>Location: lat {latitude}</h1>
        </main>
        <article>
      <button className="showOnMap-button" onClick={() => getPosition(showUserQuizOnMap)}>Show Quiz on Map</button>
      <button className="goBack-button" onClick={() => navigate('/')}>Go Back</button>
      </article>
       { position ? <Map position={position} /> : null}
    </div>
  )
}