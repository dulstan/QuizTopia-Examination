
import { ApiQuestionresponse } from "./InterFaces"



const handleAddQuestion=async(question:string, answer:string, lng:number, lat:number )=>{
    

    const quizId=localStorage.getItem('quizId')

    const URL='https://fk7zu3f4gj.execute-api.eu-north-1.amazonaws.com/quiz/question'
    console.log('QUIZID',quizId)

    const token:string=localStorage.getItem('token')||""
    console.log(token)

    const settings={
        method:'POST',
        body: JSON.stringify({
            name: quizId,
            question: question,
            answer: answer,
            location: {
              longitude: lng,
              latitude: lat
            }
          }),
        headers:{
            Authorization: `Bearer ${token}`, 
            'Content-Type': '/application/json'
        }
    }
    const response=await fetch(URL, settings)
    const data:ApiQuestionresponse=await response.json()
    console.log(data)

}
export {handleAddQuestion} 