import React, { useState } from 'react';
import { Clock, ArrowRight, Tag, Search } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { usePageSEO } from '../hooks/usePageSEO';

const articles = [
  {
    id: 1,
    title: '3kW Solar System Price in India 2025 – Complete Guide',
    slug: '3kw-solar-system-price-india-2025',
    category: 'Pricing Guide',
    categoryColor: 'bg-brand-50 text-brand-700',
    readTime: '5 min read',
    date: 'March 5, 2025',
    excerpt:
      'Planning to install a 3kW solar system? Discover the complete pricing breakdown including Tier-1 panels, inverter, installation, and government subsidy — with realistic numbers for Andhra Pradesh.',
    image: '/images/project1.jpg',
    featured: true,
  },
  {
    id: 2,
    title: 'Solar Subsidy Guide for Andhra Pradesh – PM Surya Ghar 2025',
    slug: 'solar-subsidy-guide-andhra-pradesh-2025',
    category: 'Government Schemes',
    categoryColor: 'bg-emerald-50 text-emerald-700',
    readTime: '7 min read',
    date: 'February 20, 2025',
    excerpt:
      'Step-by-step guide to claiming up to ₹78,000 in central government solar subsidy under the PM Surya Ghar Muft Bijli Yojana. Who is eligible, how to apply, and what documents you need.',
    image: '/images/project2.jpg',
    featured: true,
  },
  {
    id: 3,
    title: 'Benefits of Rooftop Solar for Homes – Why Go Solar in 2025',
    slug: 'benefits-rooftop-solar-homes-2025',
    category: 'For Homeowners',
    categoryColor: 'bg-accent-50 text-accent-700',
    readTime: '4 min read',
    date: 'February 10, 2025',
    excerpt:
      'From slashing electricity bills to increasing property value — discover the top 10 reasons why over 5 lakh Indian homeowners went solar in 2024 and why you should too.',
    image: '/images/project3.jpg',
    featured: true,
  },
  {
    id: 4,
    title: 'On-Grid vs Off-Grid vs Hybrid Solar – Which is Best for You?',
    slug: 'on-grid-vs-off-grid-vs-hybrid-solar',
    category: 'Solar Basics',
    categoryColor: 'bg-purple-50 text-purple-700',
    readTime: '6 min read',
    date: 'January 28, 2025',
    excerpt:
      'Confused about which solar system type to choose? We break down the differences between on-grid, off-grid, and hybrid solar systems—their costs, pros, cons, and ideal use cases.',
    image: '/images/project4.jpg',
    featured: false,
  },
  {
    id: 5,
    title: 'How to Apply for Net Metering in Andhra Pradesh – 2025 Process',
    slug: 'net-metering-andhra-pradesh-2025',
    category: 'Net Metering',
    categoryColor: 'bg-cyan-50 text-cyan-700',
    readTime: '5 min read',
    date: 'January 15, 2025',
    excerpt:
      'Net metering allows you to sell surplus solar power back to the grid and earn bill credits. Learn the complete APSPDCL / APEPDCL net metering application process for AP residents.',
    image: '/images/project5.jpg',
    featured: false,
  },
  {
    id: 6,
    title: 'Top 5 Solar Panel Brands in India 2025 – Waaree, Adani & More',
    slug: 'top-solar-panel-brands-india-2025',
    category: 'Product Reviews',
    categoryColor: 'bg-amber-50 text-amber-700',
    readTime: '8 min read',
    date: 'January 5, 2025',
    excerpt:
      'Comparing the best solar panel brands in India for efficiency, warranty, price, and reliability. An expert review of Waaree, Adani, Tata Power, Reone, and other Tier-1 manufacturers.',
    image: '/images/project6.jpg',
    featured: false,
  },
];

const categories = ['All Articles', 'Pricing Guide', 'Government Schemes', 'For Homeowners', 'Solar Basics', 'Net Metering', 'Product Reviews'];

export function BlogPage() {
  usePageSEO({
    title: 'Solar Blog & Guides | DV Solar Tech | Andhra Pradesh Solar News',
    description: 'Expert solar guides and articles — solar pricing, PM Surya Ghar subsidy, net metering process, panel brand comparisons, and more. All written for Andhra Pradesh customers.',
    keywords: 'solar blog India, solar guides AP, PM Surya Ghar guide, solar subsidy 2025, net metering AP guide',
    canonical: '/blog',
  });
  const [activeCategory, setActiveCategory] = useState('All Articles');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = articles.filter(a => {
    const matchCat = activeCategory === 'All Articles' || a.category === activeCategory;
    const matchSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <section className="relative bg-navy-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-brand-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-20 w-[300px] h-[300px] bg-accent-400 rounded-full blur-[80px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge bg-accent-500/15 text-accent-400 border-accent-500/25 mb-6">
            Solar Knowledge Hub
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Solar Blog & Guides
          </h1>
          <p className="text-lg md:text-xl text-navy-300 max-w-2xl mx-auto leading-relaxed">
            Expert articles on solar pricing, government subsidies, net metering, and everything
            you need to make an informed solar decision.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-brand-500 text-white shadow-md'
                      : 'bg-gray-100 text-navy-600 hover:bg-brand-50 hover:text-brand-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-cream border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400 transition-all text-navy-700 placeholder:text-navy-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-navy-400 text-lg">No articles found. Try a different search or category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map(article => (
                <article
                  key={article.id}
                  className="card-hover overflow-hidden group cursor-pointer"
                >
                  <div className="h-52 overflow-hidden rounded-t-3xl">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="p-7">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${article.categoryColor}`}>
                        <Tag className="w-3 h-3" />
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-navy-400">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readTime}
                      </span>
                    </div>

                    <h2 className="text-lg font-bold text-navy-800 mb-3 leading-snug group-hover:text-brand-600 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-navy-400 text-sm leading-relaxed mb-5 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-navy-300">{article.date}</span>
                      <button className="flex items-center gap-1.5 text-brand-500 text-sm font-semibold hover:gap-2.5 transition-all duration-200 group/btn">
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter / Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="badge-blue mb-5">Still Have Questions?</span>
          <h2 className="section-title mb-5">Talk to a Solar Expert</h2>
          <p className="section-subtitle mx-auto mb-8">
            Our team is happy to answer any solar questions — no sales pressure, just honest advice.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Get Free Consultation
              </Button>
            </Link>
            <Link to="/calculator">
              <Button variant="outline" size="lg">
                Try Solar Calculator
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
