import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
type State = {
    question: string
    answer: string,
    location: {
        longitude: number,
        latitude: number
    }

}
export default function ShowQuizzes() {
    const navigate = useNavigate();
    const {state} = useLocation()
    const { question, answer,  longitude, latitude } = state;

  return (
    <div>

        <div>ShowQuizzes</div>
        <button onClick={() => navigate('/')}>go Back</button>
        <h1>{question}</h1>
        <h1>{answer}</h1>
        <h1>{longitude}</h1>
        <h1>{latitude}</h1>
        {/* <div>{color}</div> */}
    </div>
  )
}
