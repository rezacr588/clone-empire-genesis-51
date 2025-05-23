import React, { useEffect } from 'react';
import Layout from "@/components/Layout";
import { MapPin, Briefcase, Zap, BrainCircuit, Users } from 'lucide-react';

const jobOpenings = [
  {
    title: "Senior AI Architect (Agentic Systems)",
    location: "Remote / Global",
    department: "Engineering & Development",
    type: "Full-time",
    description: "Lead the design and development of our next-generation AI agent frameworks. Must have extensive experience in machine learning, NLP, and building scalable autonomous systems.",
    responsibilities: [
      "Architect and implement core AI agent capabilities.",
      "Mentor junior engineers and drive technical excellence.",
      "Collaborate with product teams to define AI strategy.",
      "Stay abreast of cutting-edge AI research and apply it to our platform."
    ],
    qualifications: [
      "PhD or Master's in Computer Science, AI, or related field.",
      "7+ years of experience in AI/ML development.",
      "Proficiency in Python, TensorFlow/PyTorch.",
      "Proven track record of deploying AI systems in production."
    ],
    icon: BrainCircuit,
    applyLink: "#"
  },
  {
    title: "AI Product Manager - Clone Operations",
    location: "New York, USA",
    department: "Product Management",
    type: "Full-time",
    description: "Define the roadmap and strategy for our AI Clone product suite. Work closely with engineering, design, and sales to deliver world-class AI agent solutions.",
    responsibilities: [
      "Conduct market research and identify customer needs.",
      "Develop product specifications and user stories.",
      "Manage the product lifecycle from conception to launch.",
      "Analyze product performance and iterate based on feedback."
    ],
    qualifications: [
      "5+ years of product management experience in SaaS or AI.",
      "Strong understanding of AI technologies and market trends.",
      "Excellent communication and leadership skills.",
      "Ability to translate technical concepts into business value."
    ],
    icon: Zap,
    applyLink: "#"
  },
  {
    title: "Lead UX Designer - Agent Interactions",
    location: "London, UK",
    department: "Design & User Experience",
    type: "Full-time",
    description: "Shape the user experience for our AI agents, ensuring intuitive and effective human-AI interaction. Create design systems and user flows for complex agentic interfaces.",
    responsibilities: [
        "Lead UX design projects from concept to execution.",
        "Develop wireframes, prototypes, and high-fidelity mockups.",
        "Conduct user research and usability testing.",
        "Collaborate with engineers to ensure design feasibility."
    ],
    qualifications: [
        "6+ years of UX design experience, preferably with AI products.",
        "Strong portfolio showcasing complex problem-solving.",
        "Proficiency in Figma, Sketch, or Adobe XD.",
        "Deep understanding of user-centered design principles."
    ],
    icon: Users,
    applyLink: "#"
  }
];

const Careers = () => {
  useEffect(() => {
    document.title = "Join Our Empire | Careers at The Clone Empire";
  }, []);

  return (
    <Layout>
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-empire-red mb-4">
          Build the Future With Us
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-empire-dark dark:text-empire-light max-w-3xl mx-auto">
          The Clone Empire is a collective of innovators, thinkers, and builders passionate about creating the next generation of AI. If you're driven to push boundaries and shape the future of agentic systems, your journey starts here.
        </p>
      </div>

      <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-empire-dark dark:text-white mb-8 text-center">Current Openings</h2>
          <div className="space-y-8">
          {jobOpenings.map((job, index) => (
              <div key={index} className="bg-white dark:bg-empire-dark p-6 md:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-empire-medium/20 dark:border-empire-light/10">
                  <div className="md:flex justify-between items-start mb-4">
                      <div>
                          <job.icon className="h-10 w-10 text-empire-red mb-3 md:hidden" />
                          <h3 className="text-2xl md:text-3xl font-semibold text-empire-red mb-1">{job.title}</h3>
                          <div className="flex flex-wrap items-center text-sm text-empire-dark/70 dark:text-empire-light/70 mb-3">
                              <span className="flex items-center mr-4"><MapPin className="h-4 w-4 mr-1.5" /> {job.location}</span>
                              <span className="flex items-center mr-4"><Briefcase className="h-4 w-4 mr-1.5" /> {job.department}</span>
                              <span className="flex items-center"><Zap className="h-4 w-4 mr-1.5" /> {job.type}</span>
                          </div>
                      </div>
                      <job.icon className="hidden md:block h-12 w-12 text-empire-red ml-6 flex-shrink-0" />
                  </div> 
                  <p className="text-empire-dark dark:text-empire-light/90 mb-4 leading-relaxed">
                      {job.description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-x-8 mb-6">
                      <div>
                          <h4 className="text-lg font-semibold text-empire-dark dark:text-empire-cyan mb-2">Key Responsibilities:</h4>
                          <ul className="list-disc list-inside space-y-1 text-empire-dark dark:text-empire-light/90 text-sm">
                              {job.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
                          </ul>
                      </div>
                      <div className="mt-4 md:mt-0">
                          <h4 className="text-lg font-semibold text-empire-dark dark:text-empire-cyan mb-2">Qualifications:</h4>
                          <ul className="list-disc list-inside space-y-1 text-empire-dark dark:text-empire-light/90 text-sm">
                              {job.qualifications.map((qual, i) => <li key={i}>{qual}</li>)}
                          </ul>
                      </div>
                  </div>
                  <a
                      href={job.applyLink}
                      className="inline-block bg-empire-red hover:bg-empire-red-dark text-white font-bold py-2 px-6 rounded-lg text-md transition-colors duration-300"
                  >
                      Apply Now
                  </a>
              </div>
          ))}
          </div>
      </div>
      
      <div className="text-center mt-12 bg-empire-dark/5 dark:bg-empire-light/5 p-8 rounded-xl">
          <h3 className="text-2xl font-semibold text-empire-dark dark:text-white mb-3">Don't See Your Perfect Role?</h3>
          <p className="text-empire-dark/80 dark:text-empire-light/80 max-w-xl mx-auto mb-6">
              We are always looking for exceptional talent. If you believe you have what it takes to contribute to The Clone Empire, send us your resume and a cover letter detailing your vision.
          </p>
          <a
              href="mailto:careers@thecloneempire.com" // Placeholder email
              className="inline-block bg-empire-cyan hover:bg-opacity-80 text-empire-darkest font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300"
          >
              Submit Your Profile
          </a>
      </div>
    </Layout>
  );
};

export default Careers; 