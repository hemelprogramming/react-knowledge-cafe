import propTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3  bg-gray-100 mt-4 ml-2 p-4">
      <div>
        <h2 className="text-2xl text-center p-4">
          Reading Time :{readingTime}
        </h2>
      </div>
      <h2 className="text-2xl text-center">
        Bookmarked Blog: {bookmarks.length}{' '}
      </h2>
      {bookmarks.map(bookmark => (
        <Bookmark key={bookmarks.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: propTypes.array.isRequired,
  readingTime: propTypes.number.isRequired,
};
export default Bookmarks;
