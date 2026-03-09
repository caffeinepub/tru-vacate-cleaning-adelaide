import { Button } from "@/components/ui/button";
import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const WHATSAPP_URL = "https://wa.me/61488841883";
const PHONE = "0488 841 883";

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: intentionally close menu on path change
  useEffect(() => {
    setMenuOpen(false);
  }, [currentPath]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

  const navLinkClass = (path: string) =>
    `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive(path)
        ? "text-teal-700 bg-teal-50"
        : "text-foreground/70 hover:text-teal-700 hover:bg-teal-50"
    }`;

  return (
    <div className="min-h-screen flex flex-col font-body">
      {/* ===== STICKY HEADER ===== */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <div className="w-9 h-9 rounded-lg bg-teal-600 flex items-center justify-center">
                <span className="text-white font-display font-black text-lg leading-none">
                  T
                </span>
              </div>
              <div className="hidden sm:block">
                <div className="font-display font-bold text-teal-800 text-sm leading-tight">
                  Tru Vacate Cleaning
                </div>
                <div className="text-teal-600 text-xs font-cabinet font-medium tracking-wide">
                  Adelaide
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Main navigation"
            >
              <Link
                to="/"
                data-ocid="nav.home_link"
                className={navLinkClass("/")}
              >
                Home
              </Link>
              <Link
                to="/services"
                data-ocid="nav.services_link"
                className={navLinkClass("/services")}
              >
                Services
              </Link>
              <Link
                to="/about"
                data-ocid="nav.about_link"
                className={navLinkClass("/about")}
              >
                About
              </Link>
              <Link
                to="/contact"
                data-ocid="nav.contact_link"
                className={navLinkClass("/contact")}
              >
                Contact
              </Link>
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-2">
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="hidden md:flex items-center gap-1.5 text-sm font-medium text-teal-700 hover:text-teal-800 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{PHONE}</span>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="nav.whatsapp_button"
                className="hidden sm:flex items-center gap-1.5 bg-[#25D366] hover:bg-[#128C7E] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              {/* Mobile menu toggle */}
              <button
                type="button"
                className="lg:hidden p-2 rounded-md text-foreground/70 hover:text-foreground hover:bg-muted transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
              >
                {menuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-border bg-white">
            <nav
              className="container mx-auto px-4 py-3 flex flex-col gap-1"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.to)
                      ? "text-teal-700 bg-teal-50"
                      : "text-foreground/70 hover:text-teal-700 hover:bg-teal-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-teal-700 hover:bg-teal-50 rounded-md transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{PHONE}</span>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#128C7E] rounded-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="bg-teal-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-lg bg-teal-500 flex items-center justify-center">
                  <span className="text-white font-display font-black text-lg leading-none">
                    T
                  </span>
                </div>
                <div>
                  <div className="font-display font-bold text-white text-sm leading-tight">
                    Tru Vacate Cleaning
                  </div>
                  <div className="text-teal-300 text-xs font-cabinet tracking-wide">
                    Adelaide
                  </div>
                </div>
              </div>
              <p className="text-teal-200 text-sm leading-relaxed">
                Adelaide's bond cleaning experts. We help you get your full bond
                back, guaranteed.
              </p>
              <p className="text-teal-300 text-xs mt-3 font-medium">
                Serving all Adelaide suburbs
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-display font-semibold text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-teal-200 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-display font-semibold text-white mb-4">
                Get in Touch
              </h3>
              <div className="space-y-3">
                <a
                  href={`tel:${PHONE.replace(/\s/g, "")}`}
                  data-ocid="footer.phone_link"
                  className="flex items-center gap-2 text-teal-200 hover:text-white text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>{PHONE}</span>
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="footer.whatsapp_button"
                  className="flex items-center gap-2 text-[#25D366] hover:text-[#4ade80] text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>Chat on WhatsApp</span>
                </a>
                <Link to="/contact" className="inline-block mt-2">
                  <Button
                    size="sm"
                    className="bg-teal-500 hover:bg-teal-400 text-white"
                  >
                    Get a Free Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-teal-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-teal-400">
            <p>
              © {new Date().getFullYear()} Tru Vacate Cleaning Adelaide. All
              rights reserved.
            </p>
            <p>
              Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-300 hover:text-white transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* ===== WHATSAPP FLOATING BUTTON ===== */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="whatsapp.floating_button"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Chat with us on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
    </div>
  );
}
