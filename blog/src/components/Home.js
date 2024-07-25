import React, { useEffect , useState } from 'react'
import './style/Home.css';
import { auth, db } from '../fireBase';
import { collection , deleteDoc, doc, getDocs } from 'firebase/firestore';

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
  //postの削除を行う関数
  const deletePost = async( postId ) => {
    try {
      await deleteDoc(doc(db , "posts" , postId));
      //postの状態を管理しているpostlistから今回削除するようなpostIdを見つけて削除する
      //useStateの値が常に最新かどうか限らないのでここでは、関数を呼び出してLatestListとして複製して、filterをかけている。
      setPostlist((LatestList) => LatestList.filter(post => post.id !== postId));
    } catch(error) {
      console.error("Error deleting post: ", error);
    }
  };

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
            {/* HTMLとJavaScriptを組み合わせる際には、アロー関数を使ってより複雑な処理や引数の渡し方を行う
            htmlに特定のプロパティを渡して、関数の処理はできない。それができるのはコンポーネントだけ。 */}
            {post.author.id === auth.currentUser?.uid && (
              <button onClick={() => deletePost(post.id)}>削除</button>
            )}
          </div>
        </div>
        );
      })}
    </div>
  );
};

export default Home