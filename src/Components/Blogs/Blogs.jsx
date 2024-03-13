import PropTypes from 'prop-types';
const Blogs = ({ blogs }) => {
  console.log(blogs);
  return <div></div>;
};
Blogs.propTypes = {
  blogs: PropTypes.object.isRequired,
};
export default Blogs;
