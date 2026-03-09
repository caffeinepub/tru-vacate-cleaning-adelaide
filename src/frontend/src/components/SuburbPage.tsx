import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getSuburbBySlug } from "@/data/suburbs";
import { Link } from "@tanstack/react-router";
import {
  Award,
  Bath,
  CheckCircle,
  ChevronRight,
  Clock,
  Home,
  Layers,
  MessageCircle,
  Shield,
  Sparkles,
  Square,
  Star,
  Wind,
} from "lucide-react";
import { useEffect } from "react";

interface SuburbPageProps {
  slug: string;
}

const WHATSAPP_URL = "https://wa.me/61488841883";

const trustBadges = [
  { icon: Shield, label: "100% Bond Back Guarantee" },
  { icon: Award, label: "Fully Insured" },
  { icon: Clock, label: "Same Day Service" },
  { icon: Star, label: "5-Star Rated" },
];

const whatWeClean = [
  { icon: Sparkles, label: "Kitchen & Oven" },
  { icon: Bath, label: "Bathrooms & Toilets" },
  { icon: Home, label: "Bedrooms & Living Areas" },
  { icon: Layers, label: "Carpet Steam Cleaning" },
  { icon: Wind, label: "Windows Inside & Out" },
  { icon: Square, label: "Skirting Boards & Light Switches" },
  { icon: Layers, label: "Cupboards Inside & Out" },
  { icon: Square, label: "Garage & Outdoor Areas" },
];

const pricingCards = [
  { size: "1 Bedroom", price: "$220–$280", icon: "🏠" },
  { size: "2 Bedrooms", price: "$280–$380", icon: "🏡" },
  { size: "3 Bedrooms", price: "$380–$480", icon: "🏘️" },
  { size: "4+ Bedrooms", price: "$480–$600+", icon: "🏗️" },
];

