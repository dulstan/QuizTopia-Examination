import { Dispatch } from "react";
import { ApiGetQuizesresponse, ApiCreateQuizresponse } from "./InterFaces";

const handleCreateQuiz = async (
  quizname: string,
  setQuizElemInput: Dispatch<React.SetStateAction<boolean>>
) => {
  const URL = "https://fk7zu3f4gj.execute-api.eu-north-1.amazonaws.com/quiz";
  const token = localStorage.getItem("token");

  const settings = {
    method: "POST",
    body: JSON.stringify({
      name: quizname,
    }),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "/application/json",
    },
  };

  const response = await fetch(URL, settings);
  const data: ApiCreateQuizresponse = await response.json();
  setQuizElemInput(true);

  let quizId = data.quizId;

  localStorage.setItem("quizId", quizId);

  if (data.success === false) {
    console.log("Please try to log in again");
  }
};

const handleGetQuizzes = async (): Promise<ApiGetQuizesresponse> => {
  const URL = "https://fk7zu3f4gj.execute-api.eu-north-1.amazonaws.com/quiz";
  const settings = {
    method: "GET",
    headers: { "Content-Type": "/application/json" },
  };
  const response = await fetch(URL, settings);
  const data = await response.json();
  return data;
  // console.log(data)
};

export { handleCreateQuiz, handleGetQuizzes };
