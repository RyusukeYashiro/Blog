import React from 'react'
import "./style/Login.css";
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider } from '../fireBase';
import { useNavigate } from "react-router-dom";

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const logout = () => {
      signOut(auth).then(() => {
        localStorage.clear();
        setIsAuth(false);
        navigate('/login');
      });
  };

  return (
   <div class="logout-page">
    <h1 class="">Logout</h1>
    <div>!ログインではgoogleを使います!</div>
    <button onClick={logout}>ログアウト</button>
   </div>
  );
}

export default Logout;