export default function Echo360({videoId, className}) {
  return (
    <div className={`w-full text-white ${className}`}>
      <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        <iframe
          src={`https://echo360.org.uk/media/${videoId}/public?autoplay=false&automute=false`}
          style={{ position: "absolute", top: 0, left: 0, width: '100%', height: '100%' }}
          frameBorder="0"
          allowFullScreen />
      </div>
    </div>
  );
}