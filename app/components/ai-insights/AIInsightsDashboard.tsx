"use client";

import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell } from "recharts";

const predictiveData = [
  { month: "Jan", actual: 120, predicted: 125, confidence: 85 },
  { month: "Feb", actual: 132, predicted: 130, confidence: 88 },
  { month: "Mar", actual: 145, predicted: 148, confidence: 92 },
  { month: "Apr", actual: 138, predicted: 142, confidence: 87 },
  { month: "May", actual: 155, predicted: 160, confidence: 90 },
  { month: "Jun", actual: 162, predicted: 165, confidence: 91 },
];

const anomalyData = [
  { day: "Mon", normal: 95, anomalies: 5 },
  { day: "Tue", normal: 92, anomalies: 8 },
  { day: "Wed", normal: 98, anomalies: 2 },
  { day: "Thu", normal: 88, anomalies: 12 },
  { day: "Fri", normal: 94, anomalies: 6 },
  { day: "Sat", normal: 85, anomalies: 15 },
  { day: "Sun", normal: 90, anomalies: 10 },
];

const efficiencyGains = [
  { area: "Task Assignment", before: 65, after: 88, improvement: 23 },
  { area: "Route Optimization", before: 70, after: 92, improvement: 22 },
  { area: "Resource Allocation", before: 60, after: 85, improvement: 25 },
  { area: "Response Time", before: 72, after: 90, improvement: 18 },
  { area: "Quality Control", before: 68, after: 86, improvement: 18 },
];

const aiRecommendations = [
  { category: "Preventive", count: 45, impact: "High" },
  { category: "Optimization", count: 32, impact: "Medium" },
  { category: "Resource", count: 28, impact: "High" },
  { category: "Schedule", count: 19, impact: "Medium" },
];

const modelPerformance = [
  { model: "Demand Forecast", accuracy: 94, precision: 92, recall: 89 },
  { model: "Anomaly Detection", accuracy: 91, precision: 88, recall: 93 },
  { model: "Resource Optimization", accuracy: 89, precision: 87, recall: 85 },
  { model: "Quality Prediction", accuracy: 92, precision: 90, recall: 88 },
];

export default function AIInsightsDashboard() {
  return (
    <div className="space-y-6">
      {/* AI Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-600 mb-2">AI Accuracy Rate</h3>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-purple-600">91.5%</span>
            <span className="text-sm text-purple-500">↑ 2.3%</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Predictions Made</h3>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">1,247</span>
            <span className="text-sm text-blue-500">this week</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Anomalies Detected</h3>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-orange-600">58</span>
            <span className="text-sm text-orange-500">resolved</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Efficiency Gains</h3>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-green-600">23%</span>
            <span className="text-sm text-green-500">improvement</span>
          </div>
        </div>
      </div>

      {/* AI Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Predictive Analytics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={predictiveData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="actual" stroke="#3B82F6" name="Actual" strokeWidth={2} />
              <Line type="monotone" dataKey="predicted" stroke="#10B981" name="Predicted" strokeWidth={2} strokeDasharray="5 5" />
              <Line type="monotone" dataKey="confidence" stroke="#8B5CF6" name="Confidence %" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Anomaly Detection</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={anomalyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="normal" stackId="1" stroke="#10B981" fill="#10B981" name="Normal Operations" />
              <Area type="monotone" dataKey="anomalies" stackId="1" stroke="#EF4444" fill="#EF4444" name="Anomalies" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">AI-Driven Efficiency Gains</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={efficiencyGains}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="area" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="before" fill="#94A3B8" name="Before AI" />
              <Bar dataKey="after" fill="#10B981" name="After AI" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">AI Recommendations</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={aiRecommendations}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(entry: any) => `${entry.category}: ${entry.count}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
              >
                {aiRecommendations.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={
                    entry.category === "Preventive" ? "#3B82F6" :
                      entry.category === "Optimization" ? "#10B981" :
                        entry.category === "Resource" ? "#F59E0B" :
                          "#8B5CF6"
                  } />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Model Performance Table */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">AI Model Performance</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Model</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Accuracy</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precision</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recall</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {modelPerformance.map((model, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{model.model}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{model.accuracy}%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{model.precision}%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{model.recall}%</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Optimal
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* AI Insights Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Active AI Insights</h3>
          <div className="space-y-4">
            <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded">
              <h4 className="text-sm font-semibold text-blue-800">Demand Spike Predicted</h4>
              <p className="text-sm text-blue-600 mt-1">Expected 40% increase in Downtown area tomorrow afternoon</p>
              <button className="text-xs text-blue-500 hover:text-blue-700 mt-2 font-medium">View Details →</button>
            </div>
            <div className="p-4 border-l-4 border-orange-500 bg-orange-50 rounded">
              <h4 className="text-sm font-semibold text-orange-800">Resource Optimization</h4>
              <p className="text-sm text-orange-600 mt-1">3 cleaners can be reallocated from West to North zone</p>
              <button className="text-xs text-orange-500 hover:text-orange-700 mt-2 font-medium">Apply Suggestion →</button>
            </div>
            <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded">
              <h4 className="text-sm font-semibold text-green-800">Quality Improvement</h4>
              <p className="text-sm text-green-600 mt-1">New cleaning protocol could increase ratings by 0.3 points</p>
              <button className="text-xs text-green-500 hover:text-green-700 mt-2 font-medium">Learn More →</button>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">AI Learning Progress</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Pattern Recognition</span>
                <span className="text-gray-800 font-medium">87%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '87%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Predictive Accuracy</span>
                <span className="text-gray-800 font-medium">92%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Anomaly Detection</span>
                <span className="text-gray-800 font-medium">78%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Optimization Engine</span>
                <span className="text-gray-800 font-medium">95%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
