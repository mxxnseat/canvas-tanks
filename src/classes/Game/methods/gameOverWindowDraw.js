export default function gameOverWindow() {

    const LS = localStorage.getItem("score") || 0;

    let component = `
        <div class="items-wrapper">
            <div class="result">
                <div class="top-score">top score: ${LS}</div>
                <div class="current-score">Your score: ${this.score}</div>
            </div>

            <div class="window-item" id="restart">restart</div>
        </div>
        
    `;
    let win = document.createElement("div");
    win.classList.add("window");
    win.innerHTML = component;

    document.querySelector("body").prepend(win);

    document.querySelector("#restart").onclick = (e) => {
        this.score > LS && localStorage.setItem("score", this.score);

        this.init();
        win.remove();
    }
}