//import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

import './ShowQuizzes.css'


export default function ShowQuizzes() {
    const navigate = useNavigate();
    const {state} = useLocation()
    const { question, answer,  longitude, latitude } = state;

  return (
    <div>
      
        <main className="ShowInfo-container">
        <h1> The question: {question}</h1>
        <h1>The answer: {answer}</h1>
        <h1> Location: lng {longitude}</h1>
        <h1>Location: lat {latitude}</h1>
        </main>
        <article>
      <button className="goBack-button" onClick={() => navigate('/')}>Go Back</button>
      </article>
    </div>
  )
}
