import React, { useState } from "react";
import ProductTag from "./ProductTag";
import "./Post.css";

/**
 * Post
 * Full post card: header, shoppable image, actions, caption, product chips.
 * @param {object} post - Post data object from posts.js
 */
function Post({ post }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showTags, setShowTags] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLike = () => {
    setLiked((prev) => {
      setLikeCount((c) => (prev ? c - 1 : c + 1));
      return !prev;
    });
  };

  return (
    <article className="post">
      {/* ── Header ── */}
      <div className="post__header">
        <div className="post__avatar-ring">
          <img
            className="post__avatar"
            src={post.user.avatar}
            alt={post.user.name}
          />
        </div>

        <div className="post__user-info">
          <p className="post__username">{post.user.name}</p>
          <p className="post__meta">
            {post.user.handle} · {post.time}
          </p>
        </div>

        <button className="post__more-btn" aria-label="More options">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="5" cy="12" r="2" fill="#555" />
            <circle cx="12" cy="12" r="2" fill="#555" />
            <circle cx="19" cy="12" r="2" fill="#555" />
          </svg>
        </button>
      </div>

      {/* ── Image with shoppable tags ── */}
      <div
        className="post__image-wrapper"
        onClick={() => setShowTags((s) => !s)}
      >
        <img className="post__image" src={post.image} alt="Post" />

        {/* Render floating product dots */}
        {post.tags.map((tag) => (
          <ProductTag key={tag.id} tag={tag} visible={showTags} />
        ))}

        {/* Hint badge when tags are hidden */}
        {!showTags && (
          <div className="post__tag-hint">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#E8FF5A" strokeWidth="2.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            {post.tags.length} items tagged
          </div>
        )}

        {/* Dark overlay when tags are shown */}
        {showTags && (
          <div className="post__tags-overlay">
            <span className="post__tags-overlay-label">Tap item to shop</span>
          </div>
        )}
      </div>

      {/* ── Actions ── */}
      <div className="post__actions">
        <div className="post__action-row">
          {/* Like */}
          <button className="post__action-btn" onClick={handleLike} aria-label="Like">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={liked ? "#FF3B5C" : "none"}
              stroke={liked ? "#FF3B5C" : "#222"}
              strokeWidth="2"
              style={{
                transition: "transform 0.2s",
                transform: liked ? "scale(1.2)" : "scale(1)",
              }}
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>

          {/* Comment */}
          <button className="post__action-btn" aria-label="Comment">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </button>

          {/* Share */}
          <button className="post__action-btn" aria-label="Share">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </button>

          {/* Save — pushed to right */}
          <button
            className="post__action-btn post__action-btn--save"
            onClick={() => setSaved((s) => !s)}
            aria-label="Save"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={saved ? "#0a0a0a" : "none"}
              stroke="#222"
              strokeWidth="2"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
          </button>
        </div>

        {/* Likes count */}
        <p className="post__likes">{likeCount.toLocaleString()} likes</p>

        {/* Caption */}
        <p className="post__caption">
          <strong>{post.user.handle}</strong> {post.caption}
        </p>

        {/* Comments link */}
        <p className="post__comments-link">View all {post.comments} comments</p>

        {/* ── Product chips strip ── */}
        <div className="post__product-strip">
          {post.tags.map((tag) => (
            <a
              key={tag.id}
              className="post__product-chip"
              href={tag.link}
              target="_blank"
              rel="noreferrer"
            >
              <span className="post__chip-label">{tag.label}</span>
              <span className="post__chip-meta">
                {tag.brand} · {tag.price}
              </span>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export default Post;
