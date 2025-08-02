### RESTful API의 개념과 설계

> 📘 **REST(Representational State Transfer)** 는 **월드 와이드 웹(World Wide Web)** 과 같은 분산 하이퍼미디어 시스템을 위한 아키텍처 스타일입니다. 이를 구현하는 API를 RESTful API라고 합니다. RESTful API는 자원을 **URI(Uniform Resource Identifier)** 로 표현하고, **HTTP(Hypertext Transfer Protocol)** 메서드를 통해 해당 자원을 조작하는 방식을 사용합니다.

### 1. REST 원칙 및 HTTP 메서드

> ✅ REST 아키텍처 스타일은 다음과 같은 6가지 원칙을 준수해야 합니다.

1. `클라이언트-서버(Client-Server):` 자원을 사용하는 클라이언트와 자원을 제공하는 서버가 분리되어 있습니다.
2. `무상태성(Stateless):` 서버는 클라이언트의 상태 정보를 저장하지 않습니다. 모든 요청은 그 자체로 완전해야 합니다.
3. `캐시 가능(Cacheable):` 서버의 응답은 캐시가 가능하도록 설계되어야 합니다.
4. `계층화(Layered System):` 클라이언트는 직접 연결된 서버만 알면 되며, 중간에 프록시, 로드 밸런서 등이 추가될 수 있습니다.
5. `인터페이스 일관성(Uniform Interface):` 자원에 대한 통일된 인터페이스를 제공해야 합니다.
   - **자원 식별(Identification of resources):** URI로 자원을 식별합니다.
   - **메시지를 통한 자원 조작(Manipulation of resources through representations):** HTTP 메서드로 자원을 조작합니다.
   - **자기 기술적 메시지(Self-descriptive messages):** 응답 메시지에 어떤 미디어 타입(JSON, XML 등)인지 명시합니다.
   - **HATEOAS(Hypermedia as the Engine of Application State):** 하이퍼링크를 통해 애플리케이션의 상태를 전이합니다.
6. `코드 온 디맨드(Code-On-Demand):` 서버가 클라이언트에게 실행 가능한 코드를 전송할 수 있습니다. (선택적)

> 🧩 RESTful API 설계 시, HTTP 메서드를 다음과 같이 매핑합니다.

- `POST:` 새로운 자원을 생성합니다.
- `GET:` 자원을 조회합니다.
- `PUT:` 자원을 업데이트합니다.
- `PATCH:` 자원의 일부를 수정합니다.
- `DELETE:` 자원을 삭제합니다.

### 2. RESTful 엔드포인트 설계 방법

> ✅ RESTful API의 핵심은 URI를 통해 자원을 명확하게 표현하는 것입니다.

1. URI는 자원을 표현해야 합니다. 동사보다는 명사를 사용합니다.
   - `GET /users (O)` vs `GET /getUsers (X)`
2. URI는 소문자를 사용하고, 하이픈(-)으로 단어를 연결합니다.
   - `GET /user-posts (O)` vs `GET /userPosts (X)`
3. 자원의 관계를 명확하게 표현합니다.
   - `GET /users/1/posts :` 1번 유저가 작성한 모든 게시물을 조회합니다.
4. 컬렉션(Collection)은 복수형 명사를 사용합니다.
   - `GET /users (O)` vs `GET /user (X)`
5. 요청에 대한 필터링, 정렬, 페이지네이션은 쿼리 파라미터를 사용합니다.
   - `GET /posts?category=sports&sort=date :` 스포츠 카테고리 게시물을 날짜순으로 정렬하여 조회합니다.

### 3. Express/MongoDB 기반 REST API 예제

> ✅ **Express** 와 **MongoDB** 를 사용해 REST API를 구축하는 것은 오늘날 웹 개발에서 매우 흔한 조합입니다. 이 두 기술은 RESTful 원칙을 구현하는 데 최적화되어 있어, 자원의 생성, 조회, 수정, 삭제 **(CRUD)** 를 효율적으로 처리할 수 있습니다.

1. `Express:` RESTful API의 **인터페이스** 역할
   - **Express** 는 Node.js 기반의 웹 애플리케이션 프레임워크로, REST API에서 클라이언트와 서버 간의 통신을 담당하는 **인터페이스** 역할을 수행합니다. REST 원칙에서 중요한 **인터페이스 일관성(Uniform Interface)** 을 Express가 구현합니다.
2. `MongoDB:` RESTful API의 **자원** 저장소 역할
   - **MongoDB** 는 유연한 구조의 JSON-like 문서를 사용하는 NoSQL 데이터베이스입니다. RESTful API에서 중요한 **자원(Resource)** 을 저장하고 관리하는 **저장소** 역할을 담당합니다.
