import { useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const Create = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:3000/blogs');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  if(error || isPending) {
    console.log("data not fetched yet...");
   }
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(blogs){
      const length = blogs.length;
      var id = length + 1;
     }
    id = (id + 1).toString();
    console.log("new id: " + id);
    const blog = { title, body, author,id };

    fetch('http://localhost:3000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      // history.go(-1);
      history.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
}
 
export default Create;