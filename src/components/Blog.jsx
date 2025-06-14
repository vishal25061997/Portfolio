import React from 'react';
import './Blog.css';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import blog1 from '../assets/blogs/blog1.png';
import blog2 from '../assets/blogs/blog2.avif';
import blog3 from '../assets/blogs/blog3.jpg';
import blog4 from '../assets/blogs/blog4.jpg';
import blog5 from '../assets/blogs/blog5.png';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Create a High-Performance Team',
      date: 'June 22, 2025',
      excerpt: 'Learn how to build a motivated, aligned, and results-driven project team that consistently delivers.',
      imageUrl: blog4,
      tags: ['Team Building', 'Leadership', 'Collaboration'],
      url: '/blog/high-performance-project-teams'
    },
    {
      id: 2,
      title: 'Agile vs. Waterfall',
      date: 'June 25, 2025',
      excerpt: 'Explore the differences b/w Agile & Waterfall project management methodologies & when to use each.',
      imageUrl: blog5,
      tags: ['Agile', 'Waterfall', 'Methodologies'],
      url: '/blog/agile-vs-waterfall'
    },
    {
      id: 3,
      title: 'The Guide to Risk Management',
      date: 'June 20, 2025',
      excerpt: 'Identify, analyze & mitigate risks with this complete guide to risk management in project execution.',
      imageUrl: blog3,
      tags: ['Risk Management', 'Project Planning', 'Execution'],
      url: '/blog/project-risk-management-guide'
    },
    {
      id: 4,
      title: 'Best Project Management Tools',
      date: 'June 16, 2025',
      excerpt: 'Best project management tools for workflows, improving collaboration, and boost productivity.',
      imageUrl: blog2,
      tags: ['Jira', 'Productivity'],
      url: '/blog/advanced-css-techniques'
    },
    {
      id: 5,
      title: 'Manage Remote Teams Effectively',
      date: 'June 15, 2024',
      excerpt: 'Remote work is here to stay. Learn best practices for managing distributed teams successfully.',
      imageUrl: blog1,
      tags: ['Team Management', 'Co-ordination', 'Productivity'],
      url: '/blog/manage-remote-project-teams-effectively'
    },
    
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
                  <a href={post.url} className="blog-overlay">
                    <div className="blog-tags">
                      {post.tags.map(tag => (
                        <span key={tag} className="blog-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </a>
                </div>
                <div className="blog-content">
                  <span className="blog-date">{post.date}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <a href={post.url} className="read-more">Read More</a>
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
