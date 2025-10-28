const courses = [
  { title: "C++ Data Structures", desc: "Master DSA using C++", img: "https://img.icons8.com/color/96/c-plus-plus-logo.png" },
  { title: "Java Data Structures", desc: "Object-Oriented Java DSA", img: "https://img.icons8.com/color/96/java-coffee-cup-logo.png" },
  { title: "Web Development", desc: "Frontend + Backend with MERN", img: "https://img.icons8.com/color/96/react-native.png" },
  { title: "Machine Learning", desc: "Intro to ML and projects", img: "https://img.icons8.com/color/96/artificial-intelligence.png" },
];

export default function Courses(){
  return (
    <section id="courses" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-white mb-6">Popular Courses</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map(c=>(
            <div key={c.title} className="bg-gray-800 rounded-2xl p-5 shadow hover:scale-[1.02] transition">
              <img src={c.img} alt={c.title} className="w-16 h-16 mb-4"/>
              <h4 className="text-xl font-semibold text-white">{c.title}</h4>
              <p className="text-gray-400">{c.desc}</p>
              <div className="mt-4">
                <button className="bg-orange-500 text-black px-4 py-2 rounded">View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
