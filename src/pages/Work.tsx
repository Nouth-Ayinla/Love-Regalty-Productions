import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Pause, ChevronLeft, ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

const Work = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Video data with sample videos
  const videos = [
    {
      id: 1,
      title: "Tech Startup Commercial",
      client: "InnovateTech",
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=450&fit=crop",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      description: "A dynamic commercial showcasing innovative technology solutions"
    },
    {
      id: 2,
      title: "Fashion Brand Campaign",
      client: "StyleForward",
      thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=450&fit=crop",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      description: "High-fashion commercial with stunning visuals and storytelling"
    },
    {
      id: 3,
      title: "Restaurant Promo",
      client: "Culinary Dreams",
      thumbnail: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=450&fit=crop",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      description: "Mouth-watering food commercial that captures culinary excellence"
    },
    {
      id: 4,
      title: "Corporate Training Video",
      client: "GlobalCorp",
      thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=450&fit=crop",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      description: "Professional training video with clear messaging and engagement"
    },
    {
      id: 5,
      title: "Non-Profit Campaign",
      client: "Hope Foundation",
      thumbnail: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=450&fit=crop",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      description: "Emotionally powerful campaign for social impact"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % videos.length);
    setIsPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length);
    setIsPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsPlaying(false);
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Header Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <Button asChild variant="outline" className="flex items-center gap-2">
                <Link to="/">
                  <Home className="h-4 w-4" />
                  <span className="text-muted-foreground">Home</span>
                </Link>
              </Button>
            </div>
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
                Our Work
              </h1>
              <p className="text-xl max-w-2xl mx-auto text-muted-foreground">
                Explore our portfolio of commercials and video content that have helped brands connect with their audiences.
              </p>
            </div>
          </div>
        </section>

        {/* Video Slider Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            {/* Main Video Display */}
            <div className="relative mb-12">
              <Card className="overflow-hidden shadow-2xl backdrop-blur-xl bg-white/10 border border-white/20">
                <CardContent className="p-0">
                  <div className="relative aspect-video bg-black">
                    {isPlaying ? (
                      <video
                        key={videos[currentSlide].id}
                        src={videos[currentSlide].videoUrl}
                        controls
                        autoPlay
                        className="w-full h-full object-cover"
                        poster={videos[currentSlide].thumbnail}
                        onEnded={() => setIsPlaying(false)}
                      >
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <>
                        <img
                          src={videos[currentSlide].thumbnail}
                          alt={videos[currentSlide].title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <Button
                            size="lg"
                            onClick={togglePlayback}
                            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white"
                          >
                            <Play className="h-8 w-8 mr-2" />
                            <span className="bg-gradient-to-r from-blue-400 via-green-400 to-orange-400 bg-clip-text text-transparent">Play Video</span>
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                  
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-orange-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
                          {videos[currentSlide].title}
                        </h3>
                        <p className="text-muted-foreground font-semibold">
                          Client: {videos[currentSlide].client}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      {videos[currentSlide].description}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation Arrows */}
              <Button
                variant="outline"
                size="icon"
                className="absolute top-[35%] left-2 sm:left-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white z-10"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="absolute top-[35%] right-2 sm:right-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white z-10"
                onClick={nextSlide}
              >
                <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
              </Button>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center space-x-4 overflow-x-auto pb-4">
              {videos.map((video, index) => (
                <button
                  key={video.id}
                  onClick={() => goToSlide(index)}
                  className={`relative flex-shrink-0 transition-all duration-300 ${
                    index === currentSlide
                      ? "scale-110 ring-4 ring-brand-orange"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-32 h-18 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
                    <Play className="h-4 w-4 text-white" />
                  </div>
                </button>
              ))}
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-brand-orange" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Work;