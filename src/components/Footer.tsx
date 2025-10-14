import { Building2, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">그린힐 공공임대</span>
            </div>
            <p className="text-muted-foreground text-sm">
              행복한 미래를 위한 프리미엄 공공임대주택
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">문의안내</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>1588-0000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@greenhill.kr</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>제주특별자치도 제주시 첨단로 330</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">운영시간</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex justify-between">
                <span>평일</span>
                <span>09:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>토요일</span>
                <span>09:00 - 15:00</span>
              </div>
              <div className="flex justify-between">
                <span>일요일/공휴일</span>
                <span>휴무</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 그린힐 공공임대. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
