import React from 'react';
import './Blog.css';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import blog1 from  '../assets/blogs/blog1.png'
import blog2 from  '../assets/blogs/blog2.png'

const Blog = () => {

  const readMoreText = "Read More";
  
  const blogPosts = [
    {
      id: 1,
      title: 'Manage Remote Teams Effectively',
      date: 'June 15, 2024',
      excerpt: 'Remote work is here to stay. Learn best practices for managing distributed teams successfully.',
      imageUrl: blog1,
      tags: ['Team Management', 'Co-ordination', 'Productivity'],
      url: '/blog/manage-remote-project-teams-effectively'
    },
    {
      id: 2,
      title: 'Best Project Management Tools',
      date: 'June 16, 2025',
      excerpt: 'Best project management tools for workflows, improving collaboration, and boost productivity.',
      imageUrl: blog2,
      tags: ['Jira', 'Productivity'],
      url: '/blog/advanced-css-techniques'
    }
  ];

  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <AnimatedSection>
          <div className="section-header">
            <h2>Blogs</h2>
          </div>
        </AnimatedSection>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <AnimatedSection key={post.id}>
              <motion.div 
                className="blog-card card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="blog-image">
                  <img src={post.imageUrl} alt={post.title} />
                  <div className="blog-overlay">
                    <div className="blog-tags">
                      {post.tags.map(tag => (
                        <span key={tag} className="blog-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="blog-content">
                  <span className="blog-date">{post.date}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <a href={post.url} className="read-more">
                    {readMoreText}
                  </a>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;