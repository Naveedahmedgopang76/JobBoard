"use client";

import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { logout } from "@/lib/auth";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="JobBoard Logo"
              width={32}
              height={32}
            />
            <span className="text-lg font-bold text-gray-900">
              JobBoard
            </span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link
              href="/jobs"
              className="text-gray-600 hover:text-indigo-600 transition"
            >
              Browse
            </Link>

            {session ? (
              <>
                <Link
                  href="/jobs/post"
                  className="text-gray-600 hover:text-indigo-600 transition"
                >
                  Post Job
                </Link>

                <Link
                  href="/dashboard"
                  className="text-gray-600 hover:text-indigo-600 transition"
                >
                  Dashboard
                </Link>

                <button
                  onClick={logout}
                  className="px-4 py-2 bg-gray-500 rounded-md hover:bg-red-500 hover:text-white transition"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link
                href="/auth/signin"
                className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
