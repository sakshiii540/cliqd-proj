import React from "react";
import Post from "./Post";
import { posts } from "../data/posts";

/**
 * Feed
 * Renders the list of Post cards.
 */
function Feed() {
  return (
    <section style={{ padding: "0" }}>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
}

export default Feed;
