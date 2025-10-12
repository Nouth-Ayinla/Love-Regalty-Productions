import { ChevronDown } from "lucide-react";

const ScrollDown = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <button
        onClick={scrollToNext}
        className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-brand-orange transition-colors group"
        aria-label="Scroll down"
      >
        <span className="text-sm font-medium">Scroll down to see some</span>
        <ChevronDown className="h-6 w-6 group-hover:translate-y-1 transition-transform" />
      </button>
    </div>
  );
};

export default ScrollDown;