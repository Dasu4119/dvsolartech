import React, { useState } from 'react';
import {
  Sun, CheckCircle, FileText, ArrowRight, MessageCircle,
  Calculator, Shield, Clock, Award, ChevronRight,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const steps = [
  {
    num: 1,
    title: 'Free Site Survey',
    desc: 'DV Solar Tech visits your home to assess roof size, orientation, and electricity load.',
    who: 'We Do This',
  },
  {
    num: 2,
    title: 'NREDCAP Empanelled Installer',
    desc: 'We are a registered installer under the NREDCAP (AP state nodal agency) roster.',
    who: 'We Handle',
  },
  {
    num: 3,
    title: 'PM Surya Ghar Portal Application',
    desc: 'We submit your online application on pmsuryaghar.gov.in with your Aadhaar and electricity details.',
    who: 'We Submit',
  },
  {
    num: 4,
    title: 'Feasibility Report',
    desc: 'DISCOM (APSPDCL / APEPDCL) reviews your application and sends a technical feasibility report.',
    who: 'DISCOM Review',
  },
  {
    num: 5,
    title: 'Sanction Letter',
    desc: 'Once approved, you receive an official sanction letter. Installation can begin.',
    who: '7–14 Days',
  },
  {
    num: 6,
    title: 'Solar System Installed',
    desc: 'Our team installs panels, inverter, wiring, earthing, and all safety components at your home.',
    who: 'We Install',
  },
  {
    num: 7,
    title: 'Net Meter & DISCOM Inspection',
    desc: 'DISCOM installs a bidirectional net meter and inspects the system for grid synchronisation.',
    who: 'DISCOM Visit',
  },
  {
    num: 8,
    title: 'Subsidy Credited to Bank',
    desc: 'Central government subsidy (up to ₹78,000) is transferred directly to your bank account.',
    who: '30–60 Days',
  },
];

const docs = [
  { icon: '🪪', title: 'Aadhaar Card', note: "Property owner's Aadhaar (must match electricity connection)" },
  { icon: '⚡', title: 'Latest Electricity Bill', note: 'APSPDCL / APEPDCL — must be recent (last 3 months)' },
  { icon: '🏦', title: 'Cancelled Cheque / Passbook', note: "Owner's savings bank account for subsidy credit" },
  { icon: '📄', title: 'Property Ownership Proof', note: 'Pattadar passbook / Khata / Sale deed' },
  { icon: '📸', title: 'Passport-size Photo', note: 'Recent photo of the applicant' },
  { icon: '🏠', title: 'Roof Structure Photos', note: 'We photograph these during the free site survey' },
];

function getSubsidy(kw: number) {
  const raw = kw * 30000;
  return Math.min(raw, 78000);
}

export function SuryaGharPage() {
  const [kw, setKw] = useState(3);
  const subsidy = getSubsidy(kw);
  const fmt = (n: number) => new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(n);

  return (
    <div className="min-h-screen bg-cream">

      {/* ── Hero ── */}
      <section className="relative bg-navy-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-accent-400 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-500 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge bg-accent-500/20 text-accent-300 border-accent-500/30 mb-6">
            <Sun className="w-3.5 h-3.5 mr-2" />
            PM Surya Ghar Muft Bijli Yojana — 2024
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Get up to <span className="text-accent-400">₹78,000</span> Government Subsidy
            <br className="hidden md:block" /> — We Handle Everything
          </h1>
          <p className="text-lg md:text-xl text-navy-300 max-w-2xl mx-auto leading-relaxed mb-10">
            DV Solar Tech is an NREDCAP-empanelled installer. We manage the complete 8-step
            process from application to subsidy credit — at no extra charge.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/919182928154?text=Hi! I want to apply for PM Surya Ghar subsidy. Please guide me."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="primary"
                size="lg"
                leftIcon={<MessageCircle className="w-5 h-5" />}
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Start My Subsidy Application
              </Button>
            </a>
            <Link to="/calculator">
              <Button variant="secondary" size="lg" leftIcon={<Calculator className="w-5 h-5" />}>
                Calculate My Savings
              </Button>
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {[
              { icon: Shield, text: 'NREDCAP Empanelled' },
              { icon: Award, text: '500+ Installations Done' },
              { icon: Clock, text: 'Subsidy in 30–60 Days' },
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/5 rounded-xl px-4 py-2.5 border border-white/10">
                <b.icon className="w-4 h-4 text-accent-400" />
                <span className="text-sm text-navy-300 font-medium">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8-Step Process ── */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge-blue mb-4">How It Works</span>
            <h2 className="section-title mb-4">The 8-Step NREDCAP Process</h2>
            <p className="section-subtitle mx-auto">
              We take care of 6 of the 8 steps. You sit back and wait for the subsidy.
            </p>
          </div>

          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-accent-400 via-brand-500 to-emerald-500 hidden md:block" />

            <div className="space-y-5">
              {steps.map((step, idx) => (
                <div
                  key={step.num}
                  className="relative flex items-start gap-6 bg-white rounded-2xl border border-gray-100/80 shadow-soft hover:shadow-soft-md hover:-translate-y-0.5 transition-all duration-300 p-6 md:pl-8"
                >
                  {/* Step circle */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-extrabold text-base shadow-md z-10
                    ${idx < 2 ? 'bg-brand-500' : idx < 5 ? 'bg-accent-500' : idx < 7 ? 'bg-emerald-500' : 'bg-purple-500'}`}>
                    {step.num}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                      <h3 className="font-extrabold text-navy-800 text-base">{step.title}</h3>
                      <span className="text-xs font-semibold bg-navy-50 text-navy-500 border border-navy-100 rounded-full px-2.5 py-0.5 w-fit">
                        {step.who}
                      </span>
                    </div>
                    <p className="text-sm text-navy-500 leading-relaxed">{step.desc}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-navy-200 flex-shrink-0 mt-1 hidden sm:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Documents Needed ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge bg-emerald-100 text-emerald-700 border-emerald-200 mb-4">
              <FileText className="w-3.5 h-3.5 mr-2" />
              Documents Required
            </span>
            <h2 className="section-title mb-4">What You Need to Apply</h2>
            <p className="section-subtitle mx-auto">
              Keep these 6 documents ready. We collect soft copies during the site survey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {docs.map((doc, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 bg-cream rounded-2xl border border-gray-100/80 p-5 hover:shadow-soft transition-all duration-300 hover:-translate-y-0.5 group"
              >
                <span className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {doc.icon}
                </span>
                <div>
                  <p className="font-bold text-navy-800 text-sm mb-1">{doc.title}</p>
                  <p className="text-xs text-navy-500 leading-relaxed">{doc.note}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-start gap-3 bg-accent-50 border border-accent-200 rounded-2xl p-5">
            <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-accent-800 leading-relaxed">
              <strong>DV Solar Tech handles all uploads</strong> to the PM Surya Ghar portal and
              co-ordinates with APEPDCL / APSPDCL on your behalf. Most customers don't need to
              visit any government office.
            </p>
          </div>
        </div>
      </section>

      {/* ── Subsidy Calculator ── */}
      <section className="py-20 section-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-blue mb-4">Subsidy Calculator</span>
            <h2 className="section-title mb-4">How Much Will You Get?</h2>
            <p className="section-subtitle mx-auto">
              Move the slider to see your government subsidy amount instantly.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-soft-md border border-gray-100/80 p-8 md:p-12">
            {/* Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-navy-700">System Size</label>
                <span className="text-2xl font-extrabold text-brand-600">{kw} kW</span>
              </div>
              <input
                type="range"
                min={1}
                max={10}
                step={0.5}
                value={kw}
                onChange={e => setKw(parseFloat(e.target.value))}
                className="w-full accent-brand-500 h-2 cursor-pointer"
                id="subsidy-slider"
              />
              <div className="flex justify-between text-xs text-navy-400 mt-1">
                <span>1 kW</span>
                <span>10 kW</span>
              </div>
            </div>

            {/* Result */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-cream rounded-2xl p-5 text-center border border-gray-100">
                <p className="text-xs text-navy-400 mb-1">System Cost (est.)</p>
                <p className="text-2xl font-extrabold text-navy-800">₹{fmt(kw * 72000)}</p>
              </div>
              <div className="bg-emerald-50 rounded-2xl p-5 text-center border border-emerald-100 ring-2 ring-emerald-400/40">
                <p className="text-xs text-emerald-700 font-semibold mb-1">Govt. Subsidy</p>
                <p className="text-3xl font-extrabold text-emerald-600">₹{fmt(subsidy)}</p>
                {subsidy === 78000 && (
                  <p className="text-xs text-emerald-500 mt-1">Maximum limit reached</p>
                )}
              </div>
              <div className="bg-navy-800 rounded-2xl p-5 text-center">
                <p className="text-xs text-navy-400 mb-1">You Pay</p>
                <p className="text-2xl font-extrabold text-white">₹{fmt(Math.max(0, kw * 72000 - subsidy))}</p>
              </div>
            </div>

            {/* Formula note */}
            <div className="bg-brand-50 border border-brand-100 rounded-xl p-4 text-center mb-6">
              <p className="text-xs text-brand-700">
                Formula: Subsidy = <strong>min(kW × ₹30,000, ₹78,000)</strong> &nbsp;|&nbsp;
                Capped at ₹78,000 for 3 kW and above &nbsp;|&nbsp;
                State-level additional subsidy may also apply.
              </p>
            </div>

            <a
              href={`https://wa.me/919182928154?text=Hi! I want to apply for PM Surya Ghar subsidy for a ${kw}kW system. Please guide me.`}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                variant="primary"
                size="lg"
                fullWidth
                leftIcon={<MessageCircle className="w-5 h-5" />}
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Apply for ₹{fmt(subsidy)} Subsidy on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-400/10 rounded-full blur-[80px]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Don't Miss the 2024 Subsidy Window
          </h2>
          <p className="text-xl text-blue-100/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            The PM Surya Ghar scheme has limited slots. Contact us today and we'll get your
            application submitted within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/919182928154?text=Hi! I want to apply for PM Surya Ghar subsidy. Please start the process."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-brand-700 hover:bg-gray-50 font-bold shadow-soft-lg border-0"
                leftIcon={<MessageCircle className="w-5 h-5" />}
              >
                WhatsApp Us Now
              </Button>
            </a>
            <Link to="/contact">
              <Button
                variant="secondary"
                size="lg"
                className="!bg-accent-500 !text-white hover:!bg-accent-600 font-bold border-0"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Request Call Back
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
