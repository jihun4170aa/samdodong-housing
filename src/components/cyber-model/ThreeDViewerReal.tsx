import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF, Center, PerspectiveCamera } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { RotateCcw, Home } from "lucide-react";

interface ModelProps {
  url: string;
}

// 3D 모델 컴포넌트
function Model({ url }: ModelProps) {
  const { scene } = useGLTF(url);
  return (
    <Center>
      <primitive object={scene} scale={1} />
    </Center>
  );
}

// 간단한 아파트 대체 모델 (GLB 파일이 없을 경우)
function SimpleApartment() {
  return (
    <group>
      {/* 바닥 */}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#e8dcc4" />
      </mesh>

      {/* 벽들 */}
      {/* 뒷벽 */}
      <mesh position={[0, 2.5, -5]}>
        <boxGeometry args={[10, 5, 0.2]} />
        <meshStandardMaterial color="#f5f5f5" />
      </mesh>

      {/* 좌측 벽 */}
      <mesh position={[-5, 2.5, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[10, 5, 0.2]} />
        <meshStandardMaterial color="#f5f5f5" />
      </mesh>

      {/* 우측 벽 */}
      <mesh position={[5, 2.5, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[10, 5, 0.2]} />
        <meshStandardMaterial color="#f5f5f5" />
      </mesh>

      {/* 거실 가구 - 소파 */}
      <mesh position={[0, 0.5, -3]}>
        <boxGeometry args={[3, 1, 1.5]} />
        <meshStandardMaterial color="#F9A145" />
      </mesh>

      {/* 테이블 */}
      <mesh position={[0, 0.4, -1]}>
        <boxGeometry args={[1.5, 0.1, 1]} />
        <meshStandardMaterial color="#764919" />
      </mesh>

      {/* 주방 카운터 */}
      <mesh position={[-3, 0.9, -4]}>
        <boxGeometry args={[2, 1.8, 0.6]} />
        <meshStandardMaterial color="#333" />
      </mesh>

      {/* 방 칸막이 */}
      <mesh position={[3, 2, -2]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[4, 4, 0.1]} />
        <meshStandardMaterial color="#fff" opacity={0.9} transparent />
      </mesh>

      {/* 침대 (방 안) */}
      <mesh position={[3, 0.4, 0]}>
        <boxGeometry args={[2, 0.8, 1.5]} />
        <meshStandardMaterial color="#F9A145" />
      </mesh>

      {/* 창문 (빛 효과) */}
      <mesh position={[-4.9, 2.5, 2]}>
        <planeGeometry args={[2, 3]} />
        <meshStandardMaterial
          color="#87CEEB"
          emissive="#87CEEB"
          emissiveIntensity={0.3}
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  );
}

interface ThreeDViewerRealProps {
  unitType: string;
  modelUrl?: string;
}

const ThreeDViewerReal = ({ unitType, modelUrl }: ThreeDViewerRealProps) => {
  const resetCamera = () => {
    // OrbitControls를 리셋하는 방법은 ref를 통해 접근해야 하지만,
    // 간단하게 페이지를 새로고침하거나 키를 변경하여 컴포넌트를 재마운트
    window.location.reload();
  };

  return (
    <div className="w-full">
      <div className="relative">
        <div className="w-full h-[600px] rounded-lg overflow-hidden bg-gradient-to-br from-muted to-background border-2 border-border">
          <Canvas shadows>
            <PerspectiveCamera makeDefault position={[3, 3, 3]} fov={50} />

            {/* 조명 */}
            <ambientLight intensity={0.5} />
            <directionalLight
              position={[10, 10, 5]}
              intensity={1}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
            />
            <pointLight position={[-10, 10, -10]} intensity={0.5} />
            <spotLight
              position={[0, 10, 0]}
              angle={0.3}
              penumbra={1}
              intensity={0.5}
              castShadow
            />

            <Suspense fallback={null}>
              {modelUrl ? (
                <Model url={modelUrl} />
              ) : (
                <SimpleApartment />
              )}

              {/* 환경 조명 */}
              <Environment preset="apartment" />
            </Suspense>

            {/* 카메라 컨트롤 */}
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              minDistance={5}
              maxDistance={30}
              maxPolarAngle={Math.PI / 2}
            />
          </Canvas>
        </div>

        {/* 컨트롤 UI */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          <Button
            size="sm"
            variant="secondary"
            onClick={resetCamera}
            className="shadow-lg"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            초기화
          </Button>
        </div>

        {/* 정보 배지 */}
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full shadow-lg">
          <Home className="w-4 h-4 inline mr-2" />
          {unitType}형
        </div>
      </div>

      {/* 사용 안내 */}
      <div className="mt-4 p-4 bg-muted/50 rounded-lg">
        <p className="text-sm text-muted-foreground text-center">
          🖱️ <strong>마우스 좌클릭 드래그:</strong> 회전 | <strong>우클릭 드래그:</strong> 이동 | <strong>휠:</strong> 확대/축소
        </p>
      </div>

      {/* 모델 정보 */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="p-4 bg-card border-2 border-border rounded-lg">
          <h4 className="font-semibold text-foreground mb-2">🏠 실시간 3D 렌더링</h4>
          <p className="text-sm text-muted-foreground">
            Three.js 엔진을 사용한 실시간 3D 뷰어입니다.
          </p>
        </div>
        <div className="p-4 bg-card border-2 border-border rounded-lg">
          <h4 className="font-semibold text-foreground mb-2">✨ 인터랙티브</h4>
          <p className="text-sm text-muted-foreground">
            자유롭게 시점을 변경하여 공간을 탐색하세요.
          </p>
        </div>
      </div>

      {!modelUrl && (
        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            ℹ️ <strong>참고:</strong> 현재는 간단한 데모 모델을 표시하고 있습니다.
            실제 아파트 3D 모델 파일(.glb)을 추가하면 더 정교한 모델을 볼 수 있습니다.
          </p>
          <p className="text-xs text-blue-700 dark:text-blue-300 mt-2">
            💡 모델 파일은 <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">/public/models/</code> 폴더에 추가하세요.
          </p>
        </div>
      )}
    </div>
  );
};

export default ThreeDViewerReal;
