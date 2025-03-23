import React from "react";

const UserPosts = () => {
  const posts = ["React is awesome!", "Learning React is fun!", "Love coding!"];

  return (
    <div>
      <h3>Recent Posts</h3>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserPosts;
