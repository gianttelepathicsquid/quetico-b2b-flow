'use client';

import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Truck,
  Building2,
  ArrowRight,
  ClipboardCheck,
  Package,
  Boxes,
  ShoppingBag,
  BarChart,
  ArrowUpRight,
  CheckCircle
} from 'lucide-react';

const B2BProcessFlow = () => {
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>([]);
  const [showCTA, setShowCTA] = useState(false);
  const [expandedPlatform, setExpandedPlatform] = useState<number | null>(null);

  const platforms = [
    {
      title: 'EDI Support',
      description: 'Full EDI integration capabilities with major retailers. Support for all standard EDI transaction sets including 850, 856, 810, and more.',
      icon: ClipboardCheck
    },
    {
      title: 'Marketplace Integration',
      description: 'Seamless connection with major marketplaces including Amazon, Walmart, eBay, and more. Automated order sync and inventory updates.',
      icon: ShoppingBag
    },
    {
      title: 'Retail Compliance',
      description: 'Comprehensive retail compliance management ensuring adherence to vendor guidelines, packaging requirements, and shipping standards.',
      icon: ClipboardCheck
    },
    {
      title: 'WMS Systems',
      description: 'Advanced warehouse management system integration for real-time inventory tracking, order management, and fulfillment optimization.',
      icon: Boxes
    },
    {
      title: 'Shipping Solutions',
      description: 'Multi-carrier shipping integration with rate optimization and automated label generation for all major carriers.',
      icon: Truck
    },
    {
      title: 'Routing Guides',
      description: 'Expert handling of retailer-specific routing guides ensuring compliance with shipping methods, labeling, and documentation requirements.',
      icon: Package
    }
  ];

  const steps = [
    {
      step: 1,
      title: "Connect & Integrate",
      description: "Seamless integration with retail partners and marketplaces through EDI and API connections",
      icon: Building2
    },
    {
      step: 2,
      title: "Inventory Management",
      description: "Centralized storage and management in tech-enabled fulfillment centers",
      icon: Boxes
    },
    {
      step: 3,
      title: "Order Processing",
      description: "Automated order receipt and processing with retail compliance validation",
      icon: ClipboardCheck
    },
    {
      step: 4,
      title: "Fulfillment Operations",
      description: "Professional picking, packing, and shipping following retail routing guides",
      icon: Package
    }
  ];

  useEffect(() => {
    const timeouts = steps.map((_, index) => {
      return setTimeout(() => {
        setVisibleSteps(prev => [...prev, true]);
      }, index * 300);
    });

    setTimeout(() => {
      setShowCTA(true);
    }, steps.length * 300 + 500);

    return () => timeouts.forEach(timeout => clearTimeout(timeout));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative">
              <Box className="h-12 w-12 text-[#00204E] animate-pulse" />
              <div className="absolute inset-0 bg-[#00204E] rounded-full opacity-20 animate-ping" />
            </div>
            <h1 className="text-3xl font-bold text-[#00204E]">
              Quetico: Your B2B Distribution & Fulfillment Partner
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Empower your retail and wholesale distribution with Quetico's comprehensive B2B fulfillment solutions
          </p>
        </div>

        {/* Integration Grid */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-[#00204E] mb-6">Integration Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {platforms.map((platform, idx) => {
              const isExpanded = expandedPlatform === idx;
              const Icon = platform.icon;
              
              return (
                <div
                  key={idx}
                  className="transform transition-all duration-500"
                >
                  <button
                    onClick={() => setExpandedPlatform(isExpanded ? null : idx)}
                    className={`w-full bg-white p-4 rounded-lg border border-gray-200 shadow-sm 
                      hover:shadow-md transition-all duration-300 text-left
                      ${isExpanded ? 'ring-2 ring-sky-400' : 'hover:border-sky-400'}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`p-1.5 rounded-lg transition-colors duration-300 
                          ${isExpanded ? 'bg-sky-100' : 'bg-gray-100'}`}>
                          <Icon className={`h-4 w-4 transition-colors duration-300
                            ${isExpanded ? 'text-sky-600' : 'text-gray-600'}`} />
                        </div>
                        <span className="font-medium text-[#00204E]">{platform.title}</span>
                      </div>
                      <ArrowRight 
                        className={`h-4 w-4 text-gray-400 transform transition-all duration-300
                          ${isExpanded ? 'rotate-90 text-sky-400' : ''}`} 
                      />
                    </div>
                    
                    <div className={`transition-all duration-300 overflow-hidden
                      ${isExpanded ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {platform.description}
                      </p>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Steps */}
        <div className="space-y-6 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isVisible = visibleSteps[index];
            
            return (
              <div
                key={step.step}
                className={`transform transition-all duration-500 ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                }`}
              >
                <div className="relative flex items-start p-6 bg-white rounded-lg shadow-lg border border-gray-200">
                  <div className="absolute -left-3 top-6 bg-[#00204E] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
                    {step.step}
                  </div>
                  <div className="ml-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-sky-100 p-2 rounded-lg">
                        <Icon className="h-6 w-6 text-[#00204E]" />
                      </div>
                      <h3 className="text-lg font-semibold text-[#00204E]">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div 
          className={`transform transition-all duration-500 ${
            showCTA ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="bg-[#00204E] rounded-xl p-8 text-center text-white shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Ready to Optimize Your B2B Distribution?</h2>
            <p className="mb-6 text-gray-300 max-w-2xl mx-auto">
              Get started with Quetico's tailored fulfillment solutions. Our experts will analyze your needs and create a custom solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = '/contact'}
                className="bg-sky-400 text-[#00204E] px-8 py-4 rounded-lg font-semibold hover:bg-sky-300 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Schedule a Consultation
                <ArrowUpRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => window.location.href = '/pricing'}
                className="bg-white text-[#00204E] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Get Custom Quote
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-sky-400 flex-shrink-0" />
                <span className="text-sm">EDI & marketplace integration ready</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-sky-400 flex-shrink-0" />
                <span className="text-sm">Retail routing guide compliance</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-sky-400 flex-shrink-0" />
                <span className="text-sm">Custom B2B fulfillment solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default B2BProcessFlow;
