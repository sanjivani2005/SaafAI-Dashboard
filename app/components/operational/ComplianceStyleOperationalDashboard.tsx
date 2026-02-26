"use client";

import { useState } from "react";
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const resolutionTimeData = [
  { day: "Mon", hours: 2.5 },
  { day: "Tue", hours: 2.2 },
  { day: "Wed", hours: 1.8 },
  { day: "Thu", hours: 1.5 },
  { day: "Fri", hours: 1.2 },
  { day: "Sat", hours: 1.0 },
];

const issueDistribution = [
  { name: "Infrastructure Issues", value: 58, color: "#3B82F6" },
  { name: "Cleaner Performance", value: 42, color: "#10B981" },
];

const operationalAlerts = [
  { id: "OP001", assignedTo: "Rajesh Kumar", timeRemaining: "2h 15m", status: "Pending" },
  { id: "OP002", assignedTo: "Sunita Patel", timeRemaining: "45m", status: "In Progress" },
  { id: "OP003", assignedTo: "Amit Singh", timeRemaining: "5h 30m", status: "Escalated" },
  { id: "OP004", assignedTo: "Priya Sharma", timeRemaining: "Resolved", status: "Resolved" },
  { id: "OP005", assignedTo: "Vijay Kumar", timeRemaining: "1h 10m", status: "In Progress" },
];

export default function OperationalDashboard() {
  const [slaStatus, setSlaStatus] = useState("all");
  const [timeRange, setTimeRange] = useState("today");
  const [category, setCategory] = useState("all");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending": return "text-yellow-600 bg-yellow-100";
      case "In Progress": return "text-blue-600 bg-blue-100";
      case "Escalated": return "text-red-600 bg-red-100";
      case "Resolved": return "text-green-600 bg-green-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto flex flex-col">
        {/* Dashboard Content */}
        <main className="flex-1 p-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Total Facilities</h3>
              <p className="text-2xl font-bold text-gray-800">182</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Active Complaints</h3>
              <p className="text-2xl font-bold text-gray-800">24</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Compliance %</h3>
              <p className="text-2xl font-bold text-gray-800">87.5%</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Avg Resolution Time</h3>
              <p className="text-2xl font-bold text-gray-800">1.8 hrs</p>
            </div>
          </div>

          {/* SLA Compliance Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Gauge Chart */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">SLA Compliance</h3>
              <div className="flex items-center justify-center">
                <div className="relative w-48 h-48">
                  {/* Gauge Background */}
                  <svg className="transform -rotate-90 w-48 h-48">
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      stroke="#E5E7EB"
                      strokeWidth="16"
                      fill="none"
                    />
                    {/* Green Zone */}
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      stroke="#10B981"
                      strokeWidth="16"
                      fill="none"
                      strokeDasharray="125.6 376.8"
                      strokeDashoffset="0"
                    />
                    {/* Yellow Zone */}
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      stroke="#F59E0B"
                      strokeWidth="16"
                      fill="none"
                      strokeDasharray="125.6 376.8"
                      strokeDashoffset="125.6"
                    />
                    {/* Red Zone */}
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      stroke="#EF4444"
                      strokeWidth="16"
                      fill="none"
                      strokeDasharray="125.6 376.8"
                      strokeDashoffset="251.2"
                    />
                    {/* Current Value */}
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      stroke="#3B82F6"
                      strokeWidth="16"
                      fill="none"
                      strokeDasharray="50.24 452.16"
                      strokeDashoffset="0"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-gray-800">87.5%</p>
                      <p className="text-sm text-gray-600">Compliant</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Real-Time Alert Status Table */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Real-Time Alert Status</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Complaint ID</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Assigned Cleaner</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Time Remaining</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {operationalAlerts.map((alert) => (
                      <tr key={alert.id}>
                        <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{alert.id}</td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{alert.assignedTo}</td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{alert.timeRemaining}</td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(alert.status)}`}>
                            {alert.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Resolution Time Trend */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Resolution Time Trend</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={resolutionTimeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="hours" stroke="#3B82F6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Pie Chart */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Issue Categories</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={issueDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {issueDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Workflow Overview */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Workflow Overview</h3>
            <div className="flex items-center justify-around">
              {/* Level 1 */}
              <div className="text-center">
                <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <div className="text-center">
                    <svg className="w-12 h-12 text-blue-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <p className="text-sm font-semibold text-blue-800">Level 1</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 font-medium">Cleaner Notification</p>
                <p className="text-xs text-green-600">Alert Sent</p>
              </div>

              {/* Arrow */}
              <div className="flex items-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              {/* Level 2 */}
              <div className="text-center">
                <div className="w-32 h-32 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <div className="text-center">
                    <svg className="w-12 h-12 text-orange-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                    <p className="text-sm font-semibold text-orange-800">Level 2</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 font-medium">Supervisor Escalation</p>
                <p className="text-xs text-orange-600">Escalated to Supervisor</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
