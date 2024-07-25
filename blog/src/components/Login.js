import React from 'react'
import "./style/Login.css";
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider } from '../fireBase';
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginwithGoogle = () => {
    signInWithPopup(auth , provider).then((result) => {
      //localStorageに情報を保存している。
      // ログインしているかどうかをboolで判定
      localStorage.setItem("isAuth" , true);
      setIsAuth(true);
      // ホーム画面へとリダイレクト
      navigate("/");
    });
  };

  return (
  <div class="login-page">
    <h1 class="">Login</h1>
    <div>!ログインではgoogleを使います!</div>
    <button onClick={loginwithGoogle}>Login</button>
  </div>
  );
}

export default Login