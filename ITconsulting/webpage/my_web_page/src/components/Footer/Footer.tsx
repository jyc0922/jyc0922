// 푸터 컴포넌트입니다.
import React from 'react';
import styles from './Footer.module.css'; // CSS Modules 임포트
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerCol}>
          {/* TODO: 로고 이미지를 사용할 경우, <img src="/Logo.svg" alt="회사 로고" className={styles.footerLogoImage} /> 와 같이 추가 */}
          <h4>우선스퀘어 WOONNY</h4>
          <p>신뢰, 깊이, 혁신, 가치, 품격</p>
          <div className={styles.socialIcons}>
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>
        <div className={styles.footerCol}>
          <h4>빠른 링크</h4>
          <ul>
            <li><a href="#home">홈</a></li>
            <li><a href="#about">회사소개</a></li>
            <li><a href="#services">서비스</a></li>
            <li><a href="#contact">문의</a></li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h4>연락처</h4>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 서울시 강남구 논현로 114길</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> woonny@woonny.com</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>Copyright&copy; 2025 WOONNY. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;