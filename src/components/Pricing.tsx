const plans = [
  {
    name: "Starter",
    price: "$19",
    description: "Best for new projects.",
    features: ["1 website", "Basic AI builder", "Email support"],
  },
  {
    name: "Pro",
    price: "$49",
    description: "Best for growing businesses.",
    features: ["5 websites", "Advanced AI tools", "SEO suggestions"],
  },
  {
    name: "Business",
    price: "$99",
    description: "Best for teams and agencies.",
    features: ["Unlimited websites", "Team access", "Priority support"],
  },
];

function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 font-bold uppercase tracking-wider text-blue-600">
            Pricing
          </p>

          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Simple pricing for every business
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="mb-3 text-2xl font-bold text-slate-900">
                {plan.name}
              </h3>

              <p className="mb-6 text-slate-600">{plan.description}</p>

              <div className="mb-8">
                <span className="text-5xl font-bold text-slate-900">
                  {plan.price}
                </span>
                <span className="text-slate-500"> / month</span>
              </div>

              <ul className="mb-8 space-y-4">
                {plan.features.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-600">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <button className="w-full rounded-xl bg-blue-600 px-6 py-4 font-bold text-white transition hover:bg-blue-700">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;