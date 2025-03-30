import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  // Placeholder data for statistics
  const stats = {
    testsCreated: 24,
    questionsInDatabase: 583,
    lastTestDate: "2025-03-25"
  };

  // Navigation items
  const navItems = [
    { name: "Dashboard", icon: "home", active: true },
    { name: "Create Test", icon: "file-plus", active: false },
    { name: "Manage Questions", icon: "database", active: false },
    { name: "Account", icon: "user", active: false },
  ];

  // Quick action buttons
  const quickActions = [
    { name: "New Test", description: "Create a new test paper", icon: "file-plus", color: "bg-blue-600" },
    { name: "Add Questions", description: "Add new questions to the database", icon: "plus-circle", color: "bg-green-600" },
    { name: "View History", description: "See your previously created tests", icon: "clock", color: "bg-purple-600" },
  ];

  // Function to render the appropriate icon
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "home":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        );
      case "file-plus":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="12" y1="18" x2="12" y2="12"></line>
            <line x1="9" y1="15" x2="15" y2="15"></line>
          </svg>
        );
      case "database":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
          </svg>
        );
      case "user":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        );
      case "plus-circle":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="16"></line>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        );
      case "clock":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white shadow-md hidden md:block">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800">EduQuest MCQ</h2>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => navigate(`/${item.name}`)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${item.active
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  <span className={`${item.active ? "text-blue-600" : "text-gray-500"}`}>
                    {renderIcon(item.icon)}
                  </span>
                  <span>{item.name}</span>
                </button>
              </li>
            ))}
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

        {/* Dashboard Header */}
        <header className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's an overview of your test creation activity.</p>
        </header>

        {/* Statistics Cards */}
        <section className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-500 text-sm font-medium">Tests Created</h3>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Total</span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mt-2">{stats.testsCreated}</p>
            <div className="text-sm text-gray-500 mt-2">Last created on {stats.lastTestDate}</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-500 text-sm font-medium">Questions in Database</h3>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Total</span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mt-2">{stats.questionsInDatabase}</p>
            <div className="text-sm text-gray-500 mt-2">Across all subjects</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-500 text-sm font-medium">Subscription Status</h3>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Active</span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mt-2">Premium</p>
            <div className="text-sm text-gray-500 mt-2">Renews on April 29, 2025</div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action) => (
              <button
                key={action.name}
                onClick={() => {
                  if (action.name === 'New Test') navigate('/CreateTest');
                  else if (action.name === 'Add Questions') navigate('/ManageQuestions');
                  else if (action.name === 'View History') navigate('/Dashboard');
                }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-left hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center text-white mb-4`}>
                  {renderIcon(action.icon)}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{action.name}</h3>
                <p className="text-gray-600 mt-1">{action.description}</p>
              </button>
            ))}
          </div>
        </section>

        {/* Recent Tests */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Tests</h2>
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Test Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Created</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Questions</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">JEE Physics Module 3 Test</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Physics</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">March 25, 2025</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">30</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-blue-600 hover:text-blue-800 mr-3">View</button>
                      <button className="text-blue-600 hover:text-blue-800">Download</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">NEET Chemistry Periodic Table</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Chemistry</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">March 23, 2025</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">25</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-blue-600 hover:text-blue-800 mr-3">View</button>
                      <button className="text-blue-600 hover:text-blue-800">Download</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">MHT-CET Biology Practice</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Biology</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">March 20, 2025</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">40</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-blue-600 hover:text-blue-800 mr-3">View</button>
                      <button className="text-blue-600 hover:text-blue-800">Download</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 border-t border-gray-100">
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View All Tests →</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
