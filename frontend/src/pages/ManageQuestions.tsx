import React from "react";
import { useNavigate } from "react-router-dom";

export default function ManageQuestions() {
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
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors text-gray-700 hover:bg-gray-100"
              >
                <span className="text-gray-500">
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
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors bg-blue-50 text-blue-700"
              >
                <span className="text-blue-600">
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
          <h1 className="text-2xl font-bold text-gray-900">Manage Questions</h1>
          <p className="text-gray-600 mt-1">Add, edit, or remove questions from your database.</p>
        </header>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Add New Question
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" y1="3" x2="12" y2="15"></line>
            </svg>
            Upload Bulk Questions
          </button>
          <button className="px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download Template
          </button>
        </div>

        {/* Filter Controls */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label htmlFor="filter-subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <select id="filter-subject" name="filter-subject" className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
              <option value="">All Subjects</option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
              <option value="mathematics">Mathematics</option>
              <option value="biology">Biology</option>
            </select>
          </div>
          <div>
            <label htmlFor="filter-class" className="block text-sm font-medium text-gray-700 mb-1">Class</label>
            <select id="filter-class" name="filter-class" className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
              <option value="">All Classes</option>
              <option value="11">11th Standard</option>
              <option value="12">12th Standard</option>
            </select>
          </div>
          <div>
            <label htmlFor="filter-topic" className="block text-sm font-medium text-gray-700 mb-1">Topic</label>
            <select id="filter-topic" name="filter-topic" className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
              <option value="">All Topics</option>
              <option value="kinematics">Kinematics</option>
              <option value="laws-of-motion">Laws of Motion</option>
              <option value="work-energy-power">Work, Energy & Power</option>
              <option value="rotational-motion">Rotational Motion</option>
              <option value="gravitation">Gravitation</option>
            </select>
          </div>
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Search</label>
            <div className="relative rounded-md shadow-sm">
              <input
                type="text"
                name="search"
                id="search"
                className="w-full rounded-md border-gray-300 pr-10 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Search questions..."
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Questions Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Question</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Topic</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Difficulty</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    A particle moves in a circle of radius 5 m with constant speed. If it completes half the circle in 20 s, its angular velocity in rad/s is...
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Physics</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Circular Motion</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      Medium
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-blue-600 hover:text-blue-800 mr-3">Edit</button>
                    <button className="text-red-600 hover:text-red-800">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    Calculate the centripetal acceleration of an object moving in a circle of radius 0.5 m with a speed of 2 m/s.
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Physics</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Circular Motion</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Easy
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-blue-600 hover:text-blue-800 mr-3">Edit</button>
                    <button className="text-red-600 hover:text-red-800">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    A stone is tied to a string and whirled in a vertical circle. The tension in the string is maximum at...
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Physics</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Circular Motion</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                      Hard
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-blue-600 hover:text-blue-800 mr-3">Edit</button>
                    <button className="text-red-600 hover:text-red-800">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 border-t border-gray-100 flex justify-between items-center">
            <span className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to <span className="font-medium">3</span> of <span className="font-medium">120</span> questions
            </span>
            <div className="flex gap-2">
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                Previous
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                1
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                2
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                3
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                Next
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
