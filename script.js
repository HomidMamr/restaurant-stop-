// ===== СОВРЕМЕННЫЙ ЧИСТЫЙ JAVASCRIPT ДЛЯ ШАВЕРМЫ =====

// ===== ДАННЫЕ МЕНЮ =====
const menuData = {
  shaurma: [
    {
      name: 'Классическая шаверма',
      price: 250,
      desc: 'Свежие овощи, курица, фирменный соус',
      img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop',
      weight: '350г'
    },
    {
      name: 'Острая шаверма',
      price: 280,
      desc: 'С перцем чили и острым соусом',
      img: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop',
      weight: '350г'
    },
    {
      name: 'Говяжья шаверма',
      price: 320,
      desc: 'С нежной говядиной и грибами',
      img: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop',
      weight: '400г'
    },
    {
      name: 'Вегетарианская',
      price: 230,
      desc: 'С овощами и веганским соусом',
      img: 'https://images.unsplash.com/photo-1643101809202-50e2a4a3a8c4?w=400&h=300&fit=crop',
      weight: '300г'
    },
    {
      name: 'Сырная шаверма',
      price: 290,
      desc: 'С двойной порцией сыра',
      img: 'https://images.unsplash.com/photo-1561758033-48d52648ae8b?w=400&h=300&fit=crop',
      weight: '380г'
    }
  ],
  drinks: [
    {
      name: 'Лимонад домашний',
      price: 120,
      desc: 'С мятой и лимоном',
      img: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop',
      volume: '0.5л'
    },
    {
      name: 'Морс ягодный',
      price: 110,
      desc: 'Из лесных ягод',
      img: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400&h=300&fit=crop',
      volume: '0.5л'
    },
    {
      name: 'Кола',
      price: 90,
      desc: 'Классическая охлажденная',
      img: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&h=300&fit=crop',
      volume: '0.33л'
    },
    {
      name: 'Айран',
      price: 100,
      desc: 'Освежающий напиток',
      img: 'https://images.unsplash.com/photo-1600180983519-8b46407a67f3?w=400&h=300&fit=crop',
      volume: '0.5л'
    }
  ],
  snacks: [
    {
      name: 'Картофель фри',
      price: 150,
      desc: 'С хрустящей корочкой',
      img: 'https://images.unsplash.com/photo-1585109649139-366815a0d451?w=400&h=300&fit=crop',
      weight: '200г'
    },
    {
      name: 'Луковые кольца',
      price: 170,
      desc: 'Хрустящие с соусом',
      img: 'https://images.unsplash.com/photo-1632818924360-68d4994cfdb2?w=400&h=300&fit=crop',
      weight: '150г'
    },
    {
      name: 'Сырные палочки',
      price: 190,
      desc: 'С нежной начинкой',
      img: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=300&fit=crop',
      weight: '180г'
    },
    {
      name: 'Наггетсы',
      price: 180,
      desc: 'Куриные, 6 штук',
      img: 'https://images.unsplash.com/photo-1599481238640-4c1288750d7a?w=400&h=300&fit=crop',
      weight: '200г'
    }
  ]
};

// ===== ОСНОВНЫЕ ФУНКЦИИ =====

// Рендер категории меню
function renderCategory(category) {
  const container = document.querySelector('.menu-container');
  if (!container) return;

  // Плавное исчезновение
  container.style.opacity = '0';
  
  setTimeout(() => {
    container.innerHTML = '';

    menuData[category].forEach((item) => {
      const card = document.createElement('div');
      card.className = 'menu-card';

      const details = item.weight || item.volume ? 
        `<span class="item-details">${item.weight || item.volume}</span>` : '';

      card.innerHTML = `
        <div class="card-image">
          <img src="${item.img}" alt="${item.name}" loading="lazy">
        </div>
        <div class="card-content">
          <h3 class="card-title">${item.name}</h3>
          <p class="card-text">${item.desc}</p>
          <div class="details">
            ${details}
            <span class="price">${item.price}₽</span>
          </div>
        </div>
      `;

      container.appendChild(card);
    });

    // Плавное появление
    container.style.opacity = '1';
  }, 200);
}

// Плавный скролл к секции
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    const offsetTop = element.offsetTop - 80;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
    
    // Подсветка активного пункта меню
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`.nav-link[data-section="${sectionId}"]`);
    if (activeLink) activeLink.classList.add('active');
  }
}

// ===== ФУНКЦИИ КОНТАКТОВ =====
function openTelegram() {
  window.open('https://t.me/shaverma_stop_bot', '_blank');
}

function openWhatsApp() {
  window.open('https://wa.me/71234567890', '_blank');
}

function openInstagram() {
  window.open('https://instagram.com/shaverma_stop', '_blank');
}

function showPolicy() {
  alert('Политика конфиденциальности\n\nМы заботимся о ваших данных и используем их только для обработки заказов.');
}

function showTerms() {
  alert('Условия использования\n\nИспользуя наш сайт, вы соглашаетесь с нашими условиями обслуживания.');
}

