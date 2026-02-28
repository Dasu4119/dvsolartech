import React from 'react';
import {
  ArrowRight,
  Shield,
  Zap,
  Sun,
  Phone,
  MessageCircle,
  MapPin,
  Award,
  Users,
  Sparkles,
  TrendingUp,
  BadgeCheck,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const panelBrands = [
  {
    name: 'Waaree',
    tagline: "India's Largest Module Manufacturer",
    image: '/images/panels/panel1.jpg',
  },
  {
    name: 'Adani',
    tagline: 'Trusted by Millions Across India',
    image: '/images/panels/panel2.jpg',
  },
  {
    name: 'Tata Power',
    tagline: 'Power Backed by the Tata Legacy',
    image: '/images/panels/panel3.jpg',
  },
  {
    name: 'Reone',
    tagline: 'Affordable High-Performance Panels',
    image: '/images/panels/panel4.png',
  },
];

const inverterBrands = [
  {
    name: 'Havells',
    tagline: 'Reliable Home Electrical Solutions',
    image: '/images/inverters/inverter1.jpg',
  },
  {
    name: 'Polycab',
    tagline: 'Precision Engineered Inverters',
    image: '/images/inverters/inverter2.webp',
  },
  {
    name: 'Waaree',
    tagline: 'Complete Solar Ecosystem',
    image: '/images/inverters/inverter3.webp',
  },
  {
    name: 'Sungrow',
    tagline: "World's Most Bankable Inverter Brand",
    image: '/images/inverters/inverter4.png',
  },
  {
    name: 'GoodWe',
    tagline: 'Smart Energy for Smart Homes',
    image: '/images/inverters/inverter5.jpg',
  },
];



const projects = [
  {
    title: '5kW Residential System',
    location: 'Vijayawada, AP',
    type: 'Residential',
    image: '/images/project1.jpg',
  },
  {
    title: '20kW Commercial Plant',
    location: 'Guntur, AP',
    type: 'Commercial',
    image: '/images/project2.jpg',
  },
  {
    title: '10kW Hybrid System',
    location: 'Nellore, AP',
    type: 'Hybrid',
    image: '/images/project4.jpg',
  },
];

export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ═══════════════ HERO SECTION ═══════════════ */}
      <section className="relative bg-navy-900 text-white py-28 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Solar Panels on Roof"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/95 to-navy-900/60 z-0" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent z-0" />

        {/* Decorative blobs */}
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[100px] z-0" />
        <div className="absolute bottom-10 left-20 w-[300px] h-[300px] bg-accent-400/8 rounded-full blur-[80px] z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-up">
            <div className="badge-orange mb-8">
              <Sparkles className="w-3.5 h-3.5 mr-2" />
              #1 Solar Installer in Andhra Pradesh
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] mb-7 tracking-tight">
              Harvest the Power
              <br />
              of the{' '}
              <span className="text-gradient-warm">Sun</span>
            </h1>

            <p className="text-lg md:text-xl text-navy-300 mb-10 leading-relaxed max-w-xl">
              DV Solar Tech is Andhra Pradesh's trusted partner for premium
              solar installations. Clean energy, expert service, lasting value.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                >
                  Get a Free Quote
                </Button>
              </Link>
              <Button
                variant="secondary"
                size="lg"
                className="!bg-[#25D366] !border-[#25D366] !text-white hover:!bg-[#128C7E] hover:!border-[#128C7E]"
                leftIcon={<MessageCircle className="w-5 h-5" />}
                onClick={() =>
                  window.open('https://wa.me/919182928154', '_blank')
                }
              >
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ STATS BAND ═══════════════ */}
      <section className="relative z-20 -mt-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {[
              { number: '500+', label: 'Installations', icon: TrendingUp },
              { number: '5+', label: 'Years Experience', icon: Award },
              { number: '100%', label: 'Tier-1 Brands', icon: BadgeCheck },
              { number: '25yr', label: 'Panel Warranty', icon: Shield },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-soft-md p-5 md:p-6 text-center border border-gray-100/80 hover:shadow-soft-lg transition-all duration-500 group"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 bg-brand-50 rounded-xl mb-3 group-hover:bg-brand-100 transition-colors">
                  <stat.icon className="w-5 h-5 text-brand-600" />
                </div>
                <p className="text-2xl md:text-3xl font-extrabold text-navy-800 mb-0.5">
                  {stat.number}
                </p>
                <p className="text-xs md:text-sm text-navy-400 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ BRANDS & PRODUCTS ═══════════════ */}
      <section className="pt-24 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-blue mb-5">
              Our Brands & Products
            </span>
            <h2 className="section-title mb-5">
              Quality That Lasts a Lifetime
            </h2>
            <p className="section-subtitle mx-auto">
              We exclusively supply and install Tier-1 solar equipment from
              the world's leading manufacturers.
            </p>
          </div>

          {/* Solar Panels */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-br from-accent-400 to-accent-500 p-3 rounded-2xl mr-4 shadow-glow-orange">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy-800">
                Top-Tier Solar Panels
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {panelBrands.map((brand, idx) => (
                <div
                  key={idx}
                  className="card-hover overflow-hidden group cursor-pointer"
                >
                  <div className="h-48 overflow-hidden rounded-t-3xl">
                    <img
                      src={brand.image}
                      alt={`${brand.name} Solar Panel`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="p-5 text-center">
                    <h4 className="text-lg font-bold text-navy-800 mb-1">
                      {brand.name}
                    </h4>
                    <p className="text-xs text-navy-400">{brand.tagline}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inverters */}
          <div>
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-br from-brand-500 to-brand-600 p-3 rounded-2xl mr-4 shadow-glow-blue">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy-800">
                High-Efficiency Inverters
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
              {inverterBrands.map((brand, idx) => (
                <div
                  key={idx}
                  className="card-hover overflow-hidden group cursor-pointer"
                >
                  <div className="h-40 overflow-hidden rounded-t-3xl">
                    <img
                      src={brand.image}
                      alt={`${brand.name} Inverter`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="text-base font-bold text-navy-800 mb-0.5">
                      {brand.name}
                    </h4>
                    <p className="text-xs text-navy-400 leading-snug">
                      {brand.tagline}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-14">
            <Link to="/products">
              <Button
                variant="outline"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ PROJECTS PREVIEW ═══════════════ */}
      <section className="py-14 section-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="badge-blue mb-5">
              Our Projects
            </span>
            <h2 className="section-title mb-5">
              Powering AP, One Roof at a Time
            </h2>
            <p className="section-subtitle mx-auto">
              From residential homes to large-scale commercial setups, see
              our installations across Andhra Pradesh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-3xl shadow-soft hover:shadow-soft-xl transition-all duration-500 cursor-pointer hover:-translate-y-1"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-7 text-white">
                  <span className="inline-flex items-center bg-accent-500 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-3 shadow-md">
                    {project.type}
                  </span>
                  <h3 className="text-xl font-bold mb-1.5">{project.title}</h3>
                  <p className="text-navy-300 text-sm flex items-center">
                    <MapPin className="w-3.5 h-3.5 mr-1.5" />
                    {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects">
              <Button
                variant="outline"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ WHY CHOOSE US ═══════════════ */}
      <section className="py-24 bg-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <span className="badge bg-accent-500/15 text-accent-400 border-accent-500/25 mb-7">
                Why DV Solar Tech
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold mb-10 leading-[1.15] tracking-tight">
                Why Choose DV Solar Tech?
              </h2>
              <div className="space-y-7">
                {[
                  {
                    icon: MapPin,
                    title: 'Local Expertise',
                    desc: 'Based in AP, we understand local weather conditions and government policies better than anyone.',
                  },
                  {
                    icon: Award,
                    title: 'Quality Guaranteed',
                    desc: 'Only Tier-1 solar panels and inverters with full manufacturer warranties.',
                  },
                  {
                    icon: Users,
                    title: 'Excellent Support',
                    desc: "Our relationship doesn't end at installation. Dedicated after-sales support and maintenance.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start group">
                    <div className="bg-white/10 p-3.5 rounded-2xl mr-5 mt-0.5 group-hover:bg-accent-500/20 transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-accent-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">
                        {item.title}
                      </h4>
                      <p className="text-navy-300 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link to="/about">
                  <Button variant="primary">Learn More About Us</Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-brand-500/10 rounded-[2rem] transform rotate-2" />
              <img
                src="/images/project3.jpg"
                alt="Solar Installation Team"
                className="relative rounded-3xl shadow-soft-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-7 rounded-2xl shadow-soft-xl text-navy-800 max-w-xs hidden md:block">
                <p className="text-4xl font-extrabold text-brand-500 mb-1">
                  500+
                </p>
                <p className="font-medium text-navy-500">
                  Happy Homes & Businesses Powered
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA SECTION ═══════════════ */}
      <section className="py-24 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-400/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[60px]" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-7 tracking-tight">
            Ready to Switch to Solar?
          </h2>
          <p className="text-xl text-blue-100/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Get a free site survey and quotation today. Start saving on
            your electricity bills immediately.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-brand-700 hover:bg-gray-50 hover:text-brand-800 font-bold shadow-soft-lg border-0"
              leftIcon={<Phone className="w-5 h-5" />}
              onClick={() => (window.location.href = 'tel:+919182928154')}
            >
              Call +91 91829 28154
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="!bg-accent-500 !text-white hover:!bg-accent-600 font-bold shadow-soft-lg border-0"
              leftIcon={<MessageCircle className="w-5 h-5" />}
              onClick={() =>
                window.open('https://wa.me/919182928154', '_blank')
              }
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}