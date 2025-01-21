export default function Hero() {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold mb-4">Revolutionize Your Productivity</h1>
      <p className="text-xl mb-6">Cheeky helps you work smarter, not harder.</p>
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-blue-500 rounded hover:bg-blue-600">Get Started</button>
        <button className="px-6 py-3 bg-gray-700 rounded hover:bg-gray-800">Learn More</button>
      </div>
    </section>
  );
}