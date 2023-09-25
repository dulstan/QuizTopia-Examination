import { handleCreateQuiz } from "../../Data/QuizApi";
import { getPosition } from "../../helper/geolocation";

import { handleAddQuestion } from "../../Data/QuizQuestions";
import { Position } from "../../Data/InterFaces";
import { useState } from "react";
import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import "./createQuiz.css";

import { Map } from "../map/Map";
mapboxgl.accessToken = import.meta.env.VITE_MAP_API_KEY as string;

function CreateQuiz() {
  const [quizElemInput, setQuizElemInput] = useState<boolean>(false);
  const [position, setPosition] = useState<Position | null>(null);
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [quizname, setQuizName] = useState<string>("");

  return (
    <div className="createQuiz-page">
    <h4>QUIZTOPIA</h4>
    
    <div className="quiz-div">
      <input
        placeholder="Välj namn"
        type="text"
        value={quizname}
        onChange={(event) => {
          setQuizName(event.target.value);
        }}
      />
      <button
        className="buttons-style"
        onClick={() => handleCreateQuiz(quizname, setQuizElemInput)}
      >
        Create quiz
      </button>
      {quizElemInput && (
        <div>
          <input
            placeholder="Fråga"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
          />
          <input
            placeholder="Svar"
            value={answer}
            onChange={(event) => setAnswer(event.target.value)}
          />

          <button
            className="buttons-style"
            onClick={() => handleAddQuestion(question, answer, position?.longitude, position?.latitude)}
            
          >
            Lägg till fråga
          </button>
        </div>
      )}
    </div>

    <button
      className="buttons-style"
      onClick={() => getPosition(setPosition)}
    >
      Find My Position
    </button>
    <p className="center-position">
      Here You Are! {position?.latitude} {position?.longitude}
    </p>
   
    <Map position={position}/>
  </div>
);
}

export default CreateQuiz;