export default function nonStyleApp() {
    const nada = document.querySelector("#app");
    nada.innerHTML = "";
}
export function toastInfo() {
    const toast = document.getElementById("toasts");
    const messages = `Haz encontrado un producto`;
    const types = "info";
    function createToast(message = null, type = null) {
        const notif = document.createElement("div");
        const notifIcon = document.createElement("span");
        notif.classList.add("toast");
        notif.classList.add(types);
        notif.innerText = messages;
        toast === null || toast === void 0 ? void 0 : toast.appendChild(notif);
        notif.append(notifIcon);
        setTimeout(() => {
            notif.remove();
        }, 3000);
    }
    createToast();
}
const toggleButton = document.getElementById('button-menu');
const navWrapper = document.getElementById('nav');
toggleButton.addEventListener('click', () => {
    show();
});
navWrapper.addEventListener('click', e => {
    if (e.target.id === 'nav') {
        hide();
    }
});
// Cerrar el menu en responsive al tocar una etiqueta <a>
document.addEventListener("DOMContentLoaded", function () {
    let miEnlace = document.querySelectorAll(".links");
    miEnlace.forEach(function (enlace) {
        enlace.addEventListener("click", hide);
    });
});
function hide() {
    navWrapper.classList.remove('show');
    toggleButton.classList.remove('close');
}
function show() {
    toggleButton.classList.toggle('close');
    navWrapper.classList.toggle('show');
}