3. REST 원칙과의 결합
   - `클라이언트-서버 분리 & 무상태성:` **Express** 는 클라이언트의 요청을 받아 처리하고 응답을 보내는 서버 역할을 합니다. 이 과정에서 **Express** 는 요청마다 필요한 정보(예: 요청 본문)만 처리하고, 클라이언트의 이전 상태를 저장하지 않으므로 무상태성을 자연스럽게 유지합니다.
   - `인터페이스 일관성 & 자원 표현:` **Express는 /posts** , **/posts/: id** 같은 URI를 통해 자원을 식별하고, `GET`, `POST` 등의 `HTTP` 메서드를 사용해 자원을 조작하는 통일된 인터페이스를 제공합니다. MongoDB에 저장된 데이터는 이러한 인터페이스를 통해 JSON 형태로 클라이언트에게 **표현(Representation)** 됩니다.
4. 예제 코드 (Express 서버)
   > 🧩 **server.js**
   - `REST 원칙:`
     - `클라이언트-서버:` **Express** 서버가 자원을 제공하고, **클라이언트(브라우저, Postman 등)** 가 이 API를 호출합니다.
     - `무상태성:` 서버는 클라이언트의 로그인 세션 등을 저장하지 않고, 모든 요청을 독립적으로 처리합니다.
     - `인터페이스 일관성:` `/posts`라는 **URI** 와 `GET`, `POST`, `PUT`, `DELETE`라는 **HTTP** 메서드를 사용하여 통일된 방식으로 자원을 조작합니다.
   - `RESTful 엔드포인트 설계:`
     - `GET /posts:` 게시물 컬렉션을 조회하는 엔드포인트로 복수형 명사를 사용했습니다.
     - `GET /posts/:id:` 특정 자원을 조회하기 위해 **URI** 에 자원의 ID를 포함시켰습니다.
   - `HTTP 메서드 사용:`
     - `POST /posts:` 새로운 게시물을 생성하기 위해 `POST` 메서드를 사용했습니다. 성공 시 `201 Created` 상태 코드를 반환합니다.
     - `GET /posts & GET /posts/:id:` 게시물을 조회하기 위해 GET 메서드를 사용했습니다. 성공 시 `200 OK`를 반환합니다.
     - `PUT /posts/:id:` 게시물 전체를 수정하기 위해 `PUT` 메서드를 사용했습니다.
     - `DELETE /posts/:id:` 게시물을 삭제하기 위해 `DELETE` 메서드를 사용했습니다. 성공 시 `204 No Content`를 반환하여 응답 본문이 없음을 알립니다.

```
// 이 예제는 RESTful API의 기본 개념을 충실히 따른 간단한 구조를 보여줍니다. 실제로는 인증, 오류 처리, 유효성 검사, 페이지네이션 등 더 많은 고려 사항이 필요합니다.
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// JSON 요청 본문을 파싱하기 위한 미들웨어
app.use(express.json());

// MongoDB 연결
mongoose.connect('mongodb://localhost:27017/blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

// 1. RESTful 엔드포인트 설계: '/posts' (게시물 자원)
// MongoDB 모델 정의
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  createdAt: { type: Date, default: Date.now },
});
const Post = mongoose.model('Post', postSchema);

// 2. HTTP 메서드를 사용한 CRUD 구현
// POST /posts: 새로운 게시물 생성
app.post('/posts', async (req, res) => {
  try {
    const newPost = new Post(req.body);
    await newPost.save();
    // 201 Created 상태 코드와 함께 생성된 자원을 반환
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).send(err);
  }
});

// GET /posts: 모든 게시물 조회
app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find();
    // 200 OK 상태 코드와 함께 게시물 목록 반환
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).send(err);
  }
});

// GET /posts/:id: 특정 게시물 조회
app.get('/posts/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      // 404 Not Found 상태 코드와 함께 메시지 반환
      return res.status(404).send('Post not found');
    }
    // 200 OK 상태 코드와 함께 게시물 반환
    res.status(200).json(post);
  } catch (err) {
    res.status(500).send(err);
  }
});

// PUT /posts/:id: 특정 게시물 전체 수정
app.put('/posts/:id', async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPost) {
      return res.status(404).send('Post not found');
    }
    // 200 OK 상태 코드와 함께 수정된 자원 반환
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(400).send(err);
  }
});

// DELETE /posts/:id: 특정 게시물 삭제
app.delete('/posts/:id', async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      return res.status(404).send('Post not found');
    }
    // 204 No Content 상태 코드만 반환 (삭제 후 본문 없음)
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```