// ===== ИНИЦИАЛИЗАЦИЯ =====
document.addEventListener('DOMContentLoaded', () => {
  console.log('🍖 Шаверма Stop загружена!');
  
  // Инициализация меню
  initMenu();
  
  // Инициализация плавных анимаций
  initAnimations();
  
  // Инициализация формы обратной связи
  initContactForm();
  
  // Обработчики для десктопного меню
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      const section = this.getAttribute('data-section');
      if (section) {
        e.preventDefault();
        scrollToSection(section);
      }
    });
  });
  
  // Анимация десктопного меню при прокрутке
    const desktopNav = document.querySelector('.desktop-nav');
    let lastScrollTop = 0;
    
    // Функция для определения активного раздела при прокрутке
    function highlightActiveSection() {
        const sections = ['benefits', 'menu', 'delivery', 'contacts'];
        const scrollPosition = window.scrollY + 150; // Небольшой отступ для лучшего UX
        
        // Находим текущий активный раздел
        let currentSection = sections[0];
        
        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section && section.offsetTop <= scrollPosition) {
                currentSection = sectionId;
            }
        });
        
        // Обновляем активный пункт меню
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === currentSection) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (window.innerWidth >= 992) {
            // Анимация фона меню - всегда черный фон
            if (scrollTop > 50) {
                desktopNav.style.background = 'rgba(0, 0, 0, 0.9)';
                desktopNav.style.padding = '10px var(--spacing-lg)';
                desktopNav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.2)';
            } else {
                desktopNav.style.background = 'rgba(0, 0, 0, 0.9)';
                desktopNav.style.padding = 'var(--spacing-md) var(--spacing-lg)';
                desktopNav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.2)';
            }
            
            // Меню всегда видимо
            desktopNav.style.transform = 'translateY(0)';
            
            // Подсветка активного раздела
            highlightActiveSection();
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
    
    // Вызываем один раз при загрузке страницы
    highlightActiveSection();
  
  // Показываем страницу
  document.body.style.opacity = '1';
});

// Инициализация меню
function initMenu() {
  // Устанавливаем активную кнопку
  const firstBtn = document.querySelector('.category-btn[data-category="shaurma"]');
  if (firstBtn) {
    firstBtn.classList.add('active');
  }

  // Обработчики кнопок категорий
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Убираем активный класс у всех кнопок
      document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
      
      // Добавляем активный класс к текущей кнопке
      btn.classList.add('active');

      // Рендерим категорию
      const category = btn.dataset.category;
      renderCategory(category);
    });
  });
}

// Простые анимации при скролле
function initAnimations() {
  // Создаем observer для анимаций
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Добавляем анимации к элементам
  const animatedElements = document.querySelectorAll('.card, .delivery-option, .contact-info, .contact-form-wrapper');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
  });
}

// ===== ГЛОБАЛЬНЫЕ ФУНКЦИИ ДЛЯ HTML =====
window.scrollToSection = scrollToSection;
window.openTelegram = openTelegram;
window.openWhatsApp = openWhatsApp;
window.openInstagram = openInstagram;
window.showPolicy = showPolicy;
window.showTerms = showTerms;
// ===== ОБРАБОТЧИК ФОРМЫ ОБРАТНОЙ СВЯЗИ =====
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(this);
      const name = formData.get('name');
      const phone = formData.get('phone');
      const message = formData.get('message');
      
      // Простая валидация
      if (!name || !phone) {
        alert('Пожалуйста, заполните обязательные поля');
        return;
      }
      
      // Имитация отправки
      const submitBtn = this.querySelector('.form-submit');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Отправляем...';
      submitBtn.disabled = true;
      
      setTimeout(() => {
        alert('Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.');
        this.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 2000);
    });
  }
}
// ===
// ===== МОБИЛЬНОЕ МЕНЮ =====
function toggleMobileMenu() {
  console.log('Функция toggleMobileMenu вызвана');
  
  const mobileMenu = document.getElementById('mobileMenu');
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  
  if (!mobileMenu) {
    console.error('Элемент mobileMenu не найден!');
    return;
  }
  
  if (!menuToggle) {
    console.error('Элемент mobile-menu-toggle не найден!');
    return;
  }
  
  mobileMenu.classList.toggle('active');
  menuToggle.classList.toggle('active');
  
  console.log('Меню активно:', mobileMenu.classList.contains('active'));
  
  // Блокируем скролл когда меню открыто
  if (mobileMenu.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  
  if (mobileMenu.classList.contains('active')) {
    mobileMenu.classList.add('closing');
    mobileMenu.classList.remove('active');
    
    setTimeout(() => {
      mobileMenu.classList.remove('closing');
    }, 300);
  }
  
  menuToggle.classList.remove('active');
  document.body.style.overflow = '';
}

// Закрываем меню при клике вне его
document.addEventListener('click', function(event) {
  const mobileMenu = document.getElementById('mobileMenu');
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  
  if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
    closeMobileMenu();
  }
});

// Закрываем меню при изменении размера экрана
window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
    closeMobileMenu();
  }
});

// Дополнительная инициализация мобильного меню
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  if (menuToggle) {
    // Дублируем обработчик события на случай проблем с onclick
    menuToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      toggleMobileMenu();
    });
    
    // Добавляем touch события для мобильных
    menuToggle.addEventListener('touchstart', function(e) {
      e.preventDefault();
      toggleMobileMenu();
    });
  }
});