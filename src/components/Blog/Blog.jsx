import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog,handleAddToBookmark,handleMarkAsRead }) => {
    const {id, cover, title, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='mb-20 space-y-2'>
            <img src={cover} alt="" />
            <div className='flex justify-between items-center my-4'>
                <div className='flex justify-center items-center'>
                    <img className='w-16' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className="text-2xl">{author}</h3>
                        <span>{posted_date}</span>
                    </div>
                </div>
                <div className='flex'>
                    <p>{reading_time} min read</p>
                    <button onClick={()=>handleAddToBookmark(blog)} className='ml-2 text-xl text-red-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h3 className="text-3xl mb-4">{title}</h3>
            <div>
                {
                    hashtags.map((hash, idx)=><span key={idx}><a href=""># {hash}</a></span>)
                }
            </div>
            <button onClick={()=>handleMarkAsRead(reading_time,id)} className='text-purple-800 underline'>Mark as Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}
export default Blog;