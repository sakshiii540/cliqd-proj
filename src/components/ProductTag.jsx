import React from "react";
import "./ProductTag.css";

/**
 * ProductTag
 * A floating dot on the post image that shows a tooltip with product info.
 * @param {object}  tag      - { id, label, brand, price, x, y, link }
 * @param {boolean} visible  - Whether the tags should be shown
 */
function ProductTag({ tag, visible }) {
  return (
    <div
      className={`product-tag ${visible ? "product-tag--visible" : "product-tag--hidden"}`}
      style={{ left: `${tag.x}%`, top: `${tag.y}%` }}
    >
      {/* Pulsing dot */}
      <div className="product-tag__dot">
        {/* Tooltip anchored above the dot */}
        <a
          className="product-tag__tooltip"
          href={tag.link}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="product-tag__name">{tag.label}</span>
          <span className="product-tag__brand-price">
            {tag.brand} · {tag.price}
          </span>
        </a>
      </div>
    </div>
  );
}

export default ProductTag;
