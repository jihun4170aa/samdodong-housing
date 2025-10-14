import { MapPin, Home, Car, TreePine } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import LocationMap from "./LocationMap";

const ComplexInfo = () => {
  const features = [
    {
      icon: MapPin,
      title: "편리한 입지",
      description: "지하철역 도보 5분, 주요 생활편의시설 인접"
    },
    {
      icon: Home,
      title: "총 세대수",
      description: "지상 15층 / 총 300세대"
    },
    {
      icon: Car,
      title: "주차시설",
      description: "세대당 1.2대 / 총 360대"
    },
    {
      icon: TreePine,
      title: "조경시설",
      description: "중앙 광장, 어린이 놀이터, 산책로 완비"
    }
  ];

  return (
    <section id="complex-info" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">단지 안내</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            편리한 생활과 쾌적한 환경을 모두 갖춘 프리미엄 주거단지
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="border-0 shadow-[var(--shadow-card)] overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">단지 개요</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">위치</span>
                  <span>제주시 첨단로 330</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">대지면적</span>
                  <span>15,000㎡</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">건축면적</span>
                  <span>45,000㎡</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">건폐율</span>
                  <span>20%</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium">용적률</span>
                  <span>250%</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-[var(--shadow-card)] overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">주요 편의시설</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>커뮤니티 센터 (피트니스, 골프연습장)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>어린이집 및 키즈카페</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>독서실 및 스터디룸</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>게스트하우스</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>무인택배보관함</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="border-0 shadow-[var(--shadow-card)] overflow-hidden">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-foreground">위치 안내</h3>
            <LocationMap />
            <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-foreground">
                <span className="font-semibold">📍 주소:</span> 제주특별자치도 제주시 첨단로 330
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ComplexInfo;
