import Link from "next/link";

// 模拟数据 - 展示 Server Component 特性
async function getData() {
  // 模拟 API 调用
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const posts = await getData();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-primary">React Demo</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A modern Next.js application demonstrating server components, routing, 
            and API integration for your portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dashboard"
              className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              View Dashboard
            </Link>
            <Link
              href="/posts"
              className="px-8 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Browse Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Next.js Core Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Server Components */}
            <div className="p-6 bg-blue-50 rounded-xl">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Server Components</h3>
              <p className="text-gray-600">
                Data fetched directly on the server - no client-side fetch needed.
                Improves performance and SEO.
              </p>
            </div>

            {/* App Router */}
            <div className="p-6 bg-green-50 rounded-xl">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">App Router</h3>
              <p className="text-gray-600">
                File-based routing with layouts, nested routes, and React Server Components support.
              </p>
            </div>

            {/* API Routes */}
            <div className="p-6 bg-purple-50 rounded-xl">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">API Routes</h3>
              <p className="text-gray-600">
                Build your backend API directly in the Next.js app with route handlers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Display Section - 展示 Server Component 数据获取 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Latest Posts (Server-Side Fetched)
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((post: { id: number; title: string; body: string }) => (
              <Link
                key={post.id}
                href={`/posts/${post.id}`}
                className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold mb-2 text-gray-900 truncate">
                  {post.title}
                </h3>
                <p className="text-gray-600 line-clamp-3">{post.body}</p>
                <span className="inline-block mt-4 text-primary font-medium">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
