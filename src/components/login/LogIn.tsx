import { useState } from "react";
import { useNavigate } from "react-router-dom";

import './LogIn.css'
import { UserQuizList } from "../quizz/UserQuizList";

interface ApiSignupResponse {
	success: boolean;
	message?: string;
}
interface ApiLoginResponse {
	success: boolean;
	message?: string;
	token?: string;
}
// interface ApiAccountResponse {
// 	success: boolean;
// 	message?: string;
// 	account?: Account;
// }
// interface Account {
// 	password: string;
// 	userId: string;
// 	username: string;
// }

function LogInPage(){

    const [username, SetUserName]= useState<string>('')
    const [password, SetPassWord]= useState<string>('')
    const [message, SetMessage]= useState<string>('')
    //const [token, SetToken]= useState<string>('')
    const navigate=useNavigate(); 

    async function handleCreateUser(){
        const URL='https://fk7zu3f4gj.execute-api.eu-north-1.amazonaws.com/auth/signup'
        const settings={
            method:'POST',
            body: JSON.stringify({
                username: username,
                password: password
            })
        }
        const response=await fetch(URL, settings)
        const data: ApiSignupResponse=await response.json()
        console.log('data from user', data); 
        
        if (data.success){
            SetMessage('Användaren skapades.')
        }else {
            SetMessage('Kunde ej skapa användare')
        }
    }
    async function handleLogin(){
        const URL='https://fk7zu3f4gj.execute-api.eu-north-1.amazonaws.com/auth/login'
        const settings={
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password:password
            })
        }
        const response=await fetch(URL, settings)
        const data: ApiLoginResponse= await response.json()
        console.log('LOGGIN', data);
        localStorage.setItem("token", data.token || '')

        console.log('####Get###', localStorage.getItem('token'))

        // if (data.token){
        //     localStorage.setItem("token", JSON.stringify (data.token))
        // }
        if (data.success){
            navigate('/createquiz')
        }else {
        SetMessage('Kunde Ej logga in')
    }
    }

    return(
        
        <div >
            <article className="showQuizzes-container">
            <UserQuizList/>

            </article>

            <div className="loginForm">
            <h1>Make Your Own Quiz</h1>
            <section className="row">
                
            <input className="user-input" placeholder="User Name" value={username} onChange={event => SetUserName(event.target.value)}></input>
            <input className="user-input" placeholder="PassWord" value={password} onChange={event => SetPassWord(event.target.value)}></input>
            </section>
            <div className="Login-input">
						<button className="create-button" onClick={handleCreateUser}> Sign up</button>
						<button className="login-button"onClick={handleLogin}> Log in  </button>
			</div>
			<p> {message} </p>
            </div>
            
        </div>
    )
}

export default LogInPage
