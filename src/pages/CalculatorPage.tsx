import React, { useState } from 'react';
import {
  Calculator,
  Zap,
  IndianRupee,
  TrendingDown,
  Sun,
  ArrowRight,
  MessageCircle,
  Info,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const districts = [
  'Anantapur', 'Chittoor', 'East Godavari', 'Guntur', 'Krishna', 'Kurnool',
  'Nellore', 'Prakasam', 'Srikakulam', 'Visakhapatnam', 'Vizianagaram',
  'West Godavari', 'YSR Kadapa', 'Palnadu', 'Bapatla', 'Eluru', 'NTR District',
  'Anakapalli', 'Kakinada', 'Konaseema',
];

// Subsidy table (PM Surya Ghar Muft Bijli Yojana - 2024)
const subsidyTable: Record<string, number> = {
  '1': 30000,
  '2': 60000,
  '3': 78000,
};

function getSubsidy(kw: number): number {
  if (kw <= 1) return subsidyTable['1'];
  if (kw <= 2) return subsidyTable['2'];
  if (kw <= 3) return subsidyTable['3'];
  return 78000; // cap at 3kW for residential subsidy
}

interface CalcResult {
  systemKw: number;
  costBeforeSubsidy: number;
  subsidy: number;
  netCost: number;
  annualSavings: number;
  paybackYears: number;
  monthlyUnitsGenerated: number;
}

function calculate(monthlyBill: number, _district: string, roofArea: number): CalcResult {
  // Tariff assumption: ₹7 per unit average in AP
  const tariff = 7;
  const monthlyUnits = monthlyBill / tariff;
  // Each kW produces ~120 units/month in AP (avg 4 peak sun hours)
  const systemKw = Math.max(1, Math.ceil(monthlyUnits / 120));
  const cappedKw = Math.min(systemKw, 10);

  // Cost: ~₹55,000 per kW installed (Tier-1 equipment)
  const costPerKw = 55000;
  const costBeforeSubsidy = cappedKw * costPerKw;
  const subsidy = getSubsidy(cappedKw);
  const netCost = Math.max(0, costBeforeSubsidy - subsidy);

  // Savings: units generated × tariff
  const monthlyUnitsGenerated = cappedKw * 120;
  const annualSavings = Math.min(monthlyUnitsGenerated, monthlyUnits) * 12 * tariff;
  const paybackYears = parseFloat((netCost / annualSavings).toFixed(1));

  return { systemKw: cappedKw, costBeforeSubsidy, subsidy, netCost, annualSavings, paybackYears, monthlyUnitsGenerated };
}

export function CalculatorPage() {
  const [monthlyBill, setMonthlyBill] = useState<string>('');
  const [district, setDistrict] = useState<string>('');
  const [roofArea, setRoofArea] = useState<string>('');
  const [result, setResult] = useState<CalcResult | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const bill = parseFloat(monthlyBill);
    const area = parseFloat(roofArea);
    if (!bill || !district || !area) return;
    setResult(calculate(bill, district, area));
  };

  const fmt = (n: number) =>
    new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(n);

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <section className="relative bg-navy-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-accent-400 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-20 w-[300px] h-[300px] bg-brand-500 rounded-full blur-[80px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge bg-accent-500/15 text-accent-400 border-accent-500/25 mb-6">
            <Calculator className="w-3.5 h-3.5 mr-2" />
            Free Tool
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Solar Savings Calculator
          </h1>
          <p className="text-lg md:text-xl text-navy-300 max-w-2xl mx-auto leading-relaxed">
            Find out exactly how much you can save with solar. Enter your monthly electricity
            bill and get an instant estimate — free.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Form */}
            <div className="bg-white rounded-3xl shadow-soft-md border border-gray-100/80 p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-accent-50 p-3 rounded-2xl">
                  <Sun className="w-7 h-7 text-accent-600" />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-navy-800">Your Inputs</h2>
                  <p className="text-sm text-navy-400">Takes less than 30 seconds</p>
                </div>
              </div>

              <form onSubmit={handleCalculate} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-navy-700 mb-2.5">
                    Monthly Electricity Bill (₹)
                  </label>
                  <input
                    type="number"
                    required
                    min="100"
                    value={monthlyBill}
                    onChange={e => setMonthlyBill(e.target.value)}
                    className="w-full px-5 py-3.5 bg-cream border border-gray-200 rounded-2xl focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400 outline-none transition-all text-sm text-navy-700 placeholder:text-navy-300"
                    placeholder="e.g. 3000"
                    id="monthly-bill"
                  />
                  <p className="text-xs text-navy-400 mt-1.5">Check your APSPDCL / APEPDCL bill</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy-700 mb-2.5">
                    District / Location
                  </label>
                  <select
                    required
                    value={district}
                    onChange={e => setDistrict(e.target.value)}
                    className="w-full px-5 py-3.5 bg-cream border border-gray-200 rounded-2xl focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400 outline-none transition-all text-sm text-navy-700 appearance-none cursor-pointer"
                    id="district"
                  >
                    <option value="">Select your district</option>
                    {districts.map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy-700 mb-2.5">
                    Available Roof Area (sq. ft.)
                  </label>
                  <input
                    type="number"
                    required
                    min="50"
                    value={roofArea}
                    onChange={e => setRoofArea(e.target.value)}
                    className="w-full px-5 py-3.5 bg-cream border border-gray-200 rounded-2xl focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400 outline-none transition-all text-sm text-navy-700 placeholder:text-navy-300"
                    placeholder="e.g. 500"
                    id="roof-area"
                  />
                  <p className="text-xs text-navy-400 mt-1.5">Each kW of solar needs ~100 sq. ft. of roof space</p>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  leftIcon={<Calculator className="w-5 h-5" />}
                >
                  Calculate My Savings
                </Button>
              </form>

              <div className="mt-6 flex items-start gap-2.5 bg-brand-50 rounded-2xl p-4">
                <Info className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-brand-700 leading-relaxed">
                  These are estimates based on average AP solar irradiance and current government
                  subsidy rates. Contact us for an accurate free quotation.
                </p>
              </div>
            </div>

            {/* Results */}
            <div>
              {!result ? (
                <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-3xl p-8 md:p-10 text-white text-center flex flex-col items-center justify-center min-h-[400px]">
                  <div className="w-20 h-20 bg-accent-500/15 rounded-full flex items-center justify-center mb-6">
                    <Sun className="w-10 h-10 text-accent-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Your Results Will Appear Here</h3>
                  <p className="text-navy-400 leading-relaxed max-w-xs">
                    Fill in the form on the left and click "Calculate My Savings" to see your
                    personalized solar estimate.
                  </p>
                </div>
              ) : (
                <div className="space-y-4 animate-fade-up">
                  <div className="bg-gradient-to-br from-brand-500 to-brand-700 rounded-3xl p-8 text-white">
                    <p className="text-blue-100/70 text-sm font-semibold uppercase tracking-wider mb-2">
                      Recommended System Size
                    </p>
                    <p className="text-6xl font-extrabold mb-1">{result.systemKw} kW</p>
                    <p className="text-blue-100/80">Generates ~{fmt(result.monthlyUnitsGenerated)} units/month</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-2xl border border-gray-100/80 shadow-soft p-6">
                      <div className="bg-accent-50 p-2.5 rounded-xl inline-flex mb-3">
                        <IndianRupee className="w-5 h-5 text-accent-600" />
                      </div>
                      <p className="text-xs text-navy-400 mb-1">Estimated Cost</p>
                      <p className="text-2xl font-extrabold text-navy-800">₹{fmt(result.costBeforeSubsidy)}</p>
                    </div>
                    <div className="bg-emerald-50 rounded-2xl border border-emerald-100 p-6">
                      <div className="bg-emerald-100 p-2.5 rounded-xl inline-flex mb-3">
                        <TrendingDown className="w-5 h-5 text-emerald-600" />
                      </div>
                      <p className="text-xs text-emerald-700 mb-1">Govt. Subsidy</p>
                      <p className="text-2xl font-extrabold text-emerald-700">−₹{fmt(result.subsidy)}</p>
                    </div>
                    <div className="bg-navy-800 rounded-2xl p-6 text-white">
                      <div className="bg-white/10 p-2.5 rounded-xl inline-flex mb-3">
                        <IndianRupee className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-xs text-navy-400 mb-1">Net Cost to You</p>
                      <p className="text-2xl font-extrabold">₹{fmt(result.netCost)}</p>
                    </div>
                    <div className="bg-white rounded-2xl border border-gray-100/80 shadow-soft p-6">
                      <div className="bg-brand-50 p-2.5 rounded-xl inline-flex mb-3">
                        <Zap className="w-5 h-5 text-brand-600" />
                      </div>
                      <p className="text-xs text-navy-400 mb-1">Annual Savings</p>
                      <p className="text-2xl font-extrabold text-brand-600">₹{fmt(result.annualSavings)}</p>
                    </div>
                  </div>

                  <div className="bg-accent-500 rounded-2xl p-6 text-white flex items-center justify-between">
                    <div>
                      <p className="text-white/70 text-sm">Payback Period</p>
                      <p className="text-3xl font-extrabold">{result.paybackYears} Years</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white/70 text-sm">25-Year Savings</p>
                      <p className="text-3xl font-extrabold">₹{fmt(result.annualSavings * 25)}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link to="/contact" className="flex-1">
                      <Button variant="primary" size="lg" fullWidth rightIcon={<ArrowRight className="w-5 h-5" />}>
                        Get Free Quote
                      </Button>
                    </Link>
                    <Button
                      variant="secondary"
                      size="lg"
                      leftIcon={<MessageCircle className="w-5 h-5" />}
                      className="!bg-[#25D366] !border-[#25D366] !text-white hover:!bg-[#128C7E] flex-1"
                      onClick={() => window.open(`https://wa.me/919182928154?text=Hi! I used your solar calculator. My monthly bill is ₹${monthlyBill} in ${district}. Please share a detailed quote for a ${result?.systemKw}kW system.`, '_blank')}
                    >
                      Share on WhatsApp
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Subsidy Info */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="badge-blue mb-4">Government Scheme</span>
            <h2 className="section-title mb-4">PM Surya Ghar – Muft Bijli Yojana</h2>
            <p className="section-subtitle mx-auto">Central government subsidies for residential rooftop solar installations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { kw: 'Up to 1 kW', subsidy: '₹30,000', note: 'For small homes' },
              { kw: 'Up to 2 kW', subsidy: '₹60,000', note: 'Most popular' },
              { kw: '3 kW & above', subsidy: '₹78,000', note: 'Maximum benefit' },
            ].map((item, idx) => (
              <div key={idx} className={`rounded-2xl p-7 text-center border-2 ${idx === 1 ? 'border-brand-500 bg-brand-50' : 'border-gray-100 bg-cream'}`}>
                <p className="text-lg font-bold text-navy-800 mb-2">{item.kw}</p>
                <p className="text-4xl font-extrabold text-brand-500 mb-2">{item.subsidy}</p>
                <p className="text-sm text-navy-400">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-navy-400 mt-6">
            * DV Solar Tech helps you apply for and receive government subsidy as part of our installation service.
          </p>
        </div>
      </section>
    </div>
  );
}
