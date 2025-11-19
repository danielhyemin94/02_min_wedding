const DROPBOX_LINK = 'https://www.dropbox.com/request/your-custom-link';
const HERO_VIDEO_SOURCE = 'assets/landing_video.mp4';

function openDropbox() {
  window.open(DROPBOX_LINK, '_blank', 'noopener');
}

function initHeroVideo() {
  const heroVideo = document.getElementById('hero-video');
  if (!heroVideo) return;

  const source = heroVideo.querySelector('source');
  if (source) {
    source.src = HERO_VIDEO_SOURCE;
  } else {
    heroVideo.src = HERO_VIDEO_SOURCE;
  }

  heroVideo.load();

  heroVideo.addEventListener('ended', () => {
    heroVideo.currentTime = 0;
    heroVideo.play();
  });

  heroVideo.play().catch(() => {
    /* Autoplay might be blocked; user interaction will resume playback */
  });
}

window.addEventListener('DOMContentLoaded', initHeroVideo);
window.openDropbox = openDropbox;