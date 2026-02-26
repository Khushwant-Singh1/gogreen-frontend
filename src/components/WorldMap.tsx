'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import worldMapData from '@/data/world-map-paths.json';

interface CountryPath {
  id: string;
  d: string;
}

interface TooltipState {
  country: string;
  x: number;
  y: number;
}

// List of highlighted countries (where GoGreen has presence)
const HIGHLIGHTED_COUNTRIES = new Set([
  // The Americas - North America
  'United States', 'Mexico',
  
  // The Americas - Central America & Caribbean
  'Guatemala', 'Guadeloupe',
  
  // The Americas - South America
  'Peru', 'Brazil', 'Bolivia', 'Chile',
  
  // Africa - North & West Africa 
  'Morocco', 'Senegal', 'The Gambia', 'Guinea', 'Ghana', 'Nigeria', "Côte d'Ivoire", 'Niger',
  
  // Africa - Central & Southern Africa
  'Cameroon', 'Gabon', 'Namibia', 'Botswana', 'South Africa', 'Zimbabwe', 'Zambia', 'Malawi',
  
  // Africa - East Africa
  'Egypt', 'Sudan', 'Eritrea', 'Djibouti', 'Ethiopia', 'Somalia', 'Kenya', 'Uganda', 'Tanzania', 'Madagascar', 'Rwanda', 'Seychelles',
  
  // Asia & The Middle East - Middle East
  'Iraq', 'Iran', 'Yemen', 'Oman', 'Saudi Arabia', 'Lebanon', 'Kuwait', 'UAE', 'Qatar',
  
  // Asia & The Middle East - South & Central Asia
  'India', 'Nepal', 'Bhutan', 'Bangladesh', 'Sri Lanka', 'Mongolia', 'Maldives',
  
  // Asia & The Middle East - Southeast Asia
  'Myanmar', 'Thailand', 'Vietnam', 'Cambodia', 'Malaysia', 'Philippines', 'Indonesia', 'Timor-Leste',
  
  // Oceania
  'New Zealand', 'Netherlands', 'Australia',
]);

// Mapping of country names to their export page URL slugs
const COUNTRY_URL_MAPPING: Record<string, string> = {
  'Australia': 'irrigation-components-australia',
  'Bahrain': 'irrigation-components-bahrain',
  'Bangladesh': 'irrigation-components-bangladesh',
  'Bhutan': 'irrigation-components-bhutan',
  'Bolivia': 'irrigation-components-bolivia',
  'Botswana': 'irrigation-components-botswana',
  'Brazil': 'irrigation-components-brazil',
  'Burundi': 'irrigation-components-burundi',
  'Nepal': 'irrigation-components-nepal',
  'Netherlands': 'irrigation-components-netherlands',
  'New Zealand': 'irrigation-components-new-zealand',
  'Niger': 'irrigation-components-niger',
  'Nigeria': 'irrigation-components-nigeria',
  'Guatemala': 'irrigation-components-guatemala',
  'Cameroon': 'irrigation-components-cameroon',
  'Chile': 'irrigation-components-chile',
  "Côte d'Ivoire": 'irrigation-components-cote-divoire',
  'Egypt': 'irrigation-components-egypt',
  'Ethiopia': 'irrigation-components-ethiopia',
  'Gabon': 'irrigation-components-gabon',
  'The Gambia': 'irrigation-components-gambia',
  'Georgia': 'irrigation-components-georgia',
  'Ghana': 'irrigation-components-ghana',
  'Guadeloupe': 'irrigation-components-guadeloupe',
  'Guinea': 'irrigation-components-guinea',
  'Indonesia': 'irrigation-components-indonesia',
  'Iran': 'irrigation-components-iran',
  'Iraq': 'irrigation-components-iraq',
  'Kenya': 'irrigation-components-kenya',
  'Kuwait': 'irrigation-components-kuwait',
  'Lebanon': 'irrigation-components-lebanon',
  'Maldives': 'irrigation-components-maldives',
  'Malawi': 'irrigation-components-malawi',
  'Mexico': 'irrigation-components-mexico',
  'Mongolia': 'irrigation-components-mongolia',
  'Morocco': 'irrigation-components-morocco',
  'Myanmar': 'irrigation-components-myanmar',
  'Namibia': 'irrigation-components-namibia',
  'Oman': 'irrigation-components-oman',
  'Peru': 'irrigation-components-peru',
  'Philippines': 'irrigation-components-philippines',
  'Qatar': 'irrigation-components-qatar',
  'Rwanda': 'irrigation-components-rwanda',
  'Saudi Arabia': 'irrigation-components-saudi-arabia',
  'Senegal': 'irrigation-components-senegal',
  'Seychelles': 'irrigation-components-seychelles',
  'Somalia': 'irrigation-components-somalia',
  'South Africa': 'irrigation-components-south-africa',
  'Sri Lanka': 'irrigation-components-sri-lanka',
  'Sudan': 'irrigation-components-sudan',
  'Tanzania': 'irrigation-components-tanzania',
  'Thailand': 'irrigation-components-thailand',
  'United Arab Emirates': 'irrigation-components-uae',
  'Uganda': 'irrigation-components-uganda',
  'United States': 'irrigation-components-usa',
  'Vietnam': 'irrigation-components-vietnam',
  'Yemen': 'irrigation-components-yemen',
  'Zambia': 'irrigation-components-zambia',
  'Zimbabwe': 'irrigation-components-zimbabwe',
};