export default function SuburbPage({ slug }: SuburbPageProps) {
  const suburb = getSuburbBySlug(slug);

  useEffect(() => {
    if (!suburb) return;

    document.title = suburb.metaTitle;

    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute("content", suburb.metaDescription);
    } else {
      const newDesc = document.createElement("meta");
      newDesc.name = "description";
      newDesc.content = suburb.metaDescription;
      document.head.appendChild(newDesc);
    }

    // Open Graph tags
    const setOgTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        (tag as HTMLMetaElement).setAttribute("property", property);
        document.head.appendChild(tag);
      }
      (tag as HTMLMetaElement).setAttribute("content", content);
    };
    setOgTag("og:title", suburb.metaTitle);
    setOgTag("og:description", suburb.metaDescription);
    setOgTag("og:type", "website");

    // JSON-LD structured data
    const scriptId = `ld-json-suburb-${slug}`;
    const existing = document.getElementById(scriptId);
    if (!existing) {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Tru Vacate Cleaning Adelaide",
        description: suburb.metaDescription,
        url: `https://truvacatecleaningadelaide.com.au/suburbs/${slug}`,
        telephone: "+61488841883",
        address: {
          "@type": "PostalAddress",
          addressLocality: suburb.name,
          addressRegion: "SA",
          postalCode: suburb.postcode,
          addressCountry: "AU",
        },
        areaServed: `${suburb.name}, ${suburb.region}, South Australia`,
        serviceType: [
          `Vacate Cleaning ${suburb.name}`,
          `Bond Cleaning ${suburb.name}`,
          `End of Lease Cleaning ${suburb.name}`,
          "Carpet Steam Cleaning",
        ],
        priceRange: "$$",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "214",
        },
      };
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      const s = document.getElementById(scriptId);
      if (s) s.remove();
    };
  }, [suburb, slug]);

  if (!suburb) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-teal-50">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-teal-900 mb-4">
            Suburb Not Found
          </h1>
          <p className="text-foreground/60 mb-6">
            We couldn't find a page for this suburb.
          </p>
          <Link to="/">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-teal-900 text-white">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-vacate-cleaning-adelaide.dim_1200x600.jpg"
            alt={`Professional vacate cleaning team serving ${suburb.name}, Adelaide`}
            className="w-full h-full object-cover opacity-30"
            loading="eager"
            width={1200}
            height={600}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-teal-800/70 to-teal-900/60" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 py-20 lg:py-28">
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-amber-500 text-amber-950 font-semibold hover:bg-amber-400 border-0">
              ⭐ Serving {suburb.name} {suburb.postcode}
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-4 text-white">
              Vacate Cleaning in{" "}
              <span className="text-amber-400">{suburb.name}</span>, Adelaide
            </h1>
            <p className="text-teal-100 text-xl leading-relaxed mb-8 max-w-xl">
              Get your full bond back — guaranteed. Expert bond cleaning in{" "}
              {suburb.name} {suburb.postcode}. We follow the SA real estate
              agent checklist so you pass inspection, stress-free.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact">
                <Button
                  data-ocid="suburb.hero.primary_button"
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold text-base px-6 py-3 h-auto shadow-lg"
                >
                  Get a Free Quote
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  data-ocid="suburb.hero.secondary_button"
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-teal-900 font-bold text-base px-6 py-3 h-auto bg-transparent"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST BADGES ===== */}
      <section
        className="bg-teal-700 text-white py-6"
        aria-label="Trust badges"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 justify-center md:justify-start"
              >
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-amber-300" />
                </div>
                <span className="text-sm font-semibold text-white">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTENT SECTION ===== */}
      <section
        className="py-16 bg-white"
        aria-labelledby="suburb-content-heading"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <Badge className="mb-4 bg-teal-100 text-teal-800 border-0">
              {suburb.name} {suburb.postcode} — {suburb.region}
            </Badge>
            <h2
              id="suburb-content-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-teal-900 mb-6"
            >
              Bond Cleaning {suburb.name} — Get Your Full Bond Back
            </h2>

            {/* Bond back highlight box */}
            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-5 mb-8">
              <p className="font-semibold text-amber-900 text-base leading-relaxed">
                💛 <strong>100% Bond Back Guarantee:</strong> If your real
                estate agent isn't happy after our clean in {suburb.name}, we
                come back and re-clean for free — no extra charge, no questions
                asked.
              </p>
            </div>

            <div className="space-y-5 text-foreground/70 text-lg leading-relaxed">
              <p>{suburb.intro}</p>
              <p>{suburb.body1}</p>
              <p>{suburb.body2}</p>
              <p>{suburb.body3}</p>

              {/* Pull quote */}
              <blockquote className="border-l-4 border-teal-500 pl-5 py-2 bg-teal-50 rounded-r-xl my-6">
                <p className="text-teal-800 font-semibold italic text-base leading-relaxed">
                  "Our vacate cleaning in {suburb.name} follows the SA real
                  estate agent checklist exactly — so you pass inspection first
                  time, every time."
                </p>
              </blockquote>

              <p>{suburb.closing}</p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <Link to="/contact">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6">
                  Get My Free Quote
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  variant="outline"
                  className="border-teal-300 text-teal-700 hover:bg-teal-50 px-6"
                >
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT WE CLEAN ===== */}
      <section
        className="py-16 bg-teal-50"
        aria-labelledby="what-we-clean-heading"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <Badge className="mb-3 bg-teal-100 text-teal-800 border-0">
              Full Cleaning Checklist
            </Badge>
            <h2
              id="what-we-clean-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-teal-900 mb-4"
            >
              What We Clean in Your {suburb.name} Rental
            </h2>
            <p className="text-foreground/70 text-lg max-w-xl mx-auto">
              Our bond cleaning in {suburb.name} covers every area of your
              property — nothing gets skipped.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {whatWeClean.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-teal-100 hover:border-teal-300 hover:shadow-md transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-teal-100 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-teal-700" />
                </div>
                <span className="text-sm font-semibold text-teal-900 leading-tight">
                  {label}
                </span>
                <CheckCircle className="w-4 h-4 text-teal-500 ml-auto shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section
        className="py-16 bg-white"
        aria-labelledby="suburb-pricing-heading"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <Badge className="mb-3 bg-teal-100 text-teal-800 border-0">
              {suburb.name} Pricing
            </Badge>
            <h2
              id="suburb-pricing-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-teal-900 mb-4"
            >
              Vacate Cleaning Prices in {suburb.name}
            </h2>
            <p className="text-foreground/70 text-lg max-w-xl mx-auto">
              Fixed prices. No hidden extras. Written quote before we start.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {pricingCards.map(({ size, price, icon }) => (
              <Card
                key={size}
                className="text-center border-teal-100 hover:border-teal-400 hover:shadow-md transition-all"
              >
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">{icon}</div>
                  <div className="font-display font-bold text-teal-900 text-base mb-2">
                    {size}
                  </div>
                  <div className="font-display font-black text-teal-600 text-2xl">
                    {price}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Fixed price quote
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            * Carpet steam cleaning, oven cleaning &amp; window cleaning
            available as add-ons.
          </p>
          <div className="text-center mt-6">
            <Link to="/contact">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8">
                Get My Fixed-Price Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIAL ===== */}
      <section
        className="py-16 bg-teal-50"
        aria-labelledby="suburb-testimonial-heading"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <Badge className="mb-3 bg-teal-100 text-teal-800 border-0">
              {suburb.name} Customer Review
            </Badge>
            <h2
              id="suburb-testimonial-heading"
              className="font-display text-2xl font-bold text-teal-900 mb-8"
            >
              What {suburb.name} Renters Say About Us
            </h2>
            <Card className="bg-white border-teal-100 shadow-sm">
              <CardContent className="p-8">
                <div
                  className="flex gap-1 mb-5 justify-center"
                  aria-label="5 out of 5 stars"
                >
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <blockquote className="text-foreground/70 text-lg leading-relaxed italic mb-5">
                  "{suburb.testimonialText}"
                </blockquote>
                <div className="font-semibold text-teal-900">
                  {suburb.testimonialName}
                </div>
                <div className="text-sm text-muted-foreground">
                  {suburb.name}, SA {suburb.postcode}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section
        className="py-16 bg-teal-700 text-white"
        aria-label={`Book vacate cleaning in ${suburb.name}`}
      >
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Book Your {suburb.name} Vacate Clean Today
          </h2>
          <p className="text-teal-100 text-lg mb-8 max-w-xl mx-auto">
            Join hundreds of happy Adelaide renters who got their full bond back
            with Tru Vacate Cleaning Adelaide. Same-day service available in{" "}
            {suburb.name} {suburb.postcode}.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button
                data-ocid="suburb.cta.primary_button"
                size="lg"
                className="bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold text-base px-8 h-auto py-3"
              >
                Book Online Now
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-teal-800 font-bold text-base px-8 h-auto py-3 bg-transparent"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp: 0488 841 883
              </Button>
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/services">
              <span className="text-teal-200 hover:text-white text-sm underline underline-offset-2 transition-colors">
                View All Our Services →
              </span>
            </Link>
            <Link to="/contact">
              <span className="text-teal-200 hover:text-white text-sm underline underline-offset-2 transition-colors">
                Get in Touch →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
