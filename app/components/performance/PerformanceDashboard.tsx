"use client";

import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

const performanceMetrics = [
  { month: "Jan", efficiency: 85, quality: 88, speed: 82, satisfaction: 90 },
  { month: "Feb", efficiency: 88, quality: 85, speed: 85, satisfaction: 92 },
  { month: "Mar", efficiency: 92, quality: 90, speed: 88, satisfaction: 94 },
  { month: "Apr", efficiency: 87, quality: 92, speed: 84, satisfaction: 89 },
  { month: "May", efficiency: 90, quality: 87, speed: 90, satisfaction: 91 },
  { month: "Jun", efficiency: 94, quality: 93, speed: 92, satisfaction: 95 },
];

const cleanerPerformance = [
  { cleaner: "John A", tasks: 156, rating: 4.8, efficiency: 95 },
  { cleaner: "Sarah K", tasks: 142, rating: 4.6, efficiency: 88 },
  { cleaner: "Mike R", tasks: 138, rating: 4.5, efficiency: 85 },
  { cleaner: "Lisa M", tasks: 145, rating: 4.7, efficiency: 90 },
  { cleaner: "David L", tasks: 132, rating: 4.4, efficiency: 82 },
  { cleaner: "Emma S", tasks: 148, rating: 4.6, efficiency: 87 },
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

export default function PerformanceDashboard() {
  return (
    <div className="space-y-6">
      {/* Performance Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Overall Efficiency</h3>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-green-600">92%</span>
            <span className="text-sm text-green-500">↑ 3%</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Average Quality Score</h3>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">4.6</span>
            <span className="text-sm text-blue-500">↑ 0.2</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Response Time</h3>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-orange-600">12m</span>
            <span className="text-sm text-orange-500">↓ 2m</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Compliance Rate</h3>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-purple-600">96%</span>
            <span className="text-sm text-purple-500">↑ 1%</span>
          </div>
        </div>
      </div>

      {/* Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Monthly Performance Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceMetrics}>
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

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Cleaner Performance Ranking</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={cleanerPerformance} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="cleaner" type="category" width={80} />
              <Tooltip />
              <Legend />
              <Bar dataKey="tasks" fill="#3B82F6" name="Tasks Completed" />
              <Bar dataKey="efficiency" fill="#10B981" name="Efficiency %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Zone Performance Comparison</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={zonePerformance}>
              <PolarGrid />
              <PolarAngleAxis dataKey="zone" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} />
              <Radar name="Cleanliness" dataKey="cleanliness" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
              <Radar name="Response" dataKey="response" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
              <Radar name="Compliance" dataKey="compliance" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.6} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">KPI Performance Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={kpiData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={90} domain={[0, 150]} />
              <Radar name="Current" dataKey="A" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
              <Radar name="Target" dataKey="B" stroke="#EF4444" fill="#EF4444" fillOpacity={0.6} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Performance Metrics Table */}
      <div className="bg-white p-6 rounded-lg shadow">
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
