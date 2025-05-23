import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatedTag, AnimatedCalendar, AnimatedUser, AnimatedArrowRight, AnimatedFallbackIcon } from '@/components/animations';
import MotionCard from '@/components/animations/MotionCard';

export interface BlogPostProps {
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  imageUrl: string;
  href: string;
  iconType: string;
  index?: number;
  isFeatured?: boolean;
}

interface BlogPostCardProps {
  post: BlogPostProps;
  onImageError: (index?: number) => void;
  imageError?: boolean;
  index?: number;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ 
  post, 
  onImageError, 
  imageError = false,
  index = 0
}) => {
  return (
    <MotionCard
      delay={0.4 + index * 0.1}
      appearAnimation="slide"
      hoverEffect="none"
      className="h-full"
    >
      <Link 
        to={post.href} 
        className="group block bg-empire-dark/30 dark:bg-empire-dark/50 backdrop-blur-sm p-5 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-empire-medium/10 hover:border-empire-cyan/50 flex flex-col h-full"
      >
        <div className="relative h-44 w-full overflow-hidden rounded-md mb-4">
          {imageError ? (
            <div className="h-full w-full flex items-center justify-center bg-empire-darker">
              <AnimatedFallbackIcon type={post.iconType} className="h-10 w-10 text-empire-cyan" />
            </div>
          ) : (
            <motion.img 
              src={post.imageUrl} 
              alt={post.title} 
              className="h-full w-full object-cover" 
              onError={() => onImageError(index)}
              loading="lazy"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </div>
        <div className="flex items-center text-xs text-empire-silver/90 mb-2">
          <AnimatedTag className="h-4 w-4 mr-1.5 text-empire-cyan/70" /> {post.category}
          <span className="mx-2">|</span>
          <AnimatedCalendar className="h-4 w-4 mr-1.5 text-empire-cyan/70" /> {post.date}
        </div>
        <h3 className="text-lg md:text-xl font-semibold text-empire-light mb-2 group-hover:text-empire-cyan transition-colors duration-300">
          {post.title}
        </h3>
        <p className="text-empire-silver/80 text-sm mb-4 leading-relaxed flex-grow">
          {post.excerpt}
        </p>
        <div className="mt-auto">
          <div className="flex items-center text-xs text-empire-silver/90 mb-2">
            <AnimatedUser className="h-3 w-3 mr-1.5 text-empire-cyan/70" /> By {post.author}
          </div>
          <span className="inline-flex items-center text-sm text-empire-cyan font-semibold group-hover:text-empire-canyon-deep transition-colors duration-300">
            Read More <AnimatedArrowRight className="h-4 w-4 ml-1" />
          </span>
        </div>
      </Link>
    </MotionCard>
  );
};

export default BlogPostCard; 