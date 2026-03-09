import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { Award, CheckCircle, Heart, Shield, Star, Users } from "lucide-react";
import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    document.title =
      "About Tru Vacate Cleaning Adelaide | Adelaide's Trusted Bond Cleaning Team";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute(
        "content",
        "Learn about Tru Vacate Cleaning Adelaide — our story, our team, and why we are Adelaide's most trusted vacate and bond cleaning company. 100% bond back guarantee.",
      );
    }
  }, []);

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      desc: "We do what we say. Fixed prices, honest service, no hidden surprises. When we make a promise, we keep it.",
    },
    {
      icon: Star,
      title: "Excellence",
      desc: "We set our cleaning standard to match — and exceed — what Adelaide real estate agents expect. Good enough is never good enough for us.",
    },
    {
      icon: Users,
      title: "Reliability",
      desc: "We show up on time, every time. Moving is stressful enough. You can count on us to be there when we say we will.",
    },
    {
      icon: Heart,
      title: "Care",
      desc: "We treat every property as if it were our own home. We take pride in our work and in the difference we make for Adelaide renters.",
    },
  ];

  const guarantees = [
    "100% Bond Back Guarantee — we re-clean for free if needed",
    "Fixed-price quotes — no surprises on the day",
    "Fully insured team — your property is in safe hands",
    "Trained, vetted cleaners — background-checked for your peace of mind",
    "Detailed checklist — aligned with SA real estate agent standards",
    "7 days a week service — including same-day and weekend bookings",
    "All Adelaide suburbs covered — north, south, east, and west",
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <section
        className="relative overflow-hidden bg-teal-900 text-white py-20"
        aria-labelledby="about-hero-heading"
      >
        <div className="absolute inset-0">
          <img
            src="/assets/generated/about-tru-vacate-cleaning-team.dim_800x500.jpg"
            alt="The friendly and professional team from Tru Vacate Cleaning Adelaide"
            className="w-full h-full object-cover opacity-35"
            loading="eager"
            width={800}
            height={500}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-800/70 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-amber-500 text-amber-950 font-semibold border-0">
              About Us
            </Badge>
            <h1
              id="about-hero-heading"
              className="font-display text-4xl sm:text-5xl font-black text-white leading-tight mb-5"
            >
              Adelaide's Bond Cleaning Experts — Our Story
            </h1>
            <p className="text-teal-100 text-xl leading-relaxed">
              We started Tru Vacate Cleaning Adelaide because we know how
              stressful moving out of a rental property can be. We built a
              cleaning company that Adelaide renters can truly rely on.
            </p>
          </div>
        </div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section className="py-16 bg-white" aria-labelledby="our-story-heading">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-3 bg-teal-100 text-teal-800 border-0">
                Our Story
              </Badge>
              <h2
                id="our-story-heading"
                className="font-display text-3xl sm:text-4xl font-bold text-teal-900 mb-6"
              >
                Why We Started Tru Vacate Cleaning Adelaide
              </h2>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  We know what it feels like to move out of a rental and worry
                  about your bond. Most renters spend their weekends trying to
                  clean a whole house — and still end up with a bill from the
                  property manager because they missed something in the oven or
                  the bathroom grout is not clean enough.
                </p>
                <p>
                  That frustration is exactly why we started Tru Vacate Cleaning
                  Adelaide. We wanted to build a cleaning company that truly
                  delivers on its promise — one that gives Adelaide renters
                  confidence that they will get their full bond back.
                </p>
                <p>
                  We built our service from the ground up with one goal in mind:
                  to create the most thorough, reliable, and affordable bond
                  cleaning service in Adelaide. We trained our team to the
                  highest standard. We developed a detailed cleaning checklist
                  that matches exactly what SA real estate agents expect. And we
                  backed our service with a genuine 100% Bond Back Guarantee.
                </p>
                <p>
                  Today, we have helped more than 200 Adelaide renters get their
                  full bond back. We serve every suburb in Adelaide, and we are
                  available 7 days a week — including same-day bookings for
                  urgent move-outs.
                </p>
                <p>
                  We are proud of the reputation we have built, and we are
                  committed to maintaining it with every single clean we do.
                  When you choose Tru Vacate Cleaning Adelaide, you are choosing
                  a team that genuinely cares about getting you the result you
                  deserve.
                </p>
              </div>
            </div>
            <div>
              <div className="aspect-[8/5] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/assets/generated/about-tru-vacate-cleaning-team.dim_800x500.jpg"
                  alt="The friendly and professional Tru Vacate Cleaning Adelaide team"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={800}
                  height={500}
                />
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="bg-teal-50 rounded-xl p-4 text-center">
                  <div className="font-display font-black text-3xl text-teal-700">
                    200+
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Happy Clients
                  </div>
                </div>
                <div className="bg-amber-50 rounded-xl p-4 text-center">
                  <div className="font-display font-black text-3xl text-amber-600">
                    4.9★
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Average Rating
                  </div>
                </div>
                <div className="bg-teal-50 rounded-xl p-4 text-center">
                  <div className="font-display font-black text-3xl text-teal-700">
                    100%
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Bond Guarantee
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MISSION ===== */}
      <section className="py-16 bg-teal-50" aria-labelledby="mission-heading">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-3 bg-teal-100 text-teal-800 border-0">
              Our Mission
            </Badge>
            <h2
              id="mission-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-teal-900 mb-6"
            >
              Our Mission: Make Moving Out Stress-Free for Adelaide Renters
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              Our mission is simple: we want every Adelaide renter to get their
              full bond back without the stress. We do this by delivering the
              highest standard of vacate cleaning in South Australia — backed by
              a genuine guarantee and outstanding customer service.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed">
              Moving is one of life's most stressful experiences. Tru Vacate
              Cleaning Adelaide removes one of the biggest stressors — the end
              of lease clean — so you can focus on settling into your new home.
              We handle the cleaning. You keep your bond.
            </p>
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="py-16 bg-white" aria-labelledby="values-heading">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-3 bg-teal-100 text-teal-800 border-0">
              Our Values
            </Badge>
            <h2
              id="values-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-teal-900 mb-4"
            >
              What We Stand For at Tru Vacate Cleaning Adelaide
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <Card
                key={title}
                className="border-teal-100 hover:border-teal-300 hover:shadow-md transition-all"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-teal-700" />
                  </div>
                  <h3 className="font-display font-bold text-teal-900 text-lg mb-3">
                    {title}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR TEAM ===== */}
      <section className="py-16 bg-teal-50" aria-labelledby="team-heading">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[8/5] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/assets/generated/bond-cleaning-service-adelaide.dim_800x500.jpg"
                  alt="Tru Vacate Cleaning Adelaide team member performing thorough bond cleaning"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={800}
                  height={500}
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Badge className="mb-3 bg-amber-100 text-amber-800 border-0">
                Our Team
              </Badge>
              <h2
                id="team-heading"
                className="font-display text-3xl sm:text-4xl font-bold text-teal-900 mb-6"
              >
                Trained, Trusted, and Dedicated to Getting Your Bond Back
              </h2>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  Every cleaner on our team goes through comprehensive training
                  before they clean their first property. We train them on our
                  detailed cleaning checklist, proper chemical handling, and the
                  specific standards that Adelaide real estate agents apply
                  during inspections.
                </p>
                <p>
                  Our team members are background-checked and fully insured.
                  When our cleaners are in your property, you can rest assured
                  that your belongings are safe and your property is in good
                  hands.
                </p>
                <p>
                  We invest in our team — because we know that the quality of
                  our service depends entirely on the quality of our people. Our
                  cleaners are not just employees; they are professionals who
                  take genuine pride in their work.
                </p>
                <p>
                  We equip our team with professional-grade cleaning products
                  and modern equipment. We do not use cheap household products —
                  we use the same commercial-grade tools and chemicals that the
                  best cleaning companies use across Australia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GUARANTEES ===== */}
      <section
        className="py-16 bg-teal-700 text-white"
        aria-labelledby="guarantees-heading"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-5">
                <Award className="w-8 h-8 text-amber-300" />
              </div>
              <h2
                id="guarantees-heading"
                className="font-display text-3xl sm:text-4xl font-bold text-white mb-4"
              >
                Our Guarantees to Every Adelaide Customer
              </h2>
              <p className="text-teal-100 text-lg">
                When you book with Tru Vacate Cleaning Adelaide, these are the
                promises we make to you.
              </p>
            </div>
            <ul className="space-y-3">
              {guarantees.map((guarantee) => (
                <li key={guarantee} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                  <span className="text-teal-100 text-base">{guarantee}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== WHY BEST IN ADELAIDE ===== */}
      <section
        className="py-16 bg-white"
        aria-labelledby="best-in-adelaide-heading"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <Badge className="mb-3 bg-teal-100 text-teal-800 border-0">
                Adelaide's Best Choice
              </Badge>
              <h2
                id="best-in-adelaide-heading"
                className="font-display text-3xl sm:text-4xl font-bold text-teal-900 mb-4"
              >
                Why Tru Vacate Cleaning Adelaide is the Best Choice for Your
                Bond Clean
              </h2>
            </div>
            <div className="space-y-4 text-foreground/70 leading-relaxed">
              <p>
                There are many bond cleaning companies in Adelaide. Here is why
                Tru Vacate Cleaning Adelaide stands out:
              </p>
              <p>
                <strong className="text-teal-900">We are local.</strong> We know
                Adelaide. We know the suburbs, the real estate agents, and the
                inspection standards they apply. We are not a large national
                franchise that treats Adelaide as just another city — we are an
                Adelaide-based team that is invested in our local community.
              </p>
              <p>
                <strong className="text-teal-900">We are specialists.</strong>{" "}
                We focus exclusively on vacate and bond cleaning. We are not a
                general cleaning company that also does bond cleaning as a side
                service. Bond cleaning is all we do — and that specialisation
                means we do it better than anyone else.
              </p>
              <p>
                <strong className="text-teal-900">
                  Our guarantee is real.
                </strong>{" "}
                Our 100% Bond Back Guarantee is not just a marketing slogan. If
                your property fails inspection because of our cleaning, we come
                back and re-clean — for free. No arguments, no excuses. That is
                our promise.
              </p>
              <p>
                <strong className="text-teal-900">Our prices are fair.</strong>{" "}
                We charge competitive fixed prices that represent genuine value.
                We do not cut corners to be the cheapest, but we do not
                overcharge either. Our prices reflect the quality and
                reliability of our service.
              </p>
              <p>
                <strong className="text-teal-900">We make it easy.</strong> Book
                online or call us, get a fixed-price quote, choose your date and
                time. We confirm quickly, arrive on time, and deliver results.
                Simple, fast, and stress-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 bg-teal-50" aria-label="About page CTA">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-teal-900 mb-4">
            Ready to Work with Adelaide's Best Bond Cleaners?
          </h2>
          <p className="text-foreground/70 text-lg mb-8 max-w-xl mx-auto">
            Join over 200 happy Adelaide renters who trusted Tru Vacate Cleaning
            Adelaide and got their full bond back.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-8"
              >
                Get a Free Quote
              </Button>
            </Link>
            <Link to="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-teal-600 text-teal-700 hover:bg-teal-600 hover:text-white font-bold px-8"
              >
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
