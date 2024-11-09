document.addEventListener("DOMContentLoaded", function() {
    // Karanlık mod butonunu oluştur ve sayfanın sağ orta kısmına ekle
    const themeToggle = document.createElement("button");
    themeToggle.textContent = "Toggle Dark Mode";
    themeToggle.classList.add("theme-toggle");

    // Butonu body'ye ekle
    document.body.appendChild(themeToggle);

    // Sayfa yüklendiğinde yerel depolamadaki tema tercihini kontrol et
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    // Butona tıklandığında karanlık modu aç/kapat
    themeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");

        // Tema tercihini yerel depolamaya kaydet
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
});
