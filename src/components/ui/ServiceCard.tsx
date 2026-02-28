import React from 'react';
import { ArrowRight, BoxIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
interface ServiceCardProps {
  title: string;
  description: string;
  icon: BoxIcon;
  linkTo: string;
}
export function ServiceCard({
  title,
  description,
  icon: Icon,
  linkTo
}: ServiceCardProps) {
  return <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-solar-green/50 hover:shadow-md transition-all duration-300 group">
      <div className="w-12 h-12 bg-solar-light rounded-lg flex items-center justify-center mb-4 group-hover:bg-solar-green transition-colors duration-300">
        <Icon className="w-6 h-6 text-solar-dark group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
      <Link to={linkTo} className="inline-flex items-center text-solar-green font-medium hover:text-solar-dark transition-colors">
        Learn more <ArrowRight className="ml-1 w-4 h-4" />
      </Link>
    </div>;
}