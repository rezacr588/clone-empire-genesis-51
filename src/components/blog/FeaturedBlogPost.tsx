import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatedTag, AnimatedCalendar, AnimatedUser, AnimatedArrowRight, AnimatedFallbackIcon } from '@/components/animations';
import MotionCard from '@/components/animations/MotionCard';
import { BlogPostProps } from './BlogPostCard';

interface FeaturedBlogPostProps {
  post: BlogPostProps;
  onImageError: () => void;
  imageError: boolean;
}

const FeaturedBlogPost: React.FC<FeaturedBlogPostProps> = ({ 
  post, 
  onImageError, 
  imageError 
}) => {
  return (
    <MotionCard
      delay={0.3}
      hoverEffect="lift"
      className="featured-post-card bg-empire-dark/30 dark:bg-empire-dark/50 backdrop-blur-md md:flex md:items-center mb-12 shadow-xl shadow-empire-cyan/10 hover:shadow-empire-cyan/20 transition-shadow duration-300 rounded-xl border border-empire-medium/10"
    >
      <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
        {imageError ? (
          <div className="h-full w-full flex items-center justify-center bg-empire-darker">
            <AnimatedFallbackIcon type={post.iconType} className="h-14 w-14 text-empire-cyan" />
          </div>
        ) : (
          <motion.img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover"
            onError={onImageError}
            loading="lazy"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          /> 
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-empire-darkest/70 to-transparent"></div>
      </div>
      <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
        <div className="flex items-center text-xs text-empire-silver mb-3">
          <AnimatedTag className="h-4 w-4 mr-1.5 text-empire-cyan/80" /> {post.category}
        </div>
        <div className="flex items-center text-xs text-empire-silver mb-3">
          <AnimatedCalendar className="h-4 w-4 mr-1.5 text-empire-cyan/80" />
          {post.date}
          <span className="mx-2">|</span>
          <AnimatedUser className="h-4 w-4 mr-1.5 text-empire-cyan/80" />
          {post.author}
        </div>
        <motion.h2 
          className="text-2xl md:text-3xl font-heading mb-3 text-empire-light hover:text-empire-cyan transition-colors"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link to={post.href}>{post.title}</Link>
        </motion.h2>
        <p className="text-empire-silver/80 mb-4 text-md leading-relaxed">
          {post.excerpt}
        </p>
        <Link to={post.href} className="inline-flex items-center text-empire-cyan font-semibold hover:text-empire-purple transition-colors duration-300 group">
          Read Full Article <AnimatedArrowRight className="h-5 w-5 ml-1.5" />
        </Link>
      </div>
    </MotionCard>
  );
};

export default FeaturedBlogPost; 