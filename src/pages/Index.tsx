import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollDown from "@/components/ScrollDown";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";

const Index = () => {
  console.log("Index component loading with carousel");
  const { headingRef, paragraphRef, scrollRef } = useHeroAnimation();
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate parallax values
  const heroOffset = scrollY * 0.5;
  const textOpacity = Math.max(0, 1 - scrollY / 400);
  const textScale = Math.max(0.8, 1 - scrollY / 2000);
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden"
        style={{
          transform: `translateY(${heroOffset}px)`,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="space-y-16">
            <div 
              className="space-y-8 transition-all duration-1000 ease-out"
              style={{
                opacity: textOpacity,
                transform: `scale(${textScale}) translateY(${scrollY * 0.2}px)`,
              }}
            >
              <h1 
                ref={headingRef}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight bg-gradient-to-r from-cyan-500 via-purple-500 to-orange-500 bg-clip-text text-transparent animate-fade-in"
              >
                Hello. We're Love Regality Productions
              </h1>
              
              <p 
                ref={paragraphRef}
                className="text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed text-foreground max-w-4xl mx-auto animate-fade-in"
                style={{ animationDelay: '0.3s' }}
              >
                We make commercials. The kind people like.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Second Hero Section - Video Carousel */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Carousel 
          className="absolute inset-0 w-full h-full"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[Autoplay({ delay: 5000 })]}
        >
          <CarouselContent>
            {/* Video Slide 1 */}
            <CarouselItem>
              <div className="relative w-full h-screen">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover z-0"
                >
                  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-10"></div>
              </div>
            </CarouselItem>
            
            {/* Video Slide 2 */}
            <CarouselItem>
              <div className="relative w-full h-screen">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover z-0"
                >
                  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-10"></div>
              </div>
            </CarouselItem>
            
            {/* Video Slide 3 */}
            <CarouselItem>
              <div className="relative w-full h-screen">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover z-0"
                >
                  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-10"></div>
              </div>
            </CarouselItem>
            
            {/* Video Slide 4 */}
            <CarouselItem>
              <div className="relative w-full h-screen">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover z-0"
                >
                  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-10"></div>
              </div>
            </CarouselItem>
          </CarouselContent>
          
          <CarouselPrevious className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 border-white/40 text-white hover:bg-white/30" />
          <CarouselNext className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 border-white/40 text-white hover:bg-white/30" />
        </Carousel>
        
        <div className="relative z-20 container mx-auto px-4 sm:px-6 text-center">
          <div className="space-y-12 sm:space-y-16 animate-slide-up">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
                Bringing Stories to Life
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed font-light">
                From concept to creation, we craft visual narratives that captivate, 
                inspire, and drive results for brands that dare to be different.
              </p>
            </div>
            
            <div className="flex flex-col gap-3 sm:gap-6 justify-center items-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-5 sm:px-10 py-4 sm:py-7 text-sm sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              >
                <Link to="/work">
                  View Our Work
                  <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-5 sm:px-10 py-4 sm:py-7 text-sm sm:text-lg rounded-full backdrop-blur-sm bg-white/10 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              >
                <Link to="/about">
                  Learn About Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Preview Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Recent <span className="text-brand-orange">Work</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Get a taste of our creative storytelling with these featured projects
            </p>
          </div>
          
          {/* Mobile Carousel */}
          <div className="block md:hidden mb-8 sm:mb-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {/* Video 1 */}
                <CarouselItem className="pl-2 md:pl-4 basis-full">
                  <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="aspect-video bg-black relative">
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                        onLoadedData={(e) => {
                          console.log('Video 1 loaded, starting playback');
                          const video = e.currentTarget;
                          video.play().catch(e => console.log('Video 1 play failed:', e));
                        }}
                        onError={(e) => console.log('Video 1 error:', e)}
                      >
                        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="font-bold text-lg">Tech Startup Commercial</h3>
                        <p className="text-sm opacity-90">InnovateTech</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* Video 2 */}
                <CarouselItem className="pl-2 md:pl-4 basis-full">
                  <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="aspect-video bg-black relative">
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                        onLoadedData={(e) => {
                          console.log('Video 2 loaded, starting playback');
                          const video = e.currentTarget;
                          video.play().catch(e => console.log('Video 2 play failed:', e));
                        }}
                        onError={(e) => console.log('Video 2 error:', e)}
                      >
                        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="font-bold text-lg">Fashion Brand Campaign</h3>
                        <p className="text-sm opacity-90">StyleForward</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* Video 3 */}
                <CarouselItem className="pl-2 md:pl-4 basis-full">
                  <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="aspect-video bg-black relative">
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                        onLoadedData={(e) => {
                          console.log('Video 3 loaded, starting playback');
                          const video = e.currentTarget;
                          video.play().catch(e => console.log('Video 3 play failed:', e));
                        }}
                        onError={(e) => console.log('Video 3 error:', e)}
                      >
                        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="font-bold text-lg">Restaurant Promo</h3>
                        <p className="text-sm opacity-90">Culinary Dreams</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="-left-2 sm:-left-4 bg-white/80 border-white/30 hover:bg-white text-black" />
              <CarouselNext className="-right-2 sm:-right-4 bg-white/80 border-white/30 hover:bg-white text-black" />
            </Carousel>
          </div>
          
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Video 1 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video bg-black relative">
                <video
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  onMouseEnter={(e) => {
                    console.log('Desktop video 1 hover play');
                    e.currentTarget.play().catch(e => console.log('Desktop video 1 play failed:', e));
                  }}
                  onMouseLeave={(e) => {
                    console.log('Desktop video 1 hover pause');
                    e.currentTarget.pause();
                  }}
                  onError={(e) => console.log('Desktop video 1 error:', e)}
                >
                  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">Tech Startup Commercial</h3>
                  <p className="text-sm opacity-90">InnovateTech</p>
                </div>
              </div>
            </div>

            {/* Video 2 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video bg-black relative">
                <video
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  onMouseEnter={(e) => {
                    console.log('Desktop video 2 hover play');
                    e.currentTarget.play().catch(e => console.log('Desktop video 2 play failed:', e));
                  }}
                  onMouseLeave={(e) => {
                    console.log('Desktop video 2 hover pause');
                    e.currentTarget.pause();
                  }}
                  onError={(e) => console.log('Desktop video 2 error:', e)}
                >
                  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">Fashion Brand Campaign</h3>
                  <p className="text-sm opacity-90">StyleForward</p>
                </div>
              </div>
            </div>

            {/* Video 3 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video bg-black relative">
                <video
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  onMouseEnter={(e) => {
                    console.log('Desktop video 3 hover play');
                    e.currentTarget.play().catch(e => console.log('Desktop video 3 play failed:', e));
                  }}
                  onMouseLeave={(e) => {
                    console.log('Desktop video 3 hover pause');
                    e.currentTarget.pause();
                  }}
                  onError={(e) => console.log('Desktop video 3 error:', e)}
                >
                  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">Restaurant Promo</h3>
                  <p className="text-sm opacity-90">Culinary Dreams</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              asChild 
              size="lg"
              className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-6 sm:px-12 py-4 sm:py-6 text-sm sm:text-lg"
            >
              <Link to="/work">
                See More Work
                <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;