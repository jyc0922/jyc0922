// 헤더 컴포넌트입니다.
import React, { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css'; // CSS Modules 임포트
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; // 햄버거 메뉴 아이콘 예시 (모바일용)
import { useScrollSpy } from '../../hooks/useScrollSpy'; // useScrollSpy 훅 임포트

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 모바일 메뉴 상태
  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    services: useRef<HTMLElement>(null),
    values: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  // useScrollSpy 훅을 사용하여 현재 활성화된 섹션 감지
  const activeSection = useScrollSpy(sectionRefs, 80); // 헤더 높이(80px)를 오프셋으로 설정

  // 스크롤 시 부드러운 이동을 위한 함수
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // 메뉴 닫기
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* 로고 영역 */}
        <a href="#home" className={styles.logo} onClick={() => scrollToSection('home')}>
          {/* TODO: 로고 이미지를 사용할 경우, <img src="/Logo.svg" alt="회사 로고" className={styles.logoImage} /> 와 같이 추가 */}
          <span className={styles.logoTitle}>우선스퀘어</span>
          <span className={styles.logoSub}>WOONNY</span>
        </a>

        {/* 내비게이션 메뉴 */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li><a href="#home" className={`${styles.navLink} ${activeSection === 'home' ? styles.active : ''}`} onClick={() => scrollToSection('home')}>홈</a></li>
            <li><a href="#about" className={`${styles.navLink} ${activeSection === 'about' ? styles.active : ''}`} onClick={() => scrollToSection('about')}>회사소개</a></li>
            <li><a href="#services" className={`${styles.navLink} ${activeSection === 'services' ? styles.active : ''}`} onClick={() => scrollToSection('services')}>서비스</a></li>
            <li><a href="#values" className={`${styles.navLink} ${activeSection === 'values' ? styles.active : ''}`} onClick={() => scrollToSection('values')}>핵심 가치</a></li>
            <li><a href="#contact" className={`${styles.navLink} ${activeSection === 'contact' ? styles.active : ''}`} onClick={() => scrollToSection('contact')}>문의</a></li>
          </ul>
          {/* 모바일 햄버거 메뉴 아이콘 */}
          <button className={styles.menuToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;