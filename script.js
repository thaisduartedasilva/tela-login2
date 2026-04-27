let cadastro = false;

document.getElementById("toggle").onclick = () => {
    cadastro = !cadastro;
    document.getElementById("titulo").innerText = cadastro ? "Cadastro" : "Login";
    document.querySelector("button").innerText = cadastro ? "Cadastrar" : "Entrar";
    document.getElementById("toggle").innerText = cadastro
        ? "Já tem conta? Faça Login!"
        : "Não tem conta? Cadastre-se!";
    document.getElementById("mensagem").innerHTML = "";
}

document.getElementById("form-login").onsubmit = (e) => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let mensagem = document.getElementById("mensagem");
    mensagem.innerHTML = "";
    if (!email.includes("@") || !email.includes(".")) {
        mensagem.innerHTML = "<div class='erro'><p> Email Invalido !</p></div>";
        return;

    }
    if (senha.length < 4) {
        mensagem.innerHTML = "<div class='erro'><p> Senha muito curta !</p></div>";
        return;
    }


    document.getElementById("form-login").reset();
}