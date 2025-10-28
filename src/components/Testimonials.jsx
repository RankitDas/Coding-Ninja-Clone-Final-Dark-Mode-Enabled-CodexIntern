const reviews = [
  { name: "Priya S.", text: "The mentors and structured path helped me get placed at Amazon!" },
  { name: "Rohan D.", text: "Hands-on assignments made learning super fun!" },
  { name: "Sneha K.", text: "Best coding platform for beginners and intermediates." },
];

export default function Testimonials(){
  return (
    <section className="py-16 bg-gradient-to-b from-transparent to-gray-900/30">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold text-white mb-8">What Students Say</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map(r=>(
            <div key={r.name} className="bg-gray-800 p-6 rounded-xl">
              <p className="text-gray-300 italic mb-4">“{r.text}”</p>
              <h4 className="font-semibold text-orange-400">{r.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
