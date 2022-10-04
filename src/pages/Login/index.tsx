import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config/config'
import { useNavigate } from "react-router-dom";
import './login.scss'
import Logo from '../../assets/Logo/Fundo.png'


export function Login() {
    const navigate = useNavigate();
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [authing, setAuthing] = useState(false);

  
    const login = async () => {
      try {
        const user = await signInWithEmailAndPassword(
          auth,
          loginEmail,
          loginPassword
        );
        setAuthing(true);
        console.log(user)
       
        navigate("/home");
      } catch (error) {
        console.log("unauthorized");
        setAuthing(false);
      }
    }

  
    return(
          <div className="content">
              
              <div className='container-input'>

                  <div>
                    <img className="logo" src={Logo} alt="Logo da Zeus" />
                  </div>

                  <input
                      className='input-value'
                      type='text'
                      placeholder='Digite seu e-mail' onChange={(e) => setLoginEmail(e.target.value)} />
            
                  <input
                      className='input-value'
                      type='password'
                      placeholder='Digite sua senha' onChange={(e) => setLoginPassword(e.target.value)} />

                  <button 
                      className='loginButton' 
                      onClick={login} >Login
                  </button>
   
              </div>
          </div>
    );
};

