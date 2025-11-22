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

const translations = {
  'overlay.line1': {
    ko: '“<span class="bigger-text">서로</span>가 <span class="bigger-text">우리</span>가 되어”',
    en: 'Would you walk with us',
  },
  'overlay.line2': {
    ko: '“걷는 첫 걸음,',
    en: 'as we take our first steps together?',
  },
  'overlay.line3': {
    ko: '함께 해주시겠습니까?”',
    en: ' ',
  },
  'invitation.title': {
    ko: '<span class="bigger-text">초대의 글</span>',
    en: '<span class="bigger-text">Invitation</span>',
  },
  'invitation.p1': {
    ko: '사랑하는 가족과 친구 여러분,',
    en: 'To our dear family and friends,',
  },
  'invitation.p2': {
    ko: '저희 혜민과 세영이 결혼식을 올리게 되어 여러분을 초대합니다. 저희의 특별한 날에 함께 해주시어 기쁨을 나누고 축복해 주시면 큰 영광이겠습니다.',
    en: 'We, Hyemin and Seyoung, are getting married and would be honored to celebrate this special day with you.',
  },
  'invitation.p3': {
    ko: '서로를 향한 사랑과 신뢰를 바탕으로 새로운 인생의 여정을 시작하려 합니다. 여러분의 따뜻한 응원과 축복 속에서 더욱 행복한 가정을 이루어가고자 합니다.',
    en: 'As we begin our life together, we hope to step forward with your warm wishes and blessings.',
  },
  'invitation.p4': {
    ko: '바쁘시겠지만 참석하셔서 저희의 기쁨을 함께 나누어 주시길 부탁드립니다. 여러분과 함께하는 이 순간이 저희에게는 무엇보다 소중한 추억이 될 것입니다.',
    en: 'It would mean so much to us to have you with us and share in our joy. Your presence will make our day truly complete.',
  },
  'invitation.p5': {
    ko: '감사합니다.',
    en: 'Thank you.',
  },
  'invitation.signature': {
    ko: '혜민 &amp; 세영 올림',
    en: 'With love,<br>Hyemin &amp; Seyoung',
  },
  'info.title': {
    ko: '예식 안내',
    en: 'Wedding Details',
  },
  'info.date': {
    ko: '<span class="big">일시</span>&nbsp;&nbsp;&nbsp;2025년 12월 27일 토요일 오후 1시',
    en: '<span class="big">Date</span>&nbsp;&nbsp;&nbsp;Saturday, Dec 27, 2025 at 1:00 PM',
  },
  'info.venue': {
    ko: '<span class="big">장소</span>&nbsp;&nbsp;&nbsp;<a class="link" href="https://naver.me/FEUO3qlq" target="_blank" rel="noreferrer noopener">연세대학교 동문회관 (서울 서대문구 연세로 50)</a>',
    en: '<span class="big">Venue</span>&nbsp;&nbsp;&nbsp;<a class="link" href="https://naver.me/FEUO3qlq" target="_blank" rel="noreferrer noopener">Yonsei Alumni Hall (50 Yonsei-ro, Seodaemun-gu, Seoul)</a>',
  },
  'directions.title': {
    ko: '오시는 길',
    en: 'Directions',
  },
  'directions.subway.title': {
    ko: '<span class="big">지하철</span>',
    en: '<span class="big">Subway</span>',
  },
  'directions.subway.line1': {
    ko: '이대역(2호선) 4번 출구(50m) 직진 → 이대역 정류장에서 버스 승차(742, 7017번) → 이대부중 하차',
    en: 'Line 2 Ewha Womans Univ. Stn Exit 4 (50m straight) → Bus at Ewha Stn stop (742, 7017) → Get off at Ewha Middle School',
  },
  'directions.subway.line2': {
    ko: '독립문역(3호선) 4번 출구 → 사거리에서 우회전 → 극동아파트 정류장에서 버스 승차(470, 610, 750(A,B), 7737번) → 이대후문 하차',
    en: 'Line 3 Dongnimmun Stn Exit 4 → Right at the intersection → Bus at Geukdong Apt stop (470, 610, 750A/B, 7737) → Get off at Ewha Back Gate',
  },
  'directions.subway.line3': {
    ko: '경복궁역(3호선) 1번 출구 → 100m 직진 → 272, 606 탑승 → 이대부중 하차',
    en: 'Line 3 Gyeongbokgung Stn Exit 1 → Walk 100m straight → Take 272 or 606 → Get off at Ewha Middle School',
  },
  'directions.bus.title': {
    ko: '<span class="big">버스</span>',
    en: '<span class="big">Bus</span>',
  },
  'directions.bus.line1': {
    ko: '간선버스(파랑) : 272, 470, 601, 606, 672, 673, 700, 710, 742, 750(A,B)번 (이대후문 또는 이대부중 하차)',
    en: 'Blue: 272, 470, 601, 606, 672, 673, 700, 710, 742, 750(A/B) (Get off at Ewha Back Gate or Ewha Middle School)',
  },
  'directions.bus.line2': {
    ko: '지선버스(초록) : 6714, 7017, 7024, 7737번 (이대후문 또는 이대부중 하차)',
    en: 'Green: 6714, 7017, 7024, 7737 (Get off at Ewha Back Gate or Ewha Middle School)',
  },
  'directions.bus.line3': {
    ko: '광역 · 직행버스 : G7111, M7111, M7119, M7154번 (이대후문 하차)',
    en: 'Express/Red: G7111, M7111, M7119, M7154 (Get off at Ewha Back Gate)',
  },
  'directions.car': {
    ko: '<span class="big">자가용</span>&nbsp;&nbsp;동문회관 주차장 이용(2시간 무료)',
    en: '<span class="big">Parking</span>&nbsp;&nbsp;Alumni Hall parking lot (2 hours free)',
  },
  'shuttle.title': {
    ko: '<span class="big">이대역 ↔ 예식장 셔틀 버스 안내</span>',
    en: '<span class="big">Shuttle Bus (Ewha Stn ↔ Venue)</span>',
  },
  'shuttle.toVenue': {
    ko: '이대역(3번 출구 앞) → 동문회관',
    en: 'Ewha Univ. Stn (Exit 3) → Alumni Hall',
  },
  'shuttle.toStation': {
    ko: '동문회관(B1층) → 이대역',
    en: 'Alumni Hall (B1) → Ewha Univ. Stn',
  },
  'cta.title': {
    ko: '저희와의 추억을 보내주세요',
    en: 'Share your memories with us',
  },
  'cta.p1': {
    ko: '예식날 저희의 사진을 찍어 보내주세요',
    en: 'Please send us your photos from the wedding day.',
  },
  'cta.p2': {
    ko: '베스트 컷 상위 3명을 뽑아 선물로 보답하겠습니다',
    en: 'We will pick the top 3 best shots and send gifts.',
  },
  'cta.rank1': {
    ko: '<span class="big">1위</span>&nbsp;&nbsp;&nbsp;신세계 상품권 20만원권',
    en: '<span class="big">1st</span>&nbsp;&nbsp;&nbsp;Shinsegae gift card 200,000 KRW',
  },
  'cta.rank2': {
    ko: '<span class="big">2위</span>&nbsp;&nbsp;&nbsp;신세계 상품권 10만원권',
    en: '<span class="big">2nd</span>&nbsp;&nbsp;&nbsp;Shinsegae gift card 100,000 KRW',
  },
  'cta.rank3': {
    ko: '<span class="big">3위</span>&nbsp;&nbsp;&nbsp;신세계 상품권 5만원권',
    en: '<span class="big">3rd</span>&nbsp;&nbsp;&nbsp;Shinsegae gift card 50,000 KRW',
  },
  'cta.button': {
    ko: '하객 사진 업로드',
    en: 'Upload guest photos',
  },
  'etransfer.title': {
    ko: '마음 전하실 곳',
    en: 'Send Your Gift',
  },
  'etransfer.p1': {
    ko: '함께 해주시는 것이 저희의 가장 큰 기쁨이지만',
    en: 'Your presence is our greatest joy,',
  },
  'etransfer.p2': {
    ko: '멀리서 마음을 전하고 싶으신 분들을 위해 기재했습니다',
    en: 'but for those who wish to send a gift from afar, details are below.',
  },
  'etransfer.p3': {
    ko: '소중한 축하를 보내주셔서 감사드리며',
    en: 'Thank you for your warm congratulations',
  },
  'etransfer.p4': {
    ko: '따뜻한 마음에 깊이 감사드립니다',
    en: 'and for sharing your kindness with us.',
  },
  'etransfer.groomHeader': {
    ko: '신랑측',
    en: "Groom's side",
  },
  'etransfer.brideHeader': {
    ko: '신부측',
    en: "Bride's side",
  },
  'etransfer.copy': {
    ko: '계좌번호 복사',
    en: 'Copy account number',
  },
  'etransfer.copySuccess': {
    ko: '복사 완료!',
    en: 'Copied!',
  },
  'etransfer.copyError': {
    ko: '계좌번호 복사에 실패했습니다.',
    en: 'Failed to copy account number.',
  },
  'gallery.title': {
    ko: '우리의 사진',
    en: 'Our Photos',
  },
  'gallery.subtitle': {
    ko: '우리가 살아가는 풍경을 함께 나눕니다',
    en: 'Sharing our glorious moments together',
  },
  'gallery.thumbLabel': {
    ko: '사진 {{index}} 보기',
    en: 'View photo {{index}}',
  },
  'gallery.photoAlt': {
    ko: '사진 {{index}}',
    en: 'Photo {{index}}',
  },
  'lightbox.prev': {
    ko: '이전 사진',
    en: 'Previous',
  },
  'lightbox.next': {
    ko: '다음 사진',
    en: 'Next',
  },
  'lightbox.close': {
    ko: '닫기',
    en: 'Close',
  },
};

