"use client";

import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart } from "recharts";

const performanceData = [
  { name: "Mon", tasks: 45, rating: 4.5 },
  { name: "Tue", tasks: 52, rating: 4.7 },
  { name: "Wed", tasks: 38, rating: 4.3 },
  { name: "Thu", tasks: 65, rating: 4.8 },
  { name: "Fri", tasks: 48, rating: 4.6 },
  { name: "Sat", tasks: 42, rating: 4.4 },
  { name: "Sun", tasks: 35, rating: 4.2 },
];

const toiletRatingData = [
  { name: "Mon", t1: 4.2, t2: 4.5, t3: 4.1, t4: 4.6 },
  { name: "Tue", t1: 4.3, t2: 4.4, t3: 4.2, t4: 4.7 },
  { name: "Wed", t1: 4.1, t2: 4.6, t3: 4.3, t4: 4.5 },
  { name: "Thu", t1: 4.4, t2: 4.7, t3: 4.4, t4: 4.8 },
  { name: "Fri", t1: 4.5, t2: 4.5, t3: 4.2, t4: 4.6 },
  { name: "Sat", t1: 4.3, t2: 4.4, t3: 4.1, t4: 4.5 },
  { name: "Sun", t1: 4.2, t2: 4.3, t3: 4.0, t4: 4.4 },
];

const complaintRatingData = [
  { name: "Mon", complaints: 12, rating: 4.2 },
  { name: "Tue", complaints: 8, rating: 4.5 },
  { name: "Wed", complaints: 15, rating: 4.1 },
  { name: "Thu", complaints: 6, rating: 4.8 },
  { name: "Fri", complaints: 10, rating: 4.4 },
  { name: "Sat", complaints: 18, rating: 3.9 },
  { name: "Sun", complaints: 14, rating: 4.0 },
];

const taskProgressData = [
  { name: "Week 1", completed: 85, pending: 15 },
  { name: "Week 2", completed: 78, pending: 22 },
  { name: "Week 3", completed: 92, pending: 8 },
  { name: "Week 4", completed: 88, pending: 12 },
];

export default function OperationalDashboard() {
  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Average Daily Rating</h3>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-800">4.7</span>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-4 h-4 ${i < 4 ? 'fill-current' : 'fill-gray-300'}`} viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Tasks Completed</h3>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-gray-800">128</span>
            <span className="text-sm text-orange-600">32 Pending</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Open Complaints</h3>
          <span className="text-2xl font-bold text-gray-800">14</span>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Active Cleaners</h3>
          <span className="text-2xl font-bold text-gray-800">26</span>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Cleaner Performance Trend</h3>
          <ResponsiveContainer width="100%" height={256}>
            <ComposedChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="tasks" fill="#3B82F6" name="Tasks Completed" />
              <Line yAxisId="right" type="monotone" dataKey="rating" stroke="#10B981" name="Avg Rating" strokeWidth={2} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Toilet Rating Comparison</h3>
            <select className="px-3 py-1 border border-gray-300 rounded text-sm">
              <option>Last 7 Days</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={256}>
            <LineChart data={toiletRatingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 5]} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="t1" stroke="#3B82F6" name="T1" strokeWidth={2} />
              <Line type="monotone" dataKey="t2" stroke="#10B981" name="T2" strokeWidth={2} />
              <Line type="monotone" dataKey="t3" stroke="#F59E0B" name="T3" strokeWidth={2} />
              <Line type="monotone" dataKey="t4" stroke="#EF4444" name="T4" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Complaint vs Rating Analysis</h3>
          <ResponsiveContainer width="100%" height={256}>
            <ComposedChart data={complaintRatingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" domain={[0, 5]} />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="complaints" fill="#EF4444" name="Complaints" />
              <Line yAxisId="right" type="monotone" dataKey="rating" stroke="#10B981" name="Rating" strokeWidth={2} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Task Progress</h3>
          <ResponsiveContainer width="100%" height={256}>
            <BarChart data={taskProgressData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="completed" stackId="a" fill="#10B981" name="Completed" />
              <Bar dataKey="pending" stackId="a" fill="#F59E0B" name="Pending" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Task Progress Bar */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Task Progress</h3>
          <span className="text-sm text-gray-600">76% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
          <div className="bg-green-500 h-3 rounded-full" style={{ width: '76%' }}></div>
        </div>
        <div className="flex gap-2">
          {["Morning", "Afternoon", "Night"].map((shift) => (
            <button
              key={shift}
              className="px-4 py-2 rounded-lg bg-blue-500 text-white"
            >
              {shift}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
