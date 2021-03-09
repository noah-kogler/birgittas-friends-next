export default function Trailer() {
  return (
    <article id="trailer">
      <div className="mt-20 w-full bg-black text-white">
        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
          <iframe
            src="https://player.vimeo.com/video/516397484?title=0&byline=0"
            style={{ position: "absolute", top: 0, left: 0, width: '100%', height: '100%' }}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen />
        </div>
        <script src="https://player.vimeo.com/api/player.js" />
      </div>
    </article>
  );
}