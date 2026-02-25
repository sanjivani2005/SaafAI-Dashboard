"use client";

import { useState } from "react";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const cleanerActivityData = [
  { activity: "High", count: 45 },
  { activity: "Med", count: 32 },
  { activity: "Low", count: 18 },
];

const zonePerformanceData = [
  { ward: "Ward 3", cleanliness: 85, response: 78, complaints: 12 },
  { ward: "Ward 5", cleanliness: 92, response: 88, complaints: 8 },
  { ward: "Ward 8", cleanliness: 78, response: 82, complaints: 15 },
];

const facilityStatusData = [
  { name: "Operational", value: 72, color: "#10B981" },
  { name: "Needs Maintenance", value: 28, color: "#EF4444" },
];

const zoneData = [
  { id: 1, name: "Ward 1", status: "healthy", rating: 4.2, complaints: 5 },
  { id: 2, name: "Ward 2", status: "moderate", rating: 3.8, complaints: 12 },
  { id: 3, name: "Ward 3", status: "healthy", rating: 4.5, complaints: 8 },
  { id: 4, name: "Ward 4", status: "critical", rating: 2.9, complaints: 18 },
  { id: 5, name: "Ward 5", status: "moderate", rating: 3.6, complaints: 12 },
  { id: 6, name: "Ward 6", status: "healthy", rating: 4.1, complaints: 6 },
  { id: 7, name: "Ward 7", status: "moderate", rating: 3.9, complaints: 10 },
  { id: 8, name: "Ward 8", status: "healthy", rating: 4.3, complaints: 7 },
];

const activeCleaners = [
  { id: 1, name: "Rajesh Kumar", zone: "Ward 3", status: "active" },
  { id: 2, name: "Sunita Patel", zone: "Ward 5", status: "active" },
  { id: 3, name: "Amit Singh", zone: "Ward 1", status: "break" },
  { id: 4, name: "Priya Sharma", zone: "Ward 8", status: "active" },
  { id: 5, name: "Vijay Kumar", zone: "Ward 2", status: "active" },
];

export default function GeographicDashboard() {
  const [frequency, setFrequency] = useState("daily");
  const [rating, setRating] = useState("all");
  const [complaints, setComplaints] = useState("all");
  const [viewMode, setViewMode] = useState("heatmap");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const getZoneColor = (status: string) => {
    switch (status) {
      case "healthy": return "#10B981";
      case "moderate": return "#F59E0B";
      case "critical": return "#EF4444";
      default: return "#6B7280";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Geo Sanitation Dashboard</h1>
        <p className="text-gray-600 mt-1">Real-time geographic monitoring and analysis</p>
      </div>

      {/* Filters Section */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="flex flex-wrap gap-4 items-center">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Frequency</label>
            <select 
              value={frequency} 
              onChange={(e) => setFrequency(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
            <select 
              value={rating} 
              onChange={(e) => setRating(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Ratings</option>
              <option value="high">High (4+)</option>
              <option value="medium">Medium (3-4)</option>
              <option value="low">Low (&lt;3)</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">High Complaints</label>
            <select 
              value={complaints} 
              onChange={(e) => setComplaints(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Areas</option>
              <option value="high">High (&gt;10)</option>
              <option value="medium">Medium (5-10)</option>
              <option value="low">Low (&lt;5)</option>
            </select>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setViewMode("heatmap")}
              className={`px-4 py-2 rounded-md transition-colors ${
                viewMode === "heatmap" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Heat Map
            </button>
            <button
              onClick={() => setViewMode("marker")}
              className={`px-4 py-2 rounded-md transition-colors ${
                viewMode === "marker" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Marker View
            </button>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-md transition-colors ${
                selectedCategory === "all" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedCategory("infrastructure")}
              className={`px-4 py-2 rounded-md transition-colors ${
                selectedCategory === "infrastructure" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Infrastructure Issues
            </button>
            <button
              onClick={() => setSelectedCategory("cleaner")}
              className={`px-4 py-2 rounded-md transition-colors ${
                selectedCategory === "cleaner" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Cleaner Issues
            </button>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Total Facilities</h3>
          <p className="text-2xl font-bold text-gray-800">248</p>
          <p className="text-sm text-green-600">↑ 12 from last month</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Open Complaints</h3>
          <p className="text-2xl font-bold text-gray-800">47</p>
          <p className="text-sm text-orange-600">8 high priority</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Avg. Zone Rating</h3>
          <p className="text-2xl font-bold text-gray-800">3.9</p>
          <p className="text-sm text-blue-600">Moderate performance</p>
        </div>
      </div>

      {/* Main Content - Map and Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Section */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Zone Overview</h3>
            
            {/* Map Placeholder */}
            <div className="relative bg-gray-100 rounded-lg h-96 mb-4">
              {/* Simulated Map with Zones */}
              <div className="absolute inset-0 p-4">
                <div className="grid grid-cols-3 gap-2 h-full">
                  {zoneData.map((zone) => (
                    <div
                      key={zone.id}
                      className="relative rounded-lg flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                      style={{ backgroundColor: getZoneColor(zone.status) }}
                    >
                      <div className="text-center text-white">
                        <p className="font-semibold">{zone.name}</p>
                        <p className="text-xs">⭐ {zone.rating}</p>
                        <p className="text-xs">📢 {zone.complaints}</p>
                      </div>
                      
                      {/* Tooltip for Ward 5 */}
                      {zone.name === "Ward 5" && (
                        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded text-xs whitespace-nowrap z-10">
                          <p className="font-semibold">Ward 5</p>
                          <p>Avg Rating: {zone.rating}</p>
                          <p>Complaints: {zone.complaints}</p>
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                            <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* High Complaint Area Circle */}
                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-red-500 rounded-full opacity-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs text-red-600 font-semibold bg-white px-2 py-1 rounded">1 km Radius High Complaint Area</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span>Healthy</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                <span>Moderate</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500 rounded"></div>
                <span>Critical</span>
              </div>
            </div>
          </div>
        </div>

        {/* Active Cleaners Panel */}
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Active Cleaners</h3>
          <div className="space-y-3">
            {activeCleaners.map((cleaner) => (
              <div key={cleaner.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-3 ${
                    cleaner.status === "active" ? "bg-green-500" : "bg-yellow-500"
                  }`}></div>
                  <div>
                    <p className="font-medium text-gray-800">{cleaner.name}</p>
                    <p className="text-sm text-gray-600">{cleaner.zone}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  cleaner.status === "active" 
                    ? "bg-green-100 text-green-800" 
                    : "bg-yellow-100 text-yellow-800"
                }`}>
                  {cleaner.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Charts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* Cleaner Activity Chart */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Cleaner Activity</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={cleanerActivityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="activity" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Zone Performance Chart */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Zone Performance</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={zonePerformanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="ward" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="cleanliness" fill="#10B981" />
              <Bar dataKey="response" fill="#F59E0B" />
              <Bar dataKey="complaints" fill="#EF4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Facility Status Chart */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Facility Status</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={facilityStatusData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {facilityStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
