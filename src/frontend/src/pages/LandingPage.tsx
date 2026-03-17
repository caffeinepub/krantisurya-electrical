import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Award,
  Bolt,
  CheckCircle,
  Clock,
  DollarSign,
  Mail,
  MapPin,
  Menu,
  Phone,
  Shield,
  Star,
  Thermometer,
  Tv,
  Wind,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const services = [
  {
    icon: Zap,
    title: "LED Light Fitting",
    desc: "Professional LED light installation for energy-efficient and bright illumination.",
  },
  {
    icon: Bolt,
    title: "Spot Light Installation",
    desc: "Expert spot light fitting for focused, stylish lighting in any room.",
  },
  {
    icon: Wind,
    title: "Fan Fitting",
    desc: "Expert ceiling & exhaust fan installation and repair services.",
  },
  {
    icon: Wrench,
    title: "Switch Board Fitting",
    desc: "Safe and professional switch board installation and upgrades.",
  },
  {
    icon: Tv,
    title: "TV Point Installation",
    desc: "Professional TV point installation for perfect signal & clean setup.",
  },
  {
    icon: Thermometer,
    title: "Geyser Point Installation",
    desc: "Safe geyser point installation, repair & maintenance for all brands.",
  },
  {
    icon: Zap,
    title: "New House Wiring",
    desc: "Complete new house wiring solutions with certified expertise.",
  },
];

const features = [
  { icon: Award, label: "Licensed Experts" },
  { icon: CheckCircle, label: "Reliability" },
  { icon: DollarSign, label: "Upfront Pricing" },
  { icon: Shield, label: "Safety First" },
  { icon: Clock, label: "24/7 Support" },
];

const testimonials = [
  {
    name: "Rajesh Patil",
    title: "Homeowner, Mangalwedha",
    text: "Krantisurya did an excellent wiring job for my new flat. Very professional, clean work and on-time delivery. Highly recommended!",
    initials: "RP",
  },
  {
    name: "Sunita Deshmukh",
    title: "Restaurant Owner",
    text: "They installed geyser and fan fittings in all 4 rooms. Reasonable pricing and the team was very polite. Will call again.",
    initials: "SD",
  },
  {
    name: "Manoj Shinde",
    title: "Office Manager",
    text: "Annual maintenance contract with them — totally worth it. Quick response and certified electricians. 5 stars!",
    initials: "MS",
  },
];

