import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          KiwiSaaS
        </div>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#features" className="font-medium text-slate-700 hover:text-blue-600">
            Features
          </a>

          <a href="#pricing" className="font-medium text-slate-700 hover:text-blue-600">
            Pricing
          </a>

          <a href="#faq" className="font-medium text-slate-700 hover:text-blue-600">
            FAQ
          </a>
        </nav>

        {/* Desktop Button */}
        <button className="hidden rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 md:block">
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-6 md:hidden">

          <nav className="flex flex-col gap-5">
            <a href="#features" className="font-medium text-slate-700">
              Features
            </a>

            <a href="#pricing" className="font-medium text-slate-700">
              Pricing
            </a>

            <a href="#faq" className="font-medium text-slate-700">
              FAQ
            </a>

            <button className="mt-4 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white">
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;