import React, { useEffect, useState } from 'react'
import "./style/CreatePost.css";
import {addDoc, collection} from "firebase/firestore"
import {db} from '../fireBase';
import {auth} from '../fireBase';
import { useNavigate } from 'react-router-dom';

const CreatePost = ( isAuth ) => {
  const [title , setTitle] = useState([]);
  const [postText , setPostText] = useState([]);
  const navigate = useNavigate(); 

  //投稿ボタンを押された時の処理。
  // ここではfireBaseにアクセスしてデータの追加を行う
  const createPost = async () => {
    // もしログインしたユーザーがいなければ、掲示板には投稿を行えない。
    if(!auth.currentUser) {
      window.alert("No user logged in");
      navigate('/login');
      return;
    }
    //成功した時の処理
    try {
      await addDoc(collection(db , "posts") , {
        title: title,
        postText: postText,
        author : {
          username: auth.currentUser.displayName,
          id : auth.currentUser.uid
      }
    });
    navigate('/');
    }
  //失敗した時console.logで表示
    catch(error) {
      console.error("Error adding document" , error);
    }};

    useEffect(() => {
      if(!isAuth){
        navigate("/login");
      }
    } , []);
  return (
    <div className='createPostPage'>
      <div className='container'>
        <h1>記事を投稿する</h1>
        <div className='inputPost'>
          <div>タイトル</div>
          <input type='text' placeholder='タイトルを記入'
            onChange={(e) => setTitle(e.target.value)}></input>
        </div>
        <div className='inputPost'>
          <div>投稿</div>
          <textarea placeholder='投稿を記入'
            onChange={(e) => setPostText(e.target.value)}></textarea>
        </div>
        <button className='postButton' onClick={createPost}>投稿する</button>
      </div>
    </div>
  );
}

export default CreatePost;