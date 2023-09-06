import { Dispatch } from "react";
//import { useState } from "react";

interface ApiCreateQuizresponse{
    success:boolean;
    quizId: string;
}

const handleCreateQuiz=async (quizname:string, setQuizElemInput: Dispatch<React.SetStateAction<boolean>>) =>  {
    
    const URL= 'https://fk7zu3f4gj.execute-api.eu-north-1.amazonaws.com/quiz'
    const token=localStorage.getItem('token')

    //console.log('********************',token)
    const settings={
        method:'POST', 
        body: JSON.stringify({
           name: quizname
        }),
        headers:{
            Authorization: `Bearer ${token}`, 
            'Content-Type': '/application/json'
        } 
       

    }
    //console.log('settings', settings.body)

    const response= await fetch (URL, settings)
    //console.log('succes', response)
    const data: ApiCreateQuizresponse=await response.json()
    setQuizElemInput(true)

    console.log( '12334455',data)

    let quizId =data.quizId

    localStorage.setItem('quizId', (quizId))

    if (data.success=== false){
        console.log('Please try to log in again')
    }
}



const handleGetQuizzes=async( ): Promise<ApiGetQuizesresponse>=>{
    const URL='https://fk7zu3f4gj.execute-api.eu-north-1.amazonaws.com/quiz'
    const settings={
        method: 'GET',
        headers: {'Content-Type': '/application/json'}
    }
    const response =await fetch(URL, settings)
    const data= await response.json()
    return data
    console.log(data)
 
}


export {handleCreateQuiz, handleGetQuizzes}













// async function handleCreateQuiz(setShowInput: Dispatch<React.SetStateAction<boolean>>, quizname:string): Promise<void> {
//     const URL= 'https://fk7zu3f4gj.execute-api.eu-north-1.amazonaws.com/quiz'
//     const token= localStorage.getItem('token')


//     const settings={
//         method:'POST', 
//         body: JSON.stringify({
//             name:quizname
//         }),
//         headers:{
//             Authorization: `Bearer ${token}`
//         }
//     }
//     const response=await fetch(URL, settings)
//     const data: ApiCreateQuizresponse=await response.json()
//     console.log(data)
//     setShowInput(true)
// }


