import React, { useEffect } from 'react';
import Layout from "@/components/Layout";
import { Newspaper, ExternalLink, Download } from 'lucide-react';

const pressReleases = [
  {
    date: "October 22, 2023",
    title: "The Clone Empire Launches Groundbreaking Agentic AI Platform",
    source: "AI Wire News",
    excerpt: "The Clone Empire today announced the launch of its innovative platform for creating and deploying sophisticated AI agent clones, set to revolutionize how businesses approach automation and intelligent task management.",
    link: "#", // Link to full press release or article
    downloadLink: "/downloads/press-release-launch.pdf" // Placeholder
  },
  {
    date: "September 15, 2023",
    title: "The Clone Empire Secures $20M Series A Funding to Expand AI Clone Development",
    source: "Tech Chronicle Today",
    excerpt: "Led by Nexus Ventures, this funding round will accelerate The Clone Empire's mission to build the world's most advanced AI digital workforce.",
    link: "#",
    downloadLink: "/downloads/press-release-funding.pdf"
  },
  {
    date: "August 01, 2023",
    title: "Dr. Eldrin Cortex Joins The Clone Empire as Chief AI Strategist",
    source: "Robotics & AI Journal",
    excerpt: "Renowned AI visionary Dr. Eldrin Cortex will spearhead The Clone Empire's research and development in agentic AI systems.",
    link: "#",
    downloadLink: "/downloads/press-release-cortex.pdf"
  }
];

const mediaMentions = [
  {
    publication: "FutureTech Magazine",
    title: "Are AI Clones the Future of Work? The Clone Empire Thinks So.",
    date: "November 5, 2023",
    link: "#"
  },
  {
    publication: "Enterprise AI Insights",
    title: "Deep Dive: The Technology Behind The Clone Empire's Agentic Systems",
    date: "October 30, 2023",
    link: "#"
  },
  {
    publication: "Startup Sphere Podcast",
    title: "Episode 127: Interview with the CEO of The Clone Empire",
    date: "October 18, 2023",
    link: "#"
  }
];

const Press = () => {
  useEffect(() => {
    document.title = "Press & Media | The Clone Empire";
  }, []);

  return (
    <Layout>
      <div className="text-center mb-12 md:mb-16">
        <Newspaper className="h-16 w-16 text-empire-red mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-empire-red mb-4">
          In The Headlines
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-empire-dark dark:text-empire-light max-w-3xl mx-auto">
          Discover the latest news, press releases, and media mentions about The Clone Empire and our pioneering work in AI agent technology.
        </p>
      </div>

      {/* Press Releases Section */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-empire-dark dark:text-white mb-8 text-center md:text-left">Official Press Releases</h2>
        <div className="space-y-8">
          {pressReleases.map((release, index) => (
            <div key={index} className="bg-white dark:bg-empire-dark p-6 rounded-xl shadow-lg border border-empire-medium/20 dark:border-empire-light/10">
              <p className="text-sm text-empire-dark/70 dark:text-empire-light/70 mb-1">{release.date} - <span className="font-semibold text-empire-red">{release.source}</span></p>
              <h3 className="text-xl md:text-2xl font-semibold text-empire-dark dark:text-white mb-2">{release.title}</h3>
              <p className="text-empire-dark/90 dark:text-empire-light/80 mb-4 leading-relaxed">{release.excerpt}</p>
              <div className="flex items-center space-x-4">
                <a href={release.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-empire-lime hover:text-opacity-80 font-medium text-sm">
                  Read Full Story <ExternalLink className="h-4 w-4 ml-1.5" />
                </a>
                {release.downloadLink && (
                   <a href={release.downloadLink} download className="inline-flex items-center text-empire-lime hover:text-opacity-80 font-medium text-sm">
                      Download PDF <Download className="h-4 w-4 ml-1.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Media Mentions Section */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-empire-dark dark:text-white mb-8 text-center md:text-left">As Seen In</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaMentions.map((mention, index) => (
            <a key={index} href={mention.link} target="_blank" rel="noopener noreferrer" className="group block bg-white dark:bg-empire-dark p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-empire-medium/20 dark:border-empire-light/10">
              <h4 className="text-lg font-semibold text-empire-red mb-1 group-hover:text-empire-red-dark transition-colors duration-300">{mention.publication}</h4>
              <p className="text-md text-empire-dark dark:text-white mb-2">{mention.title}</p>
              <p className="text-xs text-empire-dark/70 dark:text-empire-light/70">{mention.date}</p>
              <span className="mt-3 inline-flex items-center text-empire-lime group-hover:text-opacity-80 text-sm font-medium">
                  View Article <ExternalLink className="h-4 w-4 ml-1.5" />
              </span>
            </a>
          ))}
        </div>
      </section>
      
      <div className="text-center mt-12 bg-empire-dark/5 dark:bg-empire-light/5 p-8 rounded-xl">
          <h3 className="text-2xl font-semibold text-empire-dark dark:text-white mb-3">Media Inquiries</h3>
          <p className="text-empire-dark/80 dark:text-empire-light/80 max-w-xl mx-auto mb-6">
              For all media and press-related inquiries, please contact our communications team. We are happy to provide information, interviews, and resources.
          </p>
          <a
              href="mailto:press@thecloneempire.com" // Placeholder email
              className="inline-block bg-empire-red hover:bg-empire-red-dark text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300"
          >
              Contact Communications
          </a>
      </div>
    </Layout>
  );
};

export default Press; 