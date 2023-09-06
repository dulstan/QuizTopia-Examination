import React from 'react'
import { ApiGetQuizesresponse } from '../../Data/InterFaces';
import { handleGetQuizzes } from '../../Data/QuizApi';
import { useNavigate, useLocation } from 'react-router-dom';

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
    <div>
        {quizzes ? <div>
            {quizzes.quizzes.map((ques) => {
              const info = ques.questions.find((test) => test )
                return <div style={{flexDirection: 'row', borderWidth: 1 ,borderRadius: 10 ,  marginTop: 5, marginBottom: 5 }}>
                  <button onClick={() => 
                    navigate('/showQuizzes',  { state: { question: info?.question, answer: info?.answer, latitude: info?.location.latitude, longitude: info?.location.longitude  } })}>
                  {ques.quizId} made by: {ques.username}
                  </button>
                </div>
            })}
        </div> : null}
    </div>
  )
}


