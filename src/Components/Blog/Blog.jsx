import { useEffect } from 'react';
import { useState } from 'react';
import Blogs from '../Blogs/Blogs';
import PropTypes from 'prop-types';
const Blog = ({ handelBookmarks, handlemarkAsRead }) => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch('blog.json')
      .then(res => res.json())
      .then(data => setBlog(data));
  }, []);

  return (
    <div className="md:w-2/3">
      <h1 className="text-4xl">Blogs :{blog.length}</h1>
      {blog.map(blogs => (
        <Blogs
          key={blogs.id}
          blogs={blogs}
          handelBookmarks={handelBookmarks}
          handlemarkAsRead={handlemarkAsRead}
        ></Blogs>
      ))}
    </div>
  );
};
Blog.propTypes = {
  handelBookmarks: PropTypes.func.isRequired,
  handlemarkAsRead: PropTypes.func.isRequired,
};
export default Blog;