let currentLocale = (typeof localStorage !== 'undefined' && localStorage.getItem('locale') === 'en') ? 'en' : 'ko';

function t(key, vars = {}) {
  const entry = translations[key];
  let text = entry ? (entry[currentLocale] ?? entry.ko ?? '') : '';

  Object.entries(vars).forEach(([name, value]) => {
    text = text.replaceAll(`{{${name}}}`, value);
  });

  return text;
}

function stripHtml(value) {
  return value.replace(/<[^>]*>/g, '');
}

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
        button.textContent = t('etransfer.copySuccess');
        button.disabled = true;
        setTimeout(() => {
          button.textContent = originalText;
          button.disabled = false;
        }, 2000);
      }).catch(err => {
        console.error('계좌번호 복사 실패:', err);
        alert(t('etransfer.copyError'));
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
    lightboxImage.alt = t('gallery.photoAlt', { index: boundedIndex + 1 });
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
    thumb.setAttribute('aria-label', t('gallery.thumbLabel', { index: index + 1 }));
    thumb.dataset.index = index;
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

function updateGalleryLabels() {
  document.querySelectorAll('.gallery-item').forEach(item => {
    const index = Number(item.dataset.index) || 0;
    item.setAttribute('aria-label', t('gallery.thumbLabel', { index: index + 1 }));
  });
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const html = t(key);
    if (html) {
      el.innerHTML = html;
    }
    const attrName = el.dataset.i18nAttr;
    if (attrName) {
      el.setAttribute(attrName, stripHtml(html));
    }
  });

  // Update copy buttons if translations changed
  document.querySelectorAll('.copy-button').forEach(button => {
    button.textContent = t('etransfer.copy');
  });

  // Keep open accordion heights accurate after text changes
  document.querySelectorAll('.e-transfer-content').forEach(content => {
    if (content.style.maxHeight && content.style.maxHeight !== '0px') {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });

  // Gallery labels
  updateGalleryLabels();

  // Lightbox buttons
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const closeBtn = document.querySelector('.lightbox-close');
  prevBtn && (prevBtn.textContent = t('lightbox.prev'));
  nextBtn && (nextBtn.textContent = t('lightbox.next'));
  closeBtn && (closeBtn.textContent = t('lightbox.close'));
  closeBtn && closeBtn.setAttribute('aria-label', stripHtml(t('lightbox.close')));

  // Document language
  document.documentElement.setAttribute('lang', currentLocale === 'en' ? 'en' : 'ko');

  updateToggleLabel();
}

function updateToggleLabel() {
  const toggle = document.getElementById('lang-toggle');
  if (!toggle) return;
  toggle.textContent = currentLocale === 'ko' ? 'ENGLISH' : '한국어';
  toggle.setAttribute('aria-label', currentLocale === 'ko' ? 'Switch to English' : 'Switch to Korean');
}

function setupLanguageToggle() {
  const toggle = document.getElementById('lang-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    currentLocale = currentLocale === 'ko' ? 'en' : 'ko';
    localStorage.setItem('locale', currentLocale);
    applyTranslations();
  });
}


window.addEventListener('DOMContentLoaded', () => {
  initHeroVideo();
  initETransfer();
  initGallery();
  setupLanguageToggle();
  applyTranslations();
});
window.openDropbox = openDropbox;
