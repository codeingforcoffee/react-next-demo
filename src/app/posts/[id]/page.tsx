import Link from "next/link";
import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Post ${id} - React Demo`,
    description: `Viewing post #${id}`,
  };
}

async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }
  return res.json();
}

export default async function PostPage({ params }: Props) {
  const { id } = await params;
  const post = await getPost(id);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/posts"
          className="inline-flex items-center text-primary hover:text-primary/80 mb-6"
        >
          ← Back to Posts
        </Link>
        
        <article className="bg-white rounded-xl shadow-sm p-8">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Post #{post.id}
          </span>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-6 capitalize">
            {post.title}
          </h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed">{post.body}</p>
          </div>
          
          <hr className="my-8" />
          
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
              Like
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
              Share
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}
