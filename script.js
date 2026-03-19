// DOM 요소 선택
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const header = document.querySelector('.header');

// 모바일 메뉴 토글
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 네비게이션 링크 클릭 시 메뉴 닫기
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// 스크롤 시 헤더 스타일 변경
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// 부드러운 스크롤 기능
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
            // 헤더 높이 계산 (동적으로)
            const header = document.querySelector('.header');
            const headerHeight = header ? header.offsetHeight : 70;
            
            const offsetTop = target.offsetTop - headerHeight - 20; // 추가 여백
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // URL 해시 업데이트
            history.pushState(null, null, targetId);
        }
    });
});

// 페이지 로드 시 해시가 있으면 해당 위치로 스크롤
window.addEventListener('load', () => {
    const hash = window.location.hash;
    if (hash) {
        const target = document.querySelector(hash);
        if (target) {
            const header = document.querySelector('.header');
            const headerHeight = header ? header.offsetHeight : 70;
            const offsetTop = target.offsetTop - headerHeight - 20;
            
            setTimeout(() => {
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }, 100);
        }
    }
});

// 스크롤 애니메이션 (Reveal on Scroll)
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// 스크롤 이벤트 리스너
window.addEventListener('scroll', reveal);

// 페이지 로드 시 초기 애니메이션
window.addEventListener('load', () => {
    // 홈 섹션 애니메이션
    const homeContent = document.querySelector('.home-content');
    if (homeContent) {
        homeContent.classList.add('fade-in-up');
    }
    
    // 초기 reveal 애니메이션 실행
    reveal();
});

// 프로젝트 카드 필터링 기능 (선택적)
function initProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // 활성 버튼 상태 변경
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                const filter = button.getAttribute('data-filter');
                
                // 프로젝트 카드 필터링
                projectCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.classList.add('fade-in-up');
                        }, 100);
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
}

// 스킬 애니메이션 (프로그레스 바 등)
function animateSkills() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                item.style.transition = 'all 0.5s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 100);
        }, index * 100);
    });
}

// 연락처 폼 처리
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 폼 데이터 가져오기
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // 기본 유효성 검사
            if (!name || !email || !message) {
                showNotification('모든 필수 필드를 작성해주세요.', 'error');
                return;
            }
            
            // 이메일 유효성 검사
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('유효한 이메일 주소를 입력해주세요.', 'error');
                return;
            }
            
            // 실제 애플리케이션에서는 서버로 데이터 전송
            // 여기서는 시뮬레이션만 합니다
            console.log('폼 데이터:', { name, email, subject, message });
            
            // 성공 메시지 표시
            showNotification('메시지가 성공적으로 전송되었습니다!', 'success');
            
            // 폼 초기화
            this.reset();
        });
    }
}

// 알림 메시지 표시 함수
function showNotification(message, type = 'info') {
    // 기존 알림 제거
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // 새 알림 생성
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // 스타일 적용
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 10px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    // 타입별 색상
    switch(type) {
        case 'success':
            notification.style.background = '#10b981';
            break;
        case 'error':
            notification.style.background = '#ef4444';
            break;
        default:
            notification.style.background = '#3b82f6';
    }
    
    // 문서에 추가
    document.body.appendChild(notification);
    
    // 애니메이션 표시
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // 3초 후 자동 제거
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// 타이핑 효과 (홈 섹션 제목)
function initTypingEffect() {
    const titleElement = document.querySelector('.home-title');
    if (titleElement) {
        const text = titleElement.textContent;
        titleElement.textContent = '';
        titleElement.style.borderRight = '3px solid #fbbf24';
        
        let index = 0;
        function typeText() {
            if (index < text.length) {
                titleElement.textContent += text.charAt(index);
                index++;
                setTimeout(typeText, 50);
            } else {
                // 타이핑 완료 후 커서 제거
                setTimeout(() => {
                    titleElement.style.borderRight = 'none';
                }, 1000);
            }
        }
        
        // 페이지 로드 후 1초 후 시작
        setTimeout(typeText, 1000);
    }
}

// 스킬 카드 호버 효과
function initSkillHoverEffects() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
            this.style.boxShadow = '0 10px 25px rgba(37, 99, 235, 0.2)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });
}

// 프로젝트 카드 3D 효과
function initProjectCardEffects() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
}

// 페이지 로드 시 모든 기능 초기화
document.addEventListener('DOMContentLoaded', function() {
    // reveal 클래스를 섹션 요소들에 추가
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('reveal');
    });
    
    // 기능 초기화
    initProjectFilter();
    initContactForm();
    initTypingEffect();
    initSkillHoverEffects();
    initProjectCardEffects();
    
    // 스킬 섹션에 도달했을 때 애니메이션 실행
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkills();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(skillsSection);
    }
});

// 키보드 네비게이션 지원
document.addEventListener('keydown', function(e) {
    // ESC 키로 모바일 메뉴 닫기
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// 성능 최적화: 스크롤 이벤트 throttling
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// 스크롤 이벤트에 throttle 적용
window.addEventListener('scroll', throttle(reveal, 100));

// 다크 모드 토글 기능 (선택적)
function toggleDarkMode() {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-mode');
    
    // 로컬 스토리지에 설정 저장
    localStorage.setItem('darkMode', isDarkMode);
    
    // 다크 모드 스타일 적용
    if (isDarkMode) {
        // 다크 모드 스타일 추가
        addDarkModeStyles();
    } else {
        // 다크 모드 스타일 제거
        removeDarkModeStyles();
    }
}

// 다크 모드 스타일 추가
function addDarkModeStyles() {
    const darkModeStyles = `
        body.dark-mode {
            background-color: #1a1a1a;
            color: #ffffff;
        }
        
        body.dark-mode .header {
            background: rgba(26, 26, 26, 0.95);
        }
        
        body.dark-mode .nav-link {
            color: #b3b3b3;
        }
        
        body.dark-mode .nav-link:hover {
            color: #ffffff;
        }
        
        body.dark-mode .section-title {
            color: #ffffff;
        }
        
        body.dark-mode .about {
            background: #2a2a2a;
        }
        
        body.dark-mode .skills {
            background: #2a2a2a;
        }
        
        body.dark-mode .project-card {
            background: #2a2a2a;
            border: 1px solid #3a3a3a;
        }
        
        body.dark-mode .skill-category {
            background: #2a2a2a;
            border: 1px solid #3a3a3a;
        }
        
        body.dark-mode .contact-form {
            background: #2a2a2a;
        }
        
        body.dark-mode .form-group input,
        body.dark-mode .form-group textarea {
            background: #3a3a3a;
            border-color: #4a4a4a;
            color: #ffffff;
        }
        
        body.dark-mode .footer {
            background: #0a0a0a;
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.id = 'dark-mode-styles';
    styleSheet.textContent = darkModeStyles;
    document.head.appendChild(styleSheet);
}

// 다크 모드 스타일 제거
function removeDarkModeStyles() {
    const darkModeStyles = document.getElementById('dark-mode-styles');
    if (darkModeStyles) {
        darkModeStyles.remove();
    }
}

// 페이지 로드 시 다크 모드 설정 복원
window.addEventListener('load', () => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        addDarkModeStyles();
    }
});
