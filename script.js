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


window.addEventListener('DOMContentLoaded', () => {
  initHeroVideo();
  initETransfer();
});
window.openDropbox = openDropbox;