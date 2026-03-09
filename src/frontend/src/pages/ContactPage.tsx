import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@/hooks/useActor";
import {
  AlertCircle,
  CheckCircle,
  Loader2,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const WHATSAPP_URL = "https://wa.me/61488841883";
const PHONE = "0488 841 883";

const SERVICE_OPTIONS = [
  "Vacate / Bond Cleaning",
  "End of Lease Cleaning",
  "Carpet Steam Cleaning",
  "Oven & Kitchen Cleaning",
  "Bathroom & Toilet Cleaning",
  "Window Cleaning",
  "Garage Cleaning",
  "Full Package (All Services)",
  "Other / Not Sure",
];

export default function ContactPage() {
  const { actor } = useActor();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title =
      "Contact Tru Vacate Cleaning Adelaide | Get a Free Quote — 0488 841 883";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute(
        "content",
        "Contact Tru Vacate Cleaning Adelaide for a free quote on your vacate or bond clean. Call 0488 841 883 or send us a message. We cover all Adelaide suburbs.",
      );
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, serviceType: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.serviceType
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      if (actor) {
        await actor.submitForm(
          formData.name,
          formData.email,
          formData.phone,
          formData.serviceType,
          formData.message,
        );
      }
      setSubmitted(true);
      toast.success("Your enquiry has been sent! We will contact you shortly.");
    } catch (err) {
      console.error("Form submission error:", err);
      setError(
        `Sorry, something went wrong. Please try WhatsApp or call us directly on ${PHONE}`,
      );
      toast.error("Form submission failed. Please contact us via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ===== HERO ===== */}
      <section
        className="relative overflow-hidden bg-teal-900 text-white py-16 sm:py-20"
        aria-labelledby="contact-hero-heading"
      >
        <div className="absolute inset-0">
          <img
            src="/assets/generated/contact-tru-vacate-cleaning.dim_800x400.jpg"
            alt="Contact Tru Vacate Cleaning Adelaide for a free quote on your vacate or bond clean"
            className="w-full h-full object-cover opacity-30"
            loading="eager"
            width={800}
            height={400}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-800/75 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-amber-500 text-amber-950 font-semibold border-0">
              Contact Us
            </Badge>
            <h1
              id="contact-hero-heading"
              className="font-display text-4xl sm:text-5xl font-black text-white leading-tight mb-5"
            >
              Get a Free Quote for Your Vacate Clean in Adelaide
            </h1>
            <p className="text-teal-100 text-xl leading-relaxed">
              Fill in the form below and we will get back to you fast — usually
              within the hour. Or chat with us on WhatsApp for an instant
              response.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CONTACT CONTENT ===== */}
      <section
        className="py-16 bg-white"
        aria-labelledby="contact-form-heading"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* FORM */}
            <div className="lg:col-span-3">
              <h2
                id="contact-form-heading"
                className="font-display text-2xl sm:text-3xl font-bold text-teal-900 mb-2"
              >
                Request a Free Quote
              </h2>
              <p className="text-foreground/60 mb-8">
                Tell us about your property and we will send you a fixed-price
                quote. No obligation, no hidden fees.
              </p>

              {submitted ? (
                <output
                  data-ocid="contact.success_state"
                  className="block bg-teal-50 border border-teal-200 rounded-2xl p-8 text-center"
                  aria-live="polite"
                >
                  <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="font-display font-bold text-teal-900 text-xl mb-3">
                    Thanks! We have received your enquiry.
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    Our team will contact you shortly with your fixed-price
                    quote. We usually respond within the hour during business
                    hours.
                  </p>
                  <p className="text-foreground/60 text-sm">
                    Need a faster response?{" "}
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 font-semibold hover:underline"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </p>
                </output>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Contact form"
                >
                  <div className="space-y-5">
                    {/* Name */}
                    <div>
                      <Label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground mb-1.5 block"
                      >
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        data-ocid="contact.name_input"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        className="border-border focus:border-teal-500 focus:ring-teal-500/20"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground mb-1.5 block"
                      >
                        Email Address{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        data-ocid="contact.email_input"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        className="border-border focus:border-teal-500 focus:ring-teal-500/20"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <Label
                        htmlFor="phone"
                        className="text-sm font-medium text-foreground mb-1.5 block"
                      >
                        Phone Number <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        data-ocid="contact.phone_input"
                        type="tel"
                        placeholder="04xx xxx xxx"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        autoComplete="tel"
                        className="border-border focus:border-teal-500 focus:ring-teal-500/20"
                      />
                    </div>

                    {/* Service Type */}
                    <div>
                      <Label
                        htmlFor="service-select"
                        className="text-sm font-medium text-foreground mb-1.5 block"
                      >
                        Service Required{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        value={formData.serviceType}
                        onValueChange={handleServiceChange}
                        required
                      >
                        <SelectTrigger
                          id="service-select"
                          data-ocid="contact.service_select"
                          className="border-border focus:border-teal-500 focus:ring-teal-500/20"
                        >
                          <SelectValue placeholder="Select a service..." />
                        </SelectTrigger>
                        <SelectContent>
                          {SERVICE_OPTIONS.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message */}
                    <div>
                      <Label
                        htmlFor="message"
                        className="text-sm font-medium text-foreground mb-1.5 block"
                      >
                        Property Details &amp; Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        data-ocid="contact.message_textarea"
                        placeholder="Tell us about your property — number of bedrooms, bathrooms, any special requirements, preferred date..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="border-border focus:border-teal-500 focus:ring-teal-500/20 resize-none"
                      />
                    </div>

                    {/* Error */}
                    {error && (
                      <div
                        data-ocid="contact.error_state"
                        className="flex items-start gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm"
                        role="alert"
                        aria-live="assertive"
                      >
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>{error}</span>
                      </div>
                    )}

                    {/* Submit */}
                    <Button
                      type="submit"
                      data-ocid="contact.submit_button"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-base py-3 h-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending Your Enquiry...
                        </>
                      ) : (
                        "Send My Free Quote Request"
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form you agree to be contacted about
                      your cleaning enquiry. We respect your privacy.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* CONTACT INFO SIDEBAR */}
            <aside className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="font-display font-bold text-teal-900 text-xl mb-4">
                  Other Ways to Reach Us
                </h3>
                <div className="space-y-4">
                  <Card className="border-teal-100">
                    <CardContent className="p-5 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 flex items-center justify-center shrink-0">
                        <MessageCircle className="w-5 h-5 text-[#25D366]" />
                      </div>
                      <div>
                        <div className="font-semibold text-teal-900 mb-1">
                          WhatsApp Chat
                        </div>
                        <p className="text-sm text-foreground/60 mb-3">
                          Fastest response. Chat with us directly on WhatsApp —
                          we reply quickly!
                        </p>
                        <a
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Chat on WhatsApp
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-teal-100">
                    <CardContent className="p-5 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-teal-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-teal-900 mb-1">
                          Call Us
                        </div>
                        <p className="text-sm text-foreground/60 mb-2">
                          Call us 7 days a week for a quick quote or to book
                          your clean.
                        </p>
                        <a
                          href={`tel:${PHONE.replace(/\s/g, "")}`}
                          className="font-display font-bold text-teal-700 text-xl hover:text-teal-800 transition-colors"
                        >
                          {PHONE}
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Service Area */}
              <Card className="bg-teal-50 border-teal-100">
                <CardContent className="p-5">
                  <h3 className="font-display font-bold text-teal-900 mb-3 text-base">
                    📍 Areas We Serve
                  </h3>
                  <p className="text-sm text-foreground/70 mb-3">
                    We cover all Adelaide suburbs including:
                  </p>
                  <div className="grid grid-cols-2 gap-1 text-sm text-teal-800">
                    {[
                      "Adelaide CBD",
                      "Glenelg",
                      "Norwood",
                      "Unley",
                      "Prospect",
                      "Burnside",
                      "Salisbury",
                      "Elizabeth",
                      "Marion",
                      "Morphett Vale",
                      "Henley Beach",
                      "Grange",
                      "Tea Tree Gully",
                      "Golden Grove",
                      "Port Adelaide",
                      "All suburbs →",
                    ].map((suburb) => (
                      <span key={suburb} className="text-xs">
                        ✓ {suburb}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="bg-amber-50 border-amber-100">
                <CardContent className="p-5">
                  <h3 className="font-display font-bold text-teal-900 mb-3 text-base">
                    🕐 Business Hours
                  </h3>
                  <div className="space-y-1.5 text-sm">
                    <div className="flex justify-between">
                      <span className="text-foreground/70">
                        Monday – Friday
                      </span>
                      <span className="font-medium text-teal-800">
                        7:00am – 7:00pm
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/70">Saturday</span>
                      <span className="font-medium text-teal-800">
                        7:00am – 5:00pm
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/70">Sunday</span>
                      <span className="font-medium text-teal-800">
                        8:00am – 4:00pm
                      </span>
                    </div>
                    <div className="mt-2 pt-2 border-t border-amber-200 text-xs text-foreground/60">
                      Same-day bookings available subject to availability.
                    </div>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      {/* ===== BOTTOM TRUST BAR ===== */}
      <section className="py-12 bg-teal-50" aria-label="Trust signals">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: "🛡️", label: "100% Bond Back Guarantee" },
              { icon: "💰", label: "Fixed-Price Quotes" },
              { icon: "⭐", label: "4.9 Star Rating" },
              { icon: "📅", label: "Same-Day Bookings" },
            ].map(({ icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <span className="text-3xl">{icon}</span>
                <span className="text-sm font-semibold text-teal-900">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
