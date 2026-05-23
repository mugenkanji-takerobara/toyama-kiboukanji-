document.addEventListener("DOMContentLoaded", () => {
    console.log("JS Loaded");

    // 画面管理
    const screens = document.querySelectorAll(".screen");
    function showScreen(id) {
        screens.forEach(s => s.style.display = "none");
        const target = document.getElementById(id);
        if (target) target.style.display = "block";
    }

    // 最初の画面
    showScreen("title-screen");

    // BGM
    const bgm = document.getElementById("bgm");
    function playBGM() {
        if (bgm.paused) {
            bgm.volume = 0.4;
            bgm.play().catch(() => {});
        }
    }

    // ボタン
    document.getElementById("start-button").addEventListener("click", () => {
        playBGM();
        showScreen("game-screen");
        startGame();
    });

    document.getElementById("story-button").addEventListener("click", () => {
        playBGM();
        showScreen("story-screen");
        loadStoryPage(0);
    });

    document.getElementById("manual-button").addEventListener("click", () => {
        playBGM();
        showScreen("manual-screen");
        loadManualPage(0);
    });

    // ストーリー・説明書ページ管理
    let currentStoryPage = 0;
    let currentManualPage = 0;

    document.getElementById("story-next").addEventListener("click", () => {
        currentStoryPage++;
        loadStoryPage(currentStoryPage);
    });

    document.getElementById("story-prev").addEventListener("click", () => {
        currentStoryPage--;
        loadStoryPage(currentStoryPage);
    });

    document.getElementById("manual-next").addEventListener("click", () => {
        currentManualPage++;
        loadManualPage(currentManualPage);
    });

    document.getElementById("manual-prev").addEventListener("click", () => {
        currentManualPage--;
        loadManualPage(currentManualPage);
    });


