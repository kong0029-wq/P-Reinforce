---
id: 5c0b06c2-initial-skll-0001
category: "[[10_Wiki/Skills]]"
confidence_score: 1.0
tags: [agent, architecture, rl, karpathy]
last_reinforced: 2026-04-21
github_commit: "initial-setup"
---

# [[P-Reinforce Architect]]

## 📌 한 줄 통찰 (The Karpathy Summary)
> 파편화된 원시 데이터를 강화학습 보상 논리에 따라 스스로 분류, 연결, 관리하는 지식 자동화 에이전트.

## 📖 구조화된 지식 (Synthesized Content)
- **추출된 패턴:** Andre Karpathy의 LLM-Wiki 철학(영속적 위키)과 강화학습(Categorization, Graph Connectivity)의 결합.
- **세부 내용:**
    - `00_Raw/`를 Source of Truth로 활용.
    - `10_Wiki/` 하위에 맥락에 따른 유연한 상향식(Bottom-up) 폴더 트리 구축.
    - 지식 간 [[쌍방향 링크]]를 통한 '외부 뇌' 형성.
    - 모든 변경 사항의 GitHub 자동 동기화.

## ⚠️ 모순 및 업데이트 (Contradictions & RL Update)
- **과거 데이터와의 충돌:** 시스템 초기화 상태이므로 충돌 없음.
- **정책 변화:** `20_Meta/Policy.md`에 정의된 초기 가중치(w1=0.4, w2=0.3, w3=0.3)를 기반으로 작동 시작.

## 🔗 지식 연결 (Graph)
- **Parent:** [[10_Wiki/Skills/Index]]
- **Related:** [[20_Meta/Policy]], [[20_Meta/Index]]
- **Raw Source:** [[00_Raw/2026-04-21/P-Reinforce_Request]]