const countryPaths: CountryPath[] = worldMapData as CountryPath[];

// Debug: Log which countries are being highlighted
// console.log('Total countries in JSON:', countryPaths.length);
// console.log('Countries to highlight:', HIGHLIGHTED_COUNTRIES.size);
// const matchedCountries = countryPaths.filter(c => HIGHLIGHTED_COUNTRIES.has(c.id)).map(c => c.id);
// console.log('Matched countries:', matchedCountries.length, matchedCountries);

export default function WorldMap() {
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const router = useRouter();

  const handleCountryClick = (countryName: string) => {
    const urlSlug = COUNTRY_URL_MAPPING[countryName];
    if (urlSlug) {
      router.push(`/exports/${urlSlug}`);
    }
  };

  const handleMouseEnter = (countryName: string, event: React.MouseEvent<SVGPathElement>) => {
    setTooltip({
      country: countryName,
      x: event.clientX,
      y: event.clientY - 20
    });
  };

  const handleMouseMove = (countryName: string, event: React.MouseEvent<SVGPathElement>) => {
    setTooltip({
      country: countryName,
      x: event.clientX,
      y: event.clientY - 20
    });
  };

  const handleMouseLeave = () => {
    setTooltip(null);
  };

  const isHighlighted = (countryId: string): boolean => {
    return HIGHLIGHTED_COUNTRIES.has(countryId);
  };

  const getFillColor = (countryId: string): string => {
    if (countryId === 'India') {
      return '#FFD700'; // Gold for India
    } else if (isHighlighted(countryId)) {
      return '#7cb77c'; // Light green for other highlighted countries
    }
    return '#e0e0e0'; // Light grey for non-highlighted countries
  };

  return (
    <div className="position-relative">
      <svg
        id="allSvg"
        baseProfile="tiny"
        fill="#ececec"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.5"
        version="1.2"
        viewBox="0 0 2000 857"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%', display: 'block', backgroundColor: '#c5dce8' }}
      >
        {countryPaths.map((country, index) => (
          <path
            key={`${country.id}-${index}`}
            className="allPaths"
            d={country.d}
            fill={getFillColor(country.id)}
            stroke="white"
            strokeWidth="0.5"
            style={{ 
              cursor: COUNTRY_URL_MAPPING[country.id] ? 'pointer' : 'default',
              transition: 'fill 0.2s ease'
            }}
            onMouseEnter={(e) => handleMouseEnter(country.id, e)}
            onMouseMove={(e) => handleMouseMove(country.id, e)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleCountryClick(country.id)}
          />
        ))}
      </svg>

      {/* Tooltip */}
      {tooltip && (
        <div
          id="country-tooltip"
          style={{
            position: 'fixed',
            left: `${tooltip.x}px`,
            top: `${tooltip.y}px`,
            transform: 'translate(-50%, -100%)',
            backgroundColor: '#000',
            color: '#fff',
            padding: '8px 12px',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: 'bold',
            pointerEvents: 'none',
            zIndex: 9999,
            whiteSpace: 'nowrap',
            boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
          }}
        >
          {tooltip.country}
        </div>
      )}
    </div>
  );
}
