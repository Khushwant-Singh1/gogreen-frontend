
import Link from 'next/dist/client/link';

import YouTubeFacade from './YouTubeFacade';

interface YouTubeVideo {
  id: string;
  youtubeUrl: string;
  displayOrder: number;
  isActive: boolean;
  embedUrl: string;
  videoId: string;
  title?: string;
}

// Data fetching function with caching
async function getVideos(): Promise<YouTubeVideo[]> {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";
    
    // Check if we are in production build and URL is missing
    if (!process.env.NEXT_PUBLIC_API_URL && process.env.NODE_ENV === 'production') {
        return [];
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

    try {
      const response = await fetch(`${backendUrl}/youtube-videos`, {
        next: { revalidate: 3600 }, // Cache for 1 hour
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      
      if (!response.ok) return [];
      
      const data = await response.json();
      return data.success ? data.data : [];
    } catch (fetchError) {
      clearTimeout(timeoutId);
      throw fetchError;
    }
  } catch (error) {
    console.error('Failed to fetch YouTube videos:', error);
    return [];
  }
}

export default async function YouTubeVideosSection() {
  const videos = await getVideos();

  // If no videos are available, don't render the section
  if (videos.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-white" aria-labelledby="company-videos">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-3xl lg:text-4xl font-bold uppercase tracking-wider mb-2 text-blue-900">Watch Our Story</p>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <h2 id="company-videos" className="text-4xl lg:text-5xl font-bold text-green-900">
            Latest Videos from Vidhi Enterprises
          </h2>
        </div>

        {/* Video Cards Grid - Responsive based on video count */}
        <div className={`grid gap-8 max-w-7xl mx-auto ${
            videos.length === 1 
            ? 'grid-cols-1 max-w-2xl' 
            : videos.length === 2 
                ? 'grid-cols-1 md:grid-cols-2 max-w-4xl' 
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}>
            {videos.slice(0, 6).map((video) => (
            <div
                key={video.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
                <div className="relative pb-[56.25%] h-0 overflow-hidden bg-gray-200">
                  <YouTubeFacade 
                    videoId={video.videoId} 
                    title={video.title || "Vidhi Enterprises Video"} 
                  />
                </div>
            </div>
            ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
            <Link
            href="https://www.youtube.com/@vidhi_enterprises"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-white font-bold py-4 px-8 rounded-full hover:bg-secondary transition shadow-lg hover:shadow-xl"
            >
            <i className="fab fa-youtube text-2xl"></i>
            Visit Our YouTube Channel for More Videos
            </Link>
        </div>
      </div>
    </section>
  );
}

