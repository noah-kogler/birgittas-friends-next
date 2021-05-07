export default function Vimeo({videoId, className}) {
  return (
    <div className={`w-full text-white ${className}`}>
      <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?title=0&byline=0`}
          style={{ position: "absolute", top: 0, left: 0, width: '100%', height: '100%' }}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen />
      </div>
      <script src="https://player.vimeo.com/api/player.js" />
    </div>
  );
}