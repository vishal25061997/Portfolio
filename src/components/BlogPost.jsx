import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './BlogPost.css';
import AnimatedSection from './AnimatedSection';
import blog1 from '../assets/blogs/blog1.png'
import blog2 from  '../assets/blogs/blog2.png'

const BlogPost = () => {
  const { slug } = useParams();

  const blogContent = {
    'manage-remote-project-teams-effectively': {
      title: 'How to Manage Remote Project Teams Effectively',
      date: 'June 15, 2024',
      author: 'Tushar Kaw',
      readTime: '10 min read',
      tags: ['Team Management', 'Co-ordination', 'Productivity'],
      heroImage: blog1,
      content: `
        <h2>Challenges of Remote Teams</h2>
        <p>Managing remote teams comes with unique challenges that require thoughtful solutions and strategies.</p>
        <ul>
          <li><strong>Communication gaps:</strong> Without face-to-face interaction, important information can be lost</li>
          <li><strong>Time zone differences:</strong> Coordinating across multiple time zones requires careful planning</li>
          <li><strong>Lack of visibility:</strong> It's harder to gauge team morale and productivity remotely</li>
          <li><strong>Technology barriers:</strong> Not everyone has the same level of tech proficiency</li>
        </ul>
        
        <h3>Best Practices for Remote Team Management</h3>
        <p>Here are proven strategies that successful companies use to manage their remote teams:</p>
        <ul>
          <li><strong>✅ Use Collaboration Tools:</strong> Implement tools like Slack for communication, Zoom for meetings, and Notion for documentation</li>
          <li><strong>✅ Set Clear Expectations:</strong> Establish daily check-ins, clear deadlines, and well-defined deliverables</li>
          <li><strong>✅ Encourage Async Communication:</strong> Allow team members to work in their optimal time zones while maintaining communication</li>
          <li><strong>✅ Build Trust & Engagement:</strong> Focus on outcomes rather than hours worked, and invest in team building activities</li>
          <li><strong>✅ Regular One-on-Ones:</strong> Schedule individual meetings to address concerns and provide feedback</li>
          <li><strong>✅ Document Everything:</strong> Keep processes, decisions, and knowledge accessible to everyone</li>
        </ul>
        
        <h3>Tools and Technologies</h3>
        <p>The right tools can make or break a remote team's success:</p>
        <ul>
          <li><strong>Communication:</strong> Slack, Microsoft Teams, Discord</li>
          <li><strong>Video Conferencing:</strong> Zoom, Google Meet, Microsoft Teams</li>
          <li><strong>Project Management:</strong> Asana, Trello, Monday.com, Jira</li>
          <li><strong>Documentation:</strong> Notion, Confluence, Google Workspace</li>
          <li><strong>Time Tracking:</strong> Toggl, RescueTime, Clockify</li>
        </ul>
        
        <h3>Building Remote Team Culture</h3>
        <p>Creating a strong culture in a remote environment requires intentional effort:</p>
        <ul>
          <li>Virtual coffee chats and informal meetings</li>
          <li>Online team building activities</li>
          <li>Recognition and celebration of achievements</li>
          <li>Flexible working hours that respect work-life balance</li>
          <li>Regular team retrospectives and feedback sessions</li>
        </ul>
        
        <h3>Measuring Success</h3>
        <p>Track these metrics to ensure your remote team is thriving:</p>
        <ul>
          <li>Project completion rates and quality</li>
          <li>Team satisfaction and engagement scores</li>
          <li>Communication effectiveness</li>
          <li>Employee retention rates</li>
          <li>Client satisfaction metrics</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>Remote work is not just a temporary trend—it's the future of work. With the right processes, tools, and mindset, remote teams can be just as productive, if not more so, than traditional in-office teams. The key is to be intentional about communication, trust your team members, and continuously adapt your approach based on what works best for your specific team and industry.</p>
        
        <p>Remember: successful remote team management is about creating an environment where people can do their best work, regardless of where they are located.</p>
      `
    },
    
    'advanced-css-techniques': {
      title: 'Best Project Management Tools',
      date: 'May 28, 2025',
      author: 'Tushar Kaw',
      readTime: '5 min read',
      tags: ['Jira', 'Productivity'],
      heroImage: blog2,
      content: `
        <p>Discover the best project management tools to streamline workflows, improve collaboration, and boost productivity.</p>
            <h3>Evergreen Management Tools</h3>
        <ul>
        <p>1. Jira (Best for Agile teams) -
        <ul>
        <li>Features: Scrum/Kanban boards, backlog management.</li>
        <li>Best for: Software development.</li>
          </ul>
          </p>
          <p>2. Trello (Simple & Visual) -
        <ul>
        <li>Features: Card-based task management.</li>
        <li>Best for: Small teams & personal projects.</li>
          </ul>
          </p>
          <p>3. Microsoft Project (Advanced Planning) -
        <ul>
        <li>Features: Gantt charts, resource management.</li>
        <li>Best for: Large enterprises.</li>
          </ul>
          </p>
          <p>4. Asana (Task & Workflow Management) -
        <ul>
        <li>Features: Timeline view, automation.</li>
        <li>Best for: Marketing & operations.</li>
          </ul>
          </p>
          <p>5. Monday.com (Customizable Workflows) -
        <ul>
        <li>Features: Gantt charts, resource management.</li>
        <li>Best for: Remote teams.</li>
          </ul>
          </p>

        <h3>Conclusion</h3>
          <p>Pick a tool based on your team size, methodology, and budget.</p>
      `
    }
  };

  // Get the blog post data or show 404
  const post = blogContent[slug];
  
  if (!post) {
    return (
      <div className="blog-post-container">
        <div className="container">
          <div className="blog-post-404">
            <h1>Blog Post Not Found</h1>
            <p>Sorry, the blog post you're looking for doesn't exist.</p>
            <Link to="/blogs" className="back-to-blogs">
              ← Back to Blogs
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-container">
      <div className="container">
        <AnimatedSection>
          <motion.div 
            className="blog-post"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Blog Header */}
            <div className="blog-post-header">
              <Link to="/blogs" className="back-to-blogs">
                <i className="fas fa-arrow-left"></i> Back to Blogs
              </Link>
              
              <div className="blog-post-meta">
                <div className="blog-post-tags">
                  {post.tags.map(tag => (
                    <span key={tag} className="blog-post-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="blog-post-info">
                  <span className="blog-post-date">{post.date}</span>
                  <span className="blog-post-separator">•</span>
                  <span className="blog-post-author">{post.author}</span>
                  <span className="blog-post-separator">•</span>
                  <span className="blog-post-read-time">{post.readTime}</span>
                </div>
              </div>
              
              <h1 className="blog-post-title">{post.title}</h1>
            </div>

            {/* Hero Image */}
            <div className="blog-post-hero">
              <img src={post.heroImage} alt={post.title} />
            </div>

            {/* Blog Content */}
            <div 
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Blog Footer */}
            <div className="blog-post-footer">
              <div className="blog-post-share">
                <h4>Share this article</h4>
                <div className="share-buttons">
                  <a 
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-button twitter"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a 
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-button linkedin"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-button facebook"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </div>
              </div>
              
              <Link to="/blogs" className="back-to-blogs-footer">
                ← Back to All Blogs
              </Link>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default BlogPost;