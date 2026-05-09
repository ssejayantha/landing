const faqs = [
  {
    question: "Can I build a website without coding?",
    answer:
      "Yes. The platform helps users create pages using simple AI-powered tools.",
  },
  {
    question: "Is it suitable for small businesses?",
    answer:
      "Yes. It is designed for startups, small businesses, and service providers.",
  },
  {
    question: "Can it help with SEO?",
    answer:
      "Yes. It supports better page structure, headings, content, and performance.",
  },
];

function FAQ() {
  return (
    <section id="faq" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-14 text-center">
          <p className="mb-3 font-bold uppercase tracking-wider text-blue-600">
            FAQ
          </p>

          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-5">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-7"
            >
              <h3 className="mb-3 text-xl font-bold text-slate-900">
                {faq.question}
              </h3>

              <p className="leading-7 text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;