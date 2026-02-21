import React from "react";
import { stories } from "../data/posts";
import "./Stories.css";

function StoryItem({ story }) {
  const ringClass = [
    "story__ring",
    story.isOwn ? "story__ring--own" : "",
    story.isBrand ? "story__ring--brand" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="story">
      <div className={ringClass}>
        <div className="story__inner">
          {story.isOwn ? (
            /* "+" icon for own story */
            <div className="story__own-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </div>
          ) : (
            <img
              className="story__avatar"
              src={story.avatar}
              alt={story.name}
            />
          )}
        </div>
      </div>

      <span className={`story__name ${story.isBrand ? "story__name--brand" : ""}`}>
        {story.name}
      </span>
    </div>
  );
}

function Stories() {
  return (
    <section className="stories">
      {stories.map((story) => (
        <StoryItem key={story.id} story={story} />
      ))}
    </section>
  );
}

export default Stories;
