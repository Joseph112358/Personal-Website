const express = require('express')
const cors = require('cors')
const path = require('path');

const app = express()
const fs = require('fs');
const matter = require("gray-matter");

app.use(cors({
  origin: 'http://localhost:5173',
  origin: ['http://192.168.1.119:3000'], // your actual React app URL
}));

app.use('/images', express.static(path.join(__dirname, 'images')));

async function getBlogs(directoryPath = './posts') {
  try {
    const files = await fs.promises.readdir(directoryPath);
    const posts = [];

    for (const file of files) {
      if (file.endsWith('.md')) {
        const filePath = `${directoryPath}/${file}`;
        const post = await processMarkdownBlog(filePath);
        if (post) {
          posts.push(post);
        }
      }
    }

    return posts;
  } catch (error) {
    console.error('Error reading directory or processing Markdown files:', error);
    return []; // Return an empty array in case of errors
  }
}

async function processMarkdownBlog(filePath) {
  try {
    const data = await fs.promises.readFile(filePath, 'utf8');
    const matterResult = matter(data);
    const blogTitle = matterResult.data.title;
    const blogDate = matterResult.data.date;
    const blogId = matterResult.data.id
    const blogImages = matterResult.data.images || [];
    const blogContent = matterResult.content; // Assuming content is in the Markdown content

    return {
      title: blogTitle,
      date: blogDate,
      id: blogId,
      images: blogImages,
      content: blogContent
    };
  } catch (error) {
    console.error('Error reading or processing Markdown file:', error);
    return null; // Return null to indicate an error during processing
  }
}

async function getPostByID(id){
  directoryPath = './posts'
  const files = await fs.promises.readdir(directoryPath);
  
  for (const file of files) {
    if (file.endsWith('.md')) {
      const filePath = `${directoryPath}/${file}`;
      const post = await processMarkdownBlog(filePath);
      if (post.id == id) {
       return post
      }
    }
  }

}

app.get("/post/:id", async (req, res) => {
  console.log("HERE"); // This should log when the route is hit

  try {
    const postId = req.params.id; // Extract post ID
    const post = await getPostByID(postId); // Await the async function
    res.json({ post }); // Send the response
  } catch (error) {
    console.error("Couldn't find post or post does not exist", error);
    res.status(500).json({ error: "Post not found or does not exist" });
  }
});


app.get("/api" , async (req,res) => {
  
  getBlogs()
  .then(posts => {
    console.log("Posts:", posts);
    res.json({
      "blogs": posts
  })
  })
  .catch(error => {
    console.error("Error:", error);
  });

})

app.listen(5000, () => console.log("Server started on port 5000"))