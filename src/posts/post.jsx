import React from "react";
import "../App.css";

function Post({ post }) {
  const createdDate = new Date(post.date).toLocaleDateString();
  const imageUrl = `https://picsum.photos/500?random=${post.id}`;

  return (
    <div className="post">
      <div className="post-header">
        <div className="post-user">
          <img
            className="user-avatar"
            src={`https://i.pravatar.cc/100?u=${post.userId}`}
            alt={`Avatar of User ${post.userId}`}
          />
          <div className="user-details">
            <span className="user-name">User {post.userId}</span>
            <span className="post-date">{createdDate}</span>
          </div>
        </div>
      </div>
      <div className="post-body">
        <img className="post-image" src={imageUrl} alt="Post" />
        <div className="post-content">
          <h2 className="post-title">{post.title}</h2>
          <p className="post-text">{post.body}</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
