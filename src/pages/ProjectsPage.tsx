import React from 'react';
import { MapPin, ArrowRight, CheckCircle, IndianRupee, TrendingDown } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { usePageSEO } from '../hooks/usePageSEO';


const projects = [
  {
    id: 1,
    title: '5kW Residential System',
    location: 'Vijayawada, AP',
    type: 'Residential',
    image: '/images/project1.jpg',
    components: [
      '10 × Waaree 540W Mono PERC Panels',
      'Sungrow SG5.0RS On-Grid Inverter',
      'DC/AC Earthing + Lightning Arrestor',
      'Net-metering ready — APEPDCL approved',
    ],
  },
  {
    id: 2,
    title: '20kW Commercial Plant',
    location: 'Guntur, AP',
    type: 'Commercial',
    image: '/images/project2.jpg',
    components: [
      '37 × Adani 540W Bifacial Panels',
      'Solis 20kW Three-Phase On-Grid Inverter',
      'ACDB / DCDB with surge protection',
      'GI rooftop mounting structure',
    ],
  },
  {
    id: 3,
    title: '3kW Home Solar',
    location: 'Vizag, AP',
    type: 'Residential',
    image: '/images/project3.jpg',
    components: [
      '6 × Waaree 540W Mono PERC Panels',
      'Sungrow SG3.0RS 3kW On-Grid Inverter',
      'DC/AC Earthing + Surge Protection',
      'Net-metering ready — APEPDCL approved',
    ],
  },
  {
    id: 4,
    title: '10kW Hybrid System',
    location: 'Nellore, AP',
    type: 'Hybrid',
    image: '/images/project4.jpg',
    components: [
      '20 × Tata Power 500W Panels',
      'GoodWe 10kW Hybrid Inverter',
      '15kWh Lithium Battery Bank',
      'Smart energy management system',
    ],
  },
  {
    id: 5,
    title: 'Solar Water Pump',
    location: 'Kurnool, AP',
    type: 'Agricultural',
    image: '/images/project5.jpg',
    components: [
      '8 × Waaree 540W Panels',
      'Grundfos 5HP Solar Pump',
      'MPPT Solar Pump Controller',
      'Drip irrigation integration',
    ],
  },
  {
    id: 6,
    title: '50kW Factory Rooftop',
    location: 'Kakinada, AP',
    type: 'Industrial',
    image: '/images/project6.jpg',
    components: [
      '90 × Adani 560W Bifacial Panels',
      '2 × Sungrow SG25CX 25kW Inverters',
      'ACDB/DCDB + HT protection relay',
      'Remote monitoring system installed',
    ],
  },
  {
    id: 7,
    title: '15kW Commercial Setup',
    location: 'Tirupati, AP',
    type: 'Commercial',
    image: '/images/project7.jfif',
    components: [
      '28 × Reone 540W Panels',
      'Solis 15kW Three-Phase Inverter',
      'GI mounting structure + DC cabling',
      'Net-metering with APSPDCL',
    ],
  },
];

type Project = typeof projects[0];

const typeColors: Record<string, string> = {
  Residential: 'bg-brand-500',
  Commercial: 'bg-accent-500',
  Hybrid: 'bg-amber-500',
  Agricultural: 'bg-emerald-600',
  Industrial: 'bg-purple-500',
};

