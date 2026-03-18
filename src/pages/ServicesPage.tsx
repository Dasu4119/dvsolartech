import React from 'react';
import { usePageSEO } from '../hooks/usePageSEO';
import {
  Home,
  Building2,
  Wrench,
  Zap,
  Droplets,
  ArrowRight,
  CheckCircle,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Home,
    title: 'Residential Solar',
    subtitle: 'For Homes & Villas',
    color: 'from-brand-500 to-brand-600',
    iconBg: 'bg-brand-50',
    iconColor: 'text-brand-600',
    description:
      'Transform your home into a solar powerhouse. Reduce your monthly electricity bills by 60–90% with a custom-designed rooftop solar system tailored to your household needs.',
    benefits: [
      'Custom system design for your roof',
      'Net metering assistance & registration',
      'Government subsidy application support',
      '25-year panel warranty',
      'AMC & maintenance plans available',
    ],
    capacity: '1kW – 10kW',
    cta: 'Get Home Solar Quote',
  },
  {
    icon: Building2,
    title: 'Commercial Solar',
    subtitle: 'For Businesses & Industries',
    color: 'from-accent-500 to-orange-500',
    iconBg: 'bg-accent-50',
    iconColor: 'text-accent-600',
    description:
      'Slash your business electricity costs with large-scale commercial solar systems. Ideal for factories, schools, offices, hospitals, and commercial complexes across Andhra Pradesh.',
    benefits: [
      'High-capacity systems from 10kW–500kW',
      'Accelerated depreciation benefits (40%)',
      'ROI within 3–5 years',
      'Dedicated project manager',
      'Grid-tied & hybrid options',
    ],
    capacity: '10kW – 500kW+',
    cta: 'Get Business Quote',
  },
  {
    icon: Wrench,
    title: 'Solar Maintenance',
    subtitle: 'AMC & Repair Services',
    color: 'from-emerald-500 to-green-600',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    description:
      'Ensure peak performance of your solar investment with our comprehensive Annual Maintenance Contracts (AMC). Regular cleaning, inspection, and repair services to maximize output.',
    benefits: [
      'Bi-annual panel cleaning & inspection',
      'Inverter health check & monitoring',
      'Performance report & analysis',
      'Emergency breakdown support',
      'Spare parts replacement',
    ],
    capacity: 'All System Sizes',
    cta: 'Book AMC Service',
  },
  {
    icon: Zap,
    title: 'Net Metering Assistance',
    subtitle: 'APSPDCL / APEPDCL Approval',
    color: 'from-purple-500 to-indigo-600',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    description:
      'We handle the entire net metering process from application to approval with APSPDCL / APEPDCL. Sell surplus solar power back to the grid and earn electricity credits.',
    benefits: [
      'End-to-end net metering documentation',
      'Liason with DISCOM offices',
      'Bidirectional meter installation',
      'Monthly generation monitoring',
      'Billing dispute resolution support',
    ],
    capacity: 'All Grid-Tied Systems',
    cta: 'Get Net Metering Help',
  },
  {
    icon: Droplets,
    title: 'Solar Water Pumps',
    subtitle: 'Agricultural & Industrial',
    color: 'from-cyan-500 to-blue-600',
    iconBg: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
    description:
      'Power your irrigation needs with solar water pumps. Eliminate diesel costs and power outage problems with reliable, government-subsidized solar pump systems for farms across AP.',
    benefits: [
      'PM-KUSUM scheme subsidy (up to 90%)',
      'AC & DC pump solutions',
      'Remote monitoring with mobile app',
      'No electricity bill for pumping',
      'Suitable for borewells & open wells',
    ],
    capacity: '1HP – 10HP',
    cta: 'Get Pump Quote',
  },
];

