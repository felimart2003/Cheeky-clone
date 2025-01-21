export default function Features() {
  const features = [
    { title: "Simple Setup", description: "Get started in minutes.", icon: "⚡" },
    { title: "Effortless Productivity", description: "Work smarter every day.", icon: "🚀" },
    { title: "Reliable Support", description: "We’re here to help.", icon: "💡" },
  ];

  return (
    <section className="py-16 bg-gray-100 text-gray-900 text-center">
      <h2 className="text-4xl font-bold mb-8">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="p-6 bg-white rounded shadow-md">
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}