import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/60" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">
          <Building2 className="w-5 h-5" />
          <span className="text-sm font-medium">공공임대주택</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          품격있는 주거공간
          <br />
          <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
            행복한 미래를 위한 선택
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
          편리한 입지와 쾌적한 환경이 조화를 이루는 프리미엄 공공임대주택
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <Button 
            size="lg" 
            className="bg-primary text-white hover:bg-primary/90 shadow-lg font-semibold"
            onClick={() => scrollToSection("unit-types")}
          >
            세대정보 보기
          </Button>
          <Button 
            size="lg" 
            className="bg-secondary text-white hover:bg-secondary/90 shadow-lg font-semibold"
            onClick={() => scrollToSection("complex-info")}
          >
            단지안내
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
