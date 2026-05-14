// 게임 상태 초기화
let gameState = {
    chickCount: 1,         // 현재 병아리 수
    foodLevel: 0,          // 현재 먹이 레벨 (성장 자원)
    growthLevel: 0,        // 병아리 성장도 (%)
};

// DOM 요소 참조
const chickCountEl = document.getElementById('chickCount');
const foodLevelEl = document.getElementById('foodLevel');
const growthLevelEl = document.getElementById('growthLevel');
const feedButton = document.getElementById('feedButton');
const buyChickButton = document.getElementById('buyChickButton');
const updateGameButton = document.getElementById('updateGameButton');
const messageEl = document.getElementById('message');

// 게임 상태를 화면에 반영하는 함수
function updateUI() {
    chickCountEl.textContent = gameState.chickCount;
    foodLevelEl.textContent = gameState.foodLevel;
    growthLevelEl.textContent = Math.round(gameState.growthLevel) + '%';
}

// 게임 로직 업데이트 함수 (간단 버전)
function updateGame() {
    // 예시: 시간이 지남에 따라 병아리 성장도 증가시키기 (실제 시간 구현은 나중에)
    if (gameState.chickCount > 0) {
        gameState.growthLevel += 1; // 매 업데이트마다 조금씩 성장
    }

    updateUI();
    checkGameOver();
}

// 먹이 주기 기능
feedButton.addEventListener('click', () => {
    if (gameState.chickCount > 0) {
        gameState.foodLevel += 1;
        messageEl.textContent = "냠냠! 병아리에게 맛있는 먹이를 주었습니다. 성장도가 조금 올랐어요!";
        updateUI();
    } else {
        messageEl.textContent = "키울 병아리가 없습니다!";
    }
});

// 병아리 추가 구매 기능
buyChickButton.addEventListener('click', () => {
    const cost = 50;
    if (gameState.foodLevel >= cost) {
        gameState.foodLevel -= cost;
        gameState.chickCount += 1;
        messageEl.textContent = `🎉 새로운 병아리 ${gameState.chickCount}마리가 추가되었습니다!`;
        updateUI();
    } else {
        messageEl.textContent = `먹이가 부족해요! 병아리를 사려면 ${cost}의 먹이가 필요합니다. 현재 먹이: ${gameState.foodLevel}`;
    }
});

// 게임 업데이트 버튼 (주기적인 성장 시뮬레이션)
updateGameButton.addEventListener('click', () => {
    updateGame();
    messageEl.textContent = "시간이 흐르면서 병아리들이 자라고 있습니다...";
});


// 게임 오버 조건 확인
function checkGameOver() {
    if (gameState.chickCount === 0 && gameState.foodLevel < 1) {
        messageEl.textContent = "😭 모든 병아리가 사라졌습니다. 게임 오버!";
        feedButton.disabled = true;
        buyChickButton.disabled = true;
        updateGameButton.disabled = true;
    }
}

// 초기 로드 시 UI 설정
function initializeGame() {
    updateUI();
    messageEl.textContent = "게임을 시작하세요! 먹이를 주고 병아리를 키워보세요.";
}

initializeGame();