import { handleCreateQuiz, handleGetQuizzes } from "../../Data/QuizApi";
import { getPosition } from "../../helper/geolocation";

import { handleAddQuestion } from "../../Data/QuizQuestions";
import { Position } from "../../Data/InterFaces";
import { useState, useRef, useEffect } from "react";
import mapboxgl, { Map as MapGl } from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import "./createQuiz.css";


mapboxgl.accessToken = import.meta.env.VITE_MAP_API_KEY as string;

function CreateQuiz() {
  const [quizElemInput, setQuizElemInput] = useState<boolean>(false);
  const [position, setPosition] = useState<Position | null>(null);
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [quizname, setQuizName] = useState<string>("");

  const mapContainer = useRef(null);
  const mapRef = useRef<MapGl | null>(null);
  const [lat, setLat] = useState<number>(57.7);
  const [lng, setLng] = useState<number>(11.89);
  const [zoom, setZoom] = useState<number>(10);

  useEffect(() => {
    if (mapRef.current || !mapContainer.current) return;
    if (position !== null) {
      // console.log('qusssss', qu)
      mapRef.current = new MapGl({
        container: mapContainer.current,
        style: "mapbox://styles/dulkut2001/clm4n8mel00tl01pjfyzbfwzh",
        center: [position.longitude, position.latitude],
        zoom: 9,
        logoPosition: "bottom-left",
      });
      const map: MapGl = mapRef.current;

      map.on("move", () => {
        interface Position {
          lng: number;
          lat: number;
        }
        const position: Position = map.getCenter();
        setLat(Number(position.lat.toFixed(4)));
        setLng(Number(position.lng.toFixed(4)));
        setZoom(map.getZoom());
      });
      new mapboxgl.Marker({
        color: "red",
        anchor: "bottom",
      })
        .setLngLat([position.longitude, position.latitude])
        .addTo(map);
    }
  }, [position, zoom]);

  return (
    <div className="createQuiz-page">
      <h4>QUIZTOPIA</h4>
      <button className="buttons-style" onClick={() => handleGetQuizzes()}>
        Get Quizez
      </button>
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
              onClick={() => handleAddQuestion(question, answer, lng, lat)}
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
      {/* <p className="center-position">
        {" "}
        Center position: {lat} lat, {lng} lng{" "}
      </p> */}
      <div className="mapbox" ref={mapContainer} />
    </div>
  );
}

export default CreateQuiz;
