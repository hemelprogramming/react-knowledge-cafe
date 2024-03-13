import { useEffect } from 'react';
import { useState } from 'react';

const Blog = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch('blog.json')
      .then(res => res.json())
      .then(data => setBlog(data));
  }, []);

  return (
    <div className="md:w-2/3">
      <h1 className="text-4xl">Blogs :{blog.length}</h1>
    </div>
  );
};

export default Blog;
