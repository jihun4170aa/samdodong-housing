const LocationMap = () => {
  // 제주시 첨단로 330 - Google Maps에서 가져온 정확한 임베드 URL
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.2669553615824!2d126.56887987657042!3d33.44235084968652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x350cfdb22ad3cce3%3A0x1321aebb880d1b1!2z7KCc7KO87Yq567OE7J6Q7LmY64-EIOygnOyjvOyLnCDssqjri6jroZwgMzMw!5e0!3m2!1sko!2skr!4v1760415097262!5m2!1sko!2skr";

  return (
    <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-[var(--shadow-card)]">
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="제주시 첨단로 330 위치"
      />
    </div>
  );
};

export default LocationMap;
