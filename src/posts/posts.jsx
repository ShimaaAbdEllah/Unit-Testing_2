import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./post";
import "../App.css";

function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="main">
      <div className="container">
        <div className="posts">
          {isLoading && <div className="loader"></div>}
          {isError && <div className="error">Something went wrong!</div>}
          {!isLoading && !isError && posts.length === 0 && (
            <div className="no-posts">There are no posts.</div>
          )}
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
