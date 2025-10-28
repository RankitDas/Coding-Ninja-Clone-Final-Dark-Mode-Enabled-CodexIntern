export default function Hero(){
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">Learn to code. Build your career.</h2>
          <p className="text-gray-300 mb-6">Structured courses, live mentoring and real-world projects to help you get job-ready.</p>
          <div className="flex gap-4">
            <a href="/courses" className="bg-orange-500 hover:bg-orange-600 text-black px-5 py-3 rounded-md font-semibold">Explore Courses</a>
            <a href="#contact" className="border border-gray-700 px-5 py-3 rounded-md text-gray-300">Contact Us</a>
          </div>
        </div>
        <div className="flex-1">
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-white mb-2">Popular Track</h3>
            <p className="text-gray-300 mb-4">Full Stack Web Development (MERN)</p>
            <ul className="text-gray-400 space-y-2">
              <li>✔ 100+ hours curriculum</li>
              <li>✔ Live interactive sessions</li>
              <li>✔ Career mentoring & placements</li>
            </ul>
            <div className="mt-4">
              <button className="bg-orange-500 text-black px-4 py-2 rounded-md">Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
