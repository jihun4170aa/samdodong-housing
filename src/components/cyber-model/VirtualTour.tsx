import { useState } from "react";
import { ChevronLeft, ChevronRight, Home, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Room {
  id: string;
  name: string;
  description: string;
  image: string;
  connections: string[];
}

interface VirtualTourProps {
  floorplanImage: string;
  unitType: string;
}

const VirtualTour = ({ floorplanImage, unitType }: VirtualTourProps) => {
  const [currentRoom, setCurrentRoom] = useState<string>("entrance");
  const [history, setHistory] = useState<string[]>(["entrance"]);

  // 가상 투어 룸 데이터
  const rooms: Record<string, Room> = {
    entrance: {
      id: "entrance",
      name: "현관",
      description: "넓은 현관과 신발장이 준비되어 있습니다",
      image: floorplanImage,
      connections: ["living", "kitchen"],
    },
    living: {
      id: "living",
      name: "거실",
      description: "남향의 밝고 넓은 거실입니다. 큰 창문으로 채광이 우수합니다.",
      image: floorplanImage,
      connections: ["entrance", "kitchen", "room1", "balcony"],
    },
    kitchen: {
      id: "kitchen",
      name: "주방",
      description: "ㄱ자형 주방으로 조리 공간이 넉넉합니다",
      image: floorplanImage,
      connections: ["entrance", "living"],
    },
    room1: {
      id: "room1",
      name: "안방",
      description: "드레스룸과 전용 욕실이 있는 안방입니다",
      image: floorplanImage,
      connections: ["living", "bathroom"],
    },
    room2: {
      id: "room2",
      name: "방2",
      description: "서재 또는 자녀방으로 활용 가능합니다",
      image: floorplanImage,
      connections: ["living"],
    },
    bathroom: {
      id: "bathroom",
      name: "욕실",
      description: "욕조와 샤워부스가 분리되어 있습니다",
      image: floorplanImage,
      connections: ["room1", "living"],
    },
    balcony: {
      id: "balcony",
      name: "발코니",
      description: "확장형 발코니로 여유로운 공간입니다",
      image: floorplanImage,
      connections: ["living"],
    },
  };

  const room = rooms[currentRoom];

  const navigateToRoom = (roomId: string) => {
    setCurrentRoom(roomId);
    setHistory([...history, roomId]);
  };

  const goBack = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      setHistory(newHistory);
      setCurrentRoom(newHistory[newHistory.length - 1]);
    }
  };

  return (
    <div className="w-full">
      {/* 현재 방 표시 */}
      <div className="relative">
        <div className="relative h-[500px] rounded-lg overflow-hidden bg-muted">
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-full object-cover"
          />

          {/* 오버레이 정보 */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h3 className="text-2xl font-bold text-white mb-2">{room.name}</h3>
            <p className="text-white/90">{room.description}</p>
          </div>

          {/* 뒤로가기 버튼 */}
          {history.length > 1 && (
            <Button
              size="sm"
              variant="secondary"
              className="absolute top-4 left-4"
              onClick={goBack}
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              뒤로
            </Button>
          )}

          {/* 현재 위치 표시 */}
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full">
            <Home className="w-4 h-4 inline mr-2" />
            {room.name}
          </div>
        </div>
      </div>

      {/* 이동 가능한 방 버튼들 */}
      <div className="mt-6">
        <h4 className="text-lg font-semibold mb-3 text-foreground">이동 가능한 공간</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {room.connections.map((connectionId) => {
            const connectedRoom = rooms[connectionId];
            return (
              <button
                key={connectionId}
                onClick={() => navigateToRoom(connectionId)}
                className="group p-4 bg-card border-2 border-border hover:border-primary rounded-lg transition-all hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary flex items-center justify-center transition-colors">
                    <ChevronRight className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {connectedRoom.name}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 경로 표시 */}
      <div className="mt-6 p-4 bg-muted/50 rounded-lg">
        <p className="text-sm text-muted-foreground mb-2">
          🚶 이동 경로:
        </p>
        <div className="flex flex-wrap gap-2">
          {history.map((roomId, idx) => (
            <span key={idx} className="flex items-center gap-2">
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                {rooms[roomId].name}
              </span>
              {idx < history.length - 1 && (
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              )}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 p-4 bg-muted/50 rounded-lg">
        <p className="text-sm text-muted-foreground text-center">
          🏠 각 공간으로 이동하며 집안을 둘러보세요
        </p>
      </div>
    </div>
  );
};

export default VirtualTour;
