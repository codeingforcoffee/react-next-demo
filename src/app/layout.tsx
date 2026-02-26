import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Demo - Next.js Portfolio",
  description: "A Next.js project demonstrating modern React development skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-8">
                <Link href="/" className="text-xl font-bold text-primary hover:text-primary/80 transition-colors">
                  React Demo
                </Link>
                <div className="hidden md:flex space-x-4">
                  <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
                    Home
                  </Link>
                  <Link href="/dashboard" className="text-gray-700 hover:text-primary transition-colors">
                    Dashboard
                  </Link>
                  <Link href="/posts" className="text-gray-700 hover:text-primary transition-colors">
                    Posts
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </nav>
        <main className="min-h-screen">{children}</main>
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; 2026 React Demo. Built with Next.js</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
