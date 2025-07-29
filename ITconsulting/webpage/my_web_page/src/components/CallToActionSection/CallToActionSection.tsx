// 문의하기 CTA 섹션 컴포넌트입니다.
import React from 'react';
import styles from './CallToActionSection.module.css'; // CSS Modules 임포트

const CallToActionSection: React.FC = () => {
  return (
    <section id="contact" className={styles.callToAction}>
      <div className={styles.container}>
        <h2>우선스퀘어와 함께 디지털 미래를 시작하세요</h2>
        <p>지금 바로 문의하여 전문가와 상담하세요.</p>
        <a href="mailto:woonny@woonny.com" className={styles.btn}>문의하기</a>
      </div>
    </section>
  );
};

export default CallToActionSection;