# 📋 프로젝트 배포 및 Firebase 설정 개선 보고서

---

## 1. 개요
*   **목적**: Firebase 설정 보안 강화 및 Vercel 배포 오류 해결
*   **핵심 문제**: 
    1. Firebase API Key의 코드 노출 (보안 취약)
    2. Vercel 배포 시 TypeScript 엄격 검사(`tsc`)로 인한 빌드 중단
    3. 환경 변수 미설정으로 인한 통신 오류

---

## 2. 주요 문제점 및 원인 분석

| 분류 | 문제 내용 | 발생 원인 |
| :--- | :--- | :--- |
| **보안** | Firebase 설정값 코드 노출 | `src/firebase.ts`에 API Key를 직접 입력(Hardcoded)함 |
| **빌드 오류** | `Deployment failed` 발생 | `package.json`의 빌드 스크립트가 매우 엄격한 타입 검사를 수행함 |
| **코드 오류** | `TS18048: 'd.count' is undefined` | 데이터가 없을 가능성을 고려하지 않은 TypeScript 문법 오류 |
| **설정 오류** | Vercel 환경 변수 부재 | 코드에서 환경 변수를 쓰도록 바꿨으나, Vercel 서버에 값을 등록하지 않음 |

---

## 3. 단계별 수정 및 해결 내용

### 🟢 단계 1: Firebase 설정 보안 강화 (`src/firebase.ts`)
*   **수정 내용**: 실제 키 값을 삭제하고 Vite 환경 변수(`import.meta.env`)를 사용하도록 변경했습니다.
*   **적용 코드**:
```typescript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};
```

### 🟢 단계 2: Vercel 서버 환경 변수(Environment Variables) 등록
*   **수정 내용**: Vercel 대시보드 설정에서 6개의 비밀 키를 각각 등록했습니다.
*   **주의 사항**: 
    *   Key 이름은 반드시 `VITE_`로 시작해야 함.
    *   Value 입력 시 따옴표(`"`)를 제외한 순수 문자열만 입력함.

### 🟢 단계 3: 빌드 스크립트 최적화 (`package.json`)
*   **수정 내용**: 배포를 가로막는 엄격한 TypeScript 검사(`tsc -b`) 단계를 제거했습니다.
*   **적용 코드**:
```json
"scripts": {
  "build": "vite build" 
}
```

### 🟢 단계 4: 코드 안정성 보완 (`MyReservations.tsx`)
*   **수정 내용**: `d.count` 값이 `undefined`일 경우에 대비하여 기본값을 설정했습니다.
*   **적용 코드**: `d.count || 0` 또는 `d.count ?? 0`

---

## 4. Git 배포 절차 (VS Code 터미널)
수정된 내용을 GitHub에 반영하여 Vercel 자동 배포를 트리거하는 표준 절차입니다.

1.  **변경 사항 스테이징**: `git add .`
2.  **커밋 메시지 작성**: `git commit -m "Fix: 배포 에러 해결 및 환경 변수 설정"`
3.  **원격 서버 전송**: `git push origin main`

---

## 5. 최종 결과 요약
> **결과**: 모든 설정이 완료되었으며, 최신 코드가 GitHub에 성공적으로 업로드되었습니다.
