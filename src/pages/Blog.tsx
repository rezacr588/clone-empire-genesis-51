import React, { useEffect, useState } from 'react';
import Layout from "@/components/Layout";
// Removed direct lucide-react icons, will use animated versions
// import { Calendar, User, Tag, ArrowRight, BookOpen, MessageSquare, TrendingUp } from 'lucide-react'; 
import { GoHighLevelCalendar } from '@/components/calendar';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import animation components from their separate files
import {
  AnimatedArrowRight,
  AnimatedTag,
  AnimatedCalendar,
  AnimatedUser,
  AnimatedFallbackIcon
} from '@/components/animations';

// Import reusable components
import { BlogPostCard, FeaturedBlogPost, BlogPostProps } from '@/components/blog';
import { SectionHeader, GradientBackground, CallToAction } from '@/components/ui';

const featuredPost: BlogPostProps = {
  title: "The Future is Agentic: How AI Clones are Revolutionizing Industries",
  date: "October 26, 2023",
  author: "Dr. Eldrin Cortex",
  category: "AI Strategy",
  excerpt: "Explore the paradigm shift towards autonomous AI agents and how The Clone Empire is leading the charge in creating intelligent digital workforces that redefine productivity and innovation across sectors.",
  imageUrl: "/images/blog/featured-post-ai-revolution.jpg",
  href: "/blog/future-is-agentic",
  iconType: "TrendingUp"
};

const recentPosts: BlogPostProps[] = [
  {
    title: "Maximizing ROI with Sales Agent Clones",
    date: "October 20, 2023",
    author: "Seraphina Nova",
    category: "Sales Automation",
    excerpt: "Learn how businesses are achieving unprecedented sales growth by deploying AI clones for lead generation, personalized outreach, and 24/7 engagement.",
    imageUrl: "/images/blog/sales-clones-roi.jpg",
    href: "/blog/sales-clones-roi",
    iconType: "TrendingUp"
  },
  {
    title: "The Ethics of AI Clones: Navigating a New Frontier",
    date: "October 15, 2023",
    author: "Professor Armitage",
    category: "AI Ethics",
    excerpt: "A deep dive into the ethical considerations surrounding advanced AI agents, and how The Clone Empire is committed to responsible development.",
    imageUrl: "/images/blog/ai-ethics-frontier.jpg",
    href: "/blog/ai-ethics",
    iconType: "BookOpen"
  },
  {
    title: "Building Your First AI Support Agent: A Step-by-Step Guide",
    date: "October 10, 2023",
    author: "Construct AI Team",
    category: "Tutorials",
    excerpt: "A practical guide for businesses to integrate their first AI support clone, enhancing customer satisfaction and operational efficiency.",
    imageUrl: "/images/blog/support-agent-tutorial.jpg",
    href: "/blog/support-agent-tutorial",
    iconType: "MessageSquare"
  }
];

const Blog = () => {
  const [featuredImageError, setFeaturedImageError] = useState(false);
  const [postImageErrors, setPostImageErrors] = useState<{[key: string]: boolean}>({});

  useEffect(() => {
    document.title = "Insights & News | The Clone Empire Blog";
    
    // Preload important images to prevent flash of missing content
    const preloadImages = () => {
      const imagesToPreload = [
        featuredPost.imageUrl,
        ...recentPosts.map(post => post.imageUrl)
      ];
      
      imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };
    
    preloadImages();
  }, []);

  const handleFeaturedImageError = () => {
    console.log("Featured image failed to load:", featuredPost.imageUrl);
    setFeaturedImageError(true);
  };

  const handlePostImageError = (index: number) => {
    console.log("Post image failed to load:", recentPosts[index].imageUrl);
    setPostImageErrors(prev => ({...prev, [index]: true}));
  };

  // Alternative image paths if SVG fails
  const tryAlternativeImage = (path: string): string => {
    if (path.includes('.svg')) {
      return path.replace('.svg', '.jpg');
    }
    if (path.includes('.jpg')) {
      // If JPG fails too, use a placeholder
      return '/placeholder.svg';
    }
    return path;
  };

  return (
    <Layout>
      <GradientBackground variant="default" className="py-14 md:py-20 bg-empire-darkest">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <SectionHeader 
            badge="Insights & Perspectives"
            badgeVariant="primary"
            badgeClassName="bg-empire-cyan/10 border-empire-cyan text-empire-cyan hover:bg-empire-cyan/20"
            title="The Clone Empire Chronicle"
            titleHighlight="Chronicle"
            subtitle="Explore the latest in AI, agentic technology, and the future of digital work."
            center={true}
            className="mb-10 md:mb-14"
          />

          {/* Featured Post */}
          <FeaturedBlogPost 
            post={featuredImageError ? 
              {...featuredPost, imageUrl: tryAlternativeImage(featuredPost.imageUrl)} : 
              featuredPost
            }
            onImageError={handleFeaturedImageError}
            imageError={featuredImageError}
          />

          {/* Recent Posts Grid */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-empire-light mb-8 text-center md:text-left">Recent Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
              {recentPosts.map((post, index) => (
                <BlogPostCard 
                  key={index}
                  post={postImageErrors[index] ? 
                    {...post, imageUrl: tryAlternativeImage(post.imageUrl)} : 
                    post
                  }
                  onImageError={() => handlePostImageError(index)}
                  imageError={!!postImageErrors[index]}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <CallToAction
            title="Want to Learn More About AI Agents?"
            description="Book a personalized demo to see how The Clone Empire's AI agents can transform your business operations and drive growth."
            calendarId="blog-demo"
            buttonText="Schedule a Demo"
          />

          <motion.div 
            className="text-center mt-12 md:mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/blog/archive"
                className="inline-block bg-gradient-to-r from-empire-canyon-deep to-empire-cyan text-empire-darkest font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity duration-300 shadow-lg hover:shadow-xl"
              >
                View All Posts
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </GradientBackground>
    </Layout>
  );
};

export default Blog; 