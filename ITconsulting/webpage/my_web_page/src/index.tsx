// React 애플리케이션의 진입점입니다.
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/GlobalStyles.css'; // 전역 스타일 임포트
import './styles/variables.css';    // CSS 변수 (색상 테마) 임포트

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
