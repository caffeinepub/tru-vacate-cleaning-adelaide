import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { CheckCircle, MessageCircle } from "lucide-react";
import type React from "react";
import { useEffect } from "react";

const WHATSAPP_URL = "https://wa.me/61488841883";

interface ServiceSectionProps {
  id: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  description: React.ReactNode;
  checklist: string[];
  reversed?: boolean;
}

function ServiceSection({
  id,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  description,
  checklist,
  reversed,
}: ServiceSectionProps) {
  return (
    <section
      id={id}
      className="py-16 scroll-mt-24"
      aria-labelledby={`${id}-heading`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            reversed ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className={reversed ? "lg:order-2" : ""}>
            <Badge className="mb-3 bg-teal-100 text-teal-800 border-0">
              {subtitle}
            </Badge>
            <h2
              id={`${id}-heading`}
              className="font-display text-3xl sm:text-4xl font-bold text-teal-900 mb-5"
            >
              {title}
            </h2>
            <div className="text-foreground/70 text-base leading-relaxed space-y-4 mb-6">
              {description}
            </div>
            <ul className="space-y-2 mb-8">
              {checklist.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-foreground/70"
                >
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6">
                Get a Quote for This Service
              </Button>
            </Link>
          </div>
          <div className={reversed ? "lg:order-1" : ""}>
            <div className="aspect-[8/5] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover"
                loading="lazy"
                width={800}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  useEffect(() => {
    document.title =
      "Vacate & Bond Cleaning Services Adelaide | Tru Vacate Cleaning Adelaide";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute(
        "content",
        "Complete vacate cleaning services in Adelaide — bond cleaning, end of lease, carpet steam cleaning, oven & kitchen, bathroom, windows, and garage. 100% bond back guarantee. Call 0488 841 883.",
      );
    }
  }, []);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-teal-900 text-white py-20">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/bond-cleaning-service-adelaide.dim_800x500.jpg"
            alt="Tru Vacate Cleaning Adelaide team performing thorough bond cleaning in an Adelaide rental property"
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
              Our Services
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
              Professional Vacate &amp; Bond Cleaning Services in Adelaide
            </h1>
            <p className="text-teal-100 text-xl leading-relaxed mb-8">
              From bond cleaning to carpet steam cleaning — we handle everything
              so your rental property passes inspection first time.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold"
                >
                  Get a Free Quote
                </Button>
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-teal-900 bg-transparent font-bold"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Navigation */}
      <nav
        className="bg-teal-50 border-b border-teal-100 sticky top-16 lg:top-20 z-40"
        aria-label="Service sections"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-none text-sm font-medium">
            {[
              { href: "#bond-cleaning", label: "Bond Cleaning" },
              { href: "#end-of-lease", label: "End of Lease" },
              { href: "#carpet-steam", label: "Carpet Steam" },
              { href: "#kitchen-oven", label: "Oven & Kitchen" },
              { href: "#bathroom", label: "Bathroom" },
              { href: "#windows", label: "Windows" },
              { href: "#garage", label: "Garage" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="whitespace-nowrap px-4 py-2 rounded-full bg-white border border-teal-200 text-teal-700 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-colors shrink-0"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ===== BOND CLEANING ===== */}
      <div className="bg-white">
        <ServiceSection
          id="bond-cleaning"
          subtitle="Bond Cleaning Adelaide"
          title="Professional Bond Cleaning Adelaide — Guaranteed to Pass Inspection"
          imageSrc="/assets/generated/bond-cleaning-service-adelaide.dim_800x500.jpg"
          imageAlt="Professional bond cleaning service by Tru Vacate Cleaning Adelaide — spotless results guaranteed"
          description={
            <>
              <p>
                When you move out of a rental property in Adelaide, your
                property manager or landlord inspects every single inch of the
                home. If anything is not up to scratch, they can use your bond
                money to pay for a professional clean. That's why getting the
                right bond cleaning done is so important — and why{" "}
                <strong>Tru Vacate Cleaning Adelaide</strong> is Adelaide's most
                trusted choice.
              </p>
              <p>
                Our bond cleaning service covers every part of your property. We
                scrub walls, clean windows, degrease the oven and rangehood,
                sanitise bathrooms and toilets, vacuum and mop all floors, wipe
                down skirting boards and light switches, and clean inside all
                cupboards. We follow a detailed checklist that matches exactly
                what Adelaide real estate agents expect during a final
                inspection.
              </p>
              <p>
                We use professional-grade cleaning products and modern equipment
                to get results that regular household cleaning simply cannot
                match. Our team has completed hundreds of bond cleans across
                Adelaide — in Glenelg, Norwood, Prospect, Unley, Burnside, and
                beyond.
              </p>
              <p>
                Every bond clean we do comes with our{" "}
                <strong>100% Bond Back Guarantee</strong>. If your property
                manager or real estate agent identifies any cleaning issues, we
                return to re-clean those areas at absolutely no extra cost to
                you. Our goal is simple: you get your full bond back, every
                single time.
              </p>
              <p>
                We offer fixed-price bond cleaning packages, so you always know
                exactly what you will pay. No hidden fees, no surprise invoices.
                Call us, get a quote, and let our professional team handle the
                hard work while you focus on your move.
              </p>
              <p>
                Bond cleaning in Adelaide with Tru Vacate Cleaning Adelaide is
                fast, thorough, and stress-free. We are available 7 days a week,
                including same-day bookings for urgent move-outs. Contact us
                today to book your bond clean and protect your bond money.
              </p>
            </>
          }
          checklist={[
            "All rooms cleaned top to bottom",
            "Kitchen including inside oven, stovetop, and rangehood",
            "Bathrooms and toilets scrubbed and sanitised",
            "Windows cleaned inside (outside on request)",
            "Skirting boards, light switches, and door frames wiped",
            "Cupboards cleaned inside and out",
            "Fans and air conditioner filters cleaned",
            "Floors vacuumed and mopped",
            "Garage swept and cobwebs removed",
            "100% Bond Back Guarantee included",
          ]}
        />
      </div>

      {/* ===== END OF LEASE ===== */}
      <div className="bg-teal-50">
        <ServiceSection
          id="end-of-lease"
          subtitle="End of Lease Cleaning Adelaide"
          title="End of Lease Cleaning Adelaide — Leave Your Rental Spotless"
          imageSrc="/assets/generated/end-of-lease-cleaning-team-adelaide.dim_800x500.jpg"
          imageAlt="End of lease cleaning team from Tru Vacate Cleaning Adelaide preparing rental property for final inspection"
          description={
            <>
              <p>
                End of lease cleaning (also known as exit cleaning or move-out
                cleaning) is one of the most important things you do before
                handing back the keys to your Adelaide rental property. A
                thorough, professional end of lease clean means the difference
                between getting your full bond back and losing hundreds of
                dollars.
              </p>
              <p>
                At Tru Vacate Cleaning Adelaide, our end of lease cleaning
                service is designed specifically to meet Adelaide real estate
                agent inspection standards. We know exactly what property
                managers look for — and we make sure every single item on their
                checklist is ticked off.
              </p>
              <p>
                Our experienced cleaners tackle every room systematically. We
                start at the top with ceiling fans and light fittings, work
                through walls and windows, then tackle every surface, fixture,
                and fitting in between. We pay special attention to the kitchen
                and bathrooms — the areas that real estate agents inspect most
                carefully.
              </p>
              <p>
                We clean the oven, stove, rangehood, and all kitchen appliances
                until they gleam. We remove limescale and soap scum from
                bathroom tiles, scrub grout, and sanitise toilets and basins. We
                clean inside all wardrobes and kitchen cupboards. We even wipe
                down light switches, power points, and door handles.
              </p>
              <p>
                Our end of lease cleaning service includes carpet vacuuming as
                standard. We also offer add-on carpet steam cleaning for an
                extra deep clean that removes embedded dirt, stains, and odours.
                This is especially important if you have pets or young children
                in the home.
              </p>
              <p>
                We serve all Adelaide suburbs, including the CBD, northern
                suburbs (Salisbury, Elizabeth), eastern suburbs (Burnside,
                Kensington), southern suburbs (Marion, Morphett Vale), and
                western suburbs (Henley Beach, Grange). Book your end of lease
                clean today and move out with confidence.
              </p>
            </>
          }
          checklist={[
            "Full room-by-room cleaning to agent checklist",
            "Kitchen — oven, stovetop, rangehood, splashback",
            "Bathrooms — tiles, grout, mirrors, taps, toilets",
            "All cupboards and wardrobes cleaned inside and out",
            "Walls, skirting boards, and door frames wiped",
            "Windows (interior) cleaned streak-free",
            "Carpets vacuumed (steam cleaning available as add-on)",
            "Laundry cleaned including lint filter",
            "Outdoor areas swept (patio, balcony)",
            "Satisfaction guarantee — free re-clean if needed",
          ]}
          reversed
        />
      </div>

      {/* ===== CARPET STEAM ===== */}
      <div className="bg-white">
        <ServiceSection
          id="carpet-steam"
          subtitle="Carpet Steam Cleaning Adelaide"
          title="Carpet Steam Cleaning Adelaide — Remove Stains, Odours & Allergens"
          imageSrc="/assets/generated/carpet-steam-cleaning-adelaide.dim_800x500.jpg"
          imageAlt="Professional carpet steam cleaning in Adelaide by Tru Vacate Cleaning — removes stains and odours"
          description={
            <>
              <p>
                Carpets take a beating during a rental tenancy. Foot traffic,
                spills, pet accidents, and everyday living all leave their mark
                — and if those carpets are not thoroughly cleaned before you
                vacate, your bond is at risk. Professional carpet steam cleaning
                from Tru Vacate Cleaning Adelaide restores carpets to a
                condition that satisfies even the strictest real estate agent.
              </p>
              <p>
                Our professional-grade steam cleaning machines reach deep into
                carpet fibres, extracting embedded dirt, allergens, dust mites,
                bacteria, and odour-causing compounds that regular vacuuming
                simply cannot remove. The hot water extraction method we use is
                the industry standard recommended for bond cleaning in South
                Australia.
              </p>
              <p>
                We treat all stains before steam cleaning — whether it's wine,
                coffee, pet urine, or general grime. Our pre-treatment process
                loosens stubborn stains so the steam cleaning machine can
                extract them fully. In most cases, we can remove stains that
                tenants thought were permanent.
              </p>
              <p>
                Our carpet steam cleaning service covers all carpet types — cut
                pile, loop pile, Saxony, and berber. We clean carefully around
                furniture and along walls and skirting boards to ensure every
                square centimetre of carpet is addressed. After cleaning, we use
                professional-grade deodoriser to leave carpets smelling fresh
                and clean.
              </p>
              <p>
                Carpet steam cleaning typically adds $80–$150 per room to your
                bond cleaning package. It is a worthwhile investment when you
                consider that new carpet installation can cost thousands of
                dollars — and that is what a landlord can claim against your
                bond if carpets fail inspection.
              </p>
              <p>
                We offer carpet steam cleaning as a standalone service or as
                part of your full bond cleaning package. Book today and let us
                give your carpets the deep clean they deserve.
              </p>
            </>
          }
          checklist={[
            "Professional hot water extraction (steam cleaning)",
            "Pre-treatment of all stains and high-traffic areas",
            "Deep cleaning of all carpet types",
            "Pet odour and allergen removal",
            "Professional deodoriser applied",
            "Edges and corners addressed",
            "Dries within 2–4 hours",
            "Available as standalone or add-on to bond clean",
          ]}
        />
      </div>

      {/* ===== OVEN & KITCHEN ===== */}
      <div className="bg-teal-50">
        <ServiceSection
          id="kitchen-oven"
          subtitle="Oven & Kitchen Cleaning Adelaide"
          title="Oven & Kitchen Cleaning Adelaide — Spotlessly Clean Every Time"
          imageSrc="/assets/generated/kitchen-oven-cleaning-adelaide.dim_800x500.jpg"
          imageAlt="Sparkling clean kitchen and oven after professional cleaning by Tru Vacate Cleaning Adelaide"
          description={
            <>
              <p>
                The kitchen is the most scrutinised area during any rental
                property inspection in Adelaide. Real estate agents check the
                oven, stove, rangehood, splashback, sink, benchtops, and the
                inside of every cupboard. A dirty kitchen is one of the most
                common reasons tenants lose part of their bond — and it is
                entirely avoidable with professional kitchen cleaning from Tru
                Vacate Cleaning Adelaide.
              </p>
              <p>
                Our kitchen and oven cleaning team uses professional-grade
                degreasers and specialised tools to tackle built-up grease,
                burnt food residue, and stubborn stains. We break down
                carbonised grease inside ovens that has built up over years of
                cooking. After treatment, every surface is scrubbed clean and
                wiped to a streak-free finish.
              </p>
              <p>
                We clean the oven door glass inside and out — including between
                the glass panels where grease accumulates. We remove and soak
                oven racks and grill trays, scrubbing them until they look like
                new. We clean the stovetop and burner caps, the rangehood filter
                (which we either clean or recommend replacing), and the
                splashback behind the stove.
              </p>
              <p>
                Kitchen cupboards and drawers get the same attention. We clean
                inside and outside every cupboard — removing crumbs, grease
                smears, and spill residue. We wipe down benchtops, clean the
                sink and taps until they shine, and mop the floor.
              </p>
              <p>
                We also clean the dishwasher filter and door seal, wipe down the
                refrigerator space (if the fridge has been removed), and address
                any other appliances left in the kitchen. Our kitchen cleaning
                standard goes well beyond what most tenants manage themselves —
                and it shows when your real estate agent inspects the property.
              </p>
              <p>
                Book our kitchen and oven cleaning as a standalone service or as
                part of your full bond cleaning package. Either way, your
                kitchen will be spotless.
              </p>
            </>
          }
          checklist={[
            "Oven deep-cleaned inside including glass and racks",
            "Stovetop and burner caps scrubbed",
            "Rangehood filter cleaned or replaced",
            "Splashback degreased and polished",
            "All cupboards and drawers cleaned inside and out",
            "Benchtops and sink scrubbed",
            "Taps and fixtures polished",
            "Dishwasher filter and door seal cleaned",
            "Kitchen floor vacuumed and mopped",
          ]}
          reversed
        />
      </div>

      {/* ===== BATHROOM ===== */}
      <div className="bg-white">
        <ServiceSection
          id="bathroom"
          subtitle="Bathroom & Toilet Cleaning Adelaide"
          title="Bathroom & Toilet Cleaning Adelaide — Inspection-Ready Results"
          imageSrc="/assets/generated/bathroom-cleaning-adelaide.dim_800x500.jpg"
          imageAlt="Pristine bathroom cleaned to inspection standard by Tru Vacate Cleaning Adelaide"
          description={
            <>
              <p>
                Bathrooms and toilets are the second most inspected area in any
                rental property inspection in Adelaide, right after the kitchen.
                Grout, tiles, shower screens, toilet bowls, basins, taps, and
                mirrors all need to be spotlessly clean to pass. Our
                professional bathroom and toilet cleaning service ensures every
                surface meets the highest standard.
              </p>
              <p>
                Limescale, soap scum, and mould are common problems in Adelaide
                bathrooms — and they are incredibly difficult to remove without
                the right products and techniques. Our cleaners use
                professional-grade bathroom cleaners and tools that cut through
                years of build-up. We restore tiles and grout to a condition
                that often surprises even long-term tenants.
              </p>
              <p>
                We scrub shower screens, bath trays, and shower tiles from top
                to bottom. We remove limescale from taps and showerheads until
                they shine. We clean inside and outside the toilet, including
                the cistern, seat, and base. We scrub the basin, vanity, and
                mirror to a streak-free finish. We wipe down exhaust fans and
                clean light fittings.
              </p>
              <p>
                Skirting boards, door frames, and light switches in bathrooms
                get just as much attention. We mop the floor with a disinfectant
                cleaner and leave the bathroom smelling fresh and looking
                immaculate. We also address any mould on bathroom ceilings or
                walls — a common issue in Adelaide's climate.
              </p>
              <p>
                If your property has an ensuite, a second bathroom, or a
                separate toilet, we clean all of them as part of the standard
                package. No area gets overlooked. Our bathroom cleaning standard
                is set to match exactly what Adelaide real estate agents expect
                — so you pass inspection first time, every time.
              </p>
              <p>
                Book your bathroom and toilet cleaning today and move out
                knowing every bathroom is inspection-ready.
              </p>
            </>
          }
          checklist={[
            "Shower screens, tiles, and grout scrubbed",
            "Bath and shower tray cleaned",
            "Toilet inside and out sanitised",
            "Basin, vanity, and mirror cleaned streak-free",
            "Taps and showerheads de-scaled",
            "Exhaust fans and light fittings wiped",
            "Skirting boards and door frames cleaned",
            "Mould treatment on tiles and ceiling",
            "Floors mopped with disinfectant",
            "All bathrooms included in package price",
          ]}
        />
      </div>

      {/* ===== WINDOWS ===== */}
      <div className="bg-teal-50">
        <ServiceSection
          id="windows"
          subtitle="Window Cleaning Adelaide"
          title="Window Cleaning Adelaide — Crystal-Clear Glass, Every Time"
          imageSrc="/assets/generated/window-cleaning-adelaide.dim_800x500.jpg"
          imageAlt="Professional window cleaning service in Adelaide by Tru Vacate Cleaning team"
          description={
            <>
              <p>
                Clean windows make an enormous difference to how a rental
                property looks during a final inspection. Dirty, streaky windows
                immediately catch the eye of any property manager — and they are
                often flagged as a cleaning issue on inspection reports. Our
                professional window cleaning service ensures every window is
                crystal-clear and leaves a perfect impression.
              </p>
              <p>
                Our window cleaners use professional squeegees, microfibre
                cloths, and streak-free cleaning solutions to achieve flawless
                results. We clean both the glass and the window frame, sill, and
                tracks. We remove dust, dirt, grime, spider webs, and
                fingerprints from every window in the property.
              </p>
              <p>
                Interior window cleaning is included as standard in our bond
                cleaning packages. Exterior window cleaning is available as an
                add-on service. We handle all window types and sizes — from
                standard casement windows to large picture windows and sliding
                doors.
              </p>
              <p>
                Window tracks and sills are often overlooked areas that real
                estate agents specifically check. We vacuum window tracks to
                remove dirt and dead insects, then wipe them clean. We wipe down
                all window frames and ensure the entire window assembly is
                spotless.
              </p>
              <p>
                We also clean glass doors, mirrored wardrobes, and glass shower
                screens as part of our comprehensive cleaning service. Every
                glass surface in your property will be left streak-free and
                sparkling clean.
              </p>
              <p>
                Add window cleaning to your bond clean today and ensure your
                property makes the best possible impression at inspection. It is
                one of the most visible indicators of a well-cleaned property —
                and it could be the difference between passing first time and
                needing a re-clean.
              </p>
            </>
          }
          checklist={[
            "Interior windows cleaned streak-free",
            "Window frames, sills, and tracks cleaned",
            "Sliding door tracks vacuumed and wiped",
            "Mirrored wardrobes and glass doors included",
            "Spider webs and dust removed",
            "Professional squeegee technique for streak-free finish",
            "Exterior window cleaning available as add-on",
          ]}
          reversed
        />
      </div>

      {/* ===== GARAGE ===== */}
      <div className="bg-white">
        <ServiceSection
          id="garage"
          subtitle="Garage Cleaning Adelaide"
          title="Garage Cleaning Adelaide — Ready for Final Inspection"
          imageSrc="/assets/generated/garage-cleaning-adelaide.dim_800x500.jpg"
          imageAlt="Clean and tidy garage after professional vacate cleaning service by Tru Vacate Cleaning Adelaide"
          description={
            <>
              <p>
                Garages are often left to last when tenants move out — and in a
                rush, they frequently get forgotten or only half-cleaned. But
                real estate agents do check garages during the final inspection,
                and a dirty, cobwebby, oil-stained garage can cost you bond
                money. Our professional garage cleaning service ensures your
                garage is as clean and tidy as the rest of your property.
              </p>
              <p>
                Our garage cleaning team sweeps and removes all debris from the
                floor. We remove cobwebs from walls, ceilings, and corners — a
                common issue in Adelaide garages. We wipe down shelving, door
                frames, and any built-in storage. We clean the garage door
                inside (and the motor unit if accessible). We address any oil
                stains on the concrete floor using appropriate degreaser
                products.
              </p>
              <p>
                If your property has a carport rather than an enclosed garage,
                we sweep and clean the carport area as well. We also clean any
                outdoor storage areas, garden sheds (if applicable), and outdoor
                entertaining areas that form part of your rental property.
              </p>
              <p>
                Garage cleaning is included as part of our full bond cleaning
                packages. We do not skip this area — because we know it matters
                to property managers and landlords in Adelaide. Our
                comprehensive approach means you do not have to worry about any
                area of your property being missed.
              </p>
              <p>
                We also clean balconies, patios, and outdoor entertaining areas
                as part of our vacate cleaning service. We sweep outdoor areas,
                clean outdoor lights, and address any cobwebs or dirt build-up
                in these spaces. Outdoor areas that are part of the rental
                property are cleaned as thoroughly as indoor areas.
              </p>
              <p>
                Book your full bond clean today and rest assured that every part
                of your property — right down to the garage — will be cleaned to
                inspection standard.
              </p>
            </>
          }
          checklist={[
            "Garage floor swept and mopped",
            "Cobwebs removed from all corners and walls",
            "Shelving and storage areas wiped down",
            "Garage door tracks cleaned",
            "Oil and grease stains treated",
            "Door frames and walls wiped",
            "Carport area swept (if applicable)",
            "Outdoor areas included in full package",
          ]}
        />
      </div>

      {/* ===== BOTTOM CTA ===== */}
      <section
        className="py-16 bg-teal-700 text-white"
        aria-label="Services CTA"
      >
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Need a Vacate Clean in Adelaide?
          </h2>
          <p className="text-teal-100 text-lg mb-8 max-w-xl mx-auto">
            Get a free, fixed-price quote today. Our team covers all Adelaide
            suburbs and is available 7 days a week.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold px-8"
              >
                Get My Free Quote
              </Button>
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-teal-800 font-bold px-8 bg-transparent"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
