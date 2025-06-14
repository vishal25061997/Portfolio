import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './BlogPost.css';
import AnimatedSection from './AnimatedSection';
import blog1 from '../assets/blogs/blog1.png'
import blog2 from  '../assets/blogs/blog2.avif'
import blog3 from '../assets/blogs/blog3.jpg';
import blog4 from '../assets/blogs/blog4.jpg';
import blog5 from '../assets/blogs/blog5.png';

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
    },
    'project-risk-management-guide': {
  title: 'The Ultimate Guide to Project Risk Management',
  date: 'June 20, 2025',
  author: 'Tushar Kaw',
  readTime: '10 min read',
  tags: ['Risk Management', 'Project Planning', 'Execution'],
  heroImage: blog3,
  content: `
    <h2>Why Project Risk Management Matters</h2>
    <p>Every project faces uncertainty. Risk management is about identifying potential issues before they become problems—and planning your response. Whether you're managing a startup launch or an enterprise software deployment, risk management is crucial for staying on budget, on time, and within scope.</p>

    <h3>What is Project Risk?</h3>
    <p>A risk is any uncertain event or condition that could affect your project objectives. Risks can be positive (opportunities) or negative (threats), but this guide focuses on threats that can derail your project.</p>

    <h3>Common Types of Project Risks</h3>
    <ul>
      <li><strong>Scope Risk:</strong> Unclear requirements or scope creep.</li>
      <li><strong>Schedule Risk:</strong> Delays due to dependencies or unrealistic timelines.</li>
      <li><strong>Cost Risk:</strong> Budget overruns from unexpected expenses.</li>
      <li><strong>Resource Risk:</strong> Key personnel leaving, or skills mismatch.</li>
      <li><strong>Technical Risk:</strong> New technologies failing to integrate or scale.</li>
      <li><strong>External Risk:</strong> Regulatory changes, market shifts, or geopolitical events.</li>
    </ul>

    <h3>Phases of Risk Management</h3>
    <p>Risk management involves five major steps:</p>
    <ol>
      <li><strong>Identify Risks:</strong> Use brainstorming, checklists, SWOT analysis, and historical data.</li>
      <li><strong>Analyze Risks:</strong> Assess the likelihood and impact (qualitative or quantitative).</li>
      <li><strong>Prioritize Risks:</strong> Use a risk matrix to rank high-impact, high-probability threats.</li>
      <li><strong>Respond to Risks:</strong> Plan how to avoid, mitigate, transfer, or accept each risk.</li>
      <li><strong>Monitor & Review:</strong> Continuously track and update your risk register.</li>
    </ol>

    <h3>Creating a Risk Register</h3>
    <p>A Risk Register is a living document that tracks all identified risks. It should include:</p>
    <ul>
      <li>Risk Description</li>
      <li>Risk Owner</li>
      <li>Likelihood</li>
      <li>Impact</li>
      <li>Response Plan</li>
      <li>Status (Open, Mitigated, Closed)</li>
    </ul>

    <h3>Tools for Risk Management</h3>
    <ul>
      <li><strong>Jira Risk Matrix plugin</strong> - Integrate risk tracking into your Agile boards.</li>
      <li><strong>Excel/Google Sheets</strong> - For simple risk registers and heat maps.</li>
      <li><strong>RiskWatch</strong> - Enterprise-grade risk analysis software.</li>
      <li><strong>RiskyProject</strong> - Ideal for project simulations and Monte Carlo analysis.</li>
    </ul>

    <h3>Tips for Effective Risk Management</h3>
    <ul>
      <li>Involve your entire team in risk identification.</li>
      <li>Review your risk register in every sprint or project milestone.</li>
      <li>Don't ignore low-likelihood risks with high impact—they're the black swans.</li>
      <li>Make risk discussions part of your team culture, not just a one-time exercise.</li>
    </ul>

    <h3>Case Study: Risk in Software Development</h3>
    <p>A fintech startup launched a trading app without full compliance testing. Midway through rollout, regulators flagged serious issues. The team hadn't planned a legal risk mitigation strategy. This resulted in a six-month delay and $400K in legal expenses. A simple early-stage risk identification would have prevented this.</p>

    <h3>Conclusion</h3>
    <p>Risk management isn't just about avoiding disaster—it's about being proactive and confident in the face of uncertainty. The most successful project managers anticipate risks, build contingency plans, and lead their teams with clarity and purpose.</p>
    <p>Start with small steps: create a risk register today, involve your team, and build the muscle of foresight that every great project needs.</p>
  `
},
'high-performance-project-teams': {
  title: 'How to Create a High-Performance Project Team',
  date: 'June 22, 2025',
  author: 'Tushar Kaw',
  readTime: '8 min read',
  tags: ['Team Building', 'Leadership', 'Collaboration'],
  heroImage: blog4,
  content: `
    <h2>What Makes a Project Team “High-Performance”?</h2>
    <p>A high-performance project team is more than just a group of talented individuals. It's a unit that operates with clarity, trust, accountability, and a shared sense of purpose. These teams achieve more, faster, and with fewer conflicts.</p>

    <h3>Key Traits of High-Performance Teams</h3>
    <ul>
      <li><strong>Clear Roles & Responsibilities:</strong> Every member knows their job and owns it fully.</li>
      <li><strong>Shared Vision:</strong> Alignment around common goals drives purpose and focus.</li>
      <li><strong>Open Communication:</strong> Psychological safety allows people to speak up, challenge, and contribute ideas.</li>
      <li><strong>Trust & Accountability:</strong> Members trust each other to deliver and take ownership of outcomes.</li>
      <li><strong>Continuous Improvement:</strong> High performers give and receive feedback regularly.</li>
    </ul>

    <h3>Steps to Build a High-Performance Project Team</h3>
    <ol>
      <li><strong>1. Hire for Culture & Skills</strong><br/>Beyond technical skills, look for collaboration, ownership, and resilience.</li>
      <li><strong>2. Set a Strong Foundation</strong><br/>Create a shared charter with objectives, working agreements, and team norms.</li>
      <li><strong>3. Define Success Clearly</strong><br/>Set KPIs, deadlines, and priorities early. Avoid ambiguity.</li>
      <li><strong>4. Encourage Ownership</strong><br/>Empower team members to make decisions and take initiative.</li>
      <li><strong>5. Provide Feedback & Recognition</strong><br/>Weekly 1:1s and public appreciation can dramatically boost morale.</li>
    </ol>

    <h3>Common Pitfalls to Avoid</h3>
    <ul>
      <li><strong>Micromanagement:</strong> Kills trust and creativity.</li>
      <li><strong>Unclear Expectations:</strong> Leads to duplicated efforts and missed deadlines.</li>
      <li><strong>Ignoring Conflict:</strong> Sweeping issues under the rug poisons team culture.</li>
      <li><strong>Overloading High Performers:</strong> Burnout kills long-term performance.</li>
    </ul>

    <h3>Best Tools to Support High-Performance Teams</h3>
    <ul>
      <li><strong>Collaboration:</strong> Slack, Microsoft Teams</li>
      <li><strong>Documentation:</strong> Notion, Confluence</li>
      <li><strong>Project Tracking:</strong> Jira, Asana, ClickUp</li>
      <li><strong>Feedback & Recognition:</strong> Lattice, 15Five, Kudos</li>
    </ul>

    <h3>Culture-Building Rituals</h3>
    <p>Rituals build team identity and camaraderie:</p>
    <ul>
      <li>Start-of-week standups with a motivational theme</li>
      <li>Monthly “retros” to reflect on wins and misses</li>
      <li>Peer shoutouts at the end of every sprint</li>
      <li>Virtual or in-person team building days</li>
    </ul>

    <h3>Conclusion</h3>
    <p>Great teams don't happen by chance—they're intentionally built and nurtured. As a project leader, your role is to create the environment, clarity, and support your team needs to excel. From hiring to rituals, every touchpoint matters.</p>

    <p>Invest in your team, and they'll invest in your project's success.</p>
  `
},
'agile-vs-waterfall': {
  title: 'Agile vs. Waterfall: Which Project Management Approach is Right for You?',
  date: 'June 25, 2025',
  author: 'Tushar Kaw',
  readTime: '9 min read',
  tags: ['Agile', 'Waterfall', 'Methodologies'],
  heroImage: blog5,
  content: `
    <h2>Introduction</h2>
    <p>Choosing the right project management methodology is critical to your project's success. Two of the most popular frameworks—Agile and Waterfall—offer distinct approaches to planning, execution, and delivery. Understanding the differences can help you pick the right one for your team's needs.</p>

    <h3>What is Waterfall?</h3>
    <p>Waterfall is a traditional, linear project management approach where each phase—Requirements, Design, Implementation, Testing, Deployment—follows the other in sequence. It's often used in construction, manufacturing, and other industries where changes are costly once the project begins.</p>
    
    <h3>What is Agile?</h3>
    <p>Agile is an iterative and flexible methodology that promotes adaptive planning and continuous improvement. Work is broken down into small chunks (sprints), with feedback loops built into each cycle. Agile is popular in software development, startups, and innovation-heavy industries.</p>

    <h3>Key Differences</h3>
    <table>
      <thead>
        <tr><th>Aspect</th><th>Waterfall</th><th>Agile</th></tr>
      </thead>
      <tbody>
        <tr><td>Structure</td><td>Linear & Sequential</td><td>Iterative & Incremental</td></tr>
        <tr><td>Flexibility</td><td>Low (changes are difficult)</td><td>High (adaptable at each sprint)</td></tr>
        <tr><td>Client Involvement</td><td>Minimal after initial planning</td><td>Continuous throughout the process</td></tr>
        <tr><td>Testing</td><td>After development</td><td>Ongoing with each sprint</td></tr>
        <tr><td>Risk Management</td><td>High risk of late discovery</td><td>Issues found early and resolved quickly</td></tr>
      </tbody>
    </table>

    <h3>When to Use Waterfall</h3>
    <ul>
      <li>Requirements are well-defined and unlikely to change</li>
      <li>Strict regulatory or contractual compliance is needed</li>
      <li>Project scope is fixed with a clear timeline and budget</li>
      <li>Client prefers full control over every milestone</li>
    </ul>

    <h3>When to Use Agile</h3>
    <ul>
      <li>Projects with evolving requirements</li>
      <li>Need for rapid delivery and frequent iterations</li>
      <li>Client collaboration and feedback are essential</li>
      <li>Teams need flexibility to experiment and adapt</li>
    </ul>

    <h3>Hybrid Approach: Best of Both Worlds?</h3>
    <p>Some teams use a hybrid model—starting with Waterfall for planning, then transitioning into Agile for execution. This can be helpful in large organizations or complex projects where some elements are fixed but others evolve.</p>

    <h3>Real-Life Examples</h3>
    <ul>
      <li><strong>Waterfall:</strong> Construction of a new office building</li>
      <li><strong>Agile:</strong> Development of a SaaS product</li>
      <li><strong>Hybrid:</strong> Government software project with strict compliance and flexible UX modules</li>
    </ul>

    <h3>Conclusion</h3>
    <p>There's no one-size-fits-all solution. Agile and Waterfall serve different needs, and your choice should depend on your team's workflow, your client's preferences, and your project's complexity. The most successful project managers are the ones who tailor their approach to the unique demands of each project.</p>
    
    <p>Still unsure? Try piloting both methods on small projects and learn what suits your team best.</p>
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