// 스크롤 위치에 따라 활성화된 섹션을 감지하는 커스텀 훅입니다.
import { useEffect, useState, RefObject } from "react";

// 섹션 ID와 해당 DOM 요소의 RefObject를 매핑하는 타입
interface SectionRefs {
  [key: string]: RefObject<HTMLElement>;
}

export function useScrollSpy(sectionRefs: SectionRefs, offset: number = 100) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      let currentActiveSection = "";

      for (const sectionId in sectionRefs) {
        const ref = sectionRefs[sectionId];
        if (ref.current) {
          const { top, bottom } = ref.current.getBoundingClientRect();
          // 섹션이 뷰포트 내에 있고, 상단이 오프셋보다 위에 있거나 하단이 오프셋보다 아래에 있는 경우
          if (top <= offset && bottom >= offset) {
            currentActiveSection = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentActiveSection);
    };

    window.addEventListener("scroll", handleScroll);
    // 컴포넌트 마운트 시 초기 활성 섹션 설정
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionRefs, offset]);

  return activeSection;
}
