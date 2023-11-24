const bannerList = document.querySelector("#banner-list-container")
function loadList() {
    for (let i = 0; i < 4; i++) {
        bannerList.innerHTML += `<div class="banner-item">Teste</div>`   
    }
}
loadList()