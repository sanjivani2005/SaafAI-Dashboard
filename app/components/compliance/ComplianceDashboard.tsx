"use client";

import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area } from "recharts";

const complianceMetrics = [
  { month: "Jan", score: 88, target: 90, gap: 2 },
  { month: "Feb", score: 91, target: 90, gap: -1 },
  { month: "Mar", score: 93, target: 90, gap: -3 },
  { month: "Apr", score: 89, target: 90, gap: 1 },
  { month: "May", score: 95, target: 90, gap: -5 },
  { month: "Jun", score: 94, target: 90, gap: -4 },
];

const violationTypes = [
  { type: "Safety", count: 8, severity: "High" },
  { type: "Documentation", count: 12, severity: "Medium" },
  { type: "Timing", count: 15, severity: "Low" },
  { type: "Quality", count: 6, severity: "High" },
  { type: "Procedural", count: 10, severity: "Medium" },
];

const auditResults = [
  { area: "Safety Protocols", compliance: 96, issues: 2 },
  { area: "Documentation", compliance: 88, issues: 5 },
  { area: "Training Records", compliance: 92, issues: 3 },
  { area: "Equipment Maintenance", compliance: 94, issues: 2 },
  { area: "Quality Standards", compliance: 90, issues: 4 },
];

const regulatoryStatus = [
  { regulation: "Health & Safety", status: "Compliant", lastAudit: "2024-05-15", nextAudit: "2024-08-15" },
  { regulation: "Environmental", status: "Compliant", lastAudit: "2024-04-20", nextAudit: "2024-07-20" },
  { regulation: "Labor Standards", status: "Under Review", lastAudit: "2024-03-10", nextAudit: "2024-06-10" },
  { regulation: "Quality Control", status: "Compliant", lastAudit: "2024-05-01", nextAudit: "2024-08-01" },
];

const riskAssessment = [
  { category: "High Risk", count: 3, mitigated: 2, pending: 1 },
  { category: "Medium Risk", count: 8, mitigated: 5, pending: 3 },
  { category: "Low Risk", count: 15, mitigated: 12, pending: 3 },
];

export default function ComplianceDashboard() {
  return (
    <div className="space-y-6">
      {/* Compliance Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Overall Compliance</h3>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-green-600">94%</span>
            <span className="text-sm text-green-500">↑ 2%</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Open Violations</h3>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-orange-600">41</span>
            <span className="text-sm text-orange-500">-12 this month</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Audit Score</h3>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">92/100</span>
            <span className="text-sm text-blue-500">Excellent</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Risk Mitigated</h3>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-purple-600">78%</span>
            <span className="text-sm text-purple-500">of identified</span>
          </div>
        </div>
      </div>

      {/* Compliance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Compliance Score Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={complianceMetrics}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[80, 100]} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="score" stroke="#10B981" name="Compliance Score" strokeWidth={2} />
              <Line type="monotone" dataKey="target" stroke="#EF4444" name="Target" strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Violation Types</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={violationTypes}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="type" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#EF4444" name="Violations" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Audit Results by Area</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={auditResults}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="area" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="compliance" stroke="#10B981" fill="#10B981" fillOpacity={0.6} name="Compliance %" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Risk Assessment</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={riskAssessment}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(entry: any) => `${entry.category}: ${entry.count}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
              >
                <Cell fill="#EF4444" />
                <Cell fill="#F59E0B" />
                <Cell fill="#10B981" />
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Regulatory Compliance Table */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Regulatory Compliance Status</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Regulation</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Audit</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Next Audit</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {regulatoryStatus.map((reg, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{reg.regulation}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${reg.status === "Compliant" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }`}>
                      {reg.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{reg.lastAudit}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{reg.nextAudit}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-blue-600 hover:text-blue-900 font-medium">View Report</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Compliance Actions Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Pending Compliance Actions</h3>
          <div className="space-y-4">
            <div className="p-4 border-l-4 border-red-500 bg-red-50 rounded">
              <h4 className="text-sm font-semibold text-red-800">High Priority - Safety Protocol Update</h4>
              <p className="text-sm text-red-600 mt-1">Due in 3 days - Affects all cleaning staff</p>
              <button className="text-xs text-red-500 hover:text-red-700 mt-2 font-medium">Take Action →</button>
            </div>
            <div className="p-4 border-l-4 border-orange-500 bg-orange-50 rounded">
              <h4 className="text-sm font-semibold text-orange-800">Medium Priority - Documentation Review</h4>
              <p className="text-sm text-orange-600 mt-1">Due in 10 days - Quarterly compliance review</p>
              <button className="text-xs text-orange-500 hover:text-orange-700 mt-2 font-medium">Schedule Review →</button>
            </div>
            <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded">
              <h4 className="text-sm font-semibold text-blue-800">Low Priority - Training Records Update</h4>
              <p className="text-sm text-blue-600 mt-1">Due in 30 days - Annual certification renewal</p>
              <button className="text-xs text-blue-500 hover:text-blue-700 mt-2 font-medium">Prepare Documents →</button>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Compliance Training Status</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Safety Training</span>
                <span className="text-gray-800 font-medium">96% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '96%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Environmental Compliance</span>
                <span className="text-gray-800 font-medium">88% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '88%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Quality Standards</span>
                <span className="text-gray-800 font-medium">92% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Documentation Procedures</span>
                <span className="text-gray-800 font-medium">78% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
