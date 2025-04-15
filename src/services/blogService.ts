import { BlogPost } from "@/types/blog";
import { v4 as uuidv4 } from 'uuid';

// This could be replaced with an API call in the future
export const getAllPosts = (): BlogPost[] => {
  return blogPosts;
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getRecentPosts = (count: number = 3): BlogPost[] => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};

export const getRelatedPosts = (currentPostId: string, count: number = 2): BlogPost[] => {
  return blogPosts
    .filter(post => post.id !== currentPostId)
    .slice(0, count);
};

// Admin operations
export const createPost = (post: Omit<BlogPost, 'id'>): BlogPost => {
  const newPost: BlogPost = {
    ...post,
    id: uuidv4()
  };
  
  blogPosts.unshift(newPost);
  return newPost;
};

export const updatePost = (id: string, updatedPost: Partial<BlogPost>): BlogPost | null => {
  const index = blogPosts.findIndex(post => post.id === id);
  if (index === -1) return null;
  
  blogPosts[index] = { ...blogPosts[index], ...updatedPost };
  return blogPosts[index];
};

export const deletePost = (id: string): boolean => {
  const initialLength = blogPosts.length;
  blogPosts = blogPosts.filter(post => post.id !== id);
  return blogPosts.length < initialLength;
};

// Sample blog posts data
let blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Web Development: Trends to Watch in 2025",
    slug: "future-web-development-trends-2025",
    excerpt: "Explore emerging technologies and methodologies that are shaping the future of web development.",
    content: `
      <p>Web development is constantly evolving, with new technologies and methodologies emerging at a rapid pace. As we look ahead to 2025, several trends are poised to shape the future of the field.</p>
      
      <h2>AI-Driven Development</h2>
      <p>Artificial intelligence is already making waves in web development, with tools that can generate code, optimize performance, and even design interfaces. In the coming years, we'll see AI take on an even more significant role in the development process.</p>
      <p>AI-powered development assistants will become more sophisticated, enabling developers to focus on creative aspects while automating repetitive tasks. We'll also see AI-driven testing and debugging tools that can identify and fix issues more quickly than human developers.</p>
      
      <h2>WebAssembly Goes Mainstream</h2>
      <p>WebAssembly (Wasm) has been gaining traction as a way to run high-performance code in the browser. By 2025, we expect Wasm to become a standard part of web development, enabling complex applications that once required native code to run smoothly in the browser.</p>
      <p>This shift will blur the line between web and desktop applications, as developers can leverage languages like Rust, C++, and Go to build web experiences with near-native performance.</p>
      
      <h2>No-Code and Low-Code Development</h2>
      <p>No-code and low-code platforms will continue to democratize web development, allowing non-technical users to build and deploy web applications without extensive programming knowledge.</p>
      <p>However, rather than replacing traditional developers, these tools will enhance their productivity by handling routine aspects of development, freeing professionals to focus on more complex problems and innovations.</p>
      
      <h2>Conclusion</h2>
      <p>The future of web development is bright, with emerging technologies set to make the field more accessible, efficient, and powerful. Developers who stay ahead of these trends will be well-positioned to create the next generation of web experiences.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    date: "April 10, 2025",
    author: {
      name: "Crisantos",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80"
    },
    tags: ["Web Development", "Trends", "Technology"],
    readTime: "5 min read"
  },
  {
    id: "2",
    title: "Building Accessible Web Applications: A Comprehensive Guide",
    slug: "building-accessible-web-applications",
    excerpt: "Learn how to create inclusive web experiences that work for everyone, regardless of abilities.",
    content: `
      <p>Web accessibility is not just a legal requirement in many jurisdictions—it's a fundamental aspect of good web design. Creating accessible applications ensures that people with disabilities can use your website effectively.</p>
      
      <h2>Understanding Web Accessibility</h2>
      <p>Accessibility is about making your web content usable for everyone, including people with visual, auditory, motor, or cognitive disabilities. This includes individuals who use assistive technologies like screen readers, voice recognition software, or alternative input devices.</p>
      
      <h2>Key Principles of Accessible Design</h2>
      
      <h3>1. Perceivable Information</h3>
      <p>Information must be presentable to users in ways they can perceive. This means providing text alternatives for non-text content, creating content that can be presented in different ways, and making it easier for users to see and hear content.</p>
      <ul>
        <li>Use proper alt text for images</li>
        <li>Provide captions and transcripts for audio and video</li>
        <li>Ensure sufficient color contrast</li>
      </ul>
      
      <h3>2. Operable User Interface</h3>
      <p>User interface components must be operable by all users. This means making all functionality available from a keyboard, giving users enough time to read and use content, and avoiding content that could cause seizures.</p>
      <ul>
        <li>Ensure keyboard navigability</li>
        <li>Avoid time constraints when possible</li>
        <li>Provide clear navigation mechanisms</li>
      </ul>
      
      <h3>3. Understandable Information and Interface</h3>
      <p>Information and the operation of the user interface must be understandable. This means making text readable and understandable, making content appear and operate in predictable ways, and helping users avoid and correct mistakes.</p>
      
      <h3>4. Robust Content</h3>
      <p>Content must be robust enough to be interpreted reliably by a wide variety of user agents, including assistive technologies. This means maximizing compatibility with current and future tools.</p>
      
      <h2>Testing for Accessibility</h2>
      <p>Regular testing is crucial for ensuring accessibility. Use a combination of automated tools (like Lighthouse or axe) and manual testing with assistive technologies. Consider involving individuals with disabilities in your testing process to get real-world feedback.</p>
      
      <h2>Conclusion</h2>
      <p>Building accessible applications is not just the right thing to do—it's also good for business. Accessible websites reach more users, improve SEO, and often provide a better experience for all users, not just those with disabilities.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80",
    date: "March 22, 2025",
    author: {
      name: "Crisantos",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80"
    },
    tags: ["Accessibility", "UX Design", "HTML"],
    readTime: "8 min read"
  },
  {
    id: "3",
    title: "Performance Optimization Techniques for Modern Web Apps",
    slug: "performance-optimization-techniques",
    excerpt: "Discover practical strategies to improve loading speeds and overall performance of your web applications.",
    content: `
      <p>In today's competitive digital landscape, web performance is more important than ever. Users expect fast, responsive experiences, and search engines like Google factor page speed into their rankings.</p>
      
      <h2>Why Performance Matters</h2>
      <p>Studies consistently show that users abandon slow websites. For every second of delay in page load time, conversion rates drop significantly. Performance isn't just a technical concern—it's a business imperative.</p>
      
      <h2>Key Performance Metrics</h2>
      <p>Before optimizing, it's important to understand what we're measuring:</p>
      <ul>
        <li><strong>First Contentful Paint (FCP):</strong> When the first content appears on the screen</li>
        <li><strong>Largest Contentful Paint (LCP):</strong> When the largest content element is visible</li>
        <li><strong>First Input Delay (FID):</strong> How responsive the page is when users try to interact</li>
        <li><strong>Cumulative Layout Shift (CLS):</strong> How stable the page layout is during loading</li>
      </ul>
      
      <h2>Optimization Strategies</h2>
      
      <h3>1. Minimize and Optimize Resource Loading</h3>
      <p>The fewer resources your app needs to load, the faster it will be:</p>
      <ul>
        <li>Minify JavaScript, CSS, and HTML</li>
        <li>Compress images and use modern formats like WebP</li>
        <li>Implement code splitting to load only what's needed</li>
        <li>Use tree shaking to eliminate unused code</li>
      </ul>
      
      <h3>2. Optimize Rendering Performance</h3>
      <p>How your page renders can significantly impact perceived performance:</p>
      <ul>
        <li>Minimize DOM size and depth</li>
        <li>Avoid layout thrashing by batching DOM reads and writes</li>
        <li>Use CSS containment to isolate parts of the page</li>
        <li>Implement virtualization for long lists</li>
      </ul>
      
      <h3>3. Caching Strategies</h3>
      <p>Effective caching can dramatically improve repeat visits:</p>
      <ul>
        <li>Set appropriate cache headers</li>
        <li>Implement service workers for offline support</li>
        <li>Use localStorage or IndexedDB for application state</li>
        <li>Consider using a CDN for static assets</li>
      </ul>
      
      <h2>Measuring Impact</h2>
      <p>Always measure before and after optimization to ensure your changes have the desired effect. Tools like Lighthouse, WebPageTest, and Chrome DevTools can provide valuable insights into your application's performance.</p>
      
      <h2>Conclusion</h2>
      <p>Performance optimization is an ongoing process, not a one-time task. By regularly monitoring and improving your web application's performance, you can provide a better user experience, improve conversions, and stay competitive in the digital marketplace.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&q=80",
    date: "February 15, 2025",
    author: {
      name: "Crisantos",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80"
    },
    tags: ["Performance", "Optimization", "JavaScript"],
    readTime: "6 min read"
  },
  {
    id: "4",
    title: "Designing Effective Microservices Architectures",
    slug: "designing-effective-microservices",
    excerpt: "Learn strategies for breaking down monolithic applications into scalable, maintainable microservices.",
    content: `
      <p>Microservices architecture has become increasingly popular as organizations look to build more scalable and maintainable systems. However, designing effective microservices requires careful planning and consideration of various factors.</p>
      
      <h2>Understanding Microservices</h2>
      <p>Microservices architecture breaks applications down into small, specialized services that communicate through well-defined APIs. Each service is responsible for a specific business capability and can be developed, deployed, and scaled independently.</p>
      
      <h2>Key Design Principles</h2>
      
      <h3>1. Single Responsibility</h3>
      <p>Each microservice should have a clear and focused purpose. When defining service boundaries, ask yourself: "What is this service responsible for?" The answer should be concise and specific.</p>
      
      <h3>2. Domain-Driven Design</h3>
      <p>Using domain-driven design (DDD) principles can help identify appropriate service boundaries. Organize services around business capabilities rather than technical functions.</p>
      
      <h3>3. Data Autonomy</h3>
      <p>Each microservice should own and control its data. Shared databases often lead to tight coupling between services, which undermines the benefits of a microservices architecture.</p>
      
      <h2>Common Challenges</h2>
      
      <h3>1. Service Communication</h3>
      <p>As your system grows, managing communication between services becomes more complex. Consider using:</p>
      <ul>
        <li>Synchronous communication (REST, gRPC) for simple queries and commands</li>
        <li>Asynchronous communication (message queues, event streams) for complex workflows and better resilience</li>
        <li>API gateways to simplify client interactions with multiple services</li>
      </ul>
      
      <h3>2. Distributed Transactions</h3>
      <p>Without a shared database, implementing transactions that span multiple services becomes challenging. Patterns like Saga can help manage distributed transactions while maintaining service autonomy.</p>
      
      <h3>3. Monitoring and Observability</h3>
      <p>With dozens or hundreds of services, understanding system behavior becomes difficult. Invest in comprehensive monitoring, distributed tracing, and centralized logging to maintain observability.</p>
      
      <h2>Evolution Strategies</h2>
      <p>Most organizations don't build microservices from scratch—they evolve from monolithic applications. Strategies for this evolution include:</p>
      <ul>
        <li>Strangler pattern: Gradually replace functionality in the monolith with microservices</li>
        <li>Domain-first approach: Identify bounded contexts before extracting services</li>
        <li>Incremental migration: Move one capability at a time, starting with the least risky</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Effective microservices architecture balances the benefits of service independence with the costs of distributed systems. By focusing on clear service boundaries, appropriate communication patterns, and evolutionary design, you can build a microservices system that truly delivers on its promises of scalability, resilience, and maintainability.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    date: "January 25, 2025",
    author: {
      name: "Crisantos",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80"
    },
    tags: ["Microservices", "Architecture", "Backend"],
    readTime: "7 min read"
  }
];
