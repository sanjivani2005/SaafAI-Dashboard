"use client";

import { useState } from "react";
import OperationalDashboard from "./components/operational/ComplianceStyleOperationalDashboard";
import PerformanceDashboard from "./components/performance/NewPerformanceDashboard";
import GeographicDashboard from "./components/geographic/GeoSanitationDashboard";
import AIInsightsDashboard from "./components/ai-insights/ComplianceStyleAIDashboard";
import ComplianceDashboard from "./components/compliance/ComplianceStyleComplianceDashboard";
import AttendanceDashboard from "./components/attendance/AttendanceDashboard";

export default function Home() {
  const [selectedTime, setSelectedTime] = useState("Day");
  const [selectedShift, setSelectedShift] = useState("Morning");
  const [activeNav, setActiveNav] = useState("Operational");

  const renderDashboard = () => {
    switch (activeNav) {
      case "Dashboard":
        return <OperationalDashboard />;
      case "Operational":
        return <OperationalDashboard />;
      case "Performance":
        return <PerformanceDashboard />;
      case "Geographic":
        return <GeographicDashboard />;
      case "AI Insights":
        return <AIInsightsDashboard />;
      case "Compliance":
        return <ComplianceDashboard />;
      case "Attendance":
        return <AttendanceDashboard />;
      default:
        return <OperationalDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">SAAFAI</h2>
        </div>

        {/* Navigation */}
        <nav className="mt-6">
          <ul className="space-y-2 px-4">
            {["Dashboard", "Operational", "Performance", "Geographic", "AI Insights", "Compliance", "Attendance"].map((item) => (
              <li key={item}>
                <button
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${activeNav === item
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                    }`}
                  onClick={() => setActiveNav(item)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Filters */}
        <div className="mt-8 px-4">
          <div>
            <label className="text-sm font-semibold text-gray-600 block mb-1">Time</label>
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            >
              <option value="Day">Day</option>
              <option value="Week">Week</option>
              <option value="Month">Month</option>
            </select>
          </div>

          <div className="mt-4">
            <label className="text-sm font-semibold text-gray-600 block mb-1">Shift</label>
            <select
              value={selectedShift}
              onChange={(e) => setSelectedShift(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            >
              <option value="Morning">Morning</option>
              <option value="Evening">Evening</option>
              <option value="Night">Night</option>
            </select>
          </div>

          <div className="mt-4">
            <label className="text-sm font-semibold text-gray-600 block mb-1">Toilet ID</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm">
              <option>All Toilets</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-600 block mb-1">Zone Filter</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm">
              <option>All Zones</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-800">SAAFAI Operational Dashboard - Real-Time Monitoring</h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  A
                </div>
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6">
          {renderDashboard()}
        </main>
      </div>
    </div>
  );
}
