// 히어로 섹션 컴포넌트입니다.
import React from 'react';
import styles from './HeroSection.module.css'; // CSS Modules 임포트

const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>디지털 혁신의 파트너<br/>우선스퀘어 (WOONNY)<br/> IT 컨설팅</h1>
        <p>신뢰, 깊이, 혁신, 가치, 품격으로<br/>귀사의 미래를 함께 만듭니다.</p>
        <button className={styles.btn} onClick={scrollToContact}>전문가 상담 신청</button>
      </div>
    </section>
  );
};

export default HeroSection;