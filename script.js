function getData() {
    return {
        firstName: document.getElementById("input-first-name").value,
        lastName: document.getElementById("input-last-name").value,
        role: document.getElementById("input-role").value,
        phone: document.getElementById("input-phone").value,
        email: document.getElementById("input-email").value
    };
}

function copyToClipboard(text) {
    const dt = new clipboard.DT();
    dt.setData("text/plain", text);
    dt.setData("text/html", text);
    clipboard.write(dt);
}

function onCopySignatureButtonClick() {
    const signatureContainer = document.getElementById("signature-container");
    copyToClipboard(signatureContainer.innerHTML);
}

function main() {
    const firstNameInput = document.getElementById("input-first-name");
    const lastNameInput = document.getElementById("input-last-name");
    const roleInput = document.getElementById("input-role");
    const phoneInput = document.getElementById("input-phone");
    const emailInput = document.getElementById("input-email");
    const adressInput = document.getElementById("input-adress");

    const firstNameOutput = document.getElementById("output-first-name");
    const lastNameOutput = document.getElementById("output-last-name");
    const roleOutput = document.getElementById("output-role");
    const phoneOutput = document.getElementById("output-phone");
    const emailOutput = document.getElementById("output-email");
    const adressOutput = document.getElementById("output-adress");

    const copySignatureButton = document.getElementById("signature-copy");

    firstNameInput.addEventListener("input", event => {
        firstNameOutput.textContent = firstNameInput.value.trim() === "" ? "Jméno" : firstNameInput.value;
        copySignatureButton.disabled = false;
    });

    lastNameInput.addEventListener("input", event => {
        lastNameOutput.textContent = lastNameInput.value.trim() === "" ? "Příjmení" : lastNameInput.value;
        copySignatureButton.disabled = false;
    });

    roleInput.addEventListener("input", event => {
        roleOutput.textContent = roleInput.value.trim() === "" ? "Pozice ve firmě" : roleInput.value;
        copySignatureButton.disabled = false;
    });

    phoneInput.addEventListener("input", event => {
        phoneOutput.textContent = phoneInput.value;
        phoneOutput.href = `tel:${phoneInput.value}`;
        copySignatureButton.disabled = false;
    });

    emailInput.addEventListener("input", event => {
        emailOutput.textContent = emailInput.value;
        emailOutput.href = `mailto:${emailInput.value}`;
        copySignatureButton.disabled = false;
    });

    adressInput.addEventListener("input", event => {
        adressOutput.textContent = adressInput.value;
        adressOutput.href = `adress:${adressInput.value}`;
        copySignatureButton.disabled = false;
    });
}
