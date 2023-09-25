export interface ApiSignupResponse {
  success: boolean;
  message?: string;
}
export interface ApiLoginResponse {
  success: boolean;
  message?: string;
  token?: string;
}
export interface ApiQuizesQuestionresponse {
  question: string;
  answer: string;
  location: {
    latitude: string;
    longitude: string;
  };
}
export interface QuizesResponse {
  questions: ApiQuizesQuestionresponse[];
  quizId: string;
  userId: string;
  username: string;
}

export interface ApiGetQuizesresponse {
  quizzes: QuizesResponse[];
  succes: boolean;
}

type SaveResponseQuizes = React.Dispatch<
  React.SetStateAction<QuizesResponse[]>
>;

export interface Position {
  latitude: number;
  longitude: number;
}

export interface ApiCreateQuizresponse {
  success: boolean;
  quizId: string;
}

export interface ApiQuestionresponse {
  success: boolean;
  error: string;
}
