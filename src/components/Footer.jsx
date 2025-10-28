export default function Footer(){
  return (
    <footer className="mt-12 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-6 text-gray-400 flex flex-col md:flex-row justify-between items-center">
        <p>© 2025 Coding Ninjas Clone | Built by Rankit Das</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </div>
      </div>
    </footer>
  );
}
