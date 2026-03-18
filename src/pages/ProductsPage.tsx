import React from 'react';
import {
  Sun,
  Zap,
  Shield,
  CheckCircle,
  ArrowRight,
  Cable,
  Wrench,
  Lamp,
  Camera,
  Droplets,
  Fence,
  Home,
  BatteryCharging,
  Lightbulb,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { usePageSEO } from '../hooks/usePageSEO';

const panelBrands = [
  {
    name: 'Waaree',
    tagline: "India's Largest Module Manufacturer",
    desc: "Waaree is India's #1 solar module brand, offering Mono PERC panels from 400W to 545W with 25-year performance warranty.",
    specs: ['Mono PERC / Bifacial', '400W - 545W Range', '21%+ Efficiency', '25-Year Warranty'],
    image: '/images/panels/panel1.jpg',
  },
  {
    name: 'Adani',
    tagline: 'Trusted by Millions Across India',
    desc: 'Adani Solar delivers high-efficiency monocrystalline panels that are built to perform in the harshest conditions.',
    specs: ['Half-Cut Mono PERC', '535W - 545W Range', 'Low Degradation', 'IEC/BIS Certified'],
    image: '/images/panels/panel2.jpg',
  },
  {
    name: 'Tata Power',
    tagline: 'Power Backed by the Tata Legacy',
    desc: 'Backed by the strength and trust of the Tata Group, Tata Power Solar manufactures DCR-approved panels for subsidy-eligible installations.',
    specs: ['Half-Cut Cells', '530W - 545W Range', 'DCR Approved', 'Tata Quality'],
    image: '/images/panels/panel3.jpg',
  },
  {
    name: 'Reone',
    tagline: 'Affordable High-Performance Panels',
    desc: 'Reone provides excellent value Mono PERC panels, ideal for residential and small commercial rooftop installations.',
    specs: ['Mono PERC Technology', '400W - 540W Range', 'Competitive Pricing', 'Robust Build'],
    image: '/images/panels/panel4.png',
  },
];

const inverterBrands = [
  {
    name: 'Havells',
    tagline: 'Reliable Home Electrical Solutions',
    desc: 'Havells Enviro series inverters offer Wi-Fi monitoring, high efficiency, and robust grid-tie performance for Indian homes.',
    specs: ['1kW - 10kW Range', 'Wi-Fi Monitoring', 'IP65 Rated', '10-Year Warranty'],
    image: '/images/inverters/inverter1.jpg',
  },
  {
    name: 'Polycab',
    tagline: 'Precision Engineered Inverters',
    desc: "Polycab's grid-tie inverters deliver exceptional conversion efficiency and are backed by India's leading cable manufacturer.",
    specs: ['1kW - 5kW Range', 'Dual MPPT', 'BIS Certified', '5-Year Warranty'],
    image: '/images/inverters/inverter2.webp',
  },
  {
    name: 'Waaree',
    tagline: 'Complete Solar Ecosystem',
    desc: "Waaree's W-series inverters provide seamless integration with Waaree panels for a complete single-brand solar solution.",
    specs: ['1kW - 10kW Range', 'String Inverter', 'MPPT Tracking', 'Smart Monitoring'],
    image: '/images/inverters/inverter3.webp',
  },
  {
    name: 'Sungrow',
    tagline: "World's Most Bankable Inverter Brand",
    desc: "Sungrow is a global leader in inverter technology, trusted in 150+ countries with the world's highest bankability.",
    specs: ['3kW - 110kW Range', '98.4% Efficiency', 'Natural Cooling', '10-Year Warranty'],
    image: '/images/inverters/inverter4.png',
  },
  {
    name: 'GoodWe',
    tagline: 'Smart Energy for Smart Homes',
    desc: 'GoodWe DNS series delivers a compact, lightweight, and high-efficiency inverter perfect for residential rooftops.',
    specs: ['1kW - 6kW Range', 'Compact Design', 'App Monitoring', 'AFCI Protection'],
    image: '/images/inverters/inverter5.jpg',
  },
];

const accessories = [
  {
    name: 'DC Solar Cables',
    desc: 'UV-resistant, double-insulated DC cables rated for 1500V. Essential for safe and efficient panel-to-inverter wiring.',
    image: '/images/accessories/DC Solar Cables.jpg',
  },
  {
    name: 'AC Cables & Wires',
    desc: 'Polycab & Havells branded AC wiring for inverter-to-grid connection with proper gauge and insulation rating.',
    image: '/images/accessories/AC Cables & Wires.jfif',
  },
  {
    name: 'ACDB & DCDB',
    desc: 'Pre-wired AC/DC distribution boxes with MCB, SPD, and isolator switches for complete protection.',
    image: '/images/accessories/ACDB & DCDB BOX.jpeg',
  },
  {
    name: 'Mounting Structures',
    desc: 'Hot-dip galvanized or aluminum mounting structures designed for Indian rooftop conditions.',
    image: '/images/accessories/mounting.jpg',
  },
];

export function ProductsPage() {
  usePageSEO({
    title: 'Solar Products | Waaree, Adani, Tata, Sungrow | DV Solar Tech',
    description: 'Buy Tier-1 solar panels (Waaree, Adani, Tata Power, Reone) and inverters (Sungrow, Havells, GoodWe) from DV Solar Tech. Only genuine products with full manufacturer warranty.',
    keywords: 'Waaree solar panels, Adani solar, Tata Power solar, Sungrow inverter, solar panels Andhra Pradesh, buy solar products AP',
    canonical: '/products',
  });
  return (
    <div className="min-h-screen bg-cream">
      {/* ═══ Header Banner ═══ */}
      <section className="relative bg-navy-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-accent-400 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge bg-brand-500/15 text-brand-400 border-brand-500/25 mb-6">
            Our Brands & Products
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Only Tier-1 Solar Equipment
          </h1>
          <p className="text-lg md:text-xl text-navy-300 max-w-3xl mx-auto leading-relaxed">
            We partner with India's and the world's best brands. Every
            panel, inverter, and accessory we install is built to perform
            for 25+ years.
          </p>
        </div>
      </section>

      {/* ═══ Solar Panels ═══ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <div className="bg-gradient-to-br from-accent-400 to-accent-500 p-3.5 rounded-2xl mr-5 shadow-glow-orange">
              <Sun className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-navy-800">
                Solar Panels
              </h2>
              <p className="text-navy-400 mt-1">
                Mono PERC technology for maximum power generation
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {panelBrands.map((brand, idx) => (
              <div
                key={idx}
                className="card-hover overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-2/5 overflow-hidden rounded-l-3xl">
                    <img
                      src={brand.image}
                      alt={`${brand.name} Solar Panel`}
                      className="w-full h-full min-h-[220px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="sm:w-3/5 p-7">
                    <div className="flex items-center mb-3">
                      <h3 className="text-xl font-extrabold text-navy-800">
                        {brand.name}
                      </h3>
                      <span className="ml-3 badge-blue text-[10px] py-1">
                        Tier-1
                      </span>
                    </div>
                    <p className="text-xs text-accent-600 font-semibold mb-3">
                      {brand.tagline}
                    </p>
                    <p className="text-navy-500 text-sm mb-5 leading-relaxed">
                      {brand.desc}
                    </p>
                    <div className="grid grid-cols-2 gap-2.5">
                      {brand.specs.map((spec, i) => (
                        <div key={i} className="flex items-center text-xs text-navy-500">
                          <CheckCircle className="w-3.5 h-3.5 text-brand-500 mr-2 flex-shrink-0" />
                          {spec}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Inverters ═══ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <div className="bg-gradient-to-br from-brand-500 to-brand-600 p-3.5 rounded-2xl mr-5 shadow-glow-blue">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-navy-800">
                Solar Inverters
              </h2>
              <p className="text-navy-400 mt-1">
                Grid-tie inverters with smart monitoring
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {inverterBrands.map((brand, idx) => (
              <div
                key={idx}
                className="card-hover overflow-hidden group"
              >
                <div className="overflow-hidden h-52 rounded-t-3xl">
                  <img
                    src={brand.image}
                    alt={`${brand.name} Inverter`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center mb-3">
                    <h3 className="text-lg font-extrabold text-navy-800">
                      {brand.name}
                    </h3>
                    <span className="ml-3 badge bg-brand-50 text-brand-600 border-brand-100 text-[10px] py-1">
                      Tier-1
                    </span>
                  </div>
                  <p className="text-xs text-accent-600 font-semibold mb-2">
                    {brand.tagline}
                  </p>
                  <p className="text-navy-500 text-sm mb-5 leading-relaxed">
                    {brand.desc}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {brand.specs.map((spec, i) => (
                      <div key={i} className="flex items-center text-xs text-navy-500">
                        <CheckCircle className="w-3.5 h-3.5 text-brand-500 mr-2 flex-shrink-0" />
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Accessories & Cables ═══ */}
      <section className="py-24 section-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <div className="bg-gradient-to-br from-accent-400 to-accent-500 p-3.5 rounded-2xl mr-5 shadow-glow-orange">
              <Cable className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-navy-800">
                Cables, Wires & Accessories
              </h2>
              <p className="text-navy-400 mt-1">
                Complete BOS (Balance of System) components
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessories.map((item, idx) => (
              <div
                key={idx}
                className="card-hover overflow-hidden group"
              >
                <div className="overflow-hidden h-44 rounded-t-3xl">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-navy-800 mb-2.5">
                    {item.name}
                  </h3>
                  <p className="text-navy-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Complete Solar Solutions ═══ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <div className="bg-gradient-to-br from-brand-500 to-brand-600 p-3.5 rounded-2xl mr-5 shadow-glow-blue">
              <Lightbulb className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-navy-800">
                Complete Solar Solutions
              </h2>
              <p className="text-navy-400 mt-1">
                Beyond rooftop — powering every aspect of life
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {[
              {
                icon: Lamp,
                title: 'Solar Street Lights',
                desc: 'High-lumen LED street lights powered entirely by solar energy. Ideal for villages, gated communities, farm roads, and commercial campuses. Available in 15W to 120W with dusk-to-dawn automation.',
                features: ['15W – 120W Range', 'Dusk-to-Dawn Auto', 'IP65 Waterproof', 'Motion Sensor Option'],
                color: 'from-amber-400 to-amber-500',
                bgColor: 'bg-amber-50',
                textColor: 'text-amber-600',
                image: '/images/solutions/Solar Street Lights.jpg',
              },
              {
                icon: Camera,
                title: 'Solar CCTV Cameras',
                desc: 'Wireless solar-powered security cameras with 4G/Wi-Fi connectivity. No wiring needed — perfect for farms, construction sites, remote areas, and homes without stable power.',
                features: ['4G / Wi-Fi Enabled', 'Night Vision', 'Cloud Storage', 'Mobile App Control'],
                color: 'from-brand-400 to-brand-500',
                bgColor: 'bg-brand-50',
                textColor: 'text-brand-600',
                image: '/images/solutions/Solar CCTV Cameras.jpeg',
              },
              {
                icon: Droplets,
                title: 'Solar Water Pumps',
                desc: 'Submersible and surface solar pumps for agriculture and domestic use. Reduce diesel costs dramatically. Available in 1HP to 10HP with government subsidy support.',
                features: ['1HP – 10HP Range', 'Submersible & Surface', 'Govt Subsidy Eligible', 'No Fuel Costs'],
                color: 'from-cyan-400 to-cyan-500',
                bgColor: 'bg-cyan-50',
                textColor: 'text-cyan-600',
                image: '/images/solutions/Solar Water Pumps.jpg',
              },
              {
                icon: Fence,
                title: 'Solar Fencing',
                desc: 'Protect your farm from wild animals and trespassers with solar-powered electric fencing. Safe, legal, and extremely effective for agricultural land protection.',
                features: ['Non-Lethal Shock', 'Solar Powered', 'Low Maintenance', 'Farm Protection'],
                color: 'from-emerald-400 to-emerald-500',
                bgColor: 'bg-emerald-50',
                textColor: 'text-emerald-600',
                image: '/images/solutions/Solar Fencing.jpg',
              },
              {
                icon: Home,
                title: 'Solar Home Systems',
                desc: 'Off-grid solar kits for homes without grid power. Includes solar panel, battery, LED lights, and fan connections. Perfect for rural homes and remote locations.',
                features: ['LED Light Kit', 'Fan Support', 'Battery Backup', 'Easy Installation'],
                color: 'from-accent-400 to-accent-500',
                bgColor: 'bg-accent-50',
                textColor: 'text-accent-600',
                image: '/images/solutions/Solar Home Systems.jfif',
              },
              {
                icon: BatteryCharging,
                title: 'Solar EV Chargers',
                desc: "Charge your electric vehicle with clean solar energy. Solar EV charging stations for homes and businesses — future-proof your transportation costs.",
                features: ['Level 2 Charging', 'Solar Powered', 'Smart Metering', 'Grid-Tie Option'],
                color: 'from-violet-400 to-violet-500',
                bgColor: 'bg-violet-50',
                textColor: 'text-violet-600',
                image: '/images/solutions/Solar EV Chargers.jfif',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="card-hover overflow-hidden group"
              >
                <div className="overflow-hidden h-48 rounded-t-3xl relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
                  <div className={`absolute top-4 left-4 bg-gradient-to-br ${item.color} p-2.5 rounded-xl shadow-md`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-lg font-extrabold text-navy-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-navy-500 text-sm mb-5 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="grid grid-cols-2 gap-2.5">
                    {item.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-xs text-navy-500">
                        <CheckCircle className={`w-3.5 h-3.5 ${item.textColor} mr-2 flex-shrink-0`} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Quality Assurance ═══ */}
      <section className="py-20 bg-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: '100% Genuine Products',
                desc: 'Every product is sourced directly from authorized distributors with original manufacturer warranty.',
              },
              {
                icon: CheckCircle,
                title: 'Professional Installation',
                desc: 'Our certified technicians ensure your system is installed, tested, and commissioned to perfection.',
              },
              {
                icon: Wrench,
                title: 'After-Sales Service',
                desc: 'Dedicated team to keep your solar system performing at its best, year after year.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white/5 hover:bg-white/10 transition-all duration-300 text-center group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-accent-500/15 rounded-2xl mb-5 group-hover:bg-accent-500/25 transition-colors">
                  <item.icon className="w-7 h-7 text-accent-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-navy-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-24 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-400/10 rounded-full blur-[80px]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-7 tracking-tight">
            Need Help Choosing the Right Products?
          </h2>
          <p className="text-xl text-blue-100/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Our solar experts will recommend the perfect combination based
            on your roof size, electricity usage, and budget.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-brand-700 hover:bg-gray-50 hover:text-brand-800 font-bold shadow-soft-lg border-0"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Get Expert Advice
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
