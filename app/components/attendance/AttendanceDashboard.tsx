"use client";

import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area } from "recharts";

const attendanceData = [
  { day: "Mon", present: 45, absent: 3, late: 2, leave: 2 },
  { day: "Tue", present: 46, absent: 2, late: 1, leave: 3 },
  { day: "Wed", present: 44, absent: 4, late: 2, leave: 2 },
  { day: "Thu", present: 47, absent: 1, late: 1, leave: 3 },
  { day: "Fri", present: 43, absent: 3, late: 3, leave: 3 },
  { day: "Sat", present: 35, absent: 8, late: 2, leave: 7 },
  { day: "Sun", present: 30, absent: 12, late: 1, leave: 9 },
];

const monthlyTrend = [
  { month: "Jan", attendance: 94, target: 95 },
  { month: "Feb", attendance: 92, target: 95 },
  { month: "Mar", attendance: 96, target: 95 },
  { month: "Apr", attendance: 93, target: 95 },
  { month: "May", attendance: 95, target: 95 },
  { month: "Jun", attendance: 97, target: 95 },
];

const shiftDistribution = [
  { shift: "Morning", present: 85, absent: 12, late: 3 },
  { shift: "Afternoon", present: 78, absent: 15, late: 7 },
  { shift: "Night", present: 45, absent: 8, late: 2 },
];

const cleanerAttendance = [
  { name: "John A", present: 28, absent: 1, late: 1, rate: 93.3 },
  { name: "Sarah K", present: 29, absent: 0, late: 1, rate: 96.7 },
  { name: "Mike R", present: 27, absent: 2, late: 1, rate: 90.0 },
  { name: "Lisa M", present: 30, absent: 0, late: 0, rate: 100.0 },
  { name: "David L", present: 26, absent: 3, late: 1, rate: 86.7 },
  { name: "Emma S", present: 28, absent: 1, late: 1, rate: 93.3 },
];

const attendanceReasons = [
  { reason: "Sick Leave", count: 15, percentage: 35 },
  { reason: "Personal Leave", count: 12, percentage: 28 },
  { reason: "Emergency", count: 8, percentage: 19 },
  { reason: "No Show", count: 5, percentage: 12 },
  { reason: "Other", count: 3, percentage: 6 },
];

export default function AttendanceDashboard() {
  return (
    <div className="space-y-6">
      {/* Attendance Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Today's Attendance</h3>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-green-600">87.5%</span>
            <span className="text-sm text-green-500">↑ 2.1%</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Present Today</h3>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">42</span>
            <span className="text-sm text-blue-500">out of 48</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Absent Today</h3>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-red-600">4</span>
            <span className="text-sm text-red-500">+1 from yesterday</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Late Arrivals</h3>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-orange-600">2</span>
            <span className="text-sm text-orange-500">today</span>
          </div>
        </div>
      </div>

      {/* Attendance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Weekly Attendance Pattern</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="present" stackId="1" stroke="#10B981" fill="#10B981" name="Present" />
              <Area type="monotone" dataKey="absent" stackId="1" stroke="#EF4444" fill="#EF4444" name="Absent" />
              <Area type="monotone" dataKey="late" stackId="1" stroke="#F59E0B" fill="#F59E0B" name="Late" />
              <Area type="monotone" dataKey="leave" stackId="1" stroke="#6B7280" fill="#6B7280" name="On Leave" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Monthly Attendance Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[85, 100]} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="attendance" stroke="#3B82F6" name="Attendance %" strokeWidth={2} />
              <Line type="monotone" dataKey="target" stroke="#EF4444" name="Target %" strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Shift-wise Attendance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={shiftDistribution}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="shift" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="present" fill="#10B981" name="Present" />
              <Bar dataKey="absent" fill="#EF4444" name="Absent" />
              <Bar dataKey="late" fill="#F59E0B" name="Late" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Absence Reasons</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={attendanceReasons}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(entry: any) => `${entry.reason}: ${entry.percentage}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
              >
                <Cell fill="#EF4444" />
                <Cell fill="#F59E0B" />
                <Cell fill="#3B82F6" />
                <Cell fill="#8B5CF6" />
                <Cell fill="#6B7280" />
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Individual Attendance Table */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Individual Attendance Records</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cleaner</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Days Present</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Days Absent</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Late Arrivals</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendance Rate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {cleanerAttendance.map((cleaner, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{cleaner.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cleaner.present}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cleaner.absent}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cleaner.late}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cleaner.rate}%</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${cleaner.rate >= 95 ? "bg-green-100 text-green-800" :
                        cleaner.rate >= 90 ? "bg-blue-100 text-blue-800" :
                          cleaner.rate >= 85 ? "bg-yellow-100 text-yellow-800" :
                            "bg-red-100 text-red-800"
                      }`}>
                      {cleaner.rate >= 95 ? "Excellent" :
                        cleaner.rate >= 90 ? "Good" :
                          cleaner.rate >= 85 ? "Average" : "Poor"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Attendance Alerts Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Attendance Alerts</h3>
          <div className="space-y-4">
            <div className="p-4 border-l-4 border-red-500 bg-red-50 rounded">
              <h4 className="text-sm font-semibold text-red-800">Critical - Chronic Absenteeism</h4>
              <p className="text-sm text-red-600 mt-1">David L has been absent 3+ days this month</p>
              <button className="text-xs text-red-500 hover:text-red-700 mt-2 font-medium">Review Case →</button>
            </div>
            <div className="p-4 border-l-4 border-orange-500 bg-orange-50 rounded">
              <h4 className="text-sm font-semibold text-orange-800">Warning - Pattern Detected</h4>
              <p className="text-sm text-orange-600 mt-1">Mike R frequently absent on weekends</p>
              <button className="text-xs text-orange-500 hover:text-orange-700 mt-2 font-medium">Investigate →</button>
            </div>
            <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded">
              <h4 className="text-sm font-semibold text-blue-800">Info - Leave Request</h4>
              <p className="text-sm text-blue-600 mt-1">Sarah K requested leave for next week</p>
              <button className="text-xs text-blue-500 hover:text-blue-700 mt-2 font-medium">Approve/Deny →</button>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Attendance Statistics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Average Attendance Rate</span>
              <span className="text-lg font-semibold text-gray-800">93.2%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Most Punctual</span>
              <span className="text-lg font-semibold text-green-600">Lisa M (100%)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Needs Improvement</span>
              <span className="text-lg font-semibold text-red-600">David L (86.7%)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Weekend Attendance</span>
              <span className="text-lg font-semibold text-orange-600">68.5%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Leave Balance Used</span>
              <span className="text-lg font-semibold text-blue-600">42%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
