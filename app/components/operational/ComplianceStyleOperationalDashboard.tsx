"use client";

import { useState } from "react";
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from "recharts";

const monthlyData = [
  { month: "Jan", complaints: 45, resolved: 42, pending: 3 },
  { month: "Feb", complaints: 52, resolved: 48, pending: 4 },
  { month: "Mar", complaints: 38, resolved: 35, pending: 3 },
  { month: "Apr", complaints: 61, resolved: 58, pending: 3 },
  { month: "May", complaints: 55, resolved: 52, pending: 3 },
  { month: "Jun", complaints: 48, resolved: 45, pending: 3 },
];

const categoryData = [
  { name: "Cleaning", value: 35, color: "#3B82F6" },
  { name: "Maintenance", value: 28, color: "#10B981" },
  { name: "Waste Management", value: 22, color: "#F59E0B" },
  { name: "Infrastructure", value: 15, color: "#EF4444" },
];

const performanceData = [
  { area: "Downtown", efficiency: 92, complaints: 12 },
  { area: "North Zone", efficiency: 88, complaints: 18 },
  { area: "South Zone", efficiency: 85, complaints: 22 },
  { area: "East Zone", efficiency: 90, complaints: 15 },
  { area: "West Zone", efficiency: 87, complaints: 19 },
];

const recentActivities = [
  { id: "OP001", type: "Cleaning", location: "Downtown Plaza", status: "Completed", time: "2 hours ago" },
  { id: "OP002", type: "Maintenance", location: "North Park", status: "In Progress", time: "1 hour ago" },
  { id: "OP003", type: "Waste Collection", location: "South Market", status: "Pending", time: "30 mins ago" },
  { id: "OP004", type: "Cleaning", location: "East Street", status: "Completed", time: "3 hours ago" },
  { id: "OP005", type: "Maintenance", location: "West Garden", status: "In Progress", time: "45 mins ago" },
];

export default function OperationalDashboard() {
  const [timeRange, setTimeRange] = useState("month");
  const [statusFilter, setStatusFilter] = useState("all");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "text-green-600 bg-green-100";
      case "In Progress": return "text-blue-600 bg-blue-100";
      case "Pending": return "text-yellow-600 bg-yellow-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Cleaning": return "text-blue-600 bg-blue-100";
      case "Maintenance": return "text-orange-600 bg-orange-100";
      case "Waste Collection": return "text-green-600 bg-green-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        {/* Navigation */}

        {/* Filters */}
        <div className="mt-8 px-4">
          <h3 className="text-sm font-semibold text-gray-600 mb-3">Time Range</h3>
          <div className="space-y-2 mb-6">
            {["week", "month", "quarter"].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`w-full text-left px-3 py-2 rounded text-sm capitalize ${timeRange === range
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
              >
                {range.charAt(0).toUpperCase() + range.slice(1)}
              </button>
            ))}
          </div>

          <h3 className="text-sm font-semibold text-gray-600 mb-3">Status Filter</h3>
          <div className="space-y-2">
            {["all", "completed", "in-progress", "pending"].map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`w-full text-left px-3 py-2 rounded text-sm capitalize ${statusFilter === status
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
              >
                {status.replace("-", " ")}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-800">Operational Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Total Complaints</h3>
              <p className="text-2xl font-bold text-gray-800">299</p>
              <p className="text-xs text-green-600 mt-1">↑ 12% from last month</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Resolved</h3>
              <p className="text-2xl font-bold text-gray-800">280</p>
              <p className="text-xs text-green-600 mt-1">↑ 8% from last month</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Pending</h3>
              <p className="text-2xl font-bold text-gray-800">19</p>
              <p className="text-xs text-red-600 mt-1">↑ 3% from last month</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Efficiency Rate</h3>
              <p className="text-2xl font-bold text-gray-800">93.6%</p>
              <p className="text-xs text-green-600 mt-1">↑ 2.1% from last month</p>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Monthly Complaints Trend */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Monthly Complaints Trend</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="complaints" stroke="#3B82F6" strokeWidth={2} name="Total Complaints" />
                  <Line type="monotone" dataKey="resolved" stroke="#10B981" strokeWidth={2} name="Resolved" />
                  <Line type="monotone" dataKey="pending" stroke="#F59E0B" strokeWidth={2} name="Pending" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Category Distribution */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Complaint Categories</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Area Performance */}
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Area Performance</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="area" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="efficiency" fill="#3B82F6" name="Efficiency %" />
                <Bar dataKey="complaints" fill="#EF4444" name="Complaints" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Activities Table */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activities</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Activity ID</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentActivities.map((activity) => (
                    <tr key={activity.id}>
                      <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{activity.id}</td>
                      <td className="px-4 py-2 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${getTypeColor(activity.type)}`}>
                          {activity.type}
                        </span>
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{activity.location}</td>
                      <td className="px-4 py-2 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(activity.status)}`}>
                          {activity.status}
                        </span>
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{activity.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
