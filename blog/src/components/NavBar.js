import React from 'react'
import './style/NavBar.css';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPen, faRightToBracket } from '@fortawesome/free-solid-svg-icons';


const NavLink = ({isAuth}) => {
  return (
    <>
    <nav>
      <Link to="/"><FontAwesomeIcon icon={faHouse} />ホーム</Link>
      <Link to="/createPost"><FontAwesomeIcon icon={faPen} />記事投稿</Link>
      {!isAuth ? (<Link to="/login"><FontAwesomeIcon icon={faRightToBracket} />ログイン</Link>)
      : (<Link to="/logout"><FontAwesomeIcon icon={faRightToBracket} />ログアウト</Link>)}
    </nav>
    <Outlet></Outlet>
    </>
    )
}

export default NavLink