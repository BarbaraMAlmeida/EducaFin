let iconMenu = document.querySelector('.menu-bars');
let headerResponsive = document.querySelector('.header-responsive');
window.addEventListener("resize", verificarTamanhoDaTela);

function clickIconMenuResponsive () {
    iconMenu.addEventListener("click", () => {
        headerResponsive.classList.toggle('active')
    })
}

function verificarTamanhoDaTela() {
    if(window.innerWidth > 640.98) {
        headerResponsive.classList.remove('active')
    }
}

clickIconMenuResponsive();