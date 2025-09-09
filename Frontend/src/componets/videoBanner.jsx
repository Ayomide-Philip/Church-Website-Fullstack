export default function VideoBanner({ video, title, subtitle }) {
  return (
    <div className="video-container">
      <video autoPlay muted loop>
        <source src={`/videos/${video}.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl pb-2">{title}</h1>
          <p className="text-1xl md:text-2xl lg:text-3xl">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
