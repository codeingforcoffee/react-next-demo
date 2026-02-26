import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts - React Demo",
  description: "Browse all posts",
};

// 模拟 API 调用
async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">All Posts</h1>
        <p className="text-gray-600 mb-8">
          Dynamic routing demo: Click any post to view details at{" "}
          <code className="bg-gray-200 px-2 py-1 rounded">/posts/[id]</code>
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post: { id: number; title: string; body: string }) => (
            <Link
              key={post.id}
              href={`/posts/${post.id}`}
              className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow"
            >
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                Post #{post.id}
              </span>
              <h2 className="text-lg font-semibold mb-2 text-gray-900 capitalize">
                {post.title}
              </h2>
              <p className="text-gray-600 line-clamp-3">{post.body}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
