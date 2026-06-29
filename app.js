const keyword = document.getElementById("keyword");
const generateBtn = document.getElementById("generateBtn");
const result = document.getElementById("result");

const extensions = [".com", ".net", ".io", ".dev", ".tech"];

generateBtn.addEventListener("click", () => {

    let key = keyword.value.trim().toLowerCase();

    if (!key) {
        alert("Please enter a keyword");
        return;
    }

    result.innerHTML = "";

    for (let i = 0; i < 8; i++) {

        let randomExt = extensions[Math.floor(Math.random() * extensions.length)];
        let randomNum = Math.floor(Math.random() * 999);

        let domain = `${key}${randomNum}${randomExt}`;

        let div = document.createElement("div");
        div.className = "domain";
        div.textContent = domain;

        div.addEventListener("click", () => {
            navigator.clipboard.writeText(domain);
            div.textContent = "Copied ✔ " + domain;

            setTimeout(() => {
                div.textContent = domain;
            }, 1000);
        });

        result.appendChild(div);
    }

});