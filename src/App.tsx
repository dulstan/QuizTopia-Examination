import LogInPage from "./components/login/LogIn";
import CreateQuiz from "./components/quizz/CreateQuiz";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShowQuizzes from "./components/quizz/ShowQuizzes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LogInPage />,
  },
  {
    path: "/showQuizzes",
    element: <ShowQuizzes/>
  },
  {
    path: "/createquiz",
    element: <CreateQuiz />,
  }, 

]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
