# 포트폴리오 웹사이트

현대적이고 반응형 디자인의 개인 포트폴리오 웹사이트입니다. HTML, CSS, JavaScript로 제작되었으며, 다양한 애니메이션 효과와 상호작용 기능을 포함하고 있습니다.

## 🚀 특징

- **반응형 디자인**: 모든 기기에서 완벽하게 보이는 모바일 친화적 디자인
- **현대적 UI**: 깔끔하고 세련된 디자인 with 그라데이션 효과
- **부드러운 애니메이션**: 스크롤 애니메이션, 호버 효과, 타이핑 효과
- **상호작용 기능**: 연락처 폼, 네비게이션, 필터링 기능
- **최적화된 성능**: Throttling, Lazy Loading 등 성능 최적화

## 📁 파일 구조

```
portfolio-website/
├── index.html          # 메인 HTML 파일
├── styles.css          # 스타일시트
├── script.js           # JavaScript 기능
└── README.md           # 프로젝트 설명
```

## 🛠️ 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, Grid, 애니메이션
- **Vanilla JavaScript**: ES6+ 문법, DOM 조작
- **Font Awesome**: 아이콘 라이브러리
- **Google Fonts**: Inter 폰트

## 🎨 주요 섹션

### 1. 헤더 & 네비게이션
- 고정 헤더 with 스크롤 효과
- 모바일 햄버거 메뉴
- 부드러운 스크롤 네비게이션

### 2. 홈 (Hero Section)
- 타이핑 애니메이션 효과
- 그라데이션 배경
- 소셜 링크
- CTA 버튼

### 3. 소개 (About)
- 개인 정보 카드
- 기본 정보 표시
- 이미지 플레이스홀더

### 4. 프로젝트 (Projects)
- 프로젝트 카드 그리드
- 3D 호버 효과
- 기술 스택 태그
- 외부 링크

### 5. 기술 스택 (Skills)
- 카테고리별 그룹화
- 아이콘 기반 표시
- 호버 애니메이션

### 6. 연락처 (Contact)
- 연락 정보 카드
- 작동하는 연락처 폼
- 유효성 검사
- 알림 메시지

## 🚀 사용 방법

### 1. 로컬에서 실행하기

1. 프로젝트 폴더로 이동:
```bash
cd portfolio-website
```

2. Python을 사용한 간단한 서버 실행:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

3. 브라우저에서 접속:
```
http://localhost:8000
```

### 2. VS Code Live Server 사용

VS Code에서 Live Server 확장프로그램을 설치하고:
- `index.html` 파일 우클릭
- "Open with Live Server" 선택

## 🎯 커스터마이징

### 개인 정보 변경

`index.html` 파일에서 다음 내용을 수정하세요:

```html
<!-- 이름 변경 -->
<h1 class="home-title">
    안녕하세요, 저는 <span class="highlight">당신의 이름</span>입니다.
</h1>

<!-- 연락처 정보 -->
<a href="mailto:your.email@example.com">your.email@example.com</a>
<a href="tel:+821012345678">+82 10-1234-5678</a>

<!-- 소셜 링크 -->
<a href="https://github.com/yourusername" target="_blank">
```

### 프로젝트 추가

`index.html`의 프로젝트 섹션에 새 카드를 추가:

```html
<div class="project-card">
    <div class="project-image">
        <div class="image-placeholder">
            <i class="fas fa-your-icon"></i>
        </div>
    </div>
    <div class="project-content">
        <h3 class="project-title">프로젝트 이름</h3>
        <p class="project-description">프로젝트 설명</p>
        <div class="project-tech">
            <span class="tech-tag">기술1</span>
            <span class="tech-tag">기술2</span>
        </div>
        <div class="project-links">
            <a href="#" class="project-link">라이브 데모</a>
            <a href="#" class="project-link">GitHub</a>
        </div>
    </div>
</div>
```

### 색상 테마 변경

`styles.css`에서 CSS 변수를 수정:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #764ba2;
    --text-color: #333;
    --background-color: #fff;
}
```

## 📱 반응형 브레이크포인트

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🌟 주요 기능

### 애니메이션 효과
- **Fade In Up**: 스크롤 시 요소가 위에서 나타남
- **Typing Effect**: 홈 섹션 제목 타이핑 효과
- **3D Hover**: 프로젝트 카드 3D 회전 효과
- **Smooth Scroll**: 부드러운 섹션 이동

### 상호작용 기능
- **Mobile Menu**: 햄버거 메뉴 토글
- **Form Validation**: 연락처 폼 유효성 검사
- **Notifications**: 성공/오류 알림 메시지
- **Keyboard Navigation**: 키보드 지원

### 성능 최적화
- **Throttling**: 스크롤 이벤트 최적화
- **Intersection Observer**: 효율적인 스크롤 감지
- **CSS Transforms**: GPU 가속 활용

## 🤝 기여

이 프로젝트는 개인 포트폴리오용으로 제작되었지만, 자유롭게 포크하고 수정하여 사용하실 수 있습니다.

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 🔗 배포

### GitHub Pages
1. GitHub 저장소 생성
2. `index.html`, `styles.css`, `script.js` 업로드
3. Settings > Pages에서 소스 선택
4. `https://username.github.io/repository`에서 접속

### Netlify/Vercel
1. 프로젝트 폴더 드래그 앤 드롭
2. 자동 배포 완료

---

**제작자**: 김진오  
**버전**: 1.0.0  
**최종 업데이트**: 2024년 3월