export function ProjectsPage() {
  usePageSEO({
    title: 'Solar Projects | Case Studies in Vijayawada, Guntur, Vizag | DV Solar Tech',
    description: 'See real solar installations by DV Solar Tech across Andhra Pradesh — Vijayawada, Guntur, Visakhapatnam. Before/after bill comparisons, system specs and brand details.',
    keywords: 'solar installation Vijayawada, solar project Guntur, rooftop solar AP, solar case study Andhra Pradesh, Waaree panels installation',
    canonical: '/projects',
  });
  return (

    <div className="min-h-screen bg-cream">
      {/* Header Banner */}
      <section className="relative bg-navy-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="absolute top-10 left-20 w-[400px] h-[400px] bg-brand-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-accent-400 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge bg-accent-500/15 text-accent-400 border-accent-500/25 mb-6">
            Our Work
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Powering AP, One Roof at a Time
          </h1>
          <p className="text-lg md:text-xl text-navy-300 max-w-3xl mx-auto leading-relaxed">
            From residential homes to large-scale commercial setups, DV Solar
            Tech has successfully completed projects across all of AP.
          </p>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge bg-accent-500/15 text-accent-600 border-accent-500/25 mb-4">Deep Dives</span>
            <h2 className="section-title mb-4">Case Studies</h2>
            <p className="section-subtitle mx-auto">
              Real installations. Real bill reductions. Real brand-name components you can verify.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Case Study 1 — Vijayawada Residential */}
            <div className="bg-cream rounded-3xl border border-gray-100/80 shadow-soft overflow-hidden hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-500">
              <div className="relative">
                <img
                  src="/images/project1.jpg"
                  alt="5kW Residential Solar — Vijayawada"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="bg-brand-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">Residential</span>
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> Vijayawada, AP
                  </span>
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-xl font-extrabold text-navy-800 mb-1">5kW Residential System</h3>

                {/* Brand callout */}
                <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-2.5 mb-5">
                  <span className="text-amber-500 text-lg">⭐</span>
                  <p className="text-sm font-semibold text-amber-800">
                    10 × Waaree 540W Mono PERC &nbsp;+&nbsp; Sungrow SG5.0RS Inverter
                  </p>
                </div>

                {/* Before / After Bill */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="bg-red-50 border border-red-100 rounded-2xl p-4 text-center">
                    <p className="text-xs text-red-500 font-semibold uppercase tracking-wider mb-1">Old Bill / Month</p>
                    <p className="text-3xl font-extrabold text-red-600">₹4,000</p>
                    <p className="text-xs text-red-400 mt-1">Before solar</p>
                  </div>
                  <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 text-center">
                    <p className="text-xs text-emerald-600 font-semibold uppercase tracking-wider mb-1">New Bill / Month</p>
                    <p className="text-3xl font-extrabold text-emerald-600">₹300</p>
                    <p className="text-xs text-emerald-400 mt-1">After solar ✅</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-emerald-500 rounded-xl px-4 py-2.5 mb-5">
                  <TrendingDown className="w-4 h-4 text-white" />
                  <p className="text-sm font-bold text-white">₹3,700 saved every month — ₹44,400/year!</p>
                </div>

                {/* Components */}
                <p className="text-xs font-semibold text-navy-400 uppercase tracking-wider mb-2">System Components</p>
                <ul className="space-y-1.5 mb-6">
                  {[
                    '10 × Waaree 540W Mono PERC Panels (Tier-1)',
                    'Sungrow SG5.0RS 5kW On-Grid String Inverter',
                    'DC / AC Earthing + Lightning Arrestor',
                    'Net-metering registered — APEPDCL approved',
                  ].map((c, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-navy-600">
                      <CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                      {c}
                    </li>
                  ))}
                </ul>

                <Link to="/contact">
                  <Button variant="primary" fullWidth rightIcon={<ArrowRight className="w-4 h-4" />}>
                    Get a Similar System
                  </Button>
                </Link>
              </div>
            </div>

            {/* Case Study 2 — Guntur Commercial */}
            <div className="bg-cream rounded-3xl border border-gray-100/80 shadow-soft overflow-hidden hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-500">
              <div className="relative">
                <img
                  src="/images/project2.jpg"
                  alt="20kW Commercial Solar — Guntur"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="bg-accent-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">Commercial</span>
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> Guntur, AP
                  </span>
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-xl font-extrabold text-navy-800 mb-1">20kW Commercial Rooftop</h3>

                {/* Brand callout */}
                <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-2.5 mb-5">
                  <span className="text-amber-500 text-lg">⭐</span>
                  <p className="text-sm font-semibold text-amber-800">
                    37 × Adani 540W Bifacial &nbsp;+&nbsp; Solis 20kW 3-Phase Inverter
                  </p>
                </div>

                {/* Before / After Bill */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="bg-red-50 border border-red-100 rounded-2xl p-4 text-center">
                    <p className="text-xs text-red-500 font-semibold uppercase tracking-wider mb-1">Old Bill / Month</p>
                    <p className="text-3xl font-extrabold text-red-600">₹28,000</p>
                    <p className="text-xs text-red-400 mt-1">Before solar</p>
                  </div>
                  <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 text-center">
                    <p className="text-xs text-emerald-600 font-semibold uppercase tracking-wider mb-1">New Bill / Month</p>
                    <p className="text-3xl font-extrabold text-emerald-600">₹3,200</p>
                    <p className="text-xs text-emerald-400 mt-1">After solar ✅</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-emerald-500 rounded-xl px-4 py-2.5 mb-5">
                  <TrendingDown className="w-4 h-4 text-white" />
                  <p className="text-sm font-bold text-white">₹24,800 saved every month — ₹2,97,600/year!</p>
                </div>

                {/* Components */}
                <p className="text-xs font-semibold text-navy-400 uppercase tracking-wider mb-2">System Components</p>
                <ul className="space-y-1.5 mb-6">
                  {[
                    '37 × Adani 540W Bifacial Mono PERC (Tier-1)',
                    'Solis 20kW Three-Phase On-Grid Inverter',
                    'ACDB / DCDB with Surge Protection',
                    'GI Rooftop Mounting Structure + DC Cabling',
                  ].map((c, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-navy-600">
                      <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                      {c}
                    </li>
                  ))}
                </ul>

                <Link to="/contact">
                  <Button variant="primary" fullWidth rightIcon={<ArrowRight className="w-4 h-4" />}>
                    Get a Commercial Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-3xl shadow-soft hover:shadow-soft-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer"
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Always-visible dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/95 via-navy-900/50 to-transparent" />

                {/* Card content pinned to bottom */}
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  {/* Badge + Title row */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`${typeColors[project.type] || 'bg-brand-500'} text-xs font-bold px-3 py-1 rounded-full shadow-md`}>
                      {project.type}
                    </span>
                    <h3 className="text-base font-extrabold leading-tight">{project.title}</h3>
                  </div>
                  {/* Location */}
                  <p className="text-navy-300 text-xs flex items-center mb-3">
                    <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
                    {project.location}
                  </p>
                  {/* Components */}
                  {'components' in project && project.components && (
                    <>
                      <p className="text-accent-400 text-[10px] font-bold uppercase tracking-wider mb-1.5">System Components</p>
                      <ul className="space-y-1">
                        {(project.components as string[]).map((c: string, i: number) => (
                          <li key={i} className="flex items-start gap-1.5 text-xs text-navy-200">
                            <span className="text-accent-400 flex-shrink-0 mt-0.5">✔</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 bg-white rounded-3xl p-8 md:p-10 border border-gray-100/80 shadow-soft text-center">
            <p className="text-navy-500 max-w-2xl mx-auto leading-relaxed">
              These are sample images representing our project types. We are
              continuously adding photos of our real installations. Contact
              us to see our latest project portfolio!
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-400/10 rounded-full blur-[80px]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-7 tracking-tight">
            Want to See Your Roof Here?
          </h2>
          <p className="text-xl text-blue-100/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let us transform your roof into a powerhouse. Get a free site
            survey and quotation today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-brand-700 hover:bg-gray-50 hover:text-brand-800 font-bold shadow-soft-lg border-0"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Get a Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}