import React, { useState } from 'react';
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
  Home,
  Building2,
  Wrench,
  Droplets,
  Star,
  CheckCircle,
  IndianRupee,
  TrendingDown,
  ClipboardList,
  Ruler,
  HardHat,
  PlugZap,
  Handshake,
  Quote,
  Calculator,
  BookOpen,
  Clock,
  Tag,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { usePageSEO } from '../hooks/usePageSEO';


// ─── DATA ────────────────────────────────────────────────────────────────────

const panelBrands = [
  { name: 'Waaree', tagline: "India's Largest Module Manufacturer", image: '/images/panels/panel1.jpg' },
  { name: 'Adani', tagline: 'Trusted by Millions Across India', image: '/images/panels/panel2.jpg' },
  { name: 'Tata Power', tagline: 'Power Backed by the Tata Legacy', image: '/images/panels/panel3.jpg' },
  { name: 'Reone', tagline: 'Affordable High-Performance Panels', image: '/images/panels/panel4.png' },
];

const inverterBrands = [
  { name: 'Havells', tagline: 'Reliable Home Electrical Solutions', image: '/images/inverters/inverter1.jpg' },
  { name: 'Polycab', tagline: 'Precision Engineered Inverters', image: '/images/inverters/inverter2.webp' },
  { name: 'Waaree', tagline: 'Complete Solar Ecosystem', image: '/images/inverters/inverter3.webp' },
  { name: 'Sungrow', tagline: "World's Most Bankable Inverter Brand", image: '/images/inverters/inverter4.png' },
  { name: 'GoodWe', tagline: 'Smart Energy for Smart Homes', image: '/images/inverters/inverter5.jpg' },
];

const projects = [
  { title: '5kW Residential System', location: 'Vijayawada, AP', type: 'Residential', capacity: '5 kW', image: '/images/project1.jpg', review: 'Our electricity bill dropped from ₹4,500 to just ₹300. Best investment!' },
  { title: '20kW Commercial Plant', location: 'Guntur, AP', type: 'Commercial', capacity: '20 kW', image: '/images/project2.jpg', review: 'Professional team, clean work. ROI was better than expected.' },
  { title: '10kW Hybrid System', location: 'Nellore, AP', type: 'Hybrid', capacity: '10 kW', image: '/images/project4.jpg', review: 'Uninterrupted power even during load shedding. Excellent system!' },
];

const services = [
  { icon: Home, title: 'Residential Solar', desc: 'Cut home electricity bills by 60–90% with custom rooftop systems.', color: 'from-brand-500 to-brand-600' },
  { icon: Building2, title: 'Commercial Solar', desc: 'Large-scale systems for offices, factories & hospitals.', color: 'from-accent-500 to-orange-500' },
  { icon: Wrench, title: 'Solar Maintenance', desc: 'AMC plans, cleaning, repairs & performance monitoring.', color: 'from-emerald-500 to-green-600' },
  { icon: Zap, title: 'Net Metering', desc: 'Full DISCOM approval support — sell power back to the grid.', color: 'from-purple-500 to-indigo-600' },
  { icon: Droplets, title: 'Solar Water Pumps', desc: 'PM-KUSUM subsidized pumps for farms & agriculture.', color: 'from-cyan-500 to-blue-600' },
];

const testimonials = [
  {
    name: 'Ravi Kumar',
    location: 'Vijayawada',
    stars: 5,
    text: 'Outstanding service from DV Solar Tech! They handled everything — from subsidy paperwork to net metering. My bill went from ₹5,000 to ₹400. Absolutely recommend them.',
    system: '5kW Residential',
  },
  {
    name: 'Venkata Rao',
    location: 'Guntur',
    stars: 5,
    text: 'Installed a 20kW system for our factory. The team was professional and met all deadlines. Our power costs dropped by ₹40,000/month. Excellent ROI!',
    system: '20kW Commercial',
  },
  {
    name: 'Suresh Reddy',
    location: 'Kurnool',
    stars: 5,
    text: 'The solar water pump is a game-changer for our farm. No more diesel costs or power cuts. DV Solar Tech got us PM-KUSUM subsidy and installed in just 3 days.',
    system: 'Solar Water Pump',
  },
  {
    name: 'Lakshmi Devi',
    location: 'Nellore',
    stars: 5,
    text: 'Very honest and transparent pricing. No hidden costs. The 3kW system is working perfectly. I got ₹78,000 government subsidy thanks to their help.',
    system: '3kW Residential',
  },
];

