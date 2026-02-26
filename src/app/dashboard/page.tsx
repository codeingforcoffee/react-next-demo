"use client";

import Link from "next/link";
import { useState } from "react";

// 客户端组件示例 - 交互式计数器
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Interactive Counter</h3>
      <p className="text-4xl font-bold text-primary mb-4">{count}</p>
      <div className="flex gap-2">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
        >
          Decrease
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
        >
          Reset
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          Increase
        </button>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Dashboard</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Stats Cards */}
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Total Views</h3>
            <p className="text-3xl font-bold text-gray-900">12,345</p>
            <p className="text-green-600 text-sm mt-2">↑ 12% from last month</p>
          </div>
          
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Active Users</h3>
            <p className="text-3xl font-bold text-gray-900">1,234</p>
            <p className="text-green-600 text-sm mt-2">↑ 8% from last month</p>
          </div>
          
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Revenue</h3>
            <p className="text-3xl font-bold text-gray-900">$45,678</p>
            <p className="text-green-600 text-sm mt-2">↑ 23% from last month</p>
          </div>

          {/* Client Component Demo */}
          <div className="md:col-span-2 lg:col-span-3">
            <Counter />
          </div>

          {/* API Data Fetch Demo */}
          <div className="md:col-span-2 lg:col-span-3 p-6 bg-white rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">API Integration Demo</h3>
            <p className="text-gray-600 mb-4">
              This data is fetched from a Next.js API route. Check{" "}
              <code className="bg-gray-100 px-2 py-1 rounded">/src/app/api/hello/route.ts</code>
            </p>
            <Link
              href="/api/hello"
              target="_blank"
              className="inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Test API Endpoint
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
