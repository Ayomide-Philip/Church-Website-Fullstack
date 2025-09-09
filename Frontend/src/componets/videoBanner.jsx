export default function VideoBanner({ video, title, subtitle }) {
  return (
    <div class="video-container">
      <video autoPlay muted loop>
        <source src={`/videos/${video}.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="video-overlay">
        <div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl pb-2">{title}</h1>
          <p class="text-1xl md:text-2xl lg:text-3xl">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