const installSteps = [
  { icon: ClipboardList, step: '01', title: 'Free Site Survey', desc: 'Our engineer visits your site to assess roof space, sunlight, and electrical load — completely free.' },
  { icon: Ruler, step: '02', title: 'Custom System Design', desc: 'We create a tailored solar design with detailed ROI, production estimates, and government subsidy details.' },
  { icon: BadgeCheck, step: '03', title: 'Approval & Subsidy', desc: 'We handle DISCOM approvals and government subsidy applications on your behalf with zero hassle.' },
  { icon: HardHat, step: '04', title: 'Professional Installation', desc: 'Our certified team installs your system in 1–3 days with Tier-1 equipment and zero mess left behind.' },
  { icon: PlugZap, step: '05', title: 'Net Metering & Handover', desc: 'We complete net metering connection and hand over your system with full training on monitoring apps.' },
];

const blogPreviews = [
  { title: '3kW Solar System Price in India 2025 – Complete Guide', category: 'Pricing Guide', readTime: '5 min', image: '/images/project1.jpg', slug: '/blog' },
  { title: 'Solar Subsidy Guide for Andhra Pradesh – PM Surya Ghar 2025', category: 'Government Schemes', readTime: '7 min', image: '/images/project2.jpg', slug: '/blog' },
  { title: 'Benefits of Rooftop Solar for Homes – Why Go Solar in 2025', category: 'For Homeowners', readTime: '4 min', image: '/images/project3.jpg', slug: '/blog' },
];

// ─── Inline Calculator (simplified) ─────────────────────────────────────────

