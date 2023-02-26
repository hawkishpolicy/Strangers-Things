import React from "react";
import { PostCard } from "./";


const PostsLists = (props) => {
  const posts = props.posts;
  const setPosts = props.setPosts;
  const searchString = props.searchString;
  const idx = props.idx;


  return (
    <div id="all-posts">
      {!searchString
        ? posts.map((post, idx) => {
            if (post.active) {
              return (
                <PostCard
                  key={idx}
                  post={post}
                  posts={posts}
                  setPosts={setPosts}
                  idx={idx}
                />
              );
            }
          })
        : posts.map((post) => {
            let titleLowerCase = post.title.toLowerCase();
            if (
              post.title.toLowerCase() === searchString.toLowerCase() &&
              post.active
            ) {
              return (
                <div id="searchedPostDisplay">
                  <PostCard
                    key={"searchMap" + post.id}
                    post={post}
                    posts={posts}
                    setPosts={setPosts}
                    idx={idx}
                  />
                  ;
                </div>
              );
            } else if (
              titleLowerCase.includes(searchString.toLowerCase()) &&
              post.active
            ) {
              return (
                <div id="searchedPostDisplay">
                  <PostCard
                    post={post}
                    posts={posts}
                    setPosts={setPosts}
                    idx={idx}
                  />
                </div>
              );
            }
          })}
    </div>
  );
};


export default PostsLists;
