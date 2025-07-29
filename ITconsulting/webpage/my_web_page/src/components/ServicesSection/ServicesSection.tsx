// 주요 서비스 섹션 컴포넌트입니다.
import React from 'react';
import styles from './ServicesSection.module.css'; // CSS Modules 임포트
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faCloud,
  faShieldAlt,
  faCogs,
  faBrain,
  faUsersCog
} from '@fortawesome/free-solid-svg-icons';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: faChartLine,
      title: 'IT 전략 컨설팅',
      description: '비즈니스 목표에 부합하는 IT 로드맵, 디지털 전환 및 신기술 도입 전략을 수립합니다.',
    },
    {
      icon: faCloud,
      title: '클라우드 솔루션',
      description: '클라우드 아키텍처 설계, 마이그레이션, 최적화 등 효율적인 IT 인프라 구축을 지원합니다.',
    },
    {
      icon: faShieldAlt,
      title: '정보보안 컨설팅',
      description: '핵심 자산 보호와 규제 준수를 위한 정보보안 진단, 취약점 분석, 보안 시스템 구축을 제공합니다.',
    },
    {
      icon: faCogs,
      title: '시스템 통합 (SI)',
      description: '다양한 시스템과 솔루션을 통합하여 효율적인 비즈니스 프로세스를 구축합니다.',
    },
    {
      icon: faBrain,
      title: '데이터 분석 & AI',
      description: '빅데이터, 머신러닝, 인공지능 기반의 데이터 활용 전략으로 의사결정을 지원합니다.',
    },
    {
      icon: faUsersCog,
      title: 'IT 거버넌스',
      description: 'IT 자원 관리, 위험 통제, 규제 준수를 위한 IT 거버넌스 체계 수립을 지원합니다.',
    },
  ];

  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <h2>주요 서비스</h2>
        <div className={styles.sectionContent}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <FontAwesomeIcon icon={service.icon} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;