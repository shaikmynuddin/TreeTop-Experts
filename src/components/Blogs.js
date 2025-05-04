// Blogs.js
import React from 'react';

function Blogs() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Latest Blog Posts</h1>
      <div className="space-y-4">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold">Why Tree Pruning Matters</h2>
          <p>Learn about the importance of pruning and the best times to do it.</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold">Tips for Lawn Care</h2>
          <p>Essential grass maintenance tips for a greener landscape.</p>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
