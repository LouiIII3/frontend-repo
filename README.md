# frontend-repo
/project-root
│
├── pages                         // Next.js의 페이지 폴더
│   └── index.js                  // 메인 페이지 (HomePage.js의 역할)
│
├── /src
│   ├── /components               // 공통 컴포넌트를 모아놓은 폴더
│   │   ├── /atoms                // 기본적인 재사용 가능 컴포넌트
│   │   │   ├── Button.js         // 버튼 컴포넌트
│   │   │   ├── Input.js          // 입력 필드 컴포넌트
│   │   │   └── Icon.js           // 아이콘 컴포넌트 등등
│   │   │
│   │   ├── /molecules            // 복합 컴포넌트 (다른 도메인에서도 재사용될 수 있는 것들)
│   │   │   └── Card.js           // 카드 컴포넌트 같은 것(두 개 이상의 atoms 조합)
│   │
│   ├── /layout                   // 공통 레이아웃
│   │   ├── Header.js             // 헤더 컴포넌트
│   │   └── Footer.js             // 푸터 컴포넌트
│   │
│   ├── /domains                  // 도메인별로 나눌 예정
│   │   ├── /user                 // 사용자 도메인 관련 컴포넌트
│   │   │   ├── components        // 사용자 도메인 내 컴포넌트
│   │   │   │   └── UserProfile.js // 사용자 프로필 컴포넌트
│   │   │   │
│   │   │   ├── pages             // 사용자 관련 페이지
│   │   │   │   └── UserPage.js   // 사용자 페이지
│   │   │   └── api               // 사용자 관련 API 함수
│   │   │       └── userApi.js    // 사용자 관련 API
│   │   │
│   │   ├── /loan                 // 대출 도메인 관련 컴포넌트 및 페이지
│   │   │   ├── components        // 대출 도메인 내 컴포넌트
│   │   │   │   ├── ProductList.js  // 대출 리스트 컴포넌트
│   │   │   │   ├── ProductDetail.js // 대출 상세 컴포넌트
│   │   │   │   └── ProductCard.js   // 대출 카드 컴포넌트
│   │   │   │
│   │   │   ├── pages             // 대출 관련 페이지
│   │   │   │   ├── LoanPage.js               // 대출 페이지
│   │   │   │   ├── LoanRecommendationPage.js // 대출 추천 페이지
│   │   │   │   ├── LoanDetailPage.js         // 대출 상품 상세 페이지
│   │   │   │   └── LoanRecommendationListPage.js // 대출 추천 리스트 페이지
│   │   │   │
│   │   │   └── api               // 대출 관련 API 함수
│   │   │       └── loanApi.js    // 대출 관련 API
│   │   │
│   │   ├── /analysis             // 소비 분석 도메인
│   │   │   ├── components        // 분석 관련 컴포넌트 모음
│   │   │   │   ├── AnalysisChart.js // 분석 차트 컴포넌트
│   │   │   │   └── AnalysisSummary.js // 분석 요약 컴포넌트
│   │   │   │
│   │   │   ├── pages             // 분석 관련 페이지
│   │   │   │   └── AnalysisResultPage.js // 소비 분석 결과 페이지
│   │   │   │
│   │   │   └── api               // 분석 관련 API 함수
│   │   │       └── analysisApi.js // 소비 분석 관련 API
│   │   │
│   │   └── /map                  // 지도 도메인
│   │       ├── components        // 지도 관련 컴포넌트 모음
│   │       │   ├── MapView.js    // 지도 뷰 컴포넌트
│   │       │   └── MapMarker.js  // 지도 마커 컴포넌트
│   │       │
│   │       ├── pages             // 지도 관련 페이지
│   │       │   └── MapPage.js    // 지도 페이지
│   │       │
│   │       └── api               // 지도 관련 API 함수
│   │           └── mapApi.js     // 지도 관련 API
│   │
│   ├── /utils                    // 유틸리티 함수 모음
│   │   ├── mapUtils.js           // 지도 관련 유틸 함수
│   │   ├── dateUtils.js          // 날짜 포맷팅 등의 유틸 함수
│   │   └── apiUtils.js           // API 호출과 관련된 유틸 함수
│   │
│   ├── /assets                   // 정적 파일을 보관하는 폴더
│   │   ├── images                // 이미지 파일
│   │   ├── audio                 // 오디오 파일
│   │   └── videos                // 비디오 파일
│   │
│   ├── /styles                   // 스타일 관련 폴더
│   │   └── global.css            // 전역 스타일 시트
│
└── /public                      
