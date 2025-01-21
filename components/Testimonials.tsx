export default function Testimonials() {
  const testimonials = [
    { name: "Alex", feedback: "Cheeky transformed the way I work!", image: "https://via.placeholder.com/100" },
    { name: "Jordan", feedback: "I can’t imagine life without it.", image: "https://via.placeholder.com/100" },
  ];

  return (
    <section className="py-16 bg-white text-gray-900 text-center">
      <h2 className="text-4xl font-bold mb-8">What People Are Saying</h2>
      <div className="flex flex-col sm:flex-row justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-6 bg-gray-100 rounded shadow-md text-center">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <p className="italic">"{testimonial.feedback}"</p>
            <p className="font-bold mt-2">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}