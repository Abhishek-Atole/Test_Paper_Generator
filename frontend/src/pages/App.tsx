import React from "react";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">EduQuest MCQ</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              Generate professional multiple-choice test papers for educational purposes with ease
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <button 
                onClick={() => navigate('/Dashboard')} 
                className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Sign Up
              </button>
              <button 
                onClick={() => navigate('/Dashboard')} 
                className="px-6 py-3 rounded-md bg-secondary text-secondary-foreground font-medium hover:bg-secondary/90 transition-colors"
              >
                Sign In
              </button>
            </div>
            <div className="mt-12 relative">
              <div className="bg-white rounded-lg shadow-xl p-4 border border-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1605711285791-0219e80e43a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
                  alt="EduQuest MCQ Application Preview" 
                  className="rounded-md w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Customized Tests</h3>
              <p className="text-gray-600">
                Select class, exam type, and specific topics to create perfectly tailored test papers for your students.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-sm">
              <div className="text-green-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Question Selection</h3>
              <p className="text-gray-600">
                Choose questions manually or let our system automatically select questions for you, giving you complete control.
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg shadow-sm">
              <div className="text-purple-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">PDF Generation</h3>
              <p className="text-gray-600">
                Generate professional PDF test papers with question sheets and separate answer keys for easy distribution.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-amber-50 p-6 rounded-lg shadow-sm">
              <div className="text-amber-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Question Management</h3>
              <p className="text-gray-600">
                Add questions manually or upload them in bulk using our templates. Preview questions before adding to ensure accuracy.
              </p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg shadow-sm">
              <div className="text-red-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Mathematics Support</h3>
              <p className="text-gray-600">
                Full support for mathematical equations and diagrams in your questions and answer keys for science and math subjects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Benefits for Educators and Institutes</h2>
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-blue-600 py-4 px-6">
                <h3 className="text-xl font-semibold text-white">Time & Resource Savings</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Save <span className="font-medium">hours of manual test preparation</span> time each week</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Create <span className="font-medium">multiple variations</span> of tests from the same question bank for different class sections</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Reduce <span className="font-medium">printing and distribution costs</span> with digital-ready PDFs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Efficiently <span className="font-medium">reuse question banks</span> year after year with easy updates</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-indigo-600 py-4 px-6">
                <h3 className="text-xl font-semibold text-white">Educational Quality</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Ensure <span className="font-medium">balanced topic coverage</span> with intelligent question selection</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Perfect for <span className="font-medium">preparing students</span> for competitive exams like JEE, NEET and MHT-CET</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Enhance <span className="font-medium">institutional branding</span> with professionally formatted test papers</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">All at an <span className="font-medium">affordable price</span> of just ₹99 per month</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Join hundreds of educational institutes across India who are already using EduQuest MCQ to streamline their test creation process.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">How It Works</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100"></div>
              
              {/* Step 1 */}
              <div className="mb-16 md:mb-0 relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-16 mb-8 md:mb-0 md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h3 className="text-xl font-semibold mb-2 text-blue-600">Select Parameters</h3>
                      <p className="text-gray-600">Choose class (11th/12th), exam type (JEE, NEET, MHT-CET, or State Board), and select specific topics from the chosen subject.</p>
                    </div>
                  </div>
                  <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 flex justify-center items-center bg-blue-500 text-white rounded-full w-12 h-12 font-bold text-lg shadow-md">
                    1
                  </div>
                  <div className="flex-1 md:pl-16 md:hidden">
                    {/* Placeholder for mobile layout */}
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="mb-16 md:mb-0 md:mt-24 relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-16 mb-8 md:mb-0 md:text-right md:hidden">
                    {/* Placeholder for mobile layout */}
                  </div>
                  <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 flex justify-center items-center bg-green-500 text-white rounded-full w-12 h-12 font-bold text-lg shadow-md">
                    2
                  </div>
                  <div className="flex-1 md:pl-16">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h3 className="text-xl font-semibold mb-2 text-green-600">Question Selection</h3>
                      <p className="text-gray-600">Choose questions manually from the displayed list or let the system automatically select questions for your test.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="mb-16 md:mb-0 md:mt-24 relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-16 mb-8 md:mb-0 md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h3 className="text-xl font-semibold mb-2 text-purple-600">Generate Test</h3>
                      <p className="text-gray-600">Click "Generate Test" to create your test paper with all the selected questions and parameters.</p>
                    </div>
                  </div>
                  <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 flex justify-center items-center bg-purple-500 text-white rounded-full w-12 h-12 font-bold text-lg shadow-md">
                    3
                  </div>
                  <div className="flex-1 md:pl-16 md:hidden">
                    {/* Placeholder for mobile layout */}
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="md:mt-24 relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-16 mb-8 md:mb-0 md:text-right md:hidden">
                    {/* Placeholder for mobile layout */}
                  </div>
                  <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 flex justify-center items-center bg-amber-500 text-white rounded-full w-12 h-12 font-bold text-lg shadow-md">
                    4
                  </div>
                  <div className="flex-1 md:pl-16">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h3 className="text-xl font-semibold mb-2 text-amber-600">Download PDF</h3>
                      <p className="text-gray-600">Get your ready-to-use PDF that includes institute name, test details, MCQ question sheet, and answer/solution sheet.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <button 
                onClick={() => navigate('/Dashboard')} 
                className="px-8 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                Try It Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Simple, Affordable Pricing</h2>
          
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-indigo-600 px-6 py-8 text-center">
              <h3 className="text-3xl font-bold text-white mb-2">Monthly Subscription</h3>
              <div className="text-white text-opacity-80 mb-4">Full access to all features</div>
              <div className="text-5xl font-bold text-white mb-2">₹99<span className="text-xl">/month</span></div>
              <div className="text-white text-opacity-80">No hidden fees</div>
            </div>
            
            <div className="px-6 py-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Unlimited test paper generations</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Full access to question bank</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Custom institution branding</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">PDF downloads</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Support for mathematical equations & diagrams</span>
                </li>
              </ul>
              
              <div className="mt-8 text-center">
                <button 
                  onClick={() => navigate('/Dashboard')} 
                  className="w-full px-6 py-3 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center text-gray-600 max-w-xl mx-auto">
            <p>No long-term commitment required. Cancel anytime. Start with a 7-day free trial.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Test Creation Process?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join educators across India who save hours every week with EduQuest MCQ.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => navigate('/Dashboard')} 
              className="px-8 py-3 rounded-md bg-white text-blue-600 font-medium hover:bg-gray-100 transition-colors"
            >
              Get Started Free
            </button>
            <button 
              onClick={() => navigate('/Dashboard')} 
              className="px-8 py-3 rounded-md bg-transparent text-white border border-white font-medium hover:bg-blue-700 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">EduQuest MCQ</h3>
              <p className="text-gray-400">Professional MCQ test paper generator for educators and institutes.</p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-white transition-colors">Home</button></li>
                <li><button className="hover:text-white transition-colors">Features</button></li>
                <li><button className="hover:text-white transition-colors">Pricing</button></li>
                <li><button className="hover:text-white transition-colors">Sign Up</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-white transition-colors">Help Center</button></li>
                <li><button className="hover:text-white transition-colors">Contact Us</button></li>
                <li><button className="hover:text-white transition-colors">FAQ</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-white transition-colors">Terms of Service</button></li>
                <li><button className="hover:text-white transition-colors">Privacy Policy</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} EduQuest MCQ. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

