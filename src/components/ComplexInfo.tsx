import { Home, FileText, Calendar, Building } from "lucide-react";
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* 임대주택 안내 */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">임대주택 안내</h2>
            <div className="space-y-3">
              {housingTypes.map((type, idx) => (
                <a
                  key={idx}
                  href={type.link}
                  className="group flex items-center gap-4 p-5 bg-card border-2 border-border rounded-lg hover:border-primary hover:shadow-lg transition-all"
                >
                  <span className="text-4xl">{type.icon}</span>
                  <span className="text-2xl font-medium text-foreground group-hover:text-primary transition-colors flex-1">
                    {type.name}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-border group-hover:border-primary flex items-center justify-center">
                    <span className="text-primary">→</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* 공지사항 */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-foreground">공지사항</h2>
              <a href="#" className="text-sm text-primary hover:underline">더보기 →</a>
            </div>
            <div className="space-y-3">
              {notices.map((notice, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="block p-4 border-b border-border hover:bg-muted/50 transition-colors"
                >
                  <span className="text-sm text-muted-foreground block mb-1">{notice.date}</span>
                  <span className="text-base text-foreground line-clamp-1">{notice.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 단지 개요 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="border-2 border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">단지 개요</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="font-medium text-muted-foreground">위치</span>
                  <span className="font-medium text-foreground">제주시 첨단로 330</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="font-medium text-muted-foreground">대지면적</span>
                  <span className="font-medium text-foreground">15,000㎡</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="font-medium text-muted-foreground">건축면적</span>
                  <span className="font-medium text-foreground">45,000㎡</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="font-medium text-muted-foreground">건폐율</span>
                  <span className="font-medium text-foreground">20%</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="font-medium text-muted-foreground">용적률</span>
                  <span className="font-medium text-foreground">250%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">주요 편의시설</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-lg">•</span>
                  <span className="text-foreground">커뮤니티 센터 (피트니스, 골프연습장)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-lg">•</span>
                  <span className="text-foreground">어린이집 및 키즈카페</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-lg">•</span>
                  <span className="text-foreground">독서실 및 스터디룸</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-lg">•</span>
                  <span className="text-foreground">게스트하우스</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-lg">•</span>
                  <span className="text-foreground">무인택배보관함</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* 위치 안내 */}
        <Card className="border-2 border-border">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-foreground">위치 안내</h3>
            <LocationMap />
            <div className="mt-6 p-4 bg-primary/10 rounded-lg border-2 border-primary/30">
              <p className="text-foreground font-medium">
                📍 주소: 제주특별자치도 제주시 첨단로 330
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ComplexInfo;
