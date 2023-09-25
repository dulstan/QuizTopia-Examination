import React from "react";
import { ApiGetQuizesresponse } from "../../Data/InterFaces";
import { handleGetQuizzes } from "../../Data/QuizApi";
import { useNavigate } from "react-router-dom";
import "./UserQuizList.css";
export const UserQuizList = () => {
  const [quizzes, setQuizzes] = React.useState<ApiGetQuizesresponse>();
  const navigate = useNavigate();

  const getData = async () => {
    const data = await handleGetQuizzes();
    setQuizzes(data);
  };
  React.useEffect(() => {
    getData();
  }, []);
  console.log("object--", quizzes);
  return (
    <div className="showQuizzes-container">
      <h1>Here is all the quizzes</h1>
      {quizzes ? (
        <div className="quiz-grid">
          {quizzes.quizzes.map((ques, index) => {
            const info = ques.questions.find((info) => info);
            return (
              <div key={index} className="quiz-item">
                <button
                  className="quiz-button"
                  onClick={() =>
                    navigate("/showQuizzes", {
                      state: {
                        location: info?.location,
                        question: info?.question,
                        answer: info?.answer,
                        latitude: info?.location.latitude,
                        longitude: info?.location.longitude,
                      },
                    })
                  }
                >
                  {ques.quizId} <br></br>made by: {ques.username}
                </button>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