export function ServicesPage() {
  usePageSEO({
    title: 'Solar Services | Residential, Commercial & Agricultural | DV Solar Tech',
    description: 'DV Solar Tech offers residential rooftop solar, commercial systems, solar water pumps, net metering, and lifetime AMC maintenance across Andhra Pradesh.',
    keywords: 'residential solar AP, commercial solar installation, solar water pump AP, net metering Andhra Pradesh, solar AMC service',
    canonical: '/services',
  });
  return (
    <div className="min-h-screen bg-cream">
      {/* Header Banner */}
      <section className="relative bg-navy-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-brand-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-20 w-[300px] h-[300px] bg-accent-400 rounded-full blur-[80px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge bg-accent-500/15 text-accent-400 border-accent-500/25 mb-6">
            What We Offer
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Our Solar Services
          </h1>
          <p className="text-lg md:text-xl text-navy-300 max-w-2xl mx-auto leading-relaxed">
            End-to-end solar solutions for homes, businesses, and farms across Andhra Pradesh.
            From consultation to installation and beyond.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-3xl shadow-soft border border-gray-100/80 overflow-hidden hover:shadow-soft-lg transition-all duration-500 hover:-translate-y-0.5`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${idx % 2 === 1 ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''}`}>
                  {/* Info */}
                  <div className="p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`${service.iconBg} p-4 rounded-2xl`}>
                        <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-navy-800">
                          {service.title}
                        </h2>
                        <p className="text-sm text-navy-400 font-medium">{service.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-navy-500 leading-relaxed mb-7 text-base md:text-lg">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0" />
                          <span className="text-navy-600 text-sm">{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-3 items-start">
                      <Link to="/contact">
                        <Button
                          variant="primary"
                          rightIcon={<ArrowRight className="w-4 h-4" />}
                        >
                          {service.cta}
                        </Button>
                      </Link>
                      <Button
                        variant="secondary"
                        leftIcon={<MessageCircle className="w-4 h-4" />}
                        onClick={() => window.open('https://wa.me/919182928154', '_blank')}
                      >
                        WhatsApp Us
                      </Button>
                    </div>
                  </div>

                  {/* Visual Card */}
                  <div className={`bg-gradient-to-br ${service.color} p-8 md:p-12 flex flex-col justify-between text-white`}>
                    <div>
                      <p className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-2">
                        System Capacity
                      </p>
                      <p className="text-3xl md:text-4xl font-extrabold mb-8">{service.capacity}</p>

                      <div className="space-y-4">
                        <div className="bg-white/10 rounded-2xl p-5">
                          <p className="text-white/70 text-xs mb-1">Average Bill Savings</p>
                          <p className="text-2xl font-bold">60% – 90%</p>
                        </div>
                        <div className="bg-white/10 rounded-2xl p-5">
                          <p className="text-white/70 text-xs mb-1">Panel Warranty</p>
                          <p className="text-2xl font-bold">25 Years</p>
                        </div>
                        <div className="bg-white/10 rounded-2xl p-5">
                          <p className="text-white/70 text-xs mb-1">Typical Payback Period</p>
                          <p className="text-2xl font-bold">3 – 5 Years</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/20 flex items-center gap-3">
                      <Phone className="w-5 h-5 text-white/70" />
                      <a href="tel:+919182928154" className="text-white hover:text-white/80 transition-colors font-semibold">
                        +91 91829 28154
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Monitoring App ── */}
      <section className="py-24 bg-navy-900 relative overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Phone image — LEFT on dark bg */}
            <div className="relative flex justify-center order-2 lg:order-1">
              {/* Glow behind phone */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/30 to-emerald-500/20 rounded-[3rem] blur-[80px]" />
              <div className="relative max-w-[340px] w-full drop-shadow-2xl">
                <img
                  src="/images/monitoring-app.png"
                  alt="DV Solar real-time monitoring app showing daily generation, live power, and savings"
                  loading="lazy"
                  decoding="async"
                  className="w-full rounded-3xl"
                />
              </div>
              {/* Floating stats badges */}
              <div className="absolute -top-4 -left-4 bg-emerald-500 text-white rounded-2xl px-4 py-3 shadow-2xl">
                <p className="text-xs font-semibold opacity-80">Today's Generation</p>
                <p className="text-xl font-extrabold">18.4 kWh</p>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent-500 text-white rounded-2xl px-4 py-3 shadow-2xl">
                <p className="text-xs font-semibold opacity-80">Savings Today</p>
                <p className="text-xl font-extrabold">₹128</p>
              </div>
            </div>

            {/* Text — RIGHT */}
            <div className="order-1 lg:order-2">
              <span className="badge bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-6">
                Live Monitoring
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
                We Don't Just <span className="text-emerald-400">Install and Vanish</span>
              </h2>
              <p className="text-navy-300 leading-relaxed mb-8 text-lg">
                Every system we install comes with access to a real-time solar monitoring
                dashboard. Track your daily generation, live power output, and savings —
                directly from your phone.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  { icon: '☀️', label: 'Daily Generation', detail: 'See exactly how many kWh your panels produced today' },
                  { icon: '⚡', label: 'Live Power Output', detail: 'Real-time kW reading updated every few seconds' },
                  { icon: '💰', label: 'Savings Tracker', detail: 'Rupees saved today, this month, and all-time' },
                  { icon: '🔔', label: 'Fault Alerts', detail: 'Push notifications if your inverter detects a problem' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 bg-white/5 rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-colors">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-bold text-white text-sm">{item.label}</p>
                      <p className="text-xs text-navy-400 mt-0.5">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-navy-500 mb-6">
                Monitoring via <strong className="text-navy-300">Sungrow iSolarCloud</strong>, <strong className="text-navy-300">GoodWe SEMS</strong>, or <strong className="text-navy-300">SolarEdge</strong> app depending on your inverter. Completely free to use.
              </p>

              <a
                href="https://wa.me/919182928154?text=Hi! I want to know more about solar monitoring setup."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                  Ask About Monitoring Setup →
                </button>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-400/10 rounded-full blur-[80px]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-xl text-blue-100/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Our solar experts will visit your site for free, assess your needs, and recommend
            the perfect solution — at absolutely no cost.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-brand-700 hover:bg-gray-50 font-bold shadow-soft-lg border-0"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Book Free Site Survey
              </Button>
            </Link>
            <Button
              variant="secondary"
              size="lg"
              className="!bg-[#25D366] !border-[#25D366] !text-white hover:!bg-[#128C7E] font-bold border-0"
              leftIcon={<MessageCircle className="w-5 h-5" />}
              onClick={() => window.open('https://wa.me/919182928154', '_blank')}
            >
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
