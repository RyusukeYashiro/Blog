import './App.css';
import { BrowserRouter  , Route , Link, Routes} from "react-router-dom";
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import Logout from './components/Logout';
import NavLink from './components/NavBar';
import { useState } from 'react';

function App() {
    const [isAuth , setIsAuth] = useState(false);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavLink isAuth={isAuth}/>}>
                    <Route index element={<Home />} />
                    <Route path="createPost" element={<CreatePost setIsAuth={setIsAuth} />} />
                    <Route path="login" element={<Login setIsAuth={setIsAuth} />} />
                    <Route path="logout" element={<Logout  setIsAuth={setIsAuth}/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
