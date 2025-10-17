import { Building2, Home, FileText, User, Bell, Phone } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const quickMenuItems = [
    { icon: Home, label: "계약현황", href: "#" },
    { icon: FileText, label: "보증금조회", href: "#" },
    { icon: User, label: "임대료조회", href: "#" },
    { icon: Bell, label: "고지서재발급", href: "#" },
    { icon: Phone, label: "주택수선안내", href: "#" },
    { icon: Building2, label: "퇴거안내", href: "#" },
  ];

  return (
    <section className="relative h-[627px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <p className="text-lg mb-3">
            <strong className="text-primary text-3xl">H</strong>armony, <strong className="text-primary text-3xl">H</strong>opeful, <strong className="text-primary text-3xl">W</strong>arm-<strong className="text-primary text-3xl">H</strong>earted
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-5 leading-tight">
            미래를 품은 집 <strong className="text-primary">'마음에 온'</strong>
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            입주자들의 주거안정을 통해 가족, 자신의 미래를 안정적으로<br/>
            설계할 수 있게 해주는 집! <strong>'마음에 온'</strong>
          </p>
        </div>

        {/* 오른쪽 오버레이 메뉴 */}
        <div className="absolute right-0 top-24 w-[405px] h-[465px] bg-black/70 backdrop-blur-sm rounded-l-lg hidden lg:block">
          <div className="p-8">
            <div className="border-b border-primary pb-4 mb-6">
              <h3 className="text-2xl font-bold text-white">입주자</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {quickMenuItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="flex flex-col items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors group"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <item.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-sm text-white text-center">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
