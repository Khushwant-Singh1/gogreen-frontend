'use client';

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

interface LocationData {
  title: string;
  summary: string;
  lat?: number;
  lng?: number;
}

function LocationContent() {
  const searchParams = useSearchParams();
  const [locationData, setLocationData] = useState<LocationData | null>(null);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const place = searchParams.get('place');
    const lat = searchParams.get('lat');
    const lng = searchParams.get('lng');

    if (place) {
      setLocationData({
        title: decodeURIComponent(place),
        summary: `Showing details for ${decodeURIComponent(place)}. Use your internal data or existing pages to fill real content.`
      });
    } else if (lat && lng) {
      setLocationData({
        title: `Coordinates: ${lat}, ${lng}`,
        summary: 'You clicked on the map at the coordinates above. You can link these to a records DB or show local contact info.',
        lat: parseFloat(lat),
        lng: parseFloat(lng)
      });
      setShowMap(true);
    } else {
      setLocationData({
        title: 'No location provided',
        summary: 'Open this page via the interactive map or by linking with ?place=NAME or ?lat=...&lng=...'
      });
    }
  }, [searchParams]);

  useEffect(() => {
    if (showMap && locationData?.lat && locationData?.lng) {
      // Load Leaflet dynamically
      const loadLeaflet = async () => {
        // Load Leaflet CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);

        // Load Leaflet JS
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        script.onload = () => {
          // @ts-ignore - Leaflet is loaded dynamically
          const L = (window as any).L;
          
          const mapContainer = document.getElementById('miniMap');
          if (mapContainer) {
            const map = L.map('miniMap', {
              dragging: false,
              scrollWheelZoom: false
            }).setView([locationData.lat, locationData.lng], 10);

            L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png').addTo(map);
            L.marker([locationData.lat, locationData.lng]).addTo(map);
          }
        };
        document.body.appendChild(script);
      };

      loadLeaflet();
    }
  }, [showMap, locationData]);

  return (
    <div className="card max-w-[900px] mx-auto my-6 bg-white shadow-md p-6 rounded-lg">
      <div className="card-body">
        <h3 id="placeTitle" className="text-2xl font-bold mb-4">
          {locationData?.title || 'Loading...'}
        </h3>
        <p id="placeSummary" className="text-gray-600 mb-6">
          {locationData?.summary || 'Loading...'}
        </p>
        <div id="extra">
          {showMap && locationData?.lat && locationData?.lng && (
            <div>
              <p><strong>Map preview:</strong></p>
              <div id="miniMap" className="h-[300px] border border-gray-300 rounded mt-2"></div>
            </div>
          )}
        </div>
        <Link href="/" className="inline-block bg-gray-600 text-white px-6 py-2 rounded mt-6 hover:bg-gray-700 transition">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default function Location() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <Suspense fallback={<div className="text-center py-20 font-bold">Loading Location...</div>}>
        <LocationContent />
      </Suspense>
    </main>
  );
}