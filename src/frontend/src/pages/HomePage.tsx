import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  Award,
  Bath,
  Car,
  CheckCircle,
  ChevronRight,
  Clock,
  Home,
  MessageCircle,
  Shield,
  Sparkles,
  Square,
  Star,
  Wind,
} from "lucide-react";
import { useEffect } from "react";

const WHATSAPP_URL = "https://wa.me/61488841883";

// Schema.org JSON-LD
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Tru Vacate Cleaning Adelaide",
  description:
    "Professional vacate and bond cleaning service in Adelaide, South Australia. 100% bond back guarantee.",
  url: "https://truvacatecleaningadelaide.com.au",
  telephone: "+61488841883",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Adelaide",
    addressRegion: "SA",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-34.9285",
    longitude: "138.6007",
  },
  areaServed: "Adelaide, South Australia",
  serviceType: [
    "Vacate Cleaning",
    "Bond Cleaning",
    "End of Lease Cleaning",
    "Carpet Steam Cleaning",
    "Oven Cleaning",
    "Window Cleaning",
  ],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "214",
  },
};

const trustBadges = [
  { icon: Shield, label: "100% Bond Back Guarantee" },
  { icon: Award, label: "Fully Insured" },
  { icon: Clock, label: "Same Day Service" },
  { icon: Star, label: "5-Star Rated" },
];

const services = [
  {
    icon: Home,
    title: "Vacate / Bond Cleaning",
    desc: "Full top-to-bottom clean that meets real estate agent inspection standards.",
    href: "/services" as const,
  },
  {
    icon: Sparkles,
    title: "End of Lease Cleaning",
    desc: "Comprehensive exit clean covering every room, surface, and fixture.",
    href: "/services" as const,
  },
  {
    icon: Home,
    title: "Carpet Steam Cleaning",
    desc: "Deep steam clean removes stains, allergens, and odours from all carpets.",
    href: "/services" as const,
  },
  {
    icon: Sparkles,
    title: "Oven & Kitchen Cleaning",
    desc: "We scrub ovens, stovetops, range hoods, and every kitchen surface spotless.",
    href: "/services" as const,
  },
  {
    icon: Bath,
    title: "Bathroom & Toilet Cleaning",
    desc: "Grout, tiles, mirrors, taps — your bathroom will pass any inspection.",
    href: "/services" as const,
  },
  {
    icon: Wind,
    title: "Window Cleaning",
    desc: "Crystal-clear windows inside and out for a perfect final impression.",
    href: "/services" as const,
  },
  {
    icon: Square,
    title: "Garage Cleaning",
    desc: "Swept floors, clean walls, and cobweb removal for your garage space.",
    href: "/services" as const,
  },
  {
    icon: Car,
    title: "All Adelaide Suburbs",
    desc: "We cover every suburb in Adelaide — north, south, east, and west.",
    href: "/contact" as const,
  },
];

const howItWorks = [
  {
    step: "1",
    title: "Book Online or Call",
    desc: "Fill in our quick quote form or call 0488 841 883. We confirm your booking fast — often same day.",
  },
  {
    step: "2",
    title: "We Clean Your Property",
    desc: "Our trained team arrives on time and follows a detailed checklist aligned with Adelaide real estate agent standards.",
  },
  {
    step: "3",
    title: "Pass Your Inspection",
    desc: "Your property passes inspection. If the agent is not happy, we come back and re-clean — free of charge.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    suburb: "Glenelg, SA",
    stars: 5,
    text: "Absolutely incredible service! The team cleaned our 3-bedroom house from top to bottom. We got our full bond back — $2,400! Couldn't be happier. Highly recommend Tru Vacate Cleaning Adelaide.",
  },
  {
    name: "James T.",
    suburb: "Norwood, SA",
    stars: 5,
    text: "Booked last minute for an end of lease clean. The team arrived on time and did an amazing job. The real estate agent was impressed with the oven cleaning especially. 5 stars!",
  },
  {
    name: "Priya K.",
    suburb: "Prospect, SA",
    stars: 5,
    text: "Best bond cleaning company in Adelaide! They cleaned the carpet stains that we thought were permanent. Fixed-price quote meant no surprises. Will definitely use again.",
  },
];

