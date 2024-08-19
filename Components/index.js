const textarea = document.querySelector(".input-textarea");
const encryptButton = document.querySelector(".criptografar");
const decryptButton = document.querySelector(".descriptografar");
const image = document.getElementById("image");
const noMessage = document.getElementById("no-message");
const description = document.getElementById("description");
const copyButton = document.getElementById("copy-button");
const outputText = document.getElementById("output-text");

// Função de validação para texto
function validateText(text) {
    const regex = /^[a-z\s]*$/;
    if (!regex.test(text)) {
        alert("Por favor, digite apenas letras minúsculas e sem acentos.");
        return false;
    }
    return true;
}
// Função de criptografia com as regras especificadas
function encrypt(text) {
    return text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

// Função de descriptografia revertendo as regras
function decrypt(text) {
    return text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

// Evento para o botão de encriptar
encryptButton.addEventListener('click', () => {
    const inputText = textarea.value;
    if (validateText(inputText)) {
        const encrypted = encrypt(inputText);
        processText(encrypted);
    }
});

// Evento para o botão de descriptar
decryptButton.addEventListener('click', () => {
    const inputText = textarea.value;
    if (validateText(inputText)) {
        const decrypted = decrypt(inputText);
        processText(decrypted);
    }
});
function processText(text) {
    image.style.display = "none";
    noMessage.style.display = "none";
    description.style.display = "none";
    copyButton.style.display = "block";
    outputText.textContent = text;
    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(text);
    });
}