import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';

// import UserHeader from './UserHeader.js.old';

class PostList extends React.Component {

  // componentDidMount() {
  //   this.props.fetchPostsAndUsers();
  // }
  componentDidMount(){
    this.props.fetchPosts()
  }

    // renderList(){
    //   return this.props.posts.map(post=>{
    //     return <div className="item" key={post.id}>
    //               <div className="content">
    //                 <div className="description">
    //                     <h2>{post.title}</h2>
    //                     <p>{post.body}</p>
    //                 </div>
    //                 <UserHeader userId={post.userId}/>
    //               </div>
    //             </div>
    //   })
    // }

    renderList(){
     
      return this.props.posts.map(brewerie=>{
         return (
           <div>
              <div key={brewerie.id}>
                <h2>{brewerie.name}</h2>
                <p>{brewerie.country}</p>
                <p>{brewerie.city}</p>
                <p><a href={brewerie.website_url} target="_blank">{brewerie.website_url}</a></p>
              </div>
           </div>
         )
      })
    }

    render(){
      console.log(this.props.posts)
      return <div className="mainHome">{this.renderList()}</div>
    
    }
}

const mapStateToProps=({posts})=>{
  return {
    posts
  }
}

export default connect(mapStateToProps,
  { fetchPosts }
)(PostList)