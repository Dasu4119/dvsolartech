import React from 'react';
import {
  CheckCircle,
  MapPin,
  Users,
  Award,
  Heart,
  Target,
  Eye,
  ArrowRight,
  Shield,
  Star,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header Banner */}
      <section className="relative bg-navy-900 text-white py-12 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="absolute top-0 right-20 w-[500px] h-[500px] bg-brand-400 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent-500 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge bg-brand-500/15 text-brand-400 border-brand-500/25 mb-6">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            About DV Solar Tech
          </h1>
          <p className="text-lg md:text-xl text-navy-300 max-w-2xl mx-auto leading-relaxed">
            Empowering Andhra Pradesh with clean, renewable energy solutions
            — one installation at a time.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <span className="badge-blue mb-7">
                Who We Are
              </span>
              <h2 className="section-title mb-7">
                Your Trusted Solar Partner in Andhra Pradesh
              </h2>
              <p className="text-navy-500 mb-5 leading-relaxed text-lg">
                DV Solar Tech is a leading solar solutions provider based in
                Andhra Pradesh. We specialize in residential, commercial,
                and agricultural solar installations. Our mission is to make
                solar energy accessible and affordable for everyone.
              </p>
              <p className="text-navy-500 mb-10 leading-relaxed">
                With a team of certified engineers and experienced
                technicians, we ensure that every installation meets the
                highest safety and performance standards. We don't just sell
                products; we provide complete energy solutions that last for
                decades.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: MapPin,
                    title: 'Local Presence',
                    desc: 'Serving all AP districts',
                  },
                  {
                    icon: Users,
                    title: 'Expert Team',
                    desc: 'Certified professionals',
                  },
                  {
                    icon: Award,
                    title: 'Quality First',
                    desc: 'Tier-1 brands only',
                  },
                  {
                    icon: CheckCircle,
                    title: '500+ Projects',
                    desc: 'Successfully installed',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center p-4 bg-white rounded-2xl border border-gray-100/80 shadow-soft hover:shadow-soft-md hover:-translate-y-0.5 transition-all duration-300 group"
                  >
                    <div className="bg-brand-50 p-2.5 rounded-xl mr-3 group-hover:bg-brand-100 transition-colors">
                      <item.icon className="w-5 h-5 text-brand-600" />
                    </div>
                    <div>
                      <p className="font-bold text-navy-800 text-sm">
                        {item.title}
                      </p>
                      <p className="text-xs text-navy-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-brand-500/10 rounded-[2rem] transform rotate-2" />
              <img
                src="/images/project5.jpg"
                alt="Solar Engineers at work"
                className="relative rounded-3xl shadow-soft-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-brand-500 to-brand-600 text-white p-8 rounded-2xl shadow-soft-xl hidden md:block">
                <p className="text-3xl font-extrabold mb-1">5+ Years</p>
                <p className="text-blue-100">Of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div className="bg-navy-800 rounded-3xl p-10 md:p-12 text-white relative overflow-hidden group hover:bg-navy-700 transition-colors duration-500">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/10 rounded-full blur-[80px] group-hover:bg-brand-500/15 transition-all" />
              <div className="relative">
                <div className="bg-accent-500/15 p-3.5 rounded-2xl inline-block mb-6">
                  <Target className="w-8 h-8 text-accent-400" />
                </div>
                <h3 className="text-2xl font-extrabold mb-5">Our Mission</h3>
                <p className="text-navy-300 leading-relaxed text-lg">
                  To accelerate the adoption of solar energy in Andhra
                  Pradesh by providing high-quality, affordable, and
                  reliable solar solutions that help our customers save
                  money and protect the environment.
                </p>
              </div>
            </div>

            <div className="bg-navy-800 rounded-3xl p-10 md:p-12 text-white relative overflow-hidden group hover:bg-navy-700 transition-colors duration-500">
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-400/10 rounded-full blur-[80px] group-hover:bg-accent-400/15 transition-all" />
              <div className="relative">
                <div className="bg-brand-500/15 p-3.5 rounded-2xl inline-block mb-6">
                  <Eye className="w-8 h-8 text-brand-400" />
                </div>
                <h3 className="text-2xl font-extrabold mb-5">Our Vision</h3>
                <p className="text-navy-300 leading-relaxed text-lg">
                  To be the most trusted solar company in the region, known
                  for our technical expertise, customer service, and
                  commitment to a sustainable future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 section-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-5">
              What Makes Us Different
            </h2>
            <p className="section-subtitle mx-auto">
              Our commitment to quality, transparency, and customer
              satisfaction sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[
              {
                icon: Shield,
                title: 'No Compromise on Quality',
                desc: 'We exclusively use Tier-1 brands — Waaree, Adani, Tata Power, Havells, and more. Your investment is built to last 25+ years.',
              },
              {
                icon: Heart,
                title: 'Customer First',
                desc: 'We guide you through every step — from free site survey to installation, net metering, and after-sales support.',
              },
              {
                icon: Star,
                title: 'Transparent Pricing',
                desc: "No hidden charges or surprise costs. We provide detailed, honest quotations so you know exactly what you're paying for.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="card-hover p-8 md:p-10 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-accent-50 rounded-2xl mb-6">
                  <item.icon className="w-7 h-7 text-accent-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-navy-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-400/10 rounded-full blur-[80px]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-7 tracking-tight">
            Join the Solar Revolution
          </h2>
          <p className="text-xl text-blue-100/90 max-w-2xl mx-auto mb-12 leading-relaxed">
            Let's work together to build a greener, more sustainable future
            for Andhra Pradesh. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-brand-700 hover:bg-gray-50 hover:text-brand-800 font-bold shadow-soft-lg border-0"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Contact Us
              </Button>
            </Link>
            <Link to="/projects">
              <Button
                variant="secondary"
                size="lg"
                className="!bg-accent-500 !text-white hover:!bg-accent-600 font-bold shadow-soft-lg border-0"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}