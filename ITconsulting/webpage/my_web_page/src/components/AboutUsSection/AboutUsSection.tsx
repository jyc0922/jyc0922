// 회사소개 섹션 컴포넌트입니다.
import React from 'react';
import styles from './AboutUsSection.module.css'; // CSS Modules 임포트

const AboutUsSection: React.FC = () => {
  return (
    <section id="about" className={`${styles.section} ${styles.aboutUs}`}>
      <div className={styles.container}>
        <h2>회사소개</h2>
        <div className={styles.sectionContent}>
          <div className={styles.aboutUsText}>
            <p><b>우선스퀘어(WOONNY)</b>는 빠르게 변화하는 IT 환경에서 기업의 지속 가능한 성장을 위한 최적의 솔루션을 제공합니다.</p>
            <p>전략 수립, 시스템 구축, 운영 최적화 등 IT 컨설팅의 전 영역에서 축적된 경험과 전문성을 바탕으로, 고객의 비즈니스 목표 달성을 위한 맞춤형 전략과 실행 방안을 제시합니다.</p>
            <p>기술을 넘어 비즈니스 가치를 극대화하는 <b>진정한 파트너</b>로서, 미래 경쟁력 확보에 기여하겠습니다.</p>
          </div>
          <div className={styles.aboutUsImage}>
            {/* TODO: Logo.svg 파일 경로를 public 폴더에 있다면 '/Logo.svg'로,
                      src/assets/images에 있다면 import 후 사용하세요. */}
            <img src="/Logo.svg" alt="회사 로고" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;