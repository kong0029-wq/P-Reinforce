# 🚀 스마트 예약 시스템 프로젝트 종합 개발 & 학습 리포트

본 문서는 2026년 4월 30일부터 5월 1일까지 진행된 스마트 예약 시스템 구축 과정의 모든 기술적 세부 사항과 트러블슈팅 기록을 담고 있습니다.

---

## 1. 프로젝트 개요 및 기술 스택
* **프로젝트명**: Smart Booking System (스마트 예약 시스템)
* **주요 기능**: 사용자 예약, 사업자 대시보드, 관리자 통계, 실시간 이용권 관리
* **기술 스택**: 
    * **Frontend**: React, TypeScript, Vite
    * **Styling**: Tailwind CSS (Glassmorphism, Gradients)
    * **Backend**: Firebase (Authentication, Firestore Database)
    * **Library**: Framer Motion (Animation), Material Symbols (Icons)

---

## 2. 프로젝트 파일 구조 및 역할
사용자가 직접 코드를 관리할 수 있도록 `src` 폴더 내 주요 파일의 역할을 정리했습니다.

### 📂 src/pages (화면 구성)
* **`Landing.tsx`**: 서비스의 첫인상을 결정하는 메인 홍보 페이지.
* **`Login.tsx`**: 사용자 인증(로그인/회원가입) 및 권한별 라우팅 담당.
* **`Home.tsx`**: 일반 사용자의 메인 로비 (이용권 현황 등 표시).
* **`Reservation.tsx`**: 수업 예약의 핵심 로직이 구현된 페이지.
* **`BusinessDashboard.tsx`**: 사업자가 수업을 등록하고 예약 현황을 관리하는 전용 공간.
* **`AdminDashboard.tsx`**: 시스템 전체 통계 및 관리 기능을 수행하는 곳.

### ⚙️ 핵심 설정 파일
* **`App.tsx`**: 프로젝트의 '지도'. URL 주소와 실제 화면(TSX 파일)을 연결하는 라우팅(Routing)의 중심.
* **`firebase.ts`**: 구글 서버와 통신하기 위한 연결 설정 및 인증 도구.

---

## 3. 주요 트러블슈팅 및 해결 기록 (중요)

### 🔴 문제 1: 로그인 버튼 미출력
* **현상**: 로그인 화면에서 '로그인' 버튼이 투명하게 보여 클릭할 수 없음.
* **원인**: 디자인 클래스(`bg-brand-green`)가 Tailwind 설정에 누락됨.
* **해결**: `Login.tsx`에서 버튼 클래스를 `bg-green-600`으로 변경하여 시각화 성공.

### 🔴 문제 2: 사업자 대시보드 진입 후 자동 튕김 현상
* **현상**: 사업자 계정으로 로그인 성공 후 `/business` 주소로 이동했다가 바로 `/home`으로 강제 이동됨.
* **원인**:
    1.  **권한 불일치**: Firestore의 `role` 필드가 `BUSINESS`가 아니거나 오타가 있음.
    2.  **색인(Index) 미생성**: 데이터를 날짜순으로 정렬해 불러오는 과정에서 Firebase 서버의 색인이 없어 에러 발생 -> 시스템이 안전을 위해 홈으로 리다이렉트함.
* **해결**: 브라우저 콘솔(F12)의 링크를 클릭하여 `loginLogs` 및 `classes` 컬렉션에 대한 **복합 색인** 생성.

### 🔴 문제 3: 인증 오류 (auth/invalid-credential)
* **원인**: 입력한 이메일/비밀번호가 Firebase Auth에 등록된 정보와 일치하지 않음.
* **해결**: Firebase Console에서 비밀번호를 재설정(예: 123456)하거나 오타를 수정하여 해결.

---

## 4. Firebase 데이터 관리 가이드

### 👤 테스트 유저 수동 생성법
1.  **Auth**: 이메일/비번 등록 후 생성된 **사용자 UID**를 복사.
2.  **Firestore**: `users` 컬렉션에 복사한 **UID를 문서 이름으로 하여** 문서 생성.
3.  **필수 필드**:
    * `role`: `BUSINESS` (반드시 대문자)
    * `tickets`: `0` (유형: `number` 또는 `int64`)
    * `email`: 해당 사용자의 이메일 주소

### 🧹 유저 정보 초기화 방법
1.  **Authentication**: 사용자 목록에서 점 3개(`⋮`) 메뉴를 눌러 계정 삭제.
2.  **Firestore**: `users` 컬렉션 자체를 삭제하여 권한 및 상세 정보를 일괄 제거.

---

## 5. 핵심 작동 원리 (Routing & Logic)
* **라우팅의 흐름**: `Login.tsx`(`navigate`) -> `App.tsx`(`Route path`) -> `Page.tsx`(`element`).
* **데이터 무결성**: 예약 시 `runTransaction`을 사용하여 이용권 차감과 예약 인원 증가가 동시에 이루어지도록 처리함.

---
**최종 업데이트**: 2026-05-03