const galleryItems = [
  {
    image: "/assets/generated/gallery-wiring.dim_600x400.jpg",
    label: "Wiring Installation",
  },
  {
    image: "/assets/generated/gallery-fan.dim_600x400.jpg",
    label: "Fan Fitting",
  },
  {
    image: "/assets/generated/gallery-geyser.dim_600x400.jpg",
    label: "Geyser Installation",
  },
  {
    image: "/assets/generated/gallery-tv.dim_600x400.jpg",
    label: "TV Point",
  },
  {
    image: "/assets/generated/gallery-maintenance.dim_600x400.jpg",
    label: "Maintenance Work",
  },
  {
    image: "/assets/generated/gallery-wiring.dim_600x400.jpg",
    label: "Complete Wiring Project",
  },
];

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Utility Bar */}
      <div className="bg-navy text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <span className="font-semibold tracking-wide">
            Krantisurya Electrical Services
          </span>
          <a
            href="tel:+917775987765"
            className="flex items-center gap-2 hover:text-orange transition-colors"
            data-ocid="utility.link"
          >
            <Phone className="w-4 h-4" />
            <span>+91 77759 87765</span>
          </a>
        </div>
      </div>

      {/* Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full overflow-hidden flex items-center justify-center bg-navy">
              <img
                src="/assets/generated/krantisurya-logo-transparent.dim_300x300.png"
                alt="Krantisurya Electrical Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-bold text-navy text-lg">
              Krantisurya Electrical
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground">
            <button
              type="button"
              onClick={() => scrollTo("home")}
              className="hover:text-orange transition-colors"
              data-ocid="nav.link"
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => scrollTo("services")}
              className="hover:text-orange transition-colors"
              data-ocid="nav.link"
            >
              Services
            </button>
            <button
              type="button"
              onClick={() => scrollTo("about")}
              className="hover:text-orange transition-colors"
              data-ocid="nav.link"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => scrollTo("gallery")}
              className="hover:text-orange transition-colors"
              data-ocid="nav.link"
            >
              Gallery
            </button>
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="hover:text-orange transition-colors"
              data-ocid="nav.link"
            >
              Contact
            </button>
            <a
              href="/admin"
              className="hover:text-orange transition-colors text-muted-foreground"
              data-ocid="nav.link"
            >
              Admin
            </a>
          </nav>

          <Button
            onClick={() => scrollTo("contact")}
            className="hidden md:flex bg-blue-cta hover:bg-blue-cta/90 text-white rounded-full px-6"
            data-ocid="nav.primary_button"
          >
            Book Now
          </Button>

          <button
            type="button"
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            data-ocid="nav.toggle"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-3 text-sm font-medium">
            <button
              type="button"
              onClick={() => scrollTo("home")}
              className="text-left hover:text-orange"
              data-ocid="mobile_nav.link"
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => scrollTo("services")}
              className="text-left hover:text-orange"
              data-ocid="mobile_nav.link"
            >
              Services
            </button>
            <button
              type="button"
              onClick={() => scrollTo("about")}
              className="text-left hover:text-orange"
              data-ocid="mobile_nav.link"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => scrollTo("gallery")}
              className="text-left hover:text-orange"
              data-ocid="mobile_nav.link"
            >
              Gallery
            </button>
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="text-left hover:text-orange"
              data-ocid="mobile_nav.link"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollTo("contact")}
              className="bg-blue-cta text-white rounded-full"
              data-ocid="mobile_nav.primary_button"
            >
              Book Now
            </Button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[600px] flex">
        <div className="w-full lg:w-1/2 bg-navy flex items-center px-8 lg:px-16 py-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white max-w-lg"
          >
            <div className="inline-flex items-center gap-2 bg-orange/20 text-orange rounded-full px-4 py-1 text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" /> Trusted Since 2010
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
              Your Trusted
              <br />
              <span className="text-orange">Electrical</span>
              <br />
              Professionals
            </h1>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              From wiring contracts to fan fitting — we handle all electrical
              work with certified experts, upfront pricing, and 24/7 support.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollTo("contact")}
                className="bg-orange hover:bg-orange/90 text-white font-semibold px-8 py-3 rounded-full"
                data-ocid="hero.primary_button"
              >
                Request a Free Quote
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollTo("services")}
                className="border-white text-white hover:bg-white hover:text-navy font-semibold px-8 py-3 rounded-full bg-transparent"
                data-ocid="hero.secondary_button"
              >
                Our Services
              </Button>
            </div>
          </motion.div>
        </div>
        <div
          className="hidden lg:block w-1/2 bg-cover bg-center relative"
          style={{
            backgroundImage: `url('/assets/generated/hero-electrician.dim_800x600.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-navy/20" />
        </div>
        {/* Mobile hero image fallback */}
        <div
          className="lg:hidden absolute inset-0 bg-cover bg-center -z-10"
          style={{
            backgroundImage: `url('/assets/generated/hero-electrician.dim_800x600.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-navy/80" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-2">
              What We Offer
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-navy">
              Our Services
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Professional electrical services for residential and commercial
              needs.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card
                  className="group hover:shadow-lg transition-shadow border border-border h-full"
                  data-ocid={`services.item.${i + 1}`}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange/10 transition-colors">
                      <svc.icon className="w-6 h-6 text-navy group-hover:text-orange transition-colors" />
                    </div>
                    <h3 className="font-bold text-navy text-lg mb-2">
                      {svc.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {svc.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-2">
              Our Strengths
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
              Why Choose Krantisurya?
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-white/10 hover:bg-white/15 transition-colors"
                data-ocid={`features.item.${i + 1}`}
              >
                <div className="w-14 h-14 bg-orange/20 rounded-full flex items-center justify-center">
                  <f.icon className="w-7 h-7 text-orange" />
                </div>
                <span className="text-white font-semibold text-sm">
                  {f.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-2">
              Our Projects
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-navy">
              Our Work
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              A glimpse of our completed projects
            </p>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {galleryItems.map((item, i) => (
              <motion.div
                key={`${item.label}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group overflow-hidden rounded-2xl shadow-md bg-white"
                data-ocid={`gallery.item.${i + 1}`}
              >
                <div className="overflow-hidden aspect-[3/2]">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="px-4 py-3">
                  <p className="font-semibold text-navy text-sm">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left info panel */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-navy rounded-2xl p-10 text-white"
            >
              <h2 className="text-3xl font-extrabold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-white/75 mb-8 leading-relaxed">
                Contact us today for a free quote. Our licensed electricians are
                available 24/7 for emergencies and scheduled visits.
              </p>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-orange/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-orange" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60 uppercase tracking-wider">
                      Phone
                    </p>
                    <p className="font-semibold">+91 77759 87765</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-orange/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-orange" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60 uppercase tracking-wider">
                      Email
                    </p>
                    <p className="font-semibold">
                      krantisurya.electrical@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-orange/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-orange" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60 uppercase tracking-wider">
                      Service Area
                    </p>
                    <p className="font-semibold">Mangalwedha, Solapur</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-lg border border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-extrabold text-navy mb-6">
                    Book a Service
                  </h3>
                  <form
                    action="https://formsubmit.co/sidhugaikwad737@gmail.com"
                    method="POST"
                    className="space-y-4"
                    data-ocid="booking.panel"
                  >
                    <input
                      type="hidden"
                      name="_subject"
                      value="New Service Booking - Krantisurya Electrical"
                    />
                    <input type="hidden" name="_captcha" value="false" />
                    <input
                      type="hidden"
                      name="_next"
                      value="https://krantisurya-electrical.caffeine.app"
                    />

                    <div className="space-y-1">
                      <Label htmlFor="name">Customer Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        required
                        data-ocid="booking.input"
                      />
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="phone">Mobile Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        required
                        data-ocid="booking.input"
                      />
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="address">Address *</Label>
                      <Input
                        id="address"
                        name="address"
                        type="text"
                        placeholder="Your address"
                        required
                        data-ocid="booking.input"
                      />
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="service">Select Service</Label>
                      <select
                        id="service"
                        name="service"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        data-ocid="booking.select"
                      >
                        <option>LED Light Fitting</option>
                        <option>Spot Light Installation</option>
                        <option>Fan Fitting</option>
                        <option>Switch Board Fitting</option>
                        <option>TV Point Installation</option>
                        <option>Geyser Point Installation</option>
                        <option>New House Wiring</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        data-ocid="booking.input"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-orange hover:bg-orange/90 text-white font-bold py-3 rounded-lg"
                      data-ocid="booking.submit_button"
                    >
                      Book Service
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-2">
              Happy Customers
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-navy">
              Testimonials
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-ocid={`testimonials.item.${i + 1}`}
              >
                <Card className="h-full border border-border shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex gap-1 text-orange mb-4">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <Star key={n} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-navy text-white font-bold">
                          {t.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-navy text-sm">
                          {t.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {t.title}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2b2b2b] text-white pt-16 pb-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-full overflow-hidden bg-navy flex items-center justify-center">
                  <img
                    src="/assets/generated/krantisurya-logo-transparent.dim_300x300.png"
                    alt="Krantisurya Electrical Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-bold text-lg">Krantisurya</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Professional electrical services with certified experts. Serving
                Mangalwedha, Solapur, Maharashtra since 2010.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-orange">Services</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>LED Light Fitting</li>
                <li>Spot Light Installation</li>
                <li>Fan Fitting</li>
                <li>Switch Board Fitting</li>
                <li>TV Point Installation</li>
                <li>Geyser Point Installation</li>
                <li>New House Wiring</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-orange">Contact</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> +91 77759 87765
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" /> krantisurya.electrical@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Near Doke Hospital,
                  Mangalwedha, Solapur, Maharashtra
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-orange">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <button
                    type="button"
                    onClick={() => scrollTo("home")}
                    className="hover:text-orange transition-colors"
                    data-ocid="footer.link"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollTo("services")}
                    className="hover:text-orange transition-colors"
                    data-ocid="footer.link"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollTo("gallery")}
                    className="hover:text-orange transition-colors"
                    data-ocid="footer.link"
                  >
                    Gallery
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollTo("contact")}
                    className="hover:text-orange transition-colors"
                    data-ocid="footer.link"
                  >
                    Book Now
                  </button>
                </li>
                <li>
                  <a
                    href="/admin"
                    className="hover:text-orange transition-colors"
                    data-ocid="footer.link"
                  >
                    Admin
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-white/50">
            <p>
              &copy; {new Date().getFullYear()} Krantisurya Electrical. All
              rights reserved.
            </p>
            <p>
              Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                className="hover:text-white transition-colors underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
