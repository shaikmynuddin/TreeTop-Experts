import React from 'react';
import '../App.css';

// Importing local images
import pruning from '../assets/TreeAssesments.jpg';
import urban from '../assets/Trimming.jpg';
import planting from '../assets/BG.jpg';

function Blogs() {
  const blogPosts = [
    {
      title: "The Art of Tree Pruning",
      summary: "Pruning keeps trees healthy, removes dead branches, and encourages strong growth patterns.",
      image: pruning,
    },
    {
      title: "Urban Tree Benefits",
      summary: "Trees in cities help reduce air pollution, cool the environment, and improve mental well-being.",
      image: urban,
    },
    {
      title: "Tree Planting Tips",
      summary: "Learn how to choose the right tree and plant it correctly to ensure long-term survival.",
      image: planting,
    }
  ];

  return (
    <div className="blogs-container">
      <h1 className="blogs-title">Our Latest Blog Posts</h1>
      <div className="blogs-grid">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h2>{post.title}</h2>
              <p>{post.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
