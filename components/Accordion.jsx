'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm hover:border-forest-300 transition-colors"
        >
          <button
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <div className="flex items-center gap-3">
              {item.icon && (
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${item.iconBg || 'bg-forest-100'}`}>
                  <item.icon className={`w-4 h-4 ${item.iconColor || 'text-forest-700'}`} />
                </div>
              )}
              <div className="text-left">
                <div className="font-semibold text-stone-900 text-sm md:text-base">{item.title}</div>
                {item.subtitle && (
                  <div className="text-xs text-stone-500 mt-0.5">{item.subtitle}</div>
                )}
              </div>
            </div>
            <ChevronDown
              className={`w-5 h-5 text-stone-400 flex-shrink-0 transition-transform duration-200 ${
                openIndex === i ? 'rotate-180' : ''
              }`}
            />
          </button>

          {openIndex === i && (
            <div className="px-5 pb-5 border-t border-stone-100 pt-4">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
