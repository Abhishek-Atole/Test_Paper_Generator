import React from "react";
import { useNavigate } from "react-router-dom";

export default function Account() {
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
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors bg-blue-50 text-blue-700"
              >
                <span className="text-blue-600">
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
          <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
          <p className="text-gray-600 mt-1">Manage your profile and subscription details.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Information */}
          <div className="md:col-span-2 bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="border-b border-gray-200 px-6 py-4">
              <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    defaultValue="John Smith"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    defaultValue="john.smith@example.com"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-1">Institution Name</label>
                  <input 
                    type="text" 
                    id="institution" 
                    name="institution"
                    defaultValue="Smith Academy"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">Position/Role</label>
                  <input 
                    type="text" 
                    id="position" 
                    name="position"
                    defaultValue="Head of Science Department"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Save Changes
                </button>
              </div>
            </div>
          </div>

          {/* Subscription Information */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="border-b border-gray-200 px-6 py-4">
              <h2 className="text-lg font-medium text-gray-900">Subscription</h2>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-medium text-gray-700">Current Plan</h3>
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                </div>
                <p className="text-lg font-semibold text-gray-900">Premium Monthly</p>
                <p className="text-sm text-gray-500">₹99 per month</p>
              </div>
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-700 mb-1">Billing Cycle</h3>
                <p className="text-gray-900">Renews on April 29, 2025</p>
              </div>
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-700 mb-1">Payment Method</h3>
                <div className="flex items-center">
                  <div className="h-8 w-12 bg-gray-200 rounded mr-2 flex items-center justify-center text-xs font-medium text-gray-600">VISA</div>
                  <p className="text-gray-900">•••• •••• •••• 4242</p>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200 flex flex-col gap-2">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Manage Subscription
                </button>
                <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  Update Payment Method
                </button>
              </div>
            </div>
          </div>

          {/* Password Reset */}
          <div className="md:col-span-2 bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="border-b border-gray-200 px-6 py-4">
              <h2 className="text-lg font-medium text-gray-900">Change Password</h2>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                  <input 
                    type="password" 
                    id="current-password" 
                    name="current-password"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div className="md:col-span-2"></div>
                <div>
                  <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                  <input 
                    type="password" 
                    id="new-password" 
                    name="new-password"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                  <input 
                    type="password" 
                    id="confirm-password" 
                    name="confirm-password"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Update Password
                </button>
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-red-200">
            <div className="border-b border-red-200 px-6 py-4 bg-red-50">
              <h2 className="text-lg font-medium text-red-700">Danger Zone</h2>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
              <button className="px-4 py-2 bg-white border border-red-300 text-red-600 rounded-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
