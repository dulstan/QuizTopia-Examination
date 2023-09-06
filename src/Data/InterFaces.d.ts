export interface ApiQuizesQuestionresponse{
    question:string
    answer:string
    location:{
        latitude:number,
        longitude:number
    }
    
}
export interface QuizesResponse {
        questions:ApiQuizesQuestionresponse[];
        quizId:string,
        userId:string,
        username:string
    }

export interface ApiGetQuizesresponse{
    quizzes: QuizesResponse[]
    succes: boolean
}

type  SaveResponseQuizes =  React.Dispatch<React.SetStateAction<QuizesResponse[]>>

