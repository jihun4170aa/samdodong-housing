import { MapPin, Maximize, Home as HomeIcon, TrendingUp, Dumbbell, Baby, BookOpen, Users, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import LocationMap from "./LocationMap";

const ComplexInfo = () => {
  const housingTypes = [
    { name: "매입임대주택", icon: "🏠", link: "#" },
    { name: "행복주택", icon: "😊", link: "#" },
    { name: "국민임대주택", icon: "🏘️", link: "#" },
  ];

  const notices = [
    { date: "2025-09-16", title: "3만원 주택사업 공고(2차)" },
    { date: "2025-08-27", title: "2025년 일반매입임대주택 예비입주자 모집 공고" },
    { date: "2025-08-27", title: "2025년 다자녀매입임대주택 (예비)입주자 모집 공고" },
  ];

  return (
    <section id="complex-info" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* 공지사항 - 전체 너비 */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-foreground">공지사항</h2>
            <a href="#" className="text-sm text-primary hover:underline font-medium">더보기 →</a>
          </div>
          <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
            {notices.map((notice, idx) => (
              <a
                key={idx}
                href="#"
                className="flex items-center justify-between p-5 border-b border-border last:border-b-0 hover:bg-primary/5 transition-all group"
              >
                <div className="flex items-center gap-4 flex-1">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{notice.date}</span>
                  <span className="text-base text-foreground group-hover:text-primary transition-colors">{notice.title}</span>
                </div>
                <span className="text-muted-foreground group-hover:text-primary transition-colors">→</span>
              </a>
            ))}
          </div>
        </div>

        {/* 단지 개요 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="border-2 border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">단지 개요</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="font-medium text-muted-foreground">위치</span>
                  </div>
                  <span className="font-medium text-foreground">제주시 첨단로 330</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <div className="flex items-center gap-2">
                    <Maximize className="w-4 h-4 text-primary" />
                    <span className="font-medium text-muted-foreground">대지면적</span>
                  </div>
                  <span className="font-medium text-foreground">15,000㎡</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <div className="flex items-center gap-2">
                    <HomeIcon className="w-4 h-4 text-primary" />
                    <span className="font-medium text-muted-foreground">건축면적</span>
                  </div>
                  <span className="font-medium text-foreground">45,000㎡</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <div className="flex items-center gap-2">
                    <Maximize className="w-4 h-4 text-primary" />
                    <span className="font-medium text-muted-foreground">건폐율</span>
                  </div>
                  <span className="font-medium text-foreground">20%</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span className="font-medium text-muted-foreground">용적률</span>
                  </div>
                  <span className="font-medium text-foreground">250%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">주요 편의시설</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Dumbbell className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">커뮤니티 센터 (피트니스, 골프연습장)</span>
                </li>
                <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Baby className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">어린이집 및 키즈카페</span>
                </li>
                <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">독서실 및 스터디룸</span>
                </li>
                <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">게스트하우스</span>
                </li>
                <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Package className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">무인택배보관함</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* 위치 안내 */}
        <Card className="border-2 border-border">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-foreground">위치 안내</h3>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=제주특별자치도+제주시+첨단로+330"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-colors"
              >
                <MapPin className="w-4 h-4" />
                길찾기
              </a>
            </div>
            <LocationMap />
            <div className="mt-6 p-4 bg-primary/10 rounded-lg border-2 border-primary/30 flex items-center justify-between">
              <p className="text-foreground font-medium">
                📍 주소: 제주특별자치도 제주시 첨단로 330
              </p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText('제주특별자치도 제주시 첨단로 330');
                  alert('주소가 복사되었습니다.');
                }}
                className="text-sm text-primary hover:text-primary/80 font-medium underline"
              >
                주소 복사
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ComplexInfo;
