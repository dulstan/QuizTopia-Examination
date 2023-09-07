import React from 'react'
import { ApiGetQuizesresponse } from '../../Data/InterFaces';
import { handleGetQuizzes } from '../../Data/QuizApi';
import { useNavigate } from 'react-router-dom';
import './UserQuizList.css'
export const UserQuizList = () => {
  const [quizzes, setQuizzes] = React.useState<ApiGetQuizesresponse>()
  const navigate = useNavigate();
    const getData = async() => {
        const data = await handleGetQuizzes();
        setQuizzes(data)
      };
      React.useEffect(() => {
        getData();
        
      }, [])
  return (
    <div className='showQuizzes-container' >
      <h1>Here is all the quizzes</h1>
        {quizzes ? <div className="quiz-grid">
            {quizzes.quizzes.map((ques) => {
              const info = ques.questions.find((test) => test )
                return <div className="quiz-item">
                  <button className='quiz-button' onClick={() => 
                    navigate('/showQuizzes',  { state: { question: info?.question, answer: info?.answer, latitude: info?.location.latitude, longitude: info?.location.longitude  } })}>
                  {ques.quizId} made by: {ques.username}
                  </button>
                </div>
            })}
        </div> : null}
    </div>
  )
}


