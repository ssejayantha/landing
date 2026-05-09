import {
  Monitor,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const features = [
  {
    title: "AI Website Builder",
    text: "Create modern landing pages faster using AI-powered tools.",
    icon: Monitor,
  },
  {
    title: "SEO Optimisation",
    text: "Improve search visibility with clean and optimised structures.",
    icon: ShieldCheck,
  },
  {
    title: "Responsive Design",
    text: "Looks perfect across mobile, tablet, and desktop devices.",
    icon: Smartphone,
  },
  
];

function Features() {
  return (
    <section id="features" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 font-bold uppercase tracking-wider text-blue-600">
            Features
          </p>

          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Everything you need to grow online
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-2 hover:shadow-2xl"
              >
                
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white transition group-hover:bg-slate-900">
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                {/* Text */}
                <p className="leading-7 text-slate-600">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;