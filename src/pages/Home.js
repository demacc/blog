import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import "./home.css";

function Home() {
  let url = "http://localhost:3001/blogs";
  let { data: blogs, loading, error } = useFetch(url);

  return (
    <div>
      {loading && <p>Loading ...</p>}
      {error && <p>{error}</p>}
      {blogs &&
        blogs.map((blog) => (
          <div key={blog.id} className="Home">
            <h2>{blog.title}</h2>
            <p>Posted by - {blog.author}</p>
            <Link to={`/blogs/${blog.id}`}>Read More</Link>
          </div>
        ))}
    </div>
  );
}
export default Home;
