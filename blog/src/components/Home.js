import React, { useEffect , useState } from 'react'
import './style/Home.css';
import { db } from '../fireBase';
import { collection , Firestore, getDocs } from 'firebase/firestore';

const Home = () => {
  const [postlist , setPostlist] = useState([]);

  //データを取ってくるのはリロードされた時に一度だけであるので、
  // 今回はuseeffectを用いて行う
  useEffect(() => {
    const getPosts = async() => {
      const data = await getDocs(collection(db , "posts"));
      // これだとnestが深くて取り出せない
      // console.log(data.docs.map((doc) => ({ doc })));
      // スプレット構文でオブジェクを作成して、FirestoreのQueryDocumentSnapshotオブジェクトのdata()メゾットを使用
      setPostlist(data.docs.map((doc) => ({...doc.data() , id: doc.id})));
    };
    getPosts();
  } , []);

  return (
    <div className='homePage'>
      {postlist.map((post) => {
        return(
        <div className='postContents' key={post.id}>
          <div className='postHeader'>
            <h1>{post.title}</h1>
          </div>
          <div className='postContainer'>
            {post.postText}
          </div>
          <div className='Deletebutton'>
            <h3>
              @{post.author.username}
            </h3>
            <button>削除</button>
          </div>
        </div>
        );
      })}
    </div>
  );
}

export default Home