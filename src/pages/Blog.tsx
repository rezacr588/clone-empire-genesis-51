import React, { useEffect } from 'react';
import Layout from "@/components/Layout";
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';

const featuredPost = {
  title: "The Future is Agentic: How AI Clones are Revolutionizing Industries",
  date: "October 26, 2023",
  author: "Dr. Eldrin Cortex",
  category: "AI Strategy",
  excerpt: "Explore the paradigm shift towards autonomous AI agents and how The Clone Empire is leading the charge in creating intelligent digital workforces that redefine productivity and innovation across sectors.",
  imageUrl: "/images/blog/featured-post-ai-revolution.jpg",
  href: "/blog/future-is-agentic"
};

const recentPosts = [
  {
    title: "Maximizing ROI with Sales Agent Clones",
    date: "October 20, 2023",
    author: "Seraphina Nova",
    category: "Sales Automation",
    excerpt: "Learn how businesses are achieving unprecedented sales growth by deploying AI clones for lead generation, personalized outreach, and 24/7 engagement.",
    imageUrl: "/images/blog/sales-clones-roi.jpg",
    href: "/blog/sales-clones-roi"
  },
  {
    title: "The Ethics of AI Clones: Navigating a New Frontier",
    date: "October 15, 2023",
    author: "Professor Armitage",
    category: "AI Ethics",
    excerpt: "A deep dive into the ethical considerations surrounding advanced AI agents, and how The Clone Empire is committed to responsible development.",
    imageUrl: "/images/blog/ai-ethics-frontier.jpg",
    href: "/blog/ai-ethics"
  },
  {
    title: "Building Your First AI Support Agent: A Step-by-Step Guide",
    date: "October 10, 2023",
    author: "Construct AI Team",
    category: "Tutorials",
    excerpt: "A practical guide for businesses to integrate their first AI support clone, enhancing customer satisfaction and operational efficiency.",
    imageUrl: "/images/blog/support-agent-tutorial.jpg",
    href: "/blog/support-agent-tutorial"
  }
];

const Blog = () => {
  useEffect(() => {
    document.title = "Insights & News | The Clone Empire Blog";
  }, []);

  return (
    <Layout>
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-empire-red mb-4">
          The Clone Empire Chronicle
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-empire-dark dark:text-empire-light max-w-3xl mx-auto">
          Stay updated with the latest advancements in AI agent technology, industry insights, and news from The Clone Empire.
        </p>
      </div>

      {/* Featured Post */}
      <div className="mb-12 md:mb-16 group">
        <a href={featuredPost.href} className="block rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white dark:bg-empire-dark border border-empire-medium/20 dark:border-empire-light/10">
          <div className="md:flex">
            <div className="md:w-1/2">
              {/* Replace with actual image component if you have one that handles responsive images and placeholders */}
              <img src={featuredPost.imageUrl} alt={featuredPost.title} className="h-64 w-full object-cover md:h-full" /> 
            </div>
            <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
              <div className="flex items-center text-xs text-empire-dark/70 dark:text-empire-light/70 mb-2">
                <Tag className="h-4 w-4 mr-1.5" /> {featuredPost.category}
                <span className="mx-2">|</span>
                <Calendar className="h-4 w-4 mr-1.5" /> {featuredPost.date}
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-empire-red mb-3 group-hover:text-empire-red-dark transition-colors duration-300">{featuredPost.title}</h2>
              <p className="text-empire-dark dark:text-empire-light/90 mb-4 text-md leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center text-sm text-empire-dark/80 dark:text-empire-light/80 mb-4">
                <User className="h-4 w-4 mr-1.5" /> By {featuredPost.author}
              </div>
              <span className="inline-flex items-center text-empire-red group-hover:text-empire-red-dark font-semibold transition-colors duration-300">
                Read Full Article <ArrowRight className="h-5 w-5 ml-1.5" />
              </span>
            </div>
          </div>
        </a>
      </div>

      {/* Recent Posts Grid */}
      <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-empire-dark dark:text-white mb-8 text-center md:text-left">Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {recentPosts.map((post, index) => (
              <a key={index} href={post.href} className="group block bg-white dark:bg-empire-dark p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-empire-medium/20 dark:border-empire-light/10 flex flex-col">
              {/* Replace with actual image component for consistency */}
              <img src={post.imageUrl} alt={post.title} className="h-48 w-full object-cover rounded-md mb-4" />
              <div className="flex items-center text-xs text-empire-dark/70 dark:text-empire-light/70 mb-2">
                  <Tag className="h-4 w-4 mr-1.5" /> {post.category}
                  <span className="mx-2">|</span>
                  <Calendar className="h-4 w-4 mr-1.5" /> {post.date}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-empire-red mb-2 group-hover:text-empire-red-dark transition-colors duration-300 flex-grow">{post.title}</h3>
              <p className="text-empire-dark/90 dark:text-empire-light/80 text-sm mb-3 leading-relaxed min-h-[60px]">
                  {post.excerpt}
              </p>
              <div className="flex items-center text-xs text-empire-dark/80 dark:text-empire-light/80 mb-3">
                  <User className="h-3 w-3 mr-1.5" /> By {post.author}
              </div>
              <span className="inline-flex items-center text-sm text-empire-red group-hover:text-empire-red-dark font-semibold transition-colors duration-300">
                  Read More <ArrowRight className="h-4 w-4 ml-1" />
              </span>
              </a>
          ))}
          </div>
      </div>

       <div className="text-center mt-12">
          <a
              href="#" // Link to an archive page if you plan to have one
              className="inline-block bg-empire-red hover:bg-empire-red-dark text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300"
          >
              View All Posts
          </a>
      </div>
    </Layout>
  );
};

export default Blog; 