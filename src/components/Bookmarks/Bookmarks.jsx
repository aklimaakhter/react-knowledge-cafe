import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types'


const Bookmarks = ({ bookmarks,readingTime}) => {
    return (
        <div className="w-1/3 ml p-6">
            <h3 className="text-3xl">Reading Time :{readingTime}</h3>
            <h3 className="text-3xl">Bookmarks :{bookmarks.length}</h3>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime:PropTypes.number
}
export default Bookmarks;