import { onAuthStateChanged } from "firebase/auth";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo/Fundo.png";
import { auth } from "../../config/config";
import { useCustomerProvider } from "../../firebase/ContextAuth";
import "./login.scss";


export function Login() {
  
  const { email, password, setEmail, setPassword, setUser, Auth } = useCustomerProvider();
  const navigate = useNavigate();
  useEffect(() => {
      const AuthCheck = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(true);
          navigate("/home");
        }
      });
      return () => AuthCheck();
    }, [navigate, setUser]);

  const Logiin = useCallback((e:any) => {
      e.preventDefault();
      Auth(email, password);
  }, [Auth, email, password]);
  
  

  return (
    <div className="content">
      <div className="container-input">
        <div>
          <img className="logo" src={Logo} alt="Logo da Zeus" />
        </div>

        <input
          className="input-value"
          type="text"
          placeholder="Digite seu e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="input-value"
          type="password"
          placeholder="Digite sua senha"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="loginButton" onClick={Logiin}>
          Login
        </button>
      </div>
    </div>
  );
}


