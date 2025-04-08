import { Link } from 'react-router-dom';
import { useRef } from 'react';

const BlogList = ({ blogs }) => {

  let inputElement = useRef();

  const focusInput = () => {
    console.log(inputElement.current);
  };
  
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} ref = {inputElement} onMouseEnter={focusInput}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;