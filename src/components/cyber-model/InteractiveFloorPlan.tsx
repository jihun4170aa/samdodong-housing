import { useState } from "react";
import { Info, X } from "lucide-react";

interface Room {
  id: string;
  name: string;
  size: string;
  description: string;
  x: number; // percentage
  y: number; // percentage
}

interface InteractiveFloorPlanProps {
  floorplanImage: string;
  unitType: string;
}

const InteractiveFloorPlan = ({ floorplanImage, unitType }: InteractiveFloorPlanProps) => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [hoveredRoom, setHoveredRoom] = useState<string | null>(null);

  // 각 평형별 룸 데이터 (좌표는 이미지에 맞게 조정 필요)
  const rooms: Room[] = [
    { id: "living", name: "거실", size: "20㎡", description: "넓고 쾌적한 거실 공간", x: 30, y: 40 },
    { id: "kitchen", name: "주방", size: "8㎡", description: "ㄱ자형 주방, 식기세척기 공간", x: 60, y: 30 },
    { id: "room1", name: "안방", size: "12㎡", description: "드레스룸 포함", x: 70, y: 60 },
    { id: "room2", name: "방2", size: "10㎡", description: "서재 또는 침실", x: 20, y: 70 },
    { id: "bathroom", name: "욕실", size: "4㎡", description: "욕조/샤워부스", x: 45, y: 70 },
  ];

  return (
    <div className="relative w-full">
      <div className="relative">
        <img
          src={floorplanImage}
          alt={`${unitType}형 평면도`}
          className="w-full rounded-lg"
        />

        {/* 인터랙티브 핫스팟 */}
        {rooms.map((room) => (
          <button
            key={room.id}
            className={`absolute w-12 h-12 rounded-full transition-all duration-300 ${
              hoveredRoom === room.id || selectedRoom?.id === room.id
                ? 'bg-primary scale-125 shadow-lg'
                : 'bg-primary/60 hover:bg-primary hover:scale-110'
            }`}
            style={{
              left: `${room.x}%`,
              top: `${room.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            onClick={() => setSelectedRoom(room)}
            onMouseEnter={() => setHoveredRoom(room.id)}
            onMouseLeave={() => setHoveredRoom(null)}
          >
            <Info className="w-6 h-6 text-white mx-auto" />
          </button>
        ))}
      </div>

      {/* 룸 정보 팝업 */}
      {selectedRoom && (
        <div className="mt-6 p-6 bg-card border-2 border-primary rounded-lg shadow-xl animate-in fade-in slide-in-from-bottom-4">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-foreground">{selectedRoom.name}</h3>
              <p className="text-lg text-primary font-semibold">{selectedRoom.size}</p>
            </div>
            <button
              onClick={() => setSelectedRoom(null)}
              className="p-2 hover:bg-muted rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-muted-foreground">{selectedRoom.description}</p>
        </div>
      )}

      <div className="mt-4 p-4 bg-muted/50 rounded-lg">
        <p className="text-sm text-muted-foreground text-center">
          💡 평면도 위의 아이콘을 클릭하면 각 공간의 상세 정보를 확인할 수 있습니다
        </p>
      </div>
    </div>
  );
};

export default InteractiveFloorPlan;
