import { useEffect, useRef, useState } from "react";
import { RotateCcw, ZoomIn, ZoomOut, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ThreeDViewerProps {
  unitType: string;
}

const ThreeDViewer = ({ unitType }: ThreeDViewerProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 캔버스 크기 설정
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // 간단한 3D 아파트 그리기 (와이어프레임)
    const draw3DRoom = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const scale = 100 * zoom;

      // 3D 좌표를 2D로 변환 (간단한 원근법)
      const project = (x: number, y: number, z: number) => {
        const rotatedX = x * Math.cos(rotation.y) - z * Math.sin(rotation.y);
        const rotatedZ = x * Math.sin(rotation.y) + z * Math.cos(rotation.y);
        const rotatedY = y * Math.cos(rotation.x) - rotatedZ * Math.sin(rotation.x);

        const perspective = 300 / (300 + rotatedZ);
        return {
          x: centerX + rotatedX * scale * perspective,
          y: centerY + rotatedY * scale * perspective,
        };
      };

      // 방 그리기 (직육면체)
      const drawBox = (width: number, height: number, depth: number, color: string) => {
        const vertices = [
          [-width, -height, -depth], [width, -height, -depth],
          [width, height, -depth], [-width, height, -depth],
          [-width, -height, depth], [width, -height, depth],
          [width, height, depth], [-width, height, depth],
        ];

        const edges = [
          [0, 1], [1, 2], [2, 3], [3, 0], // 앞면
          [4, 5], [5, 6], [6, 7], [7, 4], // 뒷면
          [0, 4], [1, 5], [2, 6], [3, 7], // 연결선
        ];

        ctx.strokeStyle = color;
        ctx.lineWidth = 2;

        edges.forEach(([start, end]) => {
          const p1 = project(...vertices[start] as [number, number, number]);
          const p2 = project(...vertices[end] as [number, number, number]);

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        });
      };

      // 거실
      ctx.shadowColor = "rgba(249, 161, 69, 0.3)";
      ctx.shadowBlur = 10;
      drawBox(2, 1, 2, "#F9A145");

      // 방1
      ctx.shadowColor = "rgba(118, 73, 25, 0.3)";
      drawBox(1, 1, 1, "#764919");

      // 방2 위치 조정
      ctx.save();
      ctx.translate(-150 * zoom, 0);
      drawBox(0.8, 1, 0.8, "#764919");
      ctx.restore();

      ctx.shadowBlur = 0;

      // 텍스트 레이블
      ctx.fillStyle = "#F9A145";
      ctx.font = "bold 16px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("거실", centerX, centerY - 80 * zoom);
      ctx.fillText("🏠 3D 모델 뷰어", centerX, 30);
    };

    draw3DRoom();
  }, [rotation, zoom]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - dragStart.x;
    const deltaY = e.clientY - dragStart.y;

    setRotation(prev => ({
      x: prev.x + deltaY * 0.01,
      y: prev.y + deltaX * 0.01,
    }));

    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full">
      <div className="relative">
        <canvas
          ref={canvasRef}
          className="w-full h-[500px] bg-gradient-to-br from-muted to-background rounded-lg cursor-move border-2 border-border"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        />

        {/* 컨트롤 버튼 */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          <Button
            size="sm"
            variant="secondary"
            onClick={() => setZoom(prev => Math.min(prev + 0.2, 3))}
          >
            <ZoomIn className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="secondary"
            onClick={() => setZoom(prev => Math.max(prev - 0.2, 0.5))}
          >
            <ZoomOut className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="secondary"
            onClick={() => {
              setRotation({ x: 0, y: 0 });
              setZoom(1);
            }}
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="mt-4 p-4 bg-muted/50 rounded-lg">
        <p className="text-sm text-muted-foreground text-center">
          🖱️ 마우스 드래그로 회전, 버튼으로 확대/축소할 수 있습니다
        </p>
      </div>

      <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          ℹ️ <strong>참고:</strong> 실제 3D 모델을 사용하려면 Three.js 라이브러리와 3D 모델 파일(.glb, .gltf)이 필요합니다.
          현재는 데모용 와이어프레임을 표시하고 있습니다.
        </p>
      </div>
    </div>
  );
};

export default ThreeDViewer;
