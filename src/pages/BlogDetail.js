import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";

function BlogDetail() {
  let params = useParams();
  let url = "http://localhost:3001/blogs/" + params.id;
  let { data: blog, loading, error } = useFetch(url);

  //redirect
  let navigate = useNavigate();
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [error, navigate]);

  return (
    <div>
      {error && <p>{error}</p>}
      {loading && <p>Loading ...</p>}
      {blog && (
        <div>
          <h2>{blog.title}</h2>
          <p>Posted by - {blog.author}</p>
          <p>{blog.blog}</p>
        </div>
      )}
    </div>
  );
}

export default BlogDetail;
