import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

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
  },
  {
    id: 4,
    title: '10kW Hybrid System',
    location: 'Nellore, AP',
    type: 'Hybrid',
    image: '/images/project4.jpg',
  },
  {
    id: 5,
    title: 'Solar Water Pump',
    location: 'Kurnool, AP',
    type: 'Agricultural',
    image: '/images/project5.jpg',
  },
  {
    id: 6,
    title: '50kW Factory Rooftop',
    location: 'Kakinada, AP',
    type: 'Industrial',
    image: '/images/project6.jpg',
  },
  {
    id: 7,
    title: '15kW Commercial Setup',
    location: 'Tirupati, AP',
    type: 'Commercial',
    image: '/images/project7.jfif',
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

      {/* Projects Gallery */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-3xl shadow-soft hover:shadow-soft-xl transition-all duration-500 cursor-pointer hover:-translate-y-1"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/30 to-transparent" />

                {/* Default card info */}
                <div className={`absolute bottom-0 left-0 p-7 text-white transition-all duration-500 ${'components' in project && project.components ? 'group-hover:opacity-0 group-hover:translate-y-2' : ''}`}>
                  <span
                    className={`${typeColors[project.type] || 'bg-brand-500'} text-xs font-semibold px-3.5 py-1.5 rounded-full mb-3 inline-block shadow-md`}
                  >
                    {project.type}
                  </span>
                  <h3 className="text-xl font-bold mb-1.5">{project.title}</h3>
                  <p className="text-navy-300 text-sm flex items-center">
                    <MapPin className="w-3.5 h-3.5 mr-1.5" />
                    {project.location}
                  </p>
                </div>

                {/* Components slide-up panel (only for projects that have them) */}
                {'components' in project && project.components && (
                  <div className="absolute inset-x-0 bottom-0 bg-navy-900/95 backdrop-blur-sm p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`${typeColors[project.type] || 'bg-brand-500'} text-xs font-semibold px-3 py-1 rounded-full`}>{project.type}</span>
                      <h3 className="text-white font-bold text-sm">{project.title}</h3>
                    </div>
                    <p className="text-accent-400 text-xs font-semibold uppercase tracking-wider mb-2">System Components</p>
                    <ul className="space-y-1.5">
                      {project.components.map((c: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-navy-200">
                          <span className="text-accent-400 mt-0.5 flex-shrink-0">✔</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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