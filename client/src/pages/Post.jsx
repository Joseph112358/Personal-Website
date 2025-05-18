import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

var blogData;

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const markdownComponents = {
  img: ({ src, alt }) => {
    // Prepend backend URL if src is relative
    const fullSrc = src.startsWith('http') ? src : `${API_BASE_URL}${src}`;
    return <img src={fullSrc} alt={alt} style={{ maxWidth: '100%' }} />;
  }
};

function Post(){
  const { id } = useParams(); // Get the dynamic parameter


    // On finish of async, render things?
    const [blogData, setBlogData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`${API_BASE_URL}/post/${id}`); // Correct dynamic URL
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
           <p> <a href={`../blog`}>Back to blog </a> </p>
           {/* <h1></h1> */}
        {blogData ? (
          <div>
            <h2>{blogData.post.title}</h2>
            {/* <ReactMarkdown>{blogData.post.content}</ReactMarkdown> */}
            <ReactMarkdown components={markdownComponents}>
          {blogData.post.content}
        </ReactMarkdown>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
}

export default Post