import React, {FC, useState} from 'react';
import {useNavigate} from "react-router-dom";
import "../styles/login.css"
import eyeIcon from "../assets/icons/eye-icon.png"


const Login: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [loginError, setLoginError] = useState<boolean>(false);
    const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(false);
    const [password, setPassword] = useState<string | number>('');
    const [passwordError, setPasswordError] = useState<boolean>(false);
    const navigate = useNavigate()

    const validateEmail = (email: string) => {
        const mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return !!email.match(mailFormat);
    }

    const submitForm = () => {
        setLoginError(!validateEmail(email));
        setPasswordError(password === '');

        if(validateEmail(email) && password) {
            localStorage.setItem("isEnter", JSON.stringify(true))
            navigate("/dashboard")
        }
    }

    return (
        <div className="login-page">
            <div>
                <h1>Welcome back</h1>
                <div>
                    <div className='label'>E-mail</div>
                    <input value={email}
                           className='input'
                           placeholder='Enter your email address'
                           data-testid='email-input'
                           onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                           type="text" />
                    {loginError && <span data-testid='email-error'>Error</span>}
                </div>
                <div>
                    <div className='label'>Password</div>
                    <div className='password-block'>
                        <input value={password}
                               className='input'
                               placeholder='Enter your password'
                               data-testid='password-input'
                               onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                               type={isVisiblePassword ? "text" : "password"}/>
                        <img src={eyeIcon} alt='show password' className='show-password' onClick={() => {setIsVisiblePassword(!isVisiblePassword)}}/>
                        {passwordError && <span data-testid='password-error'>Error</span>}
                    </div>
                </div>
                <button data-testid='submit-button' onClick={submitForm}>Submit</button>
            </div>
        </div>
    );
};

export default Login;