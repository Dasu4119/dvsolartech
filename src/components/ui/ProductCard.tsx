import { Link } from 'react-router-dom';
import { CheckCircle, Info } from 'lucide-react';
import { Button } from './Button';
interface ProductSpec {
  label: string;
  value: string;
}
interface ProductCardProps {
  title: string;
  brand: string;
  image?: string;
  specs: ProductSpec[];
  features: string[];
  category: string;
  slug?: string;
}
export function ProductCard({
  title,
  brand,
  image,
  specs,
  features,
  category,
  slug
}: ProductCardProps) {
  return <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
    <div className="h-48 bg-gray-100 relative flex items-center justify-center">
      {image ? <img src={image} alt={title} className="w-full h-full object-cover" /> : <div className="text-gray-400 flex flex-col items-center">
        <Info className="w-12 h-12 mb-2" />
        <span className="text-sm">Image Placeholder</span>
      </div>}
      <div className="absolute top-3 right-3 bg-solar-green text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
        Used by DV Solar
      </div>
    </div>

    <div className="p-6 flex-1 flex flex-col">
      <div className="mb-4">
        <span className="text-xs font-semibold text-solar-green uppercase tracking-wider">
          {category}
        </span>
        <h3 className="text-xl font-bold text-gray-900 mt-1">{title}</h3>
        <p className="text-gray-500 text-sm">{brand}</p>
      </div>

      <div className="space-y-3 mb-6 flex-1">
        {specs.map((spec, idx) => <div key={idx} className="flex justify-between text-sm border-b border-gray-50 pb-1 last:border-0">
          <span className="text-gray-600">{spec.label}</span>
          <span className="font-medium text-gray-900">{spec.value}</span>
        </div>)}

        <div className="pt-2">
          <p className="text-xs font-semibold text-gray-500 mb-2">
            Key Features:
          </p>
          <ul className="space-y-1">
            {features.slice(0, 3).map((feature, idx) => <li key={idx} className="flex items-start text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-solar-green mr-2 mt-0.5 flex-shrink-0" />
              {feature}
            </li>)}
          </ul>
        </div>
      </div>

      <div className="space-y-3 mt-auto">
        <div className="grid grid-cols-2 gap-3">
          <Link to={`/product/${slug || 'solar-panel'}`} className="block">
            <Button variant="outline" fullWidth size="sm">
              Details
            </Button>
          </Link>
          <Button variant="primary" fullWidth size="sm" onClick={() => window.open('https://wa.me/919876543210?text=I am interested in ' + title, '_blank')}>
            Enquire
          </Button>
        </div>
        <p className="text-[10px] text-center text-gray-400 uppercase font-bold tracking-tight">
          Contact for latest price
        </p>
      </div>
    </div>
  </div>;
}