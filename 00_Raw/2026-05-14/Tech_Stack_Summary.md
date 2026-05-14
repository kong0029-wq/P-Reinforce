# 🛠️ NeckGuard AI 기술 스택 및 아키텍처 요약

## 🎯 프로젝트 목표
웹캠 비디오 스트림 분석을 통해 사용자의 목 자세를 실시간으로 측정하고, 거북목 방지를 위한 피드백 시스템 구현.

## 💻 사용된 핵심 기술
1.  **Frontend (UI/UX):** HTML5, CSS3 (SCSS/CSS Variables 활용)
2.  **AI/Vision Processing:** Google MediaPipe Tasks Vision (`@mediapipe/tasks-vision`)
3.  **Scripting Logic:** JavaScript (ES Module)

## 📂 파일별 역할 요약
*   **`index.html`**: 애플리케이션의 전체적인 구조와 UI 컴포넌트(비디오, 캔버스, 컨트롤 패널)를 정의합니다.
*   **`style.css`**: 전체적인 디자인 테마, 색상 변수(`--primary-gradient`, `--accent-color`), 그리고 시각적 효과(Glassmorphism, 애니메이션)를 담당합니다.
*   **`script.js`**: 애플리케이션의 핵심 로직을 구현합니다. 웹캠 스트림 접근, MediaPipe 모델 초기화 및 추론 실행, 실시간 자세 분석 알고리즘(`analyzePosture`) 및 UI 업데이트 기능을 담당합니다.

## ⚙️ AI/Vision 상세 분석
*   **모델 사용:** PoseLandmarker Lite 모델을 사용하여 비디오 프레임에서 사람의 주요 관절(Landmarks) 위치를 추출합니다.
*   **핵심 계산 로직:** 두 개의 귀(`landmarks[7]`, `landmarks[8]`)와 양쪽 어깨(`landmarks[11]`, `landmarks[12]`)의 Y 좌표를 기반으로 목과 머리의 **상대적인 기울기 비율(Ratio)**을 계산하여 자세 점수를 산출합니다.
*   **피드백 메커니즘:** 사용자가 설정한 '영점 조절'(`calibrate-btn`)을 통해 기준 거리(`baselineDistance`)를 설정하고, 실시간으로 현재 거리가 이 기준 대비 얼마나 벗어났는지 비율로 환산하여 시각적 경고(Warning/Success 상태)를 제공합니다.