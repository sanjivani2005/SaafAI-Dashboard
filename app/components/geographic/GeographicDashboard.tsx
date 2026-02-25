"use client";

import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const zoneDistribution = [
  { zone: "North", facilities: 45, cleaners: 12, complaints: 8 },
  { zone: "South", facilities: 38, cleaners: 10, complaints: 12 },
  { zone: "East", facilities: 52, cleaners: 14, complaints: 6 },
  { zone: "West", facilities: 41, cleaners: 11, complaints: 10 },
  { zone: "Central", facilities: 35, cleaners: 9, complaints: 4 },
];

const facilityRatings = [
  { name: "North Zone", rating: 4.2, facilities: 45 },
  { name: "South Zone", rating: 3.8, facilities: 38 },
  { name: "East Zone", rating: 4.5, facilities: 52 },
  { name: "West Zone", rating: 4.0, facilities: 41 },
  { name: "Central Zone", rating: 4.7, facilities: 35 },
];

const coverageData = [
  { name: "Covered", value: 85, color: "#10B981" },
  { name: "Partially Covered", value: 10, color: "#F59E0B" },
  { name: "Not Covered", value: 5, color: "#EF4444" },
];

const responseTimeByZone = [
  { zone: "North", average: 12, target: 15 },
  { zone: "South", average: 18, target: 15 },
  { zone: "East", average: 10, target: 15 },
  { zone: "West", average: 14, target: 15 },
  { zone: "Central", average: 8, target: 15 },
];

const highDemandAreas = [
  { area: "Downtown", demand: 95, capacity: 80, status: "Overloaded" },
  { area: "Airport", demand: 88, capacity: 85, status: "Near Capacity" },
  { area: "Shopping District", demand: 92, capacity: 90, status: "Optimal" },
  { area: "Residential North", demand: 75, capacity: 70, status: "Good" },
  { area: "Industrial Zone", demand: 68, capacity: 75, status: "Underutilized" },
];

export default function GeographicDashboard() {
  return (
    <div className="space-y-6">
      {/* Geographic Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Total Facilities</h3>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">211</span>
            <span className="text-sm text-gray-500">across 5 zones</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Coverage Rate</h3>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-green-600">85%</span>
            <span className="text-sm text-green-500">↑ 2%</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Avg Response Time</h3>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-orange-600">12.4m</span>
            <span className="text-sm text-orange-500">by zone</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Critical Zones</h3>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-red-600">2</span>
            <span className="text-sm text-red-500">need attention</span>
          </div>
        </div>
      </div>

      {/* Geographic Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Zone Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={zoneDistribution}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="zone" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="facilities" fill="#3B82F6" name="Facilities" />
              <Bar dataKey="cleaners" fill="#10B981" name="Cleaners" />
              <Bar dataKey="complaints" fill="#EF4444" name="Complaints" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Facility Ratings by Zone</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={facilityRatings}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 5]} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="rating" stroke="#8B5CF6" name="Average Rating" strokeWidth={2} />
              <Bar dataKey="facilities" fill="#3B82F6" name="Number of Facilities" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Service Coverage</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={coverageData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {coverageData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Response Time by Zone</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={responseTimeByZone}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="zone" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="average" fill="#F59E0B" name="Average (min)" />
              <Bar dataKey="target" fill="#EF4444" name="Target (min)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* High Demand Areas Table */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">High Demand Areas Analysis</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Area</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Demand %</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Capacity %</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {highDemandAreas.map((area, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{area.area}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{area.demand}%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{area.capacity}%</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      area.status === "Overloaded" ? "bg-red-100 text-red-800" :
                      area.status === "Near Capacity" ? "bg-orange-100 text-orange-800" :
                      area.status === "Optimal" ? "bg-green-100 text-green-800" :
                      "bg-blue-100 text-blue-800"
                    }`}>
                      {area.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {area.status === "Overloaded" && (
                      <button className="text-red-600 hover:text-red-900 font-medium">Reallocate Resources</button>
                    )}
                    {area.status === "Near Capacity" && (
                      <button className="text-orange-600 hover:text-orange-900 font-medium">Monitor Closely</button>
                    )}
                    {area.status === "Optimal" && (
                      <span className="text-green-600 font-medium">Maintain</span>
                    )}
                    {area.status === "Underutilized" && (
                      <button className="text-blue-600 hover:text-blue-900 font-medium">Optimize</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Geographic Heatmap Placeholder */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Geographic Coverage Map</h3>
        <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
          <div className="text-center">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <p className="text-gray-500 text-lg font-medium">Interactive Geographic Map</p>
            <p className="text-gray-400 text-sm mt-2">Real-time facility locations and coverage areas</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Enable Map View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
