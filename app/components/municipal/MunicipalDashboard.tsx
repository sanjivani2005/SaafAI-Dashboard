"use client";

import { useState } from "react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const cleanlinessData = [
  { month: "Jan", impact: 75, target: 80 },
  { month: "Feb", impact: 82, target: 80 },
  { month: "Mar", impact: 78, target: 80 },
  { month: "Apr", impact: 85, target: 80 },
  { month: "May", impact: 88, target: 80 },
  { month: "Jun", impact: 92, target: 80 },
];

const cleanerPerformance = [
  { name: "Mon", cleaner1: 85, cleaner2: 78, cleaner3: 92 },
  { name: "Tue", cleaner1: 88, cleaner2: 82, cleaner3: 89 },
  { name: "Wed", cleaner1: 92, cleaner2: 85, cleaner3: 94 },
  { name: "Thu", cleaner1: 87, cleaner2: 88, cleaner3: 91 },
  { name: "Fri", cleaner1: 90, cleaner2: 86, cleaner3: 93 },
  { name: "Sat", cleaner1: 85, cleaner2: 80, cleaner3: 88 },
  { name: "Sun", cleaner1: 82, cleaner2: 75, cleaner3: 85 },
];

const topFacilities = [
  { name: "Zone A - Central Park", rating: 4.8, status: "Excellent" },
  { name: "Zone B - Market Area", rating: 4.6, status: "Good" },
  { name: "Zone C - Railway Station", rating: 4.5, status: "Good" },
  { name: "Zone D - Bus Stand", rating: 4.4, status: "Good" },
];

const fieldUpdates = [
  { cleaner: "Rajesh Kumar", location: "Zone A - Central Park", status: "In Progress", time: "10:30 AM" },
  { cleaner: "Sunita Patel", location: "Zone B - Market Area", status: "Completed", time: "09:45 AM" },
  { cleaner: "Amit Singh", location: "Zone C - Railway Station", status: "Scheduled", time: "11:00 AM" },
  { cleaner: "Priya Sharma", location: "Zone D - Bus Stand", status: "In Progress", time: "10:15 AM" },
];

export default function MunicipalDashboard() {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white">
        <div className="p-6">
          <h2 className="text-2xl font-bold">Nagpur Municipal Corporation</h2>
          <p className="text-blue-200 text-sm mt-2">Admin Console</p>
        </div>

        <nav className="mt-8">
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setActiveSection("overview")}
                className={`w-full text-left px-6 py-3 transition-colors ${activeSection === "overview" ? "bg-blue-800 border-l-4 border-white" : "hover:bg-blue-800"
                  }`}
              >
                📊 Dashboard Overview
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("cleaners")}
                className={`w-full text-left px-6 py-3 transition-colors ${activeSection === "cleaners" ? "bg-blue-800 border-l-4 border-white" : "hover:bg-blue-800"
                  }`}
              >
                👥 Cleaners Management
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("facilities")}
                className={`w-full text-left px-6 py-3 transition-colors ${activeSection === "facilities" ? "bg-blue-800 border-l-4 border-white" : "hover:bg-blue-800"
                  }`}
              >
                🏢 Facilities
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("reports")}
                className={`w-full text-left px-6 py-3 transition-colors ${activeSection === "reports" ? "bg-blue-800 border-l-4 border-white" : "hover:bg-blue-800"
                  }`}
              >
                📈 Reports
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("settings")}
                className={`w-full text-left px-6 py-3 transition-colors ${activeSection === "settings" ? "bg-blue-800 border-l-4 border-white" : "hover:bg-blue-800"
                  }`}
              >
                ⚙️ Settings
              </button>
            </li>
          </ul>
        </nav>

        <div className="absolute bottom-0 w-64 p-6 border-t border-blue-800">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold">A</span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-blue-200">admin@nmc.gov.in</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-6 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Municipal washroom & cleaner fleet overview</h1>
              <p className="text-gray-600 text-sm mt-1">Real-time monitoring dashboard</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                📥 Export Report
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                🔄 Refresh Data
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Total Toilets</p>
                  <p className="text-3xl font-bold text-gray-800 mt-2">248</p>
                  <p className="text-green-600 text-sm mt-1">↑ 12 from last month</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🚽</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-orange-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Ongoing Tasks</p>
                  <p className="text-3xl font-bold text-gray-800 mt-2">47</p>
                  <p className="text-orange-600 text-sm mt-1">8 high priority</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🔄</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Completed Tasks</p>
                  <p className="text-3xl font-bold text-gray-800 mt-2">1,245</p>
                  <p className="text-green-600 text-sm mt-1">↑ 18% this week</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✅</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow border-l-4 border-red-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Total Repairs</p>
                  <p className="text-3xl font-bold text-gray-800 mt-2">23</p>
                  <p className="text-red-600 text-sm mt-1">5 urgent</p>
                </div>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🔧</span>
                </div>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Cleanliness Trends */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Cleanliness Trends</h3>
              <h4 className="text-sm text-gray-600 mb-4">Washroom Cleanliness Impact</h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={cleanlinessData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="impact" fill="#3B82F6" name="Impact Score" />
                  <Bar dataKey="target" fill="#10B981" name="Target" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Top Cleaners */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Top Cleaners</h3>
              <h4 className="text-sm text-gray-600 mb-4">Cleaner Performance This Week</h4>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={cleanerPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="cleaner1" stroke="#3B82F6" name="Rajesh K." strokeWidth={2} />
                  <Line type="monotone" dataKey="cleaner2" stroke="#10B981" name="Sunita P." strokeWidth={2} />
                  <Line type="monotone" dataKey="cleaner3" stroke="#F59E0B" name="Amit S." strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Today Performance */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Today&apos;s Performance</h3>
              <h4 className="text-sm text-gray-600 mb-4">Top Rated Facilities</h4>
              <div className="space-y-3">
                {topFacilities.map((facility, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-sm font-bold text-blue-600">{index + 1}</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{facility.name}</p>
                        <p className="text-sm text-gray-600">{facility.status}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-lg font-bold text-gray-800 mr-2">{facility.rating}</span>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < Math.floor(facility.rating) ? "text-yellow-400" : "text-gray-300"}>
                            ⭐
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Field Updates */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Field Updates</h3>
              <h4 className="text-sm text-gray-600 mb-4">Cleaner Activity</h4>
              <div className="space-y-3">
                {fieldUpdates.map((update, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-sm">👤</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{update.cleaner}</p>
                        <p className="text-sm text-gray-600">{update.location}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`px-2 py-1 text-xs rounded-full ${update.status === "Completed" ? "bg-green-100 text-green-800" :
                        update.status === "In Progress" ? "bg-blue-100 text-blue-800" :
                          "bg-gray-100 text-gray-800"
                        }`}>
                        {update.status}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">{update.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
