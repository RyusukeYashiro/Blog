import React from 'react'
import './style/Home.css';

const Home = () => {
  return (
    <div className='homePage'>
      <div className='postContents'>
        <div className='postHeader'>
          <h1>タイトル</h1>
        </div>
        <div className='postContainer'>
          僕はもうあのさそりのようにほんとうにみんなの幸（さいわい）のためならば僕のからだなんか百ぺんやいてもかまわない。
        </div>
        <div className='Deletebutton'>
          <h3>yashiro</h3>
          <button>削除</button>
        </div>
      </div>
    </div>
  )
}

export default Home