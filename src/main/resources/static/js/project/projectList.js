const colorChange = (article) => {
    // 랜덤색상 만들기
    const r = Math.floor(Math.random() * 16 + 240);
    const g = Math.floor(Math.random() * 16 + 240);
    const b = Math.floor(Math.random() * 16 + 240);
    article.style.backgroundColor = `rgb(${r},${g},${b})`;
}

window.addEventListener('DOMContentLoaded', () => {
    const articles = document.querySelectorAll("article");
    articles.forEach((article) => {
        colorChange(article);
    })
});