const LocationMap = () => {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.2668841533564!2d126.56662937634315!3d33.44235087334451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x350cfb5c0068a5ef%3A0x36ba636c97d98e12!2z7KCc7KO8IOygnOyjvOyLnCDssqjri6jroZwgMzMw!5e0!3m2!1sko!2skr!4v1710234567890!5m2!1sko!2skr";

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
        title="삼도이동 분양주택 위치"
      />
    </div>
  );
};

export default LocationMap;
