import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Maximize2, BedDouble, Bath } from "lucide-react";
import floorplan59a from "@/assets/floorplan-59a.jpg";
import floorplan59b from "@/assets/floorplan-59b.jpg";
import floorplan74 from "@/assets/floorplan-74.jpg";
import floorplan84 from "@/assets/floorplan-84.jpg";

interface UnitType {
  type: string;
  area: string;
  rooms: string;
  bathrooms: string;
  floorplan: string;
  units: number;
}

const UnitTypes = () => {
  const [selectedUnit, setSelectedUnit] = useState<UnitType | null>(null);

  const unitTypes: UnitType[] = [
    {
      type: "59A",
      area: "59㎡",
      rooms: "2",
      bathrooms: "1",
      floorplan: floorplan59a,
      units: 80
    },
    {
      type: "59B",
      area: "59㎡",
      rooms: "2",
      bathrooms: "1",
      floorplan: floorplan59b,
      units: 90
    },
    {
      type: "74",
      area: "74㎡",
      rooms: "3",
      bathrooms: "2",
      floorplan: floorplan74,
      units: 85
    },
    {
      type: "84",
      area: "84㎡",
      rooms: "3",
      bathrooms: "2",
      floorplan: floorplan84,
      units: 45
    }
  ];

  return (
    <>
      <section id="unit-types" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">세대 정보</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              다양한 평형으로 구성된 맞춤형 주거공간
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {unitTypes.map((unit) => (
              <Card 
                key={unit.type}
                className="border-0 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img 
                    src={unit.floorplan} 
                    alt={`${unit.type}형 평면도`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => setSelectedUnit(unit)}
                      className="gap-2"
                    >
                      <Maximize2 className="w-4 h-4" />
                      평면도 크게 보기
                    </Button>
                  </div>
                </div>
                
                <CardContent className="pt-6 pb-5">
                  <div className="flex items-baseline justify-between mb-4">
                    <h3 className="text-2xl font-bold text-foreground">{unit.type}형</h3>
                    <span className="text-lg font-semibold text-primary">{unit.area}</span>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <BedDouble className="w-5 h-5 text-primary" />
                      <span>방 {unit.rooms}개</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Bath className="w-5 h-5 text-primary" />
                      <span>욕실 {unit.bathrooms}개</span>
                    </div>
                  </div>
                  
                  <div className="pt-3 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      공급 세대: <span className="font-semibold text-foreground">{unit.units}세대</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedUnit} onOpenChange={() => setSelectedUnit(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedUnit?.type}형 평면도</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <img 
              src={selectedUnit?.floorplan} 
              alt={`${selectedUnit?.type}형 평면도`}
              className="w-full rounded-lg"
            />
            <div className="grid grid-cols-2 gap-4 p-4 bg-muted rounded-lg">
              <div>
                <p className="text-sm text-muted-foreground mb-1">전용면적</p>
                <p className="text-xl font-semibold text-foreground">{selectedUnit?.area}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">공급세대</p>
                <p className="text-xl font-semibold text-foreground">{selectedUnit?.units}세대</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">방 개수</p>
                <p className="text-xl font-semibold text-foreground">{selectedUnit?.rooms}개</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">욕실 개수</p>
                <p className="text-xl font-semibold text-foreground">{selectedUnit?.bathrooms}개</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UnitTypes;
