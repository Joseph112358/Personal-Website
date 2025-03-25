import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

var blogData;

function Post(){
  const { id } = useParams(); // Get the dynamic parameter


    // On finish of async, render things?
    const [blogData, setBlogData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:3000/post/${id}`); // Correct dynamic URL
          const data = await response.json();
          setBlogData(data);
          console.log("Fetched data:", data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, [id]); // Depend on `id`

 
    return (
      <div>
        {blogData ? (
          <div>
            <p>Your blog title: {blogData.post.title}</p>
            <p>{blogData.post.content}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );

}

export default Post