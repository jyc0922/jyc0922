// 핵심 가치 섹션 컴포넌트입니다.
import React from 'react';
import styles from './ValuesSection.module.css'; // CSS Modules 임포트
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faHandshake, faLightbulb, faMedal } from '@fortawesome/free-solid-svg-icons';

const ValuesSection: React.FC = () => {
  const values = [
    {
      icon: faGem,
      title: '전문성',
      description: '각 분야 최고의 전문가들이 깊이 있는 지식과 경험으로 최상의 솔루션을 제공합니다.',
    },
    {
      icon: faHandshake,
      title: '신뢰',
      description: '투명하고 정직한 소통으로 장기적인 파트너십을 구축하며, 약속을 반드시 지킵니다.',
    },
    {
      icon: faLightbulb,
      title: '혁신',
      description: '최신 기술 트렌드를 연구·적용하여 혁신적인 접근 방식으로 새로운 가치를 창출합니다.',
    },
    {
      icon: faMedal,
      title: '고객 중심',
      description: '고객의 성공을 최우선으로, 맞춤형 전략과 실행을 통해 실질적인 성과를 약속합니다.',
    },
  ];

  return (
    <section id="values" className={styles.section}>
      <div className={styles.container}>
        <h2>핵심 가치</h2>
        <div className={styles.sectionContent}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <FontAwesomeIcon icon={value.icon} />
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;