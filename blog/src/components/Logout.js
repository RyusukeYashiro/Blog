import React from 'react'
import "./style/Logout.css";
import { signOut } from 'firebase/auth';
import { auth } from '../fireBase';
import { useNavigate } from "react-router-dom";

// 引数で受け取るのはログイン情報を保持しているか否かの変数
const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const logout = () => {
      signOut(auth).then(() => {
        // ログイン情報を保持しているlocalStorageをクリア
        localStorage.clear();
        // ここでfalseにしてログインしていない状態にする
        setIsAuth(false);
        // ログインと同じくホームへリダイレクトを飛ばす
        navigate('/login');
      });
  };

  return(
    <div className="logout-page">
    <div className='logoutContainer'>
      <h1>Logout</h1>
      <div className='logoutDescription'>!現在のアカウントからログアウトします!</div>
      <button onClick={logout}>Logout</button>
    </div>
    </div>
  );
};

export default Logout;