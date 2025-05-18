import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

var blogData;

function Post(){
  const { id } = useParams(); // Get the dynamic parameter


    // On finish of async, render things?
    const [blogData, setBlogData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:5000/post/${id}`); // Correct dynamic URL
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
           {/* back to blog container */}
           <p> <a href={`../blog`}>Back to blog </a> </p>
           <h1></h1>
        {blogData ? (
          <div>
            <h1>{blogData.post.title}</h1>
            <ReactMarkdown>{blogData.post.content}</ReactMarkdown>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
}

export default Post