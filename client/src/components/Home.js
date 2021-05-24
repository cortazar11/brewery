import React from 'react';
import PostList from './PostList';
import SideBar from './SideBar';



const Home=()=>{
  return (
          <div className="containerHome">
            <SideBar />
            <PostList />
            
            <div className="footer">Footer</div>
            
         </div>
      )
}

export default Home;