import React, { useState } from "react";
import { FaBookmark, FaShareAlt } from "react-icons/fa";
import { FaStar, FaEye } from "react-icons/fa";
const NewsCard = ({ news }) => {
  const [showMore, setShowMore] = useState(false);
  const { title, author, thumbnail_url, details } = news;

  const publishedDate = new Date(author.published_date)
    .toISOString()
    .split("T")[0];

  return (
    <div className="card bg-base-100 border border-base-300 rounded-none shadow-none overflow-hidden mt-3">
      {/* Author Section */}
      <div className="flex items-center justify-between bg-base-200 px-5 py-4">
        <div className="flex items-center gap-4">
          <img
            src={author.img}
            alt={author.name}
            className="w-11 h-11 rounded-full object-cover"
          />

          <div>
            <h3 className="font-bold text-base-content">{author.name}</h3>
            <p className="text-sm text-base-content/60">{publishedDate}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-base-content/70">
          <button
            className="btn btn-ghost btn-sm btn-square"
            aria-label="Bookmark news"
          >
            <FaBookmark size={20} />
          </button>

          <button
            className="btn btn-ghost btn-sm btn-square"
            aria-label="Share news"
          >
            <FaShareAlt size={20} />
          </button>
        </div>
      </div>

      {/* News Content */}
      <div className="p-5">
        <h2 className="text-xl md:text-2xl font-extrabold leading-snug mb-6">
          {title}
        </h2>

        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-auto object-cover rounded-md"
        />

        <div>
          <p className={showMore ? "" : "line-clamp-3"}>{details}</p>
          <button
            className="text-red-500 font-semibold"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "show Less" : "show More"}
          </button>
        </div>
        {/* Card Footer */}
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-base-300">
          {/* Rating */}
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={
                  star <= news.rating.number
                    ? "text-orange-400"
                    : "text-gray-300"
                }
              />
            ))}

            <span className="text-sm text-base-content/70 ml-2">
              {news.rating.number.toFixed(1)}
            </span>
          </div>

          {/* Total Views */}
          <div className="flex items-center gap-2 text-base-content/60">
            <FaEye size={19} />
            <span className="text-sm">{news.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