const faqs = [
  {
    q: "What is Bond Cleaning and why is it required?",
    a: (
      <div className="space-y-3 text-sm leading-relaxed">
        <p>
          Bond cleaning (also called vacate cleaning or end of lease cleaning)
          is a thorough, top-to-bottom clean of a rental property before you
          hand back the keys. Your landlord or property manager requires it to
          make sure the home is as clean as when you first moved in.
        </p>
        <p>
          In South Australia, if the property is not clean enough, your landlord
          can use your bond money to pay for a professional clean. So getting a
          proper bond clean done means you get your full bond back — that can be
          hundreds or even thousands of dollars!
        </p>
      </div>
    ),
  },
  {
    q: "Why is bond cleaning important?",
    a: (
      <div className="space-y-3 text-sm leading-relaxed">
        <p>
          Bond cleaning is super important because it directly affects whether
          you get your bond money back. Your bond is a security deposit you paid
          when you moved in — usually equal to 4 weeks' rent.
        </p>
        <p>
          If the property is not spotless when you leave, your landlord can keep
          some or all of that money to cover cleaning costs. A professional bond
          clean protects your money and your rental history. It also means less
          stress for you during a busy moving period.
        </p>
      </div>
    ),
  },
  {
    q: "How much does a bond clean cost?",
    a: (
      <div className="space-y-3 text-sm leading-relaxed">
        <p>
          In Adelaide, the cost of a bond clean depends on the size of your
          home:
        </p>
        <ul className="space-y-1 pl-4">
          <li>
            • <strong>Studio / 1 bedroom:</strong> from $220–$280
          </li>
          <li>
            • <strong>2 bedrooms:</strong> from $280–$380
          </li>
          <li>
            • <strong>3 bedrooms:</strong> from $380–$480
          </li>
          <li>
            • <strong>4 bedrooms:</strong> from $480–$600+
          </li>
        </ul>
        <p>
          Add carpet steam cleaning, oven cleaning, or window cleaning for extra
          rooms. Always ask for a fixed-price quote so there are no surprises!
        </p>
      </div>
    ),
  },
  {
    q: "What is full bond cleaning?",
    a: (
      <div className="space-y-3 text-sm leading-relaxed">
        <p>
          Full bond cleaning means every single part of your rental property
          gets cleaned — from top to bottom, inside and out. This includes all
          rooms, bathrooms, toilets, kitchen (including inside the oven),
          windows, skirting boards, light switches, cupboards inside and out,
          fans, air conditioner filters, and more.
        </p>
        <p>
          It is the most complete clean you can get, and it is specifically
          designed to meet real estate agent inspection standards in South
          Australia.
        </p>
      </div>
    ),
  },
  {
    q: "Which are the top-rated bond cleaning companies near me?",
    a: (
      <div className="space-y-4 text-sm leading-relaxed">
        <p>Here are 5 top-rated bond cleaning companies in Australia:</p>
        <ol className="space-y-3">
          <li>
            <strong>1. Fantastic Cleaners</strong> —{" "}
            <a
              href="https://www.fantasticcleaners.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:underline"
            >
              fantasticcleaners.com.au
            </a>
            <p className="mt-1 text-muted-foreground">
              Fantastic Cleaners is one of Australia's largest cleaning
              franchises. They offer bond cleaning, carpet cleaning, and more
              across major cities. Their bond clean comes with a re-clean
              guarantee, and you can book online in minutes. They are known for
              their professional, vetted cleaners and competitive pricing.
              Fantastic Cleaners operates in Adelaide, Melbourne, Sydney, and
              Brisbane.
            </p>
          </li>
          <li>
            <strong>2. Jim's Cleaning</strong> —{" "}
            <a
              href="https://www.jimscleaning.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:underline"
            >
              jimscleaning.com.au
            </a>
            <p className="mt-1 text-muted-foreground">
              Jim's Cleaning is part of the famous Jim's Group franchise network
              in Australia. They provide end of lease cleaning, carpet cleaning,
              window cleaning, and more. Jim's Cleaning offers a satisfaction
              guarantee and uses trained, police-checked cleaners across all
              Australian states. You can book easily online or by phone. Their
              Adelaide team is well-regarded for reliability and thorough
              cleaning.
            </p>
          </li>
          <li>
            <strong>3. Clean To Perfection</strong> —{" "}
            <a
              href="https://www.cleantoperfection.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:underline"
            >
              cleantoperfection.com.au
            </a>
            <p className="mt-1 text-muted-foreground">
              Clean To Perfection is a South Australian cleaning specialist with
              a strong local reputation in Adelaide. They focus on bond
              cleaning, vacate cleaning, and end of lease cleans. Their team
              understands Adelaide real estate agent requirements and provides a
              100% bond back guarantee. They offer flexible scheduling,
              eco-friendly products, and transparent pricing.
            </p>
          </li>
          <li>
            <strong>4. Bond Cleaning in Adelaide</strong> —{" "}
            <a
              href="https://www.bondcleaninginadelaide.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:underline"
            >
              bondcleaninginadelaide.com.au
            </a>
            <p className="mt-1 text-muted-foreground">
              Bond Cleaning in Adelaide is a dedicated local service focused
              solely on helping Adelaide tenants pass their final rental
              inspection. They cover all suburbs of Adelaide and provide a
              detailed cleaning checklist aligned with real estate agent
              standards. Affordable fixed-price packages and a re-clean
              guarantee make them a popular choice for renters.
            </p>
          </li>
          <li>
            <strong>5. Tru Bond Cleaning</strong> —{" "}
            <a
              href="https://trubondcleaningbrisbane.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:underline"
            >
              trubondcleaningbrisbane.com
            </a>
            <p className="mt-1 text-muted-foreground">
              Tru Bond Cleaning is a trusted cleaning company known for
              delivering exceptional vacate and bond cleaning results. Their
              highly trained team uses professional-grade products and follows a
              comprehensive checklist to ensure every corner of your property is
              spotless. They offer a bond back guarantee, flexible booking, and
              outstanding customer service. With a reputation for reliability
              and thoroughness, Tru Bond Cleaning is a top choice for renters
              who want their full bond refunded without the stress.
            </p>
          </li>
        </ol>
      </div>
    ),
  },
  {
    q: "Which cleaning products are best for bond cleaning?",
    a: (
      <div className="space-y-3 text-sm leading-relaxed">
        <p>
          Professional bond cleaners use specific products to get the best
          results:
        </p>
        <ul className="space-y-1 pl-4">
          <li>
            • <strong>Degreaser</strong> (like Jif or Easy-Off BAM) — for
            kitchens and ovens
          </li>
          <li>
            • <strong>Bathroom cleaner</strong> (like Ajax or Domestos) — for
            tiles, grout, and toilets
          </li>
          <li>
            • <strong>Glass cleaner</strong> (like Windex) — for windows and
            mirrors
          </li>
          <li>
            • <strong>Carpet stain remover</strong> (like Preen or Bissell
            Professional) — for carpet spots
          </li>
          <li>
            • <strong>Microfibre cloths</strong> — for streak-free surfaces
          </li>
          <li>
            • <strong>Steam cleaner</strong> — for deep carpet and tile cleaning
          </li>
        </ul>
        <p>
          Always use eco-friendly products where possible to protect the
          environment.
        </p>
      </div>
    ),
  },
  {
    q: "How much does professional bond cleaning typically cost?",
    a: (
      <div className="space-y-3 text-sm leading-relaxed">
        <p>Professional bond cleaning in Adelaide typically costs:</p>
        <ul className="space-y-1 pl-4">
          <li>
            • <strong>1 bedroom unit:</strong> $220–$280
          </li>
          <li>
            • <strong>2 bedroom home:</strong> $280–$380
          </li>
          <li>
            • <strong>3 bedroom home:</strong> $380–$480
          </li>
          <li>
            • <strong>4 bedroom home:</strong> $480–$600+
          </li>
        </ul>
        <p>
          Extra services like carpet steam cleaning add $80–$150 per room. Oven
          cleaning adds $50–$80. Window cleaning adds $50–$120 depending on the
          number of windows. Always get a written fixed-price quote before
          booking to avoid surprise charges.
        </p>
      </div>
    ),
  },
  {
    q: "What products are best for bond cleaning carpets?",
    a: (
      <div className="space-y-3 text-sm leading-relaxed">
        <p>For bond cleaning carpets, these products work brilliantly:</p>
        <ul className="space-y-2 pl-4">
          <li>
            •{" "}
            <strong>Bissell Professional Pet Stain &amp; Odour Remover</strong>{" "}
            —{" "}
            <a
              href="https://www.amazon.com.au/s?k=Bissell+Professional+Pet+Stain+Odour+Remover"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:underline"
            >
              View on Amazon Australia
            </a>
          </li>
          <li>
            • <strong>Preen Carpet Stain Remover</strong> —{" "}
            <a
              href="https://www.bunnings.com.au/search/products?q=preen+carpet+stain+remover"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:underline"
            >
              View at Bunnings
            </a>
          </li>
          <li>
            • <strong>Resolve Carpet Cleaner</strong> —{" "}
            <a
              href="https://www.coles.com.au/search?q=resolve+carpet+cleaner"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:underline"
            >
              View at Coles
            </a>
          </li>
          <li>
            • <strong>White King Oxy Action Carpet Spray</strong> —{" "}
            <a
              href="https://www.woolworths.com.au/shop/search/products?searchTerm=white+king+carpet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:underline"
            >
              View at Woolworths
            </a>
          </li>
        </ul>
        <p>
          For the best results, always hire a professional steam cleaning
          service — it removes deep-seated dirt, allergens, and odours that
          household products can't reach.
        </p>
      </div>
    ),
  },
  {
    q: "How do I choose a reliable bond cleaner?",
    a: (
      <div className="space-y-3 text-sm leading-relaxed">
        <p>Here are 5 simple tips to find a great bond cleaner in Adelaide:</p>
        <ol className="space-y-2 pl-4">
          <li>
            <strong>1. Check reviews</strong> — Look at Google Reviews and
            Facebook ratings. Aim for 4.5 stars or higher.
          </li>
          <li>
            <strong>2. Ask about their guarantee</strong> — A good company
            offers a free re-clean if the agent is not satisfied.
          </li>
          <li>
            <strong>3. Get a fixed-price quote</strong> — Avoid hourly rates
            that can blow out. Get everything in writing.
          </li>
          <li>
            <strong>4. Confirm they use a detailed checklist</strong> — Make
            sure they follow the real estate agent's standard cleaning
            checklist.
          </li>
          <li>
            <strong>5. Check they are insured</strong> — Public liability
            insurance protects your belongings during the clean.
          </li>
        </ol>
      </div>
    ),
  },
  {
    q: "Can I book a bond cleaning company online with a satisfaction guarantee?",
    a: (
      <div className="space-y-3 text-sm leading-relaxed">
        <p>
          Yes! At Tru Vacate Cleaning Adelaide, you can book your bond clean
          online in just a few minutes. Simply fill in your property details,
          choose your preferred date and time, and our team will confirm your
          booking.
        </p>
        <p>
          We offer a <strong>100% Bond Back Guarantee</strong> — if your real
          estate agent is not happy with the clean, we will come back and
          re-clean at no extra charge. Booking online is fast, easy, and
          stress-free!
        </p>
        <Link to="/contact">
          <Button
            size="sm"
            className="mt-2 bg-teal-600 hover:bg-teal-700 text-white"
          >
            Book Now Online
          </Button>
        </Link>
      </div>
    ),
  },
  {
    q: "How much is a cleaner per hour in Adelaide?",
    a: (
      <div className="space-y-3 text-sm leading-relaxed">
        <p>
          In Adelaide, professional cleaners typically charge between{" "}
          <strong>$35 and $55 per hour</strong> for regular house cleaning. For
          bond or vacate cleaning, most companies charge a fixed price rather
          than hourly, because bond cleaning is more detailed and takes longer.
        </p>
        <p>
          Fixed-price bond cleans give you cost certainty and are usually better
          value. At Tru Vacate Cleaning Adelaide, we always provide a
          fixed-price quote upfront so you know exactly what you are paying.
        </p>
      </div>
    ),
  },
  {
    q: "How much is end of lease cleaning in Australia? How much to pay for 3 hours? What is the 20-minute rule?",
    a: (
      <div className="space-y-3 text-sm leading-relaxed">
        <div>
          <strong>End of lease cleaning in Australia</strong> typically costs
          $250–$600+ depending on the property size and location. Adelaide
          prices are generally competitive compared to Sydney and Melbourne.
        </div>
        <div>
          <strong>3 hours of cleaning</strong> at standard Adelaide rates
          ($35–$55/hr) costs around $105–$165. However, bond cleaning requires
          much more time — a typical 3-bedroom home takes 6–10 hours.
        </div>
        <div>
          <strong>The 20-minute rule in cleaning</strong> means spending at
          least 20 minutes each day on cleaning small tasks to prevent mess from
          building up. For bond cleaning, this rule does not apply — you need a
          thorough, detailed clean of the entire property, which is why hiring
          professionals is the smart choice.
        </div>
      </div>
    ),
  },
];

