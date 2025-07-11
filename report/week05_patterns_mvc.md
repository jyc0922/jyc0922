### 프로그래밍 아키텍처 패턴 비교

### MVC, MVP, MVVM 패턴의 구조와 특징

> 💡 **MVC**, **MVP**, **MVVM** 은 모두 소프트웨서 아키택처 디자인 패턴으로, UI와 로직을 분리하여 유지보수성과 테스트 용이성을 높이기 위한 구조입니다.

1. **MVC** (Model-View-Controller)

   > ✅ MVC는 구조가 간단하지만 View와 Model이 서로 직접 참조할 수 있어 유지보수가 어렵습니다.

   - **동작 흐름:** 사용자 입력 -> Controller -> Model 업데이트 -> View에 반영

   🧩**예시: (웹)**

   > 사용자가 로그인 폼 입력 -> Controller가 요청 처리 -> Model에서 사용자 인증 -> View에 결과 반영

   - **Model:** 데이터 및 비즈니스 로직
   - **View:** 사용자에게 보여지는 UI
   - **Controller:** 사용자의 입력을 받아 처리하고, Model과 View를 연결

2. **MVP** (Model-View-Presenter)

   > ✅ View와 Presenter의 명확한 역할 분리로 테스트와 유지보수가 용이합니다.

   - **동작 흐름:** 사용자 입력 -> View -> Presenter -> Model -> Presenter -> View 업데이트

   🧩**예시: (Android 초기 버전)**

   > Activity (View 역할) -> Presenter에게 이벤트 전달 -> Presenter가 Model로부터 데이터 받고 -> View 인터페이스를 통해 화면 갱신

   - **Model:** 데이터 및 비즈니스 로직
   - **View:** 사용자에게 보여지는 UI (인터페이스 기반)
   - **Presenter:** View와 Model 간의 중개자 역할. View와의 모든 통신을 담당

3. **MVVM** (Model-View-ViewModel)

   > ✅ MVVM은 바인딩 기능이 강력한 프레임워크에서 효과적이며, ViewModel 중심의 구조로 확장성과 자동화가 뛰어납니다.

   - **동작 흐름:** 사용자 입력 <-> View <-> ViewModel <-> Model

   🧩**예시: (WPF)**

   > View가 ViewModel의 속성에 바인딩 -> ViewModel이 Model과 통신 -> ViewModel 속성이 변경되면 View 자동 갱신

   - **Model:** 데이터 및 비즈니스 로직
   - **View:** 사용자에게 보여지는 UI
   - **ViewModel:** View를 위한 데이터와 로직을 관리, 데이터 바인딩을 통해 View와 동기화

🔹 **MVC**, **MVP**, **MVVM** 구조 비교

| 항목                         | **MVC**                              | **MVP**                               | **MVVM**                                                                           |
| ---------------------------- | ------------------------------------ | ------------------------------------- | ---------------------------------------------------------------------------------- |
| **주요목적**                 | 로직과 UI분리                        | View 제어의 명확한 분리               | 데이터 바인딩을 통한 UI 자동화                                                     |
| **View <-> Model 직접 연결** | Controller 없이도 가능               | Presenter만 연결 가능                 | ViewModel 통해 바인딩                                                              |
| **View <-> Logic 연결 방식** | Controller가 처리                    | Presenter가 View 인터페이스 통해 처리 | ViewModel과 바인딩                                                                 |
| **테스트 용이성**            | 보통                                 | 뛰어남 (View를 mock처리 가능)         | 높음 (ViewModel 단위 테스트 가능)                                                  |
| **사용 기술 예시**           | 웹 프레임워크 (Spring MVC 등)        | Android (초기 MVP 아키텍처)           | WPF, Xamarin, Android Jetpack                                                      |
| **복잡도**                   | 보통                                 | 중간                                  | 다소 높음 (바인딩 로직 복잡 가능성)                                                |
| **View의 역할**              | 단순 출력 + 일부 로직 포함 가능      | 출력 전담 (인터페이스로 정의)         | 출력 전담 (로직 없음, 바인딩만 수행)                                               |
| **선택 기준**                | 단순한 구조, 빠른 구현이 필요한 경우 | 테스트가 중요한 앱 구조               | 데이터 바인딩 기능을 지원하는 프레임워크, 대규모 앱 및 View 업데이트가 빈번한 경우 |

### - The End -
