const butao = document.querySelector("#botao");

butao.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains("dark-mode")) {
        butao.textContent = "☀️";
    } else {
        butao.textContent = "🌙";
    }

}); 