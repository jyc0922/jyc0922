// 메인 애플리케이션 컴포넌트입니다.
// 각 섹션 컴포넌트들을 이곳에서 조합합니다.
import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import AboutUsSection from './components/AboutUsSection/AboutUsSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import ValuesSection from './components/ValuesSection/ValuesSection';
import CallToActionSection from './components/CallToActionSection/CallToActionSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* 헤더 컴포넌트 */}
      <Header />

      {/* 메인 콘텐츠 영역 */}
      <main>
        <HeroSection />
        <AboutUsSection />
        <ServicesSection />
        <ValuesSection />
        <CallToActionSection />
      </main>

      {/* 푸터 컴포넌트 */}
      <Footer />
    </div>
  );
}

export default App;