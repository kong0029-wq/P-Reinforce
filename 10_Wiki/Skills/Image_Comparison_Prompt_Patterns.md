---
id: skill-prompt-comparison-20260421
category: "[[10_Wiki/Skills]]"
confidence_score: 0.95
tags: [image-generation, prompt-engineering, split-comparison, health-marketing]
last_reinforced: 2026-04-21
github_commit: "reinforce-image-prompt-patterns"
---

# [[비주얼 대비 분석형 프롬프트 패턴]]

## 📌 한 줄 통찰 (The Karpathy Summary)
> 복잡한 인과관계를 단 한 장의 사진으로 시각화하기 위해 '중앙 수직 분할(Vertical Split)' 구조를 활용한 고효율 교육용 이미지 생성 프롬프트 체계.

## 📖 구조화된 지식 (Synthesized Content)

### 1. 핵심 프롬프트 구조 (JSON Pattern)
비주얼 대비 분석(Before & After)을 위한 표준 JSON 구조는 다음과 같은 구성 요소를 포함합니다:
- **Composition**: `layout: "vertical split center"`, `framing: "close-up"`을 통해 대비를 극대화.
- **Subject**: 동일 인물의 상반된 상태(피곤함 vs 활기참, 변색 vs 정화)를 묘사.
- **Appearance (Skin/Eyes/Teeth)**: 대비되는 질감과 색상을 구체적 키워드로 명시.
- **Text Labels**: 좌측(Bad/Threat)과 우측(Good/Save)의 메타 정보를 텍스트로 삽입.

### 2. 주요 적용 사례 (Domain Patterns)
- **건강/영양**: 피부 상태, 치아 건강, 안구 상태 비교.
- **심리/습관**: 뇌의 인지 상태, 성장 에너지 대비.
- **비즈니스**: 1인 창업가의 생산성(수동 노가다 vs AI 자동화) 대비.
- **사회적 이미지**: 시니어의 노년 생활(무기력 vs 활기찬 인기 비결).

### 3. 세부 기술적 팁
- **Lighting**: 좌측은 칙칙한 자연광(Dull), 우측은 광채(Glowing/Catchlight)를 추가하여 시각적 보상을 강화.
- **Color Palette**: 경고(Red/Warm) vs 회복(Green/Blue/Natural)의 대비 활용.

## ⚠️ 모순 및 업데이트 (Contradictions & RL Update)
- **과거 데이터와의 충돌**: 이전에는 단순한 이미지 묘사 위주였으나, 본 데이터는 **교육용 레이아웃(텍스트 포함)과 수직 분할**이 결합된 고도화된 패턴을 보여줌.
- **정책 변화**: 'Skills' 카테고리에 '시각적 브랜딩/프롬프트 패턴' 하위 분류를 강화함.

## 🔗 지식 연결 (Graph)
- **Parent:** [[10_Wiki/Skills/Index]]
- **Related:** [[10_Wiki/Skills/P-Reinforce_Skill]], [[10_Wiki/Topics/AI_Automation]]
- **Raw Source:** [[00_Raw/2026-04-21/이미지_생성_4월_21일]]
