import useFetch from "../hooks/useFetch";

function Home() {
  let url = "http://localhost:3001/blogs";
  let { data: blogs, loading, error } = useFetch(url);
  return (
    <div>
      {loading && <p>Something Loading Here</p>}
      {error && <p>{error}</p>}
      {blogs &&
        blogs.map((blog) => (
          <div key={blog.id}>
            <h1>{blog.title}</h1>
            <h2>{blog.author}</h2>
          </div>
        ))}
    </div>
  );
}
export default Home;