function InlineCalculator() {
  const [bill, setBill] = useState('');
  const [result, setResult] = useState<null | { kw: number; cost: number; subsidy: number; savings: number }>(null);

  const calc = (e: React.FormEvent) => {
    e.preventDefault();
    const monthly = parseFloat(bill);
    if (!monthly || monthly < 100) return;
    const tariff = 7;
    const units = monthly / tariff;
    const kw = Math.max(1, Math.min(10, Math.ceil(units / 120)));
    const subsidyMap: Record<number, number> = { 1: 30000, 2: 60000 };
    const subsidy = kw >= 3 ? 78000 : (subsidyMap[kw] ?? 78000);
    const cost = kw * 72000 - subsidy;
    const savings = Math.round(kw * 120 * 12 * tariff);
    setResult({ kw, cost, subsidy, savings });
  };

  const fmt = (n: number) => new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(n);

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={calc} className="flex flex-col sm:flex-row gap-4 items-end mb-8">
        <div className="flex-1">
          <label className="block text-sm font-semibold text-navy-700 mb-2">
            Monthly Electricity Bill (₹)
          </label>
          <input
            type="number"
            min="100"
            required
            value={bill}
            onChange={e => setBill(e.target.value)}
            placeholder="e.g. 3000"
            className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400 outline-none transition-all text-navy-700 text-lg placeholder:text-navy-300 shadow-soft"
            id="home-bill-input"
          />
        </div>
        <Button type="submit" variant="primary" size="lg" leftIcon={<Calculator className="w-5 h-5" />} className="whitespace-nowrap">
          Calculate Savings
        </Button>
      </form>

      {result && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-up">
          {[
            { label: 'Recommended System', value: `${result.kw} kW`, sub: 'Panel capacity', bg: 'bg-navy-800', textColor: 'text-white', subColor: 'text-navy-400' },
            { label: 'System Cost', value: `₹${fmt(result.cost + result.subsidy)}`, sub: 'Before subsidy', bg: 'bg-white', textColor: 'text-navy-800', subColor: 'text-navy-400' },
            { label: 'Govt. Subsidy', value: `−₹${fmt(result.subsidy)}`, sub: 'You get back', bg: 'bg-emerald-50 border border-emerald-200', textColor: 'text-emerald-700', subColor: 'text-emerald-500' },
            { label: 'Annual Savings', value: `₹${fmt(result.savings)}`, sub: 'Per year approx.', bg: 'bg-accent-500', textColor: 'text-white', subColor: 'text-white/70' },
          ].map((card, i) => (
            <div key={i} className={`${card.bg} rounded-2xl p-5 text-center shadow-soft`}>
              <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${card.subColor}`}>{card.label}</p>
              <p className={`text-2xl font-extrabold ${card.textColor}`}>{card.value}</p>
              <p className={`text-xs mt-1 ${card.subColor}`}>{card.sub}</p>
            </div>
          ))}
        </div>
      )}

      <div className={`text-center ${result ? 'mt-6' : 'mt-2'}`}>
        <Link to="/calculator" className="text-brand-500 hover:text-brand-600 text-sm font-semibold inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
          Get detailed estimate with location & subsidy breakdown
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export function HomePage() {
  usePageSEO({
    title: 'DV Solar Tech | #1 Solar Installer in Andhra Pradesh',
    description: 'Cut your electricity bill by 60-90% with DV Solar Tech. Premium Waaree, Adani, Tata Power solar panels + Sungrow inverters. Govt subsidy up to ₹78,000. Free site survey across Andhra Pradesh.',
    keywords: 'solar panels Andhra Pradesh, solar installation Vijayawada, solar system Guntur, Waaree panels AP, government solar subsidy, PM Surya Ghar AP',
    canonical: '/',
  });
  return (

    <div className="flex flex-col min-h-screen">

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative bg-navy-900 text-white py-28 lg:py-44 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Solar rooftop installation in Andhra Pradesh"
            width="1920"
            height="1080"
            decoding="async"
            fetchPriority="high"
            className="w-full h-full object-cover opacity-25"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900/40 z-0" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent z-0" />
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-accent-400/10 rounded-full blur-[100px] z-0" />
        <div className="absolute bottom-10 left-20 w-[300px] h-[300px] bg-brand-500/10 rounded-full blur-[80px] z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-up">
            <div className="badge-orange mb-8">
              <Sparkles className="w-3.5 h-3.5 mr-2" />
              #1 Solar Installer in Andhra Pradesh
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              Cut Your Electricity Bill
              <br />
              by{' '}
              <span className="text-gradient-warm">60–90%</span>
              <br />
              with Solar
            </h1>

            <p className="text-lg md:text-xl text-navy-300 mb-4 leading-relaxed max-w-xl">
              DV Solar Tech installs premium solar systems across Andhra Pradesh.
              Government subsidy up to <span className="text-accent-400 font-bold">₹78,000</span> available.
            </p>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-3 mb-10">
              {['500+ Installations', '25-yr Panel Warranty', 'Tier-1 Brands Only', 'Free Site Survey'].map(chip => (
                <span key={chip} className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white/90 text-xs font-medium px-3 py-1.5 rounded-full border border-white/20">
                  <CheckCircle className="w-3.5 h-3.5 text-accent-400" />
                  {chip}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />} className="animate-pulse-glow">
                  Get Free Solar Quote
                </Button>
              </Link>
              <Link to="/calculator">
                <Button variant="secondary" size="lg" leftIcon={<Calculator className="w-5 h-5" />}
                  className="!bg-accent-500 !border-accent-500 !text-white hover:!bg-accent-600 hover:!border-accent-600">
                  Calculate My Savings
                </Button>
              </Link>
              <Button
                variant="secondary"
                size="lg"
                className="!bg-[#25D366] !border-[#25D366] !text-white hover:!bg-[#128C7E] hover:!border-[#128C7E]"
                leftIcon={<MessageCircle className="w-5 h-5" />}
                onClick={() => window.open('https://wa.me/919182928154', '_blank')}
              >
                WhatsApp
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
              { number: '500+', label: 'Installations Done', icon: TrendingUp },
              { number: '5+', label: 'Years Experience', icon: Award },
              { number: '100%', label: 'Tier-1 Brands', icon: BadgeCheck },
              { number: '25yr', label: 'Panel Warranty', icon: Shield },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-soft-md p-5 md:p-6 text-center border border-gray-100/80 hover:shadow-soft-lg transition-all duration-500 group">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-brand-50 rounded-xl mb-3 group-hover:bg-brand-100 transition-colors">
                  <stat.icon className="w-5 h-5 text-brand-600" />
                </div>
                <p className="text-2xl md:text-3xl font-extrabold text-navy-800 mb-0.5">{stat.number}</p>
                <p className="text-xs md:text-sm text-navy-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ SERVICES ═══════════════ */}
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge-orange mb-5">What We Do</span>
            <h2 className="section-title mb-5">Our Solar Services</h2>
            <p className="section-subtitle mx-auto">
              End-to-end solar solutions — from installation to maintenance and government subsidy support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {services.map((svc, idx) => (
              <Link to="/services" key={idx} className="group">
                <div className="bg-white rounded-3xl border border-gray-100/80 shadow-soft hover:shadow-soft-lg hover:-translate-y-1.5 transition-all duration-500 p-7 h-full flex flex-col text-center cursor-pointer">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${svc.color} mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <svc.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-navy-800 mb-2">{svc.title}</h3>
                  <p className="text-sm text-navy-400 leading-relaxed flex-1">{svc.desc}</p>
                  <div className="mt-4 text-brand-500 text-xs font-semibold inline-flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="outline" rightIcon={<ArrowRight className="w-4 h-4" />}>
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ SOLAR SAVINGS CALCULATOR ═══════════════ */}
      <section className="py-20 section-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-blue mb-5">
              <Calculator className="w-3.5 h-3.5 mr-2" />
              Free Tool
            </span>
            <h2 className="section-title mb-5">Solar Savings Calculator</h2>
            <p className="section-subtitle mx-auto">
              Enter your monthly electricity bill and instantly see how much you can save with solar.
            </p>
          </div>

          <InlineCalculator />
        </div>
      </section>

      {/* ═══════════════ GOVERNMENT SUBSIDY ═══════════════ */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-green-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-6">
                <IndianRupee className="w-4 h-4" />
                <span className="text-sm font-semibold">Government Scheme</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-5 leading-tight">
                Get Up to ₹78,000 in<br />Solar Subsidy
              </h2>
              <p className="text-emerald-100 leading-relaxed mb-8 text-lg">
                Under the <strong className="text-white">PM Surya Ghar Muft Bijli Yojana</strong>, the Central Government gives direct bank transfer subsidies for residential rooftop solar systems. DV Solar Tech handles the entire application for you.
              </p>
              <ul className="space-y-3 mb-8">
                {['No advance payment for subsidy', 'Directly credited to your bank account', 'Full documentation support by our team', 'Applicable for all residential connections'].map(p => (
                  <li key={p} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-300 flex-shrink-0" />
                    <span className="text-emerald-100">{p}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-emerald-700 hover:bg-gray-50 font-bold border-0" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Apply for Subsidy
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                { size: 'Up to 1 kW', subsidy: '₹30,000', note: 'Small homes, 1–2 BHK' },
                { size: 'Up to 2 kW', subsidy: '₹60,000', note: 'Medium homes, 2–3 BHK' },
                { size: '3 kW & above', subsidy: '₹78,000', note: 'Large homes — max benefit', highlight: true },
              ].map((row, i) => (
                <div key={i} className={`rounded-2xl p-6 flex items-center justify-between ${row.highlight ? 'bg-white text-emerald-700 shadow-lg' : 'bg-white/15 text-white'}`}>
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${row.highlight ? 'text-emerald-400' : 'text-emerald-200'}`}>{row.note}</p>
                    <p className={`text-lg font-bold ${row.highlight ? 'text-emerald-800' : ''}`}>{row.size}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-xs ${row.highlight ? 'text-emerald-400' : 'text-emerald-200'}`}>Subsidy Amount</p>
                    <p className={`text-3xl font-extrabold ${row.highlight ? 'text-emerald-600' : ''}`}>{row.subsidy}</p>
                  </div>
                </div>
              ))}
              <p className="text-emerald-200 text-xs text-center">* Subject to eligibility. Residential connections only.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ INSTALLATION PROCESS ═══════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-blue mb-5">How It Works</span>
            <h2 className="section-title mb-5">Your Solar Journey — 5 Easy Steps</h2>
            <p className="section-subtitle mx-auto">
              From first inquiry to first kilowatt generated — we make going solar effortless.
            </p>
          </div>

          <div className="relative">
            {/* Connector line — desktop only */}
            <div className="hidden lg:block absolute top-10 left-1/2 -translate-x-1/2 w-[80%] h-0.5 bg-gradient-to-r from-brand-200 via-accent-300 to-brand-200" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {installSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center relative group">
                  <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center mb-5 shadow-glow-blue group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-white" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 bg-accent-500 rounded-full text-white text-xs font-bold flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-navy-800 mb-2">{step.title}</h3>
                  <p className="text-sm text-navy-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-14">
            <Link to="/contact">
              <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Start Your Solar Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ BRANDS & PRODUCTS ═══════════════ */}
      <section className="py-20 section-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge-blue mb-5">Our Brands & Products</span>
            <h2 className="section-title mb-5">Quality That Lasts a Lifetime</h2>
            <p className="section-subtitle mx-auto">
              We exclusively supply and install Tier-1 solar equipment from the world's leading manufacturers.
            </p>
          </div>

          {/* Solar Panels */}
          <div className="mb-14">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-br from-accent-400 to-accent-500 p-3 rounded-2xl mr-4 shadow-glow-orange">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy-800">Top-Tier Solar Panels</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {panelBrands.map((brand, idx) => (
                <div key={idx} className="card-hover overflow-hidden group cursor-pointer">
                  <div className="h-48 overflow-hidden rounded-t-3xl">
                    <img src={brand.image} alt={`${brand.name} Solar Panel`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                  </div>
                  <div className="p-5 text-center">
                    <h4 className="text-lg font-bold text-navy-800 mb-1">{brand.name}</h4>
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
              <h3 className="text-2xl font-bold text-navy-800">High-Efficiency Inverters</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
              {inverterBrands.map((brand, idx) => (
                <div key={idx} className="card-hover overflow-hidden group cursor-pointer">
                  <div className="h-40 overflow-hidden rounded-t-3xl">
                    <img src={brand.image} alt={`${brand.name} Inverter`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="text-base font-bold text-navy-800 mb-0.5">{brand.name}</h4>
                    <p className="text-xs text-navy-400 leading-snug">{brand.tagline}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="outline" rightIcon={<ArrowRight className="w-4 h-4" />}>View All Products</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ PROJECTS PREVIEW ═══════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-blue mb-5">Our Projects</span>
            <h2 className="section-title mb-5">Powering AP, One Roof at a Time</h2>
            <p className="section-subtitle mx-auto">
              From residential homes to large-scale commercial setups — see our installations across Andhra Pradesh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {projects.map((project, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-3xl shadow-soft hover:shadow-soft-xl transition-all duration-500 cursor-pointer hover:-translate-y-1">
                <img src={project.image} alt={project.title} className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center bg-accent-500 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                      {project.type}
                    </span>
                    <span className="bg-white/15 backdrop-blur-sm text-xs font-semibold px-2.5 py-1 rounded-full">
                      {project.capacity}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                  <p className="text-navy-300 text-xs flex items-center mb-3">
                    <MapPin className="w-3.5 h-3.5 mr-1" />
                    {project.location}
                  </p>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                    <Quote className="w-3.5 h-3.5 text-accent-400 mb-1" />
                    <p className="text-white/85 text-xs leading-relaxed italic">{project.review}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects">
              <Button variant="outline" rightIcon={<ArrowRight className="w-4 h-4" />}>View All Projects</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIALS ═══════════════ */}
      <section className="py-24 section-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge-orange mb-5">Customer Reviews</span>
            <h2 className="section-title mb-5">What Our Customers Say</h2>
            <p className="section-subtitle mx-auto">
              500+ happy homes and businesses across Andhra Pradesh — hear their stories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white rounded-3xl border border-gray-100/80 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-500 p-7 flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <Quote className="w-6 h-6 text-brand-200 mb-3" />
                <p className="text-navy-500 text-sm leading-relaxed flex-1 italic">"{t.text}"</p>

                <div className="mt-5 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-navy-800 text-sm">{t.name}</p>
                    <p className="text-xs text-navy-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3" />{t.location}
                    </p>
                  </div>
                  <span className="text-xs bg-brand-50 text-brand-600 px-2.5 py-1 rounded-full font-medium">{t.system}</span>
                </div>
              </div>
            ))}
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
                  { icon: MapPin, title: 'Local Expertise', desc: 'Based in AP, we understand local weather, DISCOM rules and government policies better than anyone.' },
                  { icon: Award, title: 'Quality Guaranteed', desc: 'Only Tier-1 panels and inverters with full manufacturer warranties — Waaree, Adani, Tata, Sungrow & more.' },
                  { icon: Users, title: 'Excellent Support', desc: 'Our relationship doesn\'t end at installation. Dedicated after-sales support, AMC, and monitoring.' },
                  { icon: TrendingDown, title: 'Subsidy Assistance', desc: 'We handle all PM Surya Ghar documentation so you get your ₹78,000 subsidy without any hassle.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start group">
                    <div className="bg-white/10 p-3.5 rounded-2xl mr-5 mt-0.5 group-hover:bg-accent-500/20 transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-accent-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-navy-300 leading-relaxed">{item.desc}</p>
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
              <img src="/images/project3.jpg" alt="Solar Installation Team" className="relative rounded-3xl shadow-soft-xl w-full" />
              <div className="absolute -bottom-6 -left-6 bg-white p-7 rounded-2xl shadow-soft-xl text-navy-800 max-w-xs hidden md:block">
                <p className="text-4xl font-extrabold text-brand-500 mb-1">500+</p>
                <p className="font-medium text-navy-500">Happy Homes & Businesses Powered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ BLOG PREVIEW ═══════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-blue mb-5">
              <BookOpen className="w-3.5 h-3.5 mr-2" />
              Solar Knowledge Hub
            </span>
            <h2 className="section-title mb-5">Latest Guides & Articles</h2>
            <p className="section-subtitle mx-auto">
              Expert resources to help you make the best solar decision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {blogPreviews.map((post, idx) => (
              <Link to={post.slug} key={idx} className="card-hover overflow-hidden group block">
                <div className="h-52 overflow-hidden rounded-t-3xl">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-7">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-700">
                      <Tag className="w-3 h-3" />{post.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-navy-400">
                      <Clock className="w-3.5 h-3.5" />{post.readTime}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-navy-800 leading-snug group-hover:text-brand-600 transition-colors">
                    {post.title}
                  </h3>
                  <div className="mt-4 flex items-center gap-1.5 text-brand-500 text-sm font-semibold group-hover:gap-3 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/blog">
              <Button variant="outline" rightIcon={<ArrowRight className="w-4 h-4" />}>View All Articles</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA SECTION ═══════════════ */}
      <section className="py-24 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-400/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[60px]" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-7 tracking-tight">
            Ready to Switch to Solar?
          </h2>
          <p className="text-xl text-blue-100/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Get a free site survey and quotation today. Our team responds within 2 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="bg-white text-brand-700 hover:bg-gray-50 hover:text-brand-800 font-bold shadow-soft-lg border-0" leftIcon={<Phone className="w-5 h-5" />}>
                Call +91 91829 28154
              </Button>
            </Link>
            <Button
              variant="secondary"
              size="lg"
              className="!bg-accent-500 !text-white hover:!bg-accent-600 font-bold shadow-soft-lg border-0"
              leftIcon={<MessageCircle className="w-5 h-5" />}
              onClick={() => window.open('https://wa.me/919182928154', '_blank')}
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}