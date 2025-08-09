### CORS 정책과 웹 보안 기본 개념 (Origin, Header, Preflight 요청 이해)

> 📘**CORS(Cross-Origin Resource Sharing)** 는 웹 보안을 위한 중요한 메커니즘으로, 웹 브라우저가 **동일 출처 정책(Same-Origin Policy)** 을 완화하여 다른 출처의 리소스에 안전하게 접근할 수 있도록 허용하는 정책입니다. 이 정책은 서버와 브라우저가 **HTTP** 헤더를 통해 서로 협력하여 동작합니다.

#### 웹 보안 기본 개념 및 동일 출처 정책

> 🔐웹 보안의 근간이 되는 동일 출처 정책은 한 출처에서 로드된 문서나 스크립트가 다른 출처의 리소스와 상호작용하는 것을 제한하는 브라우저의 핵심 보안 기능입니다. 여기서 출처`(Origin)`은 **프로토콜(protocol)**, **호스트(host)**, **포트(port)** 의 세 가지 요소가 모두 일치해야 동일하다고 판단됩니다. 이 정책은 악의적인 웹 사이트가 사용자의 민감한 정보를 다른 사이트에서 훔쳐 가는 것을 방지하는 데 필수적입니다. 예를 들어, `https://bank.com` 에서 실행되는 스크립트는 `https://malicious.com` 의 데이터에 접근할 수 없습니다. 하지만 웹은 다양한 출처의 리소스를 사용해야 하는 경우가 많기 때문에, **CORS** 는 이러한 동일 출처 정책의 제약을 해제하기 위한 방법으로 등장했습니다.

#### CORS 정책의 동작 원리

1. Origin (출처)

   - ✅**CORS** 에서 **Origin** 은 요청을 보내는 웹 페이지의 출처를 의미합니다. 브라우저는 교차 출처 요청을 보낼 때, **Origin** 이라는 **HTTP** 요청 헤더에 현재 웹 페이지의 출처 정보를 자동으로 포함합니다. 서버는 이 **Origin** 헤더의 값을 확인하여 해당 출처로부터의 요청을 허용할지 결정합니다.

     > **예시:** Origin: `https://example.com`

2. Header (헤더)

   - ✅**CORS** 는 서버와 브라우저 간의 통신을 위해 여러 **HTTP** 헤더를 사용합니다.

     - `Access-Control-Allow-Origin:` 서버가 클라이언트에게 어떤 출처의 요청을 허용할지 알려주는 응답 헤더입니다.

       > 특정 출처 허용: `Access-Control-Allow-Origin:` https://example.com

       > 모든 출처 허용: `Access-Control-Allow-Origin:` \*

     - `Access-Control-Request-Method:` 브라우저가 **Preflight** 요청 시 실제 요청에 사용할 **HTTP** 메서드를 서버에 미리 알려주는 요청 헤더입니다.

     - `Access-Control-Request-Headers:` 브라우저가 **Preflight** 요청 시 실제 요청에 사용할 추가적인 헤더를 서버에 미리 알려주는 요청 헤더입니다.

     - `Access-Control-Allow-Methods:` 서버가 클라이언트에게 어떤 **HTTP** 메서드를 허용할지 알려주는 응답 헤더입니다.

     - `Access-Control-Allow-Headers:` 서버가 클라이언트에게 어떤 헤더를 허용할지 알려주는 응답 헤더입니다.

3. Preflight 요청

   - ✅**Preflight** 요청은 특정 조건을 만족하지 않는 **"복잡한 요청(Non-Simple Requests)"** 을 보내기 전에 브라우저가 서버에 먼저 보내는 사전 확인 요청입니다.

     > 복잡한 요청의 조건은 다음과 같습니다.

     - `GET`, `HEAD`, `POST`가 아닌 다른 **HTTP** 메서드 사용 (예: `PUT`, `DELETE`).
     - **Content-Type**이 `application/x-www-form-urlencoded`, `multipart/form-data`, `text/plain`이 아닌 경우 (예: **application/json**).
     - 사용자 정의 헤더를 포함하는 경우.

   - ✅Preflight 요청의 동작 순서는 다음과 같습니다.

     1. 브라우저가 `OPTIONS` 메서드로 `Preflight` 요청을 보냅니다. 이 요청에는 **Origin**, **Access-Control-Request-Method**, **Access-Control-Request-Headers** 등의 헤더가 포함됩니다.

     2. 서버는 `Preflight` 요청을 받고, 해당 요청이 허용될 수 있는지 확인한 후 응답합니다. 응답에는 **Access-Control-Allow-Origin**, **Access-Control-Allow-Methods**, **Access-Control-Allow-Headers** 등의 헤더가 포함됩니다.

     3. 브라우저는 서버의 응답 헤더를 분석하여 실제 요청을 보낼지 결정합니다. 서버가 허용한다고 응답하면, 브라우저는 본 요청을 보냅니다. 허용하지 않으면 **CORS** 오류를 발생시키고 요청을 중단합니다.
