export default function Pricing() {
  const pricingPlans = [
    { title: "Free", price: "$0", features: ["Basic features", "Community support"] },
    { title: "Pro", price: "$10/mo", features: ["All features", "Priority support"] },
  ];

  return (
    <section className="py-16 bg-gray-100 text-gray-900 text-center">
      <h2 className="text-4xl font-bold mb-8">Pricing</h2>
      <div className="flex flex-col sm:flex-row justify-center gap-8">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="p-6 bg-white rounded shadow-md">
            <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
            <p className="text-3xl font-bold mb-4">{plan.price}</p>
            <ul className="text-left">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="mb-2">✔ {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}