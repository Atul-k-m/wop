import React, { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What is Winter of Projects?",
          answer: "Winter of Projects is an IEEE initiative that brings together students to collaborate on innovative technical projects during the winter season. It's a platform for learning, building, and showcasing your technical prowess while working on real-world challenges."
        },
        {
          question: "Who can participate?",
          answer: "All students with a passion for technology and innovation are welcome! Whether you're a beginner or an experienced developer, individual or team, there's a place for everyone in Winter of Projects."
        },
        {
          question: "Is there a participation fee?",
          answer: "No, participation in Winter of Projects is completely free. This is an IEEE initiative to promote learning and innovation among students."
        },
        {
          question: "Do I need to be an IEEE member?",
          answer: "While IEEE membership is encouraged, it is not mandatory to participate. We welcome all passionate students regardless of their IEEE membership status."
        }
      ]
    },
    {
      category: "Registration & Teams",
      questions: [
        {
          question: "How do I register?",
          answer: "Navigate to the Register page, fill in your details including your team information, select your preferred problem statement, and submit the form. You'll receive a confirmation email once your registration is successful."
        },
        {
          question: "Can I participate individually?",
          answer: "Yes, you can register as an individual participant. However, we encourage team participation (2-4 members) as it promotes collaboration and allows for more comprehensive project development."
        },
        {
          question: "What's the maximum team size?",
          answer: "Teams can have a maximum of 4 members. We recommend 2-4 members for optimal collaboration and workload distribution."
        },
        {
          question: "Can I change my team after registration?",
          answer: "Team changes are allowed during the registration phase (Phase I). However, once Phase II begins, team compositions are locked to ensure fair evaluation."
        }
      ]
    },
    {
      category: "Problem Statements",
      questions: [
        {
          question: "How many problem statements can I choose?",
          answer: "Each team must select one primary problem statement from any IEEE society. Focus your efforts on one challenge to ensure quality and depth in your solution."
        },
        {
          question: "Can I propose my own problem statement?",
          answer: "While we have curated problem statements from various IEEE societies, we also accept custom proposals. Submit your idea during registration for review by our committee."
        },
        {
          question: "Are the problem statements difficulty-graded?",
          answer: "Yes, each problem statement is marked as Easy, Medium, or Hard. Choose based on your team's expertise and learning goals. All difficulty levels are judged fairly based on execution quality."
        },
        {
          question: "Can I switch problem statements?",
          answer: "Problem statement changes are permitted only during Phase I (Registration). After project development begins in Phase II, you must continue with your chosen problem."
        }
      ]
    },
    {
      category: "Timeline & Phases",
      questions: [
        {
          question: "How long does the event last?",
          answer: "Winter of Projects spans approximately 6-8 weeks, divided into five phases: Registration, Development, Mid-checkpoint, Final Showcase, and Winner Announcement. Exact dates will be announced soon."
        },
        {
          question: "What happens in each phase?",
          answer: "Phase I: Registration and team formation. Phase II: Project development with mentor support. Phase III: Mid-event checkpoint and feedback. Phase IV: Final presentation and demonstration. Phase V: Evaluation and winner announcement."
        },
        {
          question: "Is there a mid-event evaluation?",
          answer: "Yes, Phase III includes a mid-event checkpoint where teams present their progress. This is not elimination-based but provides valuable feedback to improve your final submission."
        },
        {
          question: "What are the final submission requirements?",
          answer: "Final submissions must include: working project/prototype, source code repository, documentation, presentation video, and a live demonstration during Phase IV showcase."
        }
      ]
    },
    {
      category: "Technical & Support",
      questions: [
        {
          question: "What technologies can we use?",
          answer: "You're free to use any programming languages, frameworks, and tools relevant to your problem statement. Common choices include Python, JavaScript, C++, TensorFlow, ROS, React, and more."
        },
        {
          question: "Will mentors be provided?",
          answer: "Yes! Each team will be assigned mentors from IEEE societies who will provide guidance, technical support, and feedback throughout the project development phases."
        },
        {
          question: "Is there technical workshop support?",
          answer: "We'll conduct workshops and technical sessions on relevant topics throughout the event. Topics include IoT, ML, robotics, embedded systems, and more."
        },
        {
          question: "Where can I get help if I'm stuck?",
          answer: "Multiple support channels are available: dedicated Discord server, mentor office hours, technical workshop sessions, and FAQ updates. We're here to help you succeed!"
        }
      ]
    },
    {
      category: "Evaluation & Prizes",
      questions: [
        {
          question: "How will projects be evaluated?",
          answer: "Projects are judged on: Innovation & Creativity (30%), Technical Implementation (30%), Impact & Feasibility (20%), Presentation Quality (10%), and Code Quality & Documentation (10%)."
        },
        {
          question: "Who are the judges?",
          answer: "Our panel includes IEEE faculty advisors, industry professionals, and senior IEEE members with expertise in various technical domains."
        },
        {
          question: "What prizes can we win?",
          answer: "Winners receive certificates, cash prizes, IEEE recognition, mentorship opportunities, and potential project showcase at IEEE conferences. Specific prize details will be announced during the event."
        },
        {
          question: "Will all participants get certificates?",
          answer: "Yes! All participants who complete their projects and submit final deliverables will receive participation certificates from IEEE."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12 relative overflow-hidden">
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/game-of-thrones');

        .got-font {
          font-family: 'Game of Thrones', serif;
          letter-spacing: 0.1em;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        @keyframes slideDown {
          from {
            max-height: 0;
            opacity: 0;
          }
          to {
            max-height: 1000px;
            opacity: 1;
          }
        }

        .slide-down {
          animation: slideDown 0.3s ease-out forwards;
        }

        @keyframes glow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        .glow-pulse {
          animation: glow 2s ease-in-out infinite;
        }

        @keyframes snowfall {
          0% { transform: translateY(-10vh) translateX(0); opacity: 0.7; }
          100% { transform: translateY(100vh) translateX(10px); opacity: 0.3; }
        }

        .snowflake {
          position: fixed;
          top: -10vh;
          color: rgba(255, 255, 255, 0.6);
          font-size: 1em;
          animation: snowfall linear infinite;
          pointer-events: none;
          z-index: 1;
        }

        .winter-glow {
          text-shadow: 0 0 20px rgba(148, 186, 255, 0.4);
        }
      `}</style>

      {/* Snowfall Effect */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="snowflake"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 3 + 6}s`,
            animationDelay: `${Math.random() * 5}s`,
            fontSize: `${Math.random() * 8 + 8}px`,
          }}
        >
          ❄
        </div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <div className="mb-6 flex justify-center">
            <svg
              width="80"
              height="80"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="glow-pulse"
            >
              <circle cx="50" cy="50" r="35" stroke="rgba(148, 186, 255, 0.6)" strokeWidth="2" fill="rgba(148, 186, 255, 0.1)" />
              <path d="M50 30 Q35 50 50 70 Q65 50 50 30 M30 50 L70 50" stroke="rgba(148, 186, 255, 0.8)" strokeWidth="2" />
            </svg>
          </div>

          <h1 className="got-font text-5xl md:text-7xl mb-6 text-slate-100 tracking-wide winter-glow">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          
          <div className="w-32 h-px bg-ice-400/50 mx-auto mb-8" />

          <p className="text-xl md:text-2xl text-slate-300 italic mb-4">
            Answers to Your Queries
          </p>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Find answers to common questions about Winter of Projects. If you don't find what you're looking for, feel free to contact us.
          </p>
        </div>

        {/* FAQ Content */}
        <div className="max-w-5xl mx-auto space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="fade-in"
              style={{ animationDelay: `${0.2 + categoryIndex * 0.1}s`, opacity: 0 }}
            >
              {/* Category Header */}
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-2 h-2 bg-ice-400 rounded-full glow-pulse"></div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-100 tracking-wide">
                    {category.category}
                  </h2>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-ice-400/30 via-ice-400/10 to-transparent" />
              </div>

              {/* Questions */}
              <div className="space-y-3">
                {category.questions.map((faq, questionIndex) => {
                  const isOpen = openIndex === `${categoryIndex}-${questionIndex}`;
                  return (
                    <div
                      key={questionIndex}
                      className="bg-slate-900/30 border-2 border-slate-800 hover:border-slate-700 transition-all duration-300 overflow-hidden backdrop-blur-sm"
                    >
                      {/* Question */}
                      <button
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                        className="w-full p-4 md:p-6 flex items-start justify-between gap-4 text-left group"
                      >
                        <div className="flex items-start gap-3 flex-1">
                          <span className="text-ice-400 font-bold text-lg shrink-0 mt-1">Q.</span>
                          <h3 className="text-base md:text-lg font-semibold text-slate-100 group-hover:text-ice-200 transition-colors duration-300">
                            {faq.question}
                          </h3>
                        </div>
                        <svg
                          className={`w-6 h-6 text-slate-400 group-hover:text-ice-300 transition-all duration-300 shrink-0 mt-1 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* Answer */}
                      {isOpen && (
                        <div className="border-t border-slate-800 slide-down">
                          <div className="p-4 md:p-6 pt-4">
                            <div className="flex items-start gap-3">
                              <span className="text-slate-500 font-bold text-lg shrink-0">A.</span>
                              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 max-w-3xl mx-auto bg-slate-900/50 border-2 border-ice-400/30 p-8 text-center fade-in backdrop-blur-sm">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4 tracking-wide">
            Still Have Questions?
          </h3>
          <p className="text-slate-400 mb-6">
            Can't find the answer you're looking for? Our team is here to help you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:winterofprojects@ieee.org"
              className="px-6 py-3 border-2 border-ice-400/50 text-slate-200 font-semibold tracking-widest hover:border-ice-300 hover:bg-slate-800 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              EMAIL US
            </a>
            <a
              href="#"
              className="px-6 py-3 border-2 border-slate-600 text-slate-200 font-semibold tracking-widest hover:border-slate-400 hover:bg-slate-800 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              JOIN DISCORD
            </a>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-12 fade-in">
          <p className="text-slate-500 text-sm italic winter-glow">
            "Winter is the time for comfort, for good food and warmth, for the touch of a friendly codebase."
          </p>
        </div>
      </div>
    </div>
  );
}
