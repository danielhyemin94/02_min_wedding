const DROPBOX_LINK = 'https://www.dropbox.com/request/your-custom-link';
const HERO_VIDEO_SOURCE = 'assets/landing_video.mp4';
const GALLERY_IMAGES = [
  'assets/gallery/gallery-0.JPEG',
  'assets/gallery/gallery-1.JPG',
  'assets/gallery/gallery-2.JPEG',
  'assets/gallery/gallery-3.JPEG',
  'assets/gallery/gallery-4.JPEG',
  'assets/gallery/gallery-5.JPEG',
  'assets/gallery/gallery-6.JPEG',
  'assets/gallery/gallery-7.JPEG',
  'assets/gallery/gallery-8.JPG',
  'assets/gallery/gallery-9.JPG',
  'assets/gallery/gallery-10.JPG',
  'assets/gallery/gallery-11.JPEG',
  'assets/gallery/gallery-12.JPEG',
  'assets/gallery/gallery-13.JPEG',
  'assets/gallery/gallery-14.JPEG',
  'assets/gallery/gallery-15.JPEG',
  'assets/gallery/gallery-16.JPEG',
  'assets/gallery/gallery-17.JPEG',
  'assets/gallery/gallery-18.JPEG',
  'assets/gallery/gallery-19.JPEG',
  'assets/gallery/gallery-20.JPEG',
  'assets/gallery/gallery-21.JPEG',
  'assets/gallery/gallery-22.JPEG',
  'assets/gallery/gallery-23.JPEG',
  'assets/gallery/gallery-24.JPEG',
  'assets/gallery/gallery-25.JPEG',
  'assets/gallery/gallery-26.JPEG',
  'assets/gallery/gallery-27.JPEG',
  'assets/gallery/gallery-28.JPEG',
  'assets/gallery/gallery-29.JPEG',
  'assets/gallery/gallery-30.JPEG',
  'assets/gallery/gallery-31.JPEG',
  'assets/gallery/gallery-32.JPEG',
  'assets/gallery/gallery-33.JPEG',
  'assets/gallery/gallery-34.JPEG',
  'assets/gallery/gallery-35.JPEG',
  'assets/gallery/gallery-36.JPEG',
  'assets/gallery/gallery-37.JPEG',
  'assets/gallery/gallery-38.JPEG',
  'assets/gallery/gallery-39.JPEG',
  'assets/gallery/gallery-40.JPEG',
  'assets/gallery/gallery-41.JPEG',
  'assets/gallery/gallery-42.JPEG',
  'assets/gallery/gallery-43.JPEG',
  'assets/gallery/gallery-44.JPEG',
  'assets/gallery/gallery-45.JPEG',
  'assets/gallery/gallery-47.JPEG',
  'assets/gallery/gallery-48.JPEG',
  'assets/gallery/gallery-49.JPEG',
  'assets/gallery/gallery-50.png',
  'assets/gallery/gallery-51.png',
  'assets/gallery/gallery-52.JPEG',
  'assets/gallery/gallery-53.JPEG',
  'assets/gallery/gallery-54.JPEG',
  'assets/gallery/gallery-55.JPEG',
  'assets/gallery/gallery-56.JPEG',
  'assets/gallery/gallery-57.JPEG',
  'assets/gallery/gallery-58.JPEG',
  'assets/gallery/gallery-59.JPEG',
  'assets/gallery/gallery-60.JPEG',
  'assets/gallery/gallery-61.JPEG',
  'assets/gallery/gallery-62.JPEG',
  'assets/gallery/gallery-63.JPEG',
  'assets/gallery/gallery-64.JPEG',
  'assets/gallery/gallery-65.JPEG',
  'assets/gallery/gallery-66.JPEG',
  'assets/gallery/gallery-67.JPEG',
  'assets/gallery/gallery-68.JPEG',
  'assets/gallery/gallery-69.JPEG',
  'assets/gallery/gallery-70.JPEG',
];

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

function initETransfer() {
  const panes = document.querySelectorAll('.e-transfer-pane');

  panes.forEach(pane => {
    const header = pane.querySelector('.e-transfer-header');
    const content = pane.querySelector('.e-transfer-content');
    const arrow = pane.querySelector('.e-transfer-arrow');

    header.addEventListener('click', () => {
      const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';
      
      // Close all panes
      panes.forEach(p => {
        p.querySelector('.e-transfer-content').style.maxHeight = '0px';
        p.querySelector('.e-transfer-arrow').classList.remove('open');
      });

      // Open the clicked one if it was closed
      if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + 'px';
        arrow.classList.add('open');
      }
    });
  });

  const copyButtons = document.querySelectorAll('.copy-button');

  copyButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent pane from collapsing when button is clicked
      const accountNumber = button.dataset.account;
      
      navigator.clipboard.writeText(accountNumber).then(() => {
        const originalText = button.textContent;
        button.textContent = '복사 완료!';
        button.disabled = true;
        setTimeout(() => {
          button.textContent = originalText;
          button.disabled = false;
        }, 2000);
      }).catch(err => {
        console.error('계좌번호 복사 실패:', err);
        alert('계좌번호 복사에 실패했습니다.');
      });
    });
  });
}

function initGallery() {
  const grid = document.getElementById('gallery-grid');
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const closeButton = document.querySelector('.lightbox-close');
  const nextBtn = document.getElementById('next-btn');
  const prevBtn = document.getElementById('prev-btn');
  let currentIndex = 0;

  if (!grid || !lightbox || !lightboxImage) return;

  function renderImage(index) {
    const boundedIndex = (index + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
    currentIndex = boundedIndex;
    lightboxImage.src = GALLERY_IMAGES[boundedIndex];
    lightboxImage.alt = `사진 ${boundedIndex + 1}`;
  }

  function openLightbox(index) {
    renderImage(index);
    lightbox.classList.add('is-open');
    document.body.classList.add('lightbox-open');
    lightbox.setAttribute('aria-hidden', 'false');
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    document.body.classList.remove('lightbox-open');
    lightbox.setAttribute('aria-hidden', 'true');
  }

  function showNext() {
    renderImage(currentIndex + 1);
  }

  function showPrev() {
    renderImage(currentIndex - 1);
  }

  GALLERY_IMAGES.forEach((src, index) => {
    const thumb = document.createElement('button');
    thumb.type = 'button';
    thumb.className = 'gallery-item';
    thumb.style.backgroundImage = `url('${src}')`;
    thumb.setAttribute('aria-label', `사진 ${index + 1} 보기`);
    thumb.addEventListener('click', () => openLightbox(index));
    grid.appendChild(thumb);
  });

  nextBtn?.addEventListener('click', showNext);
  prevBtn?.addEventListener('click', showPrev);
  closeButton?.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (!lightbox.classList.contains('is-open')) return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowRight') showNext();
    if (event.key === 'ArrowLeft') showPrev();
  });
}


window.addEventListener('DOMContentLoaded', () => {
  initHeroVideo();
  initETransfer();
  initGallery();
});
window.openDropbox = openDropbox;