export default function HomePage() {
  useEffect(() => {
    document.title =
      "Tru Vacate Cleaning Adelaide | Bond & Vacate Cleaning Experts — Get Your Bond Back";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute(
        "content",
        "Tru Vacate Cleaning Adelaide — Adelaide's most trusted bond and vacate cleaning service. 100% bond back guarantee. Book online today. Call 0488 841 883.",
      );
    }
    // inject structured data
    const existing = document.getElementById("ld-json-localbusiness");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "ld-json-localbusiness";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
    return () => {
      const s = document.getElementById("ld-json-localbusiness");
      if (s) s.remove();
    };
  }, []);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-teal-900 text-white">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-vacate-cleaning-adelaide.dim_1200x600.jpg"
            alt="Professional vacate cleaning team from Tru Vacate Cleaning Adelaide ready to clean your rental property"
            className="w-full h-full object-cover opacity-40"
            loading="eager"
            width={1200}
            height={600}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-teal-800/70 to-teal-900/60" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 py-20 lg:py-28">
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-amber-500 text-amber-950 font-semibold hover:bg-amber-400 border-0">
              ⭐ Adelaide's #1 Rated Vacate Cleaners
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 text-white">
              Adelaide's Most Trusted{" "}
              <span className="text-amber-400">Vacate Cleaning</span> Service
            </h1>
            <p className="text-teal-100 text-xl leading-relaxed mb-8 max-w-xl">
              Get your full bond back — guaranteed. Our professional team cleans
              every corner of your rental property so you pass inspection,
              stress-free.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact">
                <Button
                  data-ocid="hero.primary_button"
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold text-base px-6 py-3 h-auto shadow-lg"
                >
                  Get a Free Quote
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  data-ocid="hero.secondary_button"
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

      {/* ===== INTRO TEXT ===== */}
      <section className="py-16 bg-white" aria-labelledby="intro-heading">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              id="intro-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-teal-900 mb-6"
            >
              Adelaide's Bond Cleaning Experts — Get Your Full Bond Back
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-4">
              Moving out of a rental property in Adelaide is stressful enough.
              The last thing you want is to lose hundreds of dollars because of
              cleaning issues. That's where{" "}
              <strong>Tru Vacate Cleaning Adelaide</strong> comes in.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed">
              Our expert cleaners follow a detailed checklist that matches
              Adelaide real estate agent inspection standards. We clean every
              room, every surface, and every corner — so your property passes
              first time. And if it doesn't,{" "}
              <strong>we come back and re-clean for free.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="py-16 bg-teal-50" aria-labelledby="services-heading">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-3 bg-teal-100 text-teal-800 border-0">
              Our Services
            </Badge>
            <h2
              id="services-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-teal-900 mb-4"
            >
              Everything You Need to Get Your Bond Back
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              We handle every part of your vacate clean — from the oven to the
              garage. One call, one team, everything sorted.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(({ icon: Icon, title, desc, href }) => (
              <Link to={href} key={title}>
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-teal-100 hover:border-teal-300 bg-white">
                  <CardContent className="p-5">
                    <div className="w-11 h-11 rounded-xl bg-teal-100 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-teal-700" />
                    </div>
                    <h3 className="font-display font-bold text-teal-900 mb-2 text-base">
                      {title}
                    </h3>
                    <p className="text-sm text-foreground/60 leading-relaxed">
                      {desc}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8">
                View All Services
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-16 bg-white" aria-labelledby="why-us-heading">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-3 bg-amber-100 text-amber-800 border-0">
                Why Choose Us
              </Badge>
              <h2
                id="why-us-heading"
                className="font-display text-3xl sm:text-4xl font-bold text-teal-900 mb-6"
              >
                The Smarter Way to Get Your Bond Back in Adelaide
              </h2>
              <div className="space-y-5">
                {[
                  {
                    title: "100% Bond Back Guarantee",
                    desc: "If your property doesn't pass the real estate inspection, we come back and re-clean — completely free.",
                  },
                  {
                    title: "Fixed-Price Quotes — No Surprises",
                    desc: "You get a clear, upfront price before we start. No hidden fees, no hourly billing blow-outs.",
                  },
                  {
                    title: "Experienced, Vetted Cleaners",
                    desc: "Every member of our team is trained, background-checked, and fully insured for your peace of mind.",
                  },
                  {
                    title: "Checklist-Based Cleaning",
                    desc: "We follow the official SA real estate agent cleaning checklist — the exact standard your property manager uses.",
                  },
                  {
                    title: "Same-Day & Weekend Availability",
                    desc: "We understand moving is chaotic. We offer same-day bookings and weekend availability across all Adelaide suburbs.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-teal-900 mb-1">
                        {title}
                      </div>
                      <p className="text-sm text-foreground/60 leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="mt-8 inline-block">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8">
                  Book Your Clean Today
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/assets/generated/bond-cleaning-service-adelaide.dim_800x500.jpg"
                  alt="Tru Vacate Cleaning Adelaide team performing thorough bond cleaning in an Adelaide rental property"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={800}
                  height={500}
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-amber-500 text-amber-950 rounded-xl p-4 shadow-lg">
                <div className="font-display font-black text-3xl">214+</div>
                <div className="text-xs font-semibold">5-Star Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section
        className="py-16 bg-teal-900 text-white"
        aria-labelledby="how-it-works-heading"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-3 bg-teal-700 text-teal-100 border-0">
              Simple Process
            </Badge>
            <h2
              id="how-it-works-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              How Our Bond Cleaning Works
            </h2>
            <p className="text-teal-200 text-lg max-w-xl mx-auto">
              Three simple steps to get your bond back in Adelaide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {howItWorks.map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-amber-500 text-amber-950 font-display font-black text-2xl flex items-center justify-center mx-auto mb-5">
                  {step}
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-3">
                  {title}
                </h3>
                <p className="text-teal-200 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="py-16 bg-white" aria-labelledby="pricing-heading">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <Badge className="mb-3 bg-teal-100 text-teal-800 border-0">
              Transparent Pricing
            </Badge>
            <h2
              id="pricing-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-teal-900 mb-4"
            >
              Bond Cleaning Prices in Adelaide
            </h2>
            <p className="text-foreground/70 text-lg max-w-xl mx-auto">
              Fixed prices. No hidden extras. Get a written quote before we
              start.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {[
              { size: "1 Bedroom", price: "$220–$280", icon: "🏠" },
              { size: "2 Bedrooms", price: "$280–$380", icon: "🏡" },
              { size: "3 Bedrooms", price: "$380–$480", icon: "🏘️" },
              { size: "4+ Bedrooms", price: "$480–$600+", icon: "🏗️" },
            ].map(({ size, price, icon }) => (
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
            available as add-ons. Contact us for a tailored quote.
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

      {/* ===== TESTIMONIALS ===== */}
      <section
        className="py-16 bg-teal-50"
        aria-labelledby="testimonials-heading"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-3 bg-teal-100 text-teal-800 border-0">
              Customer Reviews
            </Badge>
            <h2
              id="testimonials-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-teal-900 mb-4"
            >
              Adelaide Renters Love Tru Vacate Cleaning
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, suburb, stars, text }) => (
              <Card key={name} className="bg-white border-teal-100 shadow-sm">
                <CardContent className="p-6">
                  <div
                    className="flex gap-1 mb-4"
                    aria-label={`${stars} out of 5 stars`}
                  >
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  </div>
                  <blockquote className="text-sm text-foreground/70 leading-relaxed mb-4 italic">
                    "{text}"
                  </blockquote>
                  <div className="font-semibold text-teal-900 text-sm">
                    {name}
                  </div>
                  <div className="text-xs text-muted-foreground">{suburb}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 bg-white" aria-labelledby="faq-heading">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-3 bg-teal-100 text-teal-800 border-0">
                FAQs
              </Badge>
              <h2
                id="faq-heading"
                className="font-display text-3xl sm:text-4xl font-bold text-teal-900 mb-4"
              >
                Bond Cleaning FAQs — Your Questions Answered
              </h2>
              <p className="text-foreground/70 text-lg">
                Everything you need to know about bond cleaning in Adelaide.
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={`faq-${i + 1}`}
                  value={`faq-${i + 1}`}
                  data-ocid={`faq.item.${i + 1}`}
                  className="border border-teal-100 rounded-xl px-4 data-[state=open]:border-teal-400 data-[state=open]:bg-teal-50/50 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-teal-900 hover:no-underline py-4 text-sm sm:text-base">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-foreground/70">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section
        className="py-16 bg-teal-700 text-white"
        aria-label="Call to action"
      >
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Your Bond Back?
          </h2>
          <p className="text-teal-100 text-lg mb-8 max-w-xl mx-auto">
            Book your vacate clean today and join over 200 happy Adelaide
            renters who got their full bond back with Tru Vacate Cleaning
            Adelaide.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold text-base px-8 h-auto py-3"
              >
                Book Online Now
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
        </div>
      </section>
    </>
  );
}
