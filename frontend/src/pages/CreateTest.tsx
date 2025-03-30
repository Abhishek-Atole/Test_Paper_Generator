import React from "react";
import { useNavigate } from "react-router-dom";

export default function CreateTest() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white shadow-md hidden md:block">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800">EduQuest MCQ</h2>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => navigate("/Dashboard")}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors text-gray-700 hover:bg-gray-100"
              >
                <span className="text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </span>
                <span>Dashboard</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/CreateTest")}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors bg-blue-50 text-blue-700"
              >
                <span className="text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="12" y1="18" x2="12" y2="12"></line>
                    <line x1="9" y1="15" x2="15" y2="15"></line>
                  </svg>
                </span>
                <span>Create Test</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/ManageQuestions")}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors text-gray-700 hover:bg-gray-100"
              >
                <span className="text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                  </svg>
                </span>
                <span>Manage Questions</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/Account")}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors text-gray-700 hover:bg-gray-100"
              >
                <span className="text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </span>
                <span>Account</span>
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Mobile Navigation Bar */}
        <div className="md:hidden bg-white p-4 rounded-lg shadow-sm mb-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">EduQuest MCQ</h2>
          <button className="p-2 rounded-md bg-gray-100 text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Page Header */}
        <header className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Create a New Test</h1>
          <p className="text-gray-600 mt-1">Select options below to generate a custom MCQ test paper.</p>
        </header>

        {/* Main Form */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-6">
          <div className="space-y-6">
            {/* Class Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Class</label>
              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 border border-gray-300 rounded-md text-sm bg-white text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  11th Standard
                </button>
                <button className="px-4 py-2 border border-transparent rounded-md text-sm bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  12th Standard
                </button>
              </div>
            </div>
            
            {/* Exam Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Exam Type</label>
              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 border border-transparent rounded-md text-sm bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  JEE
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-md text-sm bg-white text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  NEET
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-md text-sm bg-white text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  MHT-CET
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-md text-sm bg-white text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  State Board
                </button>
              </div>
            </div>
            
            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 border border-gray-300 rounded-md text-sm bg-white text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  Mathematics
                </button>
                <button className="px-4 py-2 border border-transparent rounded-md text-sm bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Physics
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-md text-sm bg-white text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  Chemistry
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-md text-sm bg-white text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  Biology
                </button>
              </div>
            </div>
            
            {/* Topics */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Topics</label>
              <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <input id="topic1" name="topic1" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                    <label htmlFor="topic1" className="ml-2 block text-sm text-gray-700">Kinematics</label>
                  </div>
                  <div className="flex items-center">
                    <input id="topic2" name="topic2" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" checked />
                    <label htmlFor="topic2" className="ml-2 block text-sm text-gray-700">Laws of Motion</label>
                  </div>
                  <div className="flex items-center">
                    <input id="topic3" name="topic3" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" checked />
                    <label htmlFor="topic3" className="ml-2 block text-sm text-gray-700">Work, Energy & Power</label>
                  </div>
                  <div className="flex items-center">
                    <input id="topic4" name="topic4" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                    <label htmlFor="topic4" className="ml-2 block text-sm text-gray-700">Rotational Motion</label>
                  </div>
                  <div className="flex items-center">
                    <input id="topic5" name="topic5" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                    <label htmlFor="topic5" className="ml-2 block text-sm text-gray-700">Gravitation</label>
                  </div>
                  <div className="flex items-center">
                    <input id="topic6" name="topic6" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                    <label htmlFor="topic6" className="ml-2 block text-sm text-gray-700">Properties of Solids & Liquids</label>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Number of Questions */}
            <div>
              <label htmlFor="num-questions" className="block text-sm font-medium text-gray-700 mb-2">Number of Questions</label>
              <input 
                type="number" 
                id="num-questions" 
                name="num-questions" 
                min="5" 
                max="100" 
                defaultValue="30"
                className="w-full md:w-1/4 mt-1 block rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
            
            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                View Available Questions
              </button>
              <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                Reset Selections
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
