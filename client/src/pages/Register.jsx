import { useState } from 'react';

export default function Register() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    teamName: '',
    leaderName: '',
    leaderUSN: '',
    leaderYear: '',
    leaderEmail: '',
    leaderPhone: '',
    members: [
      { name: '', usn: '', year: '', email: '' }
    ],
    projectType: '',
    psId: '',
    idea: '',
    pptLink: '',
    acceptTerms: false
  });
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleMemberChange = (index, field, value) => {
    const updatedMembers = [...formData.members];
    updatedMembers[index][field] = value;
    setFormData({
      ...formData,
      members: updatedMembers
    });
  };

  const addMember = () => {
    if (formData.members.length < 3) {
      setFormData({
        ...formData,
        members: [...formData.members, { name: '', usn: '', year: '', email: '' }]
      });
    }
  };

  const removeMember = (index) => {
    if (formData.members.length > 1) {
      const updatedMembers = formData.members.filter((_, i) => i !== index);
      setFormData({
        ...formData,
        members: updatedMembers
      });
    }
  };

  const validateStep = (step) => {
    if (step === 1) {
      return formData.teamName && formData.leaderName && formData.leaderUSN && 
             formData.leaderYear && formData.leaderEmail && formData.leaderPhone;
    }
    if (step === 2) {
      return formData.members.every(m => m.name && m.usn && m.year && m.email);
    }
    if (step === 3) {
      if (!formData.projectType) return false;
      if (formData.projectType === 'problem-statement') {
        return formData.psId && formData.pptLink;
      }
      if (formData.projectType === 'open-innovation') {
        return formData.idea && formData.pptLink;
      }
    }
    if (step === 4) {
      return formData.acceptTerms;
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
      setMessage('');
    } else {
      setMessage('Please fill all required fields');
    }
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
    setMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(4)) {
      setMessage('Please accept the terms and conditions');
      return;
    }

    setLoading(true);
    setMessage('');

    // Prepare the payload to match backend expectations
    const payload = {
      teamName: formData.teamName,
      leaderName: formData.leaderName,
      leaderUSN: formData.leaderUSN,
      leaderYear: formData.leaderYear,
      leaderEmail: formData.leaderEmail,
      leaderPhone: formData.leaderPhone,
      members: formData.members,
      projectType: formData.projectType,
      psId: formData.psId || undefined,
      idea: formData.idea || undefined,
      pptLink: formData.pptLink
    };

    console.log('Submitting payload:', JSON.stringify(payload, null, 2));

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log('Response:', data);

      if (response.ok) {
        setMessage('✅ Registration successful! Redirecting...');
        setTimeout(() => {
          window.location.href = '/';
        }, 1500);
      } else {
        setMessage(data.message || 'Registration failed');
        console.error('Registration failed:', data);
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
      console.error('Network error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/game-of-thrones');

        .thrones-font {
          font-family: 'Game of Thrones', serif;
          letter-spacing: 0.15em;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        @keyframes shimmer {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        .shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }

        .grid-pattern {
          background-image: 
            linear-gradient(rgba(100, 116, 139, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100, 116, 139, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .checkbox-custom:checked {
          background-color: rgb(71, 85, 105);
          border-color: rgb(148, 163, 184);
        }
      `}</style>

      {/* Background with subtle grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
      <div className="absolute inset-0 grid-pattern"></div>
      
      {/* Accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 blur-3xl rounded-full"></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-3xl">
          {/* Progress Indicator */}
          <div className="mb-12 fade-in">
            <div className="flex justify-between items-center relative">
              <div className="absolute top-5 left-0 right-0 h-[2px] bg-slate-800">
                <div 
                  className="h-full bg-gradient-to-r from-slate-400 to-slate-500 transition-all duration-500"
                  style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                ></div>
              </div>
              
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="relative flex flex-col items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-500 z-10 ${
                    currentStep >= step 
                      ? 'border-slate-300 bg-slate-800 text-white shadow-lg shadow-slate-500/20' 
                      : 'border-slate-700 bg-slate-900 text-slate-600'
                  }`}>
                    <span className="text-sm font-bold">{step}</span>
                  </div>
                  <span className={`absolute top-14 text-xs whitespace-nowrap transition-all duration-300 ${
                    currentStep === step ? 'text-slate-300 font-medium' : 'text-slate-600'
                  }`}>
                    {step === 1 && 'Team & Leader'}
                    {step === 2 && 'Members'}
                    {step === 3 && 'Project'}
                    {step === 4 && 'Terms'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card */}
          <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/50 rounded-2xl shadow-2xl overflow-hidden fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Header */}
            <div className="border-b border-slate-800/50 bg-gradient-to-br from-slate-900/80 to-slate-900/40 px-8 py-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center shimmer">
                  <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 10 L35 30 L20 35 L15 50 L20 65 L30 75 L35 85 L40 90 L50 95 L60 90 L65 85 L70 75 L80 65 L85 50 L80 35 L65 30 L50 10 Z" 
                      fill="rgba(148, 163, 184, 0.1)" stroke="rgba(148, 163, 184, 0.4)" strokeWidth="2"/>
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-100 tracking-wide thrones-font">
                    {currentStep === 1 && 'TEAM & LEADER'}
                    {currentStep === 2 && 'MEMBERS'}
                    {currentStep === 3 && 'PROJECT'}
                    {currentStep === 4 && 'TERMS'}
                  </h2>
                  <p className="text-slate-400 text-sm mt-1">
                    {currentStep === 1 && 'Step 1 of 4 • Team Information'}
                    {currentStep === 2 && 'Step 2 of 4 • Member Information'}
                    {currentStep === 3 && 'Step 3 of 4 • Project Information'}
                    {currentStep === 4 && 'Step 4 of 4 • Terms & Conditions'}
                  </p>
                </div>
              </div>
            </div>

            {/* Form Content */}
            <div className="px-8 py-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Team & Leader Details */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2.5 tracking-wide uppercase">
                        Team Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="teamName"
                        value={formData.teamName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 bg-slate-950/50 border border-slate-800 rounded-lg text-slate-100 placeholder-slate-600 focus:ring-2 focus:ring-slate-600 focus:border-slate-600 outline-none transition-all duration-300"
                        placeholder="Enter your team name"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-300 mb-2.5 tracking-wide uppercase">
                          Leader Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="leaderName"
                          value={formData.leaderName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3.5 bg-slate-950/50 border border-slate-800 rounded-lg text-slate-100 placeholder-slate-600 focus:ring-2 focus:ring-slate-600 focus:border-slate-600 outline-none transition-all duration-300"
                          placeholder="Full name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-300 mb-2.5 tracking-wide uppercase">
                          USN <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="leaderUSN"
                          value={formData.leaderUSN}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3.5 bg-slate-950/50 border border-slate-800 rounded-lg text-slate-100 placeholder-slate-600 focus:ring-2 focus:ring-slate-600 focus:border-slate-600 outline-none transition-all duration-300"
                          placeholder="University seat number"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2.5 tracking-wide uppercase">
                        Year of Study <span className="text-red-400">*</span>
                      </label>
                      <select
                        name="leaderYear"
                        value={formData.leaderYear}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 bg-slate-950/50 border border-slate-800 rounded-lg text-slate-100 focus:ring-2 focus:ring-slate-600 focus:border-slate-600 outline-none transition-all duration-300 cursor-pointer"
                      >
                        <option value="" className="bg-slate-900">Select Year</option>
                        <option value="1" className="bg-slate-900">1st Year</option>
                        <option value="2" className="bg-slate-900">2nd Year</option>
                        <option value="3" className="bg-slate-900">3rd Year</option>
                        <option value="4" className="bg-slate-900">4th Year</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2.5 tracking-wide uppercase">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="leaderEmail"
                        value={formData.leaderEmail}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 bg-slate-950/50 border border-slate-800 rounded-lg text-slate-100 placeholder-slate-600 focus:ring-2 focus:ring-slate-600 focus:border-slate-600 outline-none transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2.5 tracking-wide uppercase">
                        Phone Number <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="leaderPhone"
                        value={formData.leaderPhone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 bg-slate-950/50 border border-slate-800 rounded-lg text-slate-100 placeholder-slate-600 focus:ring-2 focus:ring-slate-600 focus:border-slate-600 outline-none transition-all duration-300"
                        placeholder="10-digit phone number"
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Members Details */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="text-sm text-slate-400 bg-slate-950/30 px-4 py-3 rounded-lg border border-slate-800/50">
                      <span className="font-semibold text-slate-300">Team Size:</span> {formData.members.length + 1} members (including leader) • Min: 2 • Max: 4
                    </div>

                    {formData.members.map((member, index) => (
                      <div key={index} className="p-6 bg-slate-950/30 rounded-xl border border-slate-800/50 space-y-5">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-slate-200 font-bold tracking-wide uppercase text-sm">Member {index + 1}</h3>
                          {formData.members.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeMember(index)}
                              className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors"
                            >
                              Remove
                            </button>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Name *</label>
                            <input
                              type="text"
                              value={member.name}
                              onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                              required
                              className="w-full px-3 py-2.5 bg-slate-900/50 border border-slate-800 rounded-lg text-slate-100 placeholder-slate-600 focus:ring-2 focus:ring-slate-600 focus:border-slate-600 outline-none transition-all duration-300 text-sm"
                              placeholder="Full name"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">USN *</label>
                            <input
                              type="text"
                              value={member.usn}
                              onChange={(e) => handleMemberChange(index, 'usn', e.target.value)}
                              required
                              className="w-full px-3 py-2.5 bg-slate-900/50 border border-slate-800 rounded-lg text-slate-100 placeholder-slate-600 focus:ring-2 focus:ring-slate-600 focus:border-slate-600 outline-none transition-all duration-300 text-sm"
                              placeholder="University seat number"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Year *</label>
                            <select
                              value={member.year}
                              onChange={(e) => handleMemberChange(index, 'year', e.target.value)}
                              required
                              className="w-full px-3 py-2.5 bg-slate-900/50 border border-slate-800 rounded-lg text-slate-100 focus:ring-2 focus:ring-slate-600 focus:border-slate-600 outline-none transition-all duration-300 cursor-pointer text-sm"
                            >
                              <option value="" className="bg-slate-900">Select</option>
                              <option value="1" className="bg-slate-900">1st Year</option>
                              <option value="2" className="bg-slate-900">2nd Year</option>
                              <option value="3" className="bg-slate-900">3rd Year</option>
                              <option value="4" className="bg-slate-900">4th Year</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Email *</label>
                            <input
                              type="email"
                              value={member.email}
                              onChange={(e) => handleMemberChange(index, 'email', e.target.value)}
                              required
                              className="w-full px-3 py-2.5 bg-slate-900/50 border border-slate-800 rounded-lg text-slate-100 placeholder-slate-600 focus:ring-2 focus:ring-slate-600 focus:border-slate-600 outline-none transition-all duration-300 text-sm"
                              placeholder="email@example.com"
                            />
                          </div>
                        </div>
                      </div>
                    ))}

                    {formData.members.length < 3 && (
                      <button
                        type="button"
                        onClick={addMember}
                        className="w-full py-4 border-2 border-dashed border-slate-700 text-slate-400 rounded-xl hover:border-slate-600 hover:text-slate-300 hover:bg-slate-950/20 transition-all duration-300 font-medium"
                      >
                        + Add Another Member
                      </button>
                    )}
                  </div>
                )}

                {/* Step 3: Project Details */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-4 tracking-wide uppercase">
                        Project Type <span className="text-red-400">*</span>
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => setFormData({...formData, projectType: 'problem-statement', idea: ''})}
                          className={`p-5 border-2 rounded-xl transition-all duration-300 text-left ${
                            formData.projectType === 'problem-statement'
                              ? 'border-slate-500 bg-slate-800/50 shadow-lg shadow-slate-500/10'
                              : 'border-slate-800 hover:border-slate-700 hover:bg-slate-950/30'
                          }`}
                        >
                          <div className="font-bold text-slate-200 mb-1.5 tracking-wide">Problem Statement</div>
                          <div className="text-xs text-slate-400">Solve a given challenge</div>
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({...formData, projectType: 'open-innovation', psId: ''})}
                          className={`p-5 border-2 rounded-xl transition-all duration-300 text-left ${
                            formData.projectType === 'open-innovation'
                              ? 'border-slate-500 bg-slate-800/50 shadow-lg shadow-slate-500/10'
                              : 'border-slate-800 hover:border-slate-700 hover:bg-slate-950/30'
                          }`}
                        >
                          <div className="font-bold text-slate-200 mb-1.5 tracking-wide">Open Innovation</div>
                          <div className="text-xs text-slate-400">Build your own idea</div>
                        </button>
                      </div>
                    </div>

                    {formData.projectType === 'problem-statement' && (
                      <div>
                        <label className="block text-sm font-semibold text-slate-300 mb-2.5 tracking-wide uppercase">
                          Problem Statement ID <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="psId"
                          value={formData.psId}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3.5 bg-slate-950/50 border border-slate-800 rounded-lg text-slate-100 placeholder-slate-600 focus:ring-2 focus:ring-slate-600 focus:border-slate-600 outline-none transition-all duration-300"
                          placeholder="Enter PS ID (e.g., PS001)"
                        />
                      </div>
                    )}

                    {formData.projectType === 'open-innovation' && (
                      <div>
                        <label className="block text-sm font-semibold text-slate-300 mb-2.5 tracking-wide uppercase">
                          Project Idea (One Line) <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="idea"
                          value={formData.idea}
                          onChange={handleChange}
                          required
                          maxLength={150}
                          className="w-full px-4 py-3.5 bg-slate-950/50 border border-slate-800 rounded-lg text-slate-100 placeholder-slate-600 focus:ring-2 focus:ring-slate-600 focus:border-slate-600 outline-none transition-all duration-300"
                          placeholder="Brief description of your innovation"
                        />
                        <div className="text-xs text-slate-500 mt-2">{formData.idea.length}/150 characters</div>
                      </div>
                    )}

                    {formData.projectType && (
                      <div>
                        <label className="block text-sm font-semibold text-slate-300 mb-2.5 tracking-wide uppercase">
                          PPT Submission Link <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="url"
                          name="pptLink"
                          value={formData.pptLink}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3.5 bg-slate-950/50 border border-slate-800 rounded-lg text-slate-100 placeholder-slate-600 focus:ring-2 focus:ring-slate-600 focus:border-slate-600 outline-none transition-all duration-300"
                          placeholder="Google Drive / Dropbox link"
                        />
                        <div className="text-xs text-slate-400 mt-2">
                          Ensure the link is publicly accessible
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Step 4: Terms & Conditions */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div className="bg-slate-950/30 border border-slate-800/50 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-slate-200 mb-4 tracking-wide uppercase thrones-font">
                        Terms & Conditions
                      </h3>
                      
                      <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                        <div className="flex gap-3">
                          <div className="text-slate-500 font-bold mt-0.5">1.</div>
                          <p>All submitted projects must be <span className="font-semibold text-slate-200">original work</span> created by the team members. Plagiarism or use of pre-existing projects will result in immediate disqualification.</p>
                        </div>
                        
                        <div className="flex gap-3">
                          <div className="text-slate-500 font-bold mt-0.5">2.</div>
                          <p>Teams must adhere to the <span className="font-semibold text-slate-200">IEEE Code of Ethics</span> and maintain academic integrity throughout the competition. Any form of cheating, unfair practices, or misconduct will not be tolerated.</p>
                        </div>
                        
                        <div className="flex gap-3">
                          <div className="text-slate-500 font-bold mt-0.5">3.</div>
                          <p><span className="font-semibold text-slate-200">IEEE reserves the right</span> to cancel your candidature at any stage of the competition if violations are detected or if eligibility criteria are not met.</p>
                        </div>
                        
                        <div className="flex gap-3">
                          <div className="text-slate-500 font-bold mt-0.5">4.</div>
                          <p><span className="font-semibold text-slate-200">Our team members will contact you</span> regarding payment details if your registration response is valid and accepted. Please ensure your contact information is accurate.</p>
                        </div>
                      </div>
                    </div>

                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={handleChange}
                        required
                        className="checkbox-custom mt-1 w-5 h-5 rounded border-2 border-slate-700 bg-slate-950/50 text-slate-600 focus:ring-2 focus:ring-slate-600 cursor-pointer transition-all"
                      />
                      <span className="text-sm text-slate-300 group-hover:text-slate-200 transition-colors">
                        I have read and agree to the terms and conditions stated above. I understand that IEEE holds the authority to disqualify my team for any violations.
                      </span>
                    </label>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex gap-4 mt-8 pt-6 border-t border-slate-800/50">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex-1 px-6 py-3.5 border-2 border-slate-700 text-slate-300 font-bold tracking-widest hover:border-slate-600 hover:text-slate-200 hover:bg-slate-950/30 transition-all duration-300 rounded-lg uppercase"
                    >
                      Back
                    </button>
                  )}

                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex-1 px-6 py-3.5 bg-gradient-to-r from-slate-700 to-slate-600 text-white font-bold tracking-widest rounded-lg hover:from-slate-600 hover:to-slate-500 transition-all duration-300 uppercase"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={loading}
                      className={`flex-1 px-6 py-3.5 font-bold tracking-widest rounded-lg uppercase transition-all duration-300 ${
                        loading
                          ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-blue-700 to-blue-600 text-white hover:from-blue-600 hover:to-blue-500'
                      }`}
                    >
                      {loading ? 'Submitting...' : 'Submit'}
                    </button>
                  )}
                </div>

                {message && (
                  <div className={`text-center text-sm mt-6 font-medium px-4 py-3 rounded-lg ${
                    message.includes('✅') 
                      ? 'bg-green-900/20 text-green-400 border border-green-800/50' 
                      : 'bg-red-900/20 text-red-400 border border-red-800/50'
                  }`}>
                    {message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}