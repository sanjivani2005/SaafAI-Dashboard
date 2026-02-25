"use client";

import { useState } from "react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const performanceData = [
  { month: "Jan", efficiency: 85, quality: 88, speed: 82, satisfaction: 90 },
  { month: "Feb", efficiency: 88, quality: 85, speed: 85, satisfaction: 92 },
  { month: "Mar", efficiency: 92, quality: 90, speed: 88, satisfaction: 94 },
  { month: "Apr", efficiency: 87, quality: 92, speed: 84, satisfaction: 89 },
  { month: "May", efficiency: 90, quality: 87, speed: 90, satisfaction: 91 },
  { month: "Jun", efficiency: 94, quality: 93, speed: 92, satisfaction: 95 },
];

const cleanerPerformance = [
  { name: "John A", tasks: 156, rating: 4.8, efficiency: 95 },
  { name: "Sarah K", tasks: 142, rating: 4.6, efficiency: 88 },
  { name: "Mike R", tasks: 138, rating: 4.5, efficiency: 85 },
  { name: "Lisa M", tasks: 145, rating: 4.7, efficiency: 90 },
  { name: "David L", tasks: 132, rating: 4.4, efficiency: 82 },
  { name: "Emma S", tasks: 148, rating: 4.6, efficiency: 87 },
];

const zonePerformance = [
  { zone: "North", cleanliness: 92, response: 88, compliance: 95 },
  { zone: "South", cleanliness: 88, response: 92, compliance: 90 },
  { zone: "East", cleanliness: 90, response: 85, compliance: 92 },
  { zone: "West", cleanliness: 85, response: 90, compliance: 88 },
  { zone: "Central", cleanliness: 94, response: 94, compliance: 96 },
];

const kpiData = [
  { subject: "Efficiency", A: 120, B: 110, fullMark: 150 },
  { subject: "Quality", A: 98, B: 130, fullMark: 150 },
  { subject: "Speed", A: 86, B: 130, fullMark: 150 },
  { subject: "Satisfaction", A: 99, B: 100, fullMark: 150 },
  { subject: "Compliance", A: 85, B: 90, fullMark: 150 },
  { subject: "Response Time", A: 65, B: 85, fullMark: 150 },
];

const performanceTrend = [
  { day: "Mon", performance: 85 },
  { day: "Tue", performance: 88 },
  { day: "Wed", performance: 82 },
  { day: "Thu", performance: 90 },
  { day: "Fri", performance: 87 },
  { day: "Sat", performance: 92 },
  { day: "Sun", performance: 89 },
];

const topPerformers = [
  { rank: 1, name: "John Abraham", score: 95, tasks: 156, rating: 4.8 },
  { rank: 2, name: "Lisa Martinez", score: 90, tasks: 145, rating: 4.7 },
  { rank: 3, name: "Emma Stone", score: 87, tasks: 148, rating: 4.6 },
  { rank: 4, name: "Sarah Kim", score: 88, tasks: 142, rating: 4.6 },
  { rank: 5, name: "Mike Roberts", score: 85, tasks: 138, rating: 4.5 },
];

export default function PerformanceDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("week");

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Performance Dashboard</h1>
        <p className="text-gray-600 mt-1">Track and analyze cleaner performance metrics</p>
      </div>

      {/* Performance Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow border-l-4 border-green-500">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Overall Efficiency</h3>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-green-600">92%</span>
            <span className="text-sm text-green-500">↑ 3%</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Average Quality Score</h3>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">4.6</span>
            <span className="text-sm text-blue-500">↑ 0.2</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border-l-4 border-orange-500">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Response Time</h3>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-orange-600">12m</span>
            <span className="text-sm text-orange-500">↓ 2m</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border-l-4 border-purple-500">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Compliance Rate</h3>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-purple-600">96%</span>
            <span className="text-sm text-purple-500">↑ 1%</span>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Performance Trend Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Performance Trend</h3>
            <div className="flex gap-2">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded text-sm"
              >
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
              </select>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="performance" stroke="#3B82F6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Top Performers */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Top Performers</h3>
          <div className="space-y-3">
            {topPerformers.map((performer) => (
              <div key={performer.rank} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${performer.rank === 1 ? "bg-yellow-400 text-white" :
                    performer.rank === 2 ? "bg-gray-400 text-white" :
                      performer.rank === 3 ? "bg-orange-400 text-white" :
                        "bg-blue-100 text-blue-600"
                    }`}>
                    {performer.rank}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{performer.name}</p>
                    <p className="text-sm text-gray-600">Score: {performer.score}%</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Tasks: {performer.tasks}</p>
                  <p className="text-sm text-gray-600">⭐ {performer.rating}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Monthly Performance Metrics */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Monthly Performance Metrics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="efficiency" stroke="#3B82F6" name="Efficiency" strokeWidth={2} />
              <Line type="monotone" dataKey="quality" stroke="#10B981" name="Quality" strokeWidth={2} />
              <Line type="monotone" dataKey="speed" stroke="#F59E0B" name="Speed" strokeWidth={2} />
              <Line type="monotone" dataKey="satisfaction" stroke="#8B5CF6" name="Satisfaction" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Cleaner Performance Comparison */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Cleaner Performance Comparison</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={cleanerPerformance} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={80} />
              <Tooltip />
              <Legend />
              <Bar dataKey="tasks" fill="#3B82F6" name="Tasks Completed" />
              <Bar dataKey="efficiency" fill="#10B981" name="Efficiency %" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Zone Performance Radar */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Zone Performance Comparison</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={zonePerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="zone" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="cleanliness" fill="#10B981" name="Cleanliness" />
              <Bar dataKey="response" fill="#3B82F6" name="Response Time" />
              <Bar dataKey="compliance" fill="#8B5CF6" name="Compliance" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* KPI Performance */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">KPI Performance Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={kpiData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="subject" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="A" fill="#3B82F6" name="Current" />
              <Bar dataKey="B" fill="#EF4444" name="Target" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Performance Metrics Table */}
      <div className="bg-white p-6 rounded-lg shadow mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Detailed Performance Metrics</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Metric</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Target</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Task Completion Rate</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">94%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">90%</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Above Target</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Average Response Time</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">12 minutes</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15 minutes</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Excellent</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Quality Score</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4.6/5.0</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4.5/5.0</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Meeting Target</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
