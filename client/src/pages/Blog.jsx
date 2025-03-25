import React, { useEffect, useState } from 'react';

import Header from '../components/Header.jsx'
import BlogFeedPost from '../components/BlogFeedPost.jsx';

var backendData;

function Blog() {
  // On finish of async, render things?
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('/api');
        const response = await fetch('http://localhost:3000/api');
        const data = await response.json();
        // const response = await fetch('http://localhost:3000/api');
        // const data = await response.json();
        setBackendData(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    console.log(backendData)
    fetchData();
  }, []);


    return(
      <>
      <Header></Header>

      <div>
      {backendData.blogs? (
        backendData.blogs.map((blog) => (
      <div key={blog.id}>
        <BlogFeedPost title={blog.title} date={blog.date} id={blog.id}></BlogFeedPost>
      </div>
    ))
  ) : (
    <p>Loading...</p>
  )}
</div>
  {/* <BlogFeedPost name={name} age={age}> </BlogFeedPost> */}
  </>
    );
  }
export default Blog;