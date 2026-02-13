import Link from "next/link";

export default function Home() {
  return (
    <div>

      {/* HERO */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
            Find Your Next <span className="text-indigo-600">Opportunity</span>
          </h1>

          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Discover thousands of curated job opportunities from top companies.
          </p>

          {/* Search */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search jobs..."
              className="flex-1 px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
              Search
            </button>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            Popular: Frontend Developer, UI Designer, Product Manager
          </div>

        </div>
      </section>

      {/* FEATURED JOBS */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Featured Jobs
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((job) => (
              <div
                key={job}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Senior Frontend Developer
                </h3>

                <p className="text-sm text-gray-500 mb-4">
                  Remote • Full-time
                </p>

                <p className="text-sm text-gray-600 mb-6">
                  Work with a talented team building scalable web applications.
                </p>

                <Link
                  href="/jobs"
                  className="block text-center bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
                >
                  View Job
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-20 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Hiring Great Talent?
        </h2>

        <p className="mb-8 opacity-90">
          Post your job and connect with skilled professionals.
        </p>

        <Link
          href="/jobs/post"
          className="px-8 py-3 bg-white text-indigo-600 rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Post a Job
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-sm text-gray-500 bg-white border-t">
        © {new Date().getFullYear()} JobBoard. All rights reserved.
      </footer>

    </div>
  );
}
