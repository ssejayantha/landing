function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-slate-50 px-6 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-5 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            AI-Powered Web Builder
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
            Build modern websites faster with React and Tailwind
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-8 text-slate-600">
            Create clean SaaS landing pages, business websites, and web app
            interfaces using a modern frontend workflow.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="rounded-xl bg-blue-600 px-7 py-4 font-bold text-white hover:bg-blue-700">
              Start Free
            </button>

            <button className="rounded-xl border border-slate-300 bg-white px-7 py-4 font-bold text-slate-900 hover:bg-slate-50">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-2xl">
          <div className="mb-6 flex gap-2">
            <span className="h-3 w-3 rounded-full bg-slate-300"></span>
            <span className="h-3 w-3 rounded-full bg-slate-300"></span>
            <span className="h-3 w-3 rounded-full bg-slate-300"></span>
          </div>

          <div className="rounded-2xl bg-slate-50 p-6">
            <h3 className="mb-4 text-xl font-bold text-slate-900">
              Website Performance
            </h3>

            <div className="mb-4 h-3 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-[94%] rounded-full bg-blue-600"></div>
            </div>

            <p className="font-semibold text-slate-600">SEO Score: 94%</p>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="h-24 rounded-2xl bg-blue-50"></div>
            <div className="h-24 rounded-2xl bg-blue-50"></div>
            <div className="h-24 rounded-2xl bg-blue-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;