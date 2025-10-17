import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

const LocationMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 카카오맵 스크립트 로드
    const script = document.createElement('script');
    script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY&autoload=false';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        if (!mapContainer.current) return;

        // 제주시 첨단로 330 좌표
        const position = new window.kakao.maps.LatLng(33.44235084968652, 126.56887987657042);

        const options = {
          center: position,
          level: 3, // 지도 확대 레벨
        };

        const map = new window.kakao.maps.Map(mapContainer.current, options);

        // 마커 생성
        const marker = new window.kakao.maps.Marker({
          position: position,
          map: map,
        });

        // 인포윈도우 생성
        const infowindow = new window.kakao.maps.InfoWindow({
          content: '<div style="padding:10px;font-size:14px;font-weight:bold;">제주시 첨단로 330</div>',
        });

        infowindow.open(map, marker);
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-[var(--shadow-card)]">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default LocationMap;
