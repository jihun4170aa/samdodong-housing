import heroImage from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { ArrowDown, Phone } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[627px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
        <div className="max-w-3xl text-white text-center">
          <p className="text-lg mb-3 animate-fade-in">
            <strong className="text-primary text-3xl">H</strong>armony, <strong className="text-primary text-3xl">H</strong>opeful, <strong className="text-primary text-3xl">W</strong>arm-<strong className="text-primary text-3xl">H</strong>earted
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-5 leading-tight animate-fade-in">
            미래를 품은 집 <strong className="text-primary">'마음에 온'</strong>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in">
            입주자들의 주거안정을 통해 가족, 자신의 미래를 안정적으로<br/>
            설계할 수 있게 해주는 집! <strong>'마음에 온'</strong>
          </p>

          <div className="flex gap-4 justify-center items-center animate-fade-in">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg transition-transform hover:scale-105"
              onClick={() => scrollToSection('unit-types')}
            >
              <ArrowDown className="mr-2 h-5 w-5" />
              세대정보 보기
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-foreground font-semibold px-8 py-6 text-lg transition-transform hover:scale-105"
              onClick={() => scrollToSection('complex-info')}
            >
              <Phone className="mr-2 h-5 w-5" />
              문의하기
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
