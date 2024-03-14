import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blogs = ({ blogs, handelBookmarks, handlemarkAsRead }) => {
  const {
    title,
    cover,
    author,
    posted_date,
    author_img,
    reading_time,
    hashtags,
  } = blogs;
  return (
    <div className="mb-20">
      <img
        className="w-full mb-4"
        src={cover}
        alt={`cover picture of the title ${title}`}
      />
      <div className="flex justify-between space-y-3">
        <div className="flex gap-6">
          <img className="w-16" src={author_img} alt="" />
          <div>
            <h1 className="text-2xl">{author}</h1>
            <p>{posted_date}</p>
          </div>
        </div>

        <div className="mb-5 flex items-center">
          <span>{reading_time} min read</span>
          <button
            onClick={() => handelBookmarks(blogs)}
            className="ml-2 text-red-400"
          >
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-4xl mb-5">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
      <button
        className="mt-2 text-blue-600 font-bold underline"
        onClick={() => handlemarkAsRead(reading_time)}
      >
        Mark As Read
      </button>
    </div>
  );
};
Blogs.propTypes = {
  blogs: PropTypes.object.isRequired,
  handelBookmarks: PropTypes.func.isRequired,
  handlemarkAsRead: PropTypes.func.isRequired,
};
export default Blogs;
