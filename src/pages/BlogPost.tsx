import React, { useEffect, useState } from 'react';
import Layout from "@/components/Layout";
import { Calendar, User, Tag, ArrowRight, Share2, BookmarkPlus, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { GoHighLevelCalendar } from '@/components/calendar';

const BlogPost = () => {
  useEffect(() => {
    document.title = "The Future is Agentic | The Clone Empire Blog";
  }, []);

  const [imageError, setImageError] = useState(false);
  const [contentImageErrors, setContentImageErrors] = useState<{[key: number]: boolean}>({});

  const handleImageError = () => {
    setImageError(true);
  };

  const handleContentImageError = (index: number) => {
    setContentImageErrors(prev => ({...prev, [index]: true}));
  };

  // Sample blog post data
  const post = {
    title: "The Future is Agentic: How AI Clones are Revolutionizing Industries",
    date: "October 26, 2023",
    author: {
      name: "Dr. Eldrin Cortex",
      role: "Chief AI Strategist",
      avatar: "/images/team/dr-eldrin-cortex.jpg",
    },
    category: "AI Strategy",
    imageUrl: "/images/blog/featured-post-ai-revolution.jpg",
    content: [
      {
        type: "paragraph",
        text: "The business landscape is undergoing a profound transformation as agentic AI systems move from science fiction to practical reality. Unlike traditional automation tools that follow rigid instructions, AI agents—or clones as we call them at The Clone Empire—can operate with a degree of autonomy previously unimaginable, making decisions and taking actions on behalf of their human operators."
      },
      {
        type: "paragraph",
        text: "This paradigm shift presents extraordinary opportunities for businesses to redefine productivity, customer engagement, and innovation. Let's explore how these intelligent agents are revolutionizing industries across the board."
      },
      {
        type: "heading",
        text: "The Rise of Autonomous AI Agents"
      },
      {
        type: "paragraph",
        text: "The concept of software agents has existed for decades, but recent breakthroughs in artificial intelligence, particularly large language models (LLMs) and reinforcement learning, have catapulted these systems to new heights of capability. Today's AI agents can understand natural language, learn from interactions, make informed decisions, and execute complex workflows with minimal human supervision."
      },
      {
        type: "paragraph",
        text: "What separates modern AI agents from previous generations of automation tools is their ability to adapt to changing circumstances. Rather than simply following a predetermined script, they can assess situations, weigh options, and choose appropriate courses of action based on their training and objectives."
      },
      {
        type: "image",
        url: "/images/blog/ai-decision-making.jpg",
        alt: "AI agent making autonomous decisions",
        caption: "Modern AI agents can evaluate options and make decisions based on complex criteria"
      },
      {
        type: "heading",
        text: "Transformative Applications Across Industries"
      },
      {
        type: "paragraph",
        text: "The impact of agentic AI is being felt across virtually every sector, with innovative applications emerging daily:"
      },
      {
        type: "list",
        items: [
          "<strong>Customer Service</strong>: AI agents now handle complex customer inquiries across multiple channels, maintaining context and providing personalized support 24/7.",
          "<strong>Sales & Marketing</strong>: Autonomous agents identify prospects, personalize outreach, follow up consistently, and nurture leads through the entire sales funnel.",
          "<strong>Healthcare</strong>: AI assistants help medical professionals by summarizing patient histories, suggesting diagnoses, and managing administrative tasks.",
          "<strong>Finance</strong>: Agents monitor transactions, detect anomalies, provide investment insights, and automate complex compliance workflows."
        ]
      },
      {
        type: "paragraph",
        text: "What makes these applications truly revolutionary is their ability to operate continuously, learn from each interaction, and improve over time without constant human intervention."
      },
      {
        type: "heading",
        text: "The Clone Empire Approach: Specialized AI Workforces"
      },
      {
        type: "paragraph",
        text: "At The Clone Empire, we've pioneered the development of specialized AI agents designed for specific business functions. Our approach focuses on creating purpose-built clones that excel at particular tasks rather than general-purpose assistants that do many things adequately but none exceptionally well."
      },
      {
        type: "paragraph",
        text: "This specialization allows our clients to deploy teams of AI agents that work together seamlessly, much like a human workforce with different roles and responsibilities. For example, a customer service team might include frontline support agents, technical specialists, and satisfaction follow-up agents, all working in concert to deliver an exceptional customer experience."
      },
      {
        type: "quote",
        text: "The future of business isn't just about automating tasks—it's about creating intelligent digital workforces that augment human capabilities and transform how organizations operate.",
        author: "Seraphina Nova, CEO of The Clone Empire"
      },
      {
        type: "heading",
        text: "Preparing for an Agentic Future"
      },
      {
        type: "paragraph",
        text: "As AI agents become increasingly capable, organizations must prepare for this new reality by:"
      },
      {
        type: "list",
        items: [
          "Identifying high-impact applications where AI agents can deliver significant value",
          "Developing governance frameworks for overseeing autonomous systems",
          "Training employees to work effectively alongside AI teammates",
          "Establishing clear metrics for measuring agent performance and ROI"
        ]
      },
      {
        type: "paragraph",
        text: "The organizations that adapt most effectively to this new paradigm will gain substantial competitive advantages in efficiency, scalability, and innovation capacity."
      },
      {
        type: "heading",
        text: "Conclusion: The Agentic Revolution Has Begun"
      },
      {
        type: "paragraph",
        text: "The transition to agentic AI represents one of the most significant technological shifts in business history. As these systems continue to evolve, they will reshape organizational structures, business models, and the very nature of work itself."
      },
      {
        type: "paragraph",
        text: "At The Clone Empire, we're committed to helping businesses navigate this transformation by providing cutting-edge AI agents that deliver measurable results while maintaining the highest standards of reliability, security, and ethical operation."
      },
      {
        type: "paragraph",
        text: "The future is agentic—and it's arriving faster than many realize. Is your organization ready?"
      }
    ]
  };

  return (
    <Layout>
      <article className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -top-[30%] -left-[10%] w-[80%] h-[70%] bg-empire-canyon/5 rounded-full blur-[120px]"></div>
          <div className="absolute top-[30%] -right-[10%] w-[70%] h-[50%] bg-empire-cyan/10 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumbs */}
          <div className="mb-10 text-sm">
            <a href="/" className="text-empire-medium hover:text-empire-cyan">Home</a>
            <span className="mx-2 text-empire-medium">/</span>
            <a href="/blog" className="text-empire-medium hover:text-empire-cyan">Blog</a>
            <span className="mx-2 text-empire-medium">/</span>
            <span className="text-empire-canyon">Article</span>
          </div>
          
          {/* Header */}
          <header className="mb-16">
            <div className="flex items-center space-x-3 mb-5">
              <div className="bg-empire-canyon/10 text-empire-canyon px-4 py-1.5 rounded-full text-sm font-medium">
                {post.category}
              </div>
              <div className="text-empire-medium text-sm flex items-center">
                <Calendar className="h-4 w-4 mr-1.5" />
                {post.date}
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              {post.title}
            </h1>
            
            {/* Author info */}
            <div className="flex items-center mb-10">
              <Avatar className="h-14 w-14 mr-4">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback className="bg-empire-cyan text-white">
                  {post.author.name.split(' ').map(name => name[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium text-lg">{post.author.name}</div>
                <div className="text-sm text-empire-medium">{post.author.role}</div>
              </div>
            </div>
            
            {/* Featured image */}
            <div className="rounded-xl overflow-hidden mb-12">
              {imageError ? (
                <div className="w-full h-[500px] flex items-center justify-center bg-empire-darker">
                  <MessageSquare className="h-20 w-20 text-empire-cyan" />
                </div>
              ) : (
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full object-cover max-h-[500px]"
                  onError={handleImageError}
                  loading="lazy"
                />
              )}
            </div>
            
            {/* Social sharing */}
            <div className="flex justify-between items-center mb-12 py-4 border-y border-empire-medium/20">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="text-empire-medium hover:text-empire-cyan">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button variant="ghost" size="sm" className="text-empire-medium hover:text-empire-cyan">
                  <BookmarkPlus className="h-4 w-4 mr-2" />
                  Save
                </Button>
              </div>
              <div className="flex items-center text-empire-medium">
                <MessageSquare className="h-4 w-4 mr-2" />
                6 comments
              </div>
            </div>
          </header>
          
          {/* Content */}
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg dark:prose-invert prose-headings:text-empire-darker dark:prose-headings:text-white prose-headings:font-bold prose-headings:mt-12 prose-headings:mb-6 prose-p:mb-6 prose-a:text-empire-cyan hover:prose-a:text-empire-darkCyan prose-blockquote:border-empire-canyon prose-blockquote:bg-empire-canyon/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-md prose-strong:text-empire-cyan">
              {post.content.map((block, index) => {
                if (block.type === 'paragraph') {
                  return <p key={index} className="text-lg leading-relaxed">{block.text}</p>;
                } else if (block.type === 'heading') {
                  return <h2 key={index} className="text-2xl md:text-3xl">{block.text}</h2>;
                } else if (block.type === 'image') {
                  return (
                    <figure key={index} className="my-10">
                      {contentImageErrors[index] ? (
                        <div className="w-full h-[300px] flex items-center justify-center bg-empire-darker rounded-lg">
                          <MessageSquare className="h-16 w-16 text-empire-cyan" />
                        </div>
                      ) : (
                        <img 
                          src={block.url} 
                          alt={block.alt} 
                          className="rounded-lg w-full object-cover"
                          onError={() => handleContentImageError(index)}
                          loading="lazy"
                        />
                      )}
                      {block.caption && (
                        <figcaption className="text-center text-sm text-empire-medium mt-3">
                          {block.caption}
                        </figcaption>
                      )}
                    </figure>
                  );
                } else if (block.type === 'list') {
                  return (
                    <ul key={index} className="list-disc pl-6 space-y-3 my-6">
                      {block.items.map((item, i) => (
                        <li key={i} dangerouslySetInnerHTML={{ __html: item }} className="text-lg" />
                      ))}
                    </ul>
                  );
                } else if (block.type === 'quote') {
                  return (
                    <blockquote key={index} className="not-italic my-10">
                      <p className="text-xl font-medium leading-relaxed">{block.text}</p>
                      {block.author && <footer className="text-sm mt-2">— {block.author}</footer>}
                    </blockquote>
                  );
                }
                return null;
              })}
            </div>
            
            {/* Tags */}
            <div className="mt-16 mb-20">
              <div className="text-sm font-medium mb-4">Related topics:</div>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="bg-empire-darker border border-empire-charcoal/50 px-4 py-2 rounded-full text-sm text-empire-light hover:bg-empire-charcoal transition-colors">
                  Artificial Intelligence
                </a>
                <a href="#" className="bg-empire-darker border border-empire-charcoal/50 px-4 py-2 rounded-full text-sm text-empire-light hover:bg-empire-charcoal transition-colors">
                  Business Automation
                </a>
                <a href="#" className="bg-empire-darker border border-empire-charcoal/50 px-4 py-2 rounded-full text-sm text-empire-light hover:bg-empire-charcoal transition-colors">
                  AI Agents
                </a>
                <a href="#" className="bg-empire-darker border border-empire-charcoal/50 px-4 py-2 rounded-full text-sm text-empire-light hover:bg-empire-charcoal transition-colors">
                  Future of Work
                </a>
              </div>
            </div>
            
            {/* CTA */}
            <div className="rounded-xl p-8 md:p-10 bg-empire-darker border border-empire-cyan/20 shadow-xl">
              <div className="md:flex items-center">
                <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Experience AI Agents in Action</h3>
                  <p className="text-empire-light text-lg mb-0">
                    See how our AI clones can transform your business operations. Book a personalized demo today.
                  </p>
                </div>
                <div className="md:w-1/3">
                  <GoHighLevelCalendar 
                    calendarId="blog-post-demo"
                    text="Schedule a Demo"
                    className="w-full bg-empire-cyan hover:bg-empire-darkCyan text-white rounded-lg flex items-center gap-2 justify-center"
                    size="lg"
                  />
                </div>
              </div>
            </div>
            
            {/* Next/Previous Posts Navigation */}
            <div className="flex justify-between items-center mt-16 pt-8 border-t border-empire-medium/20">
              <a href="#" className="text-empire-cyan hover:text-empire-darkCyan flex items-center">
                <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
                Previous Post
              </a>
              <a href="#" className="text-empire-cyan hover:text-empire-darkCyan flex items-center">
                Next Post
                <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost; 