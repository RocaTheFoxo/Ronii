const content = document.getElementById('content')

function loadPage(page) {
    history.pushState({ page: page }, `Sivu ${page}`, `/sivu${page}`)
    content.textContent = `Olet sivulla ${page}`
}

document.getElementById('page1').addEventListener('click', function() {
    loadPage(1)
})

document.getElementById('page2').addEventListener('click', function() {
    loadPage(2)
})

document.getElementById('page3').addEventListener('click', function() {
    loadPage(3)
})

window.addEventListener('popstate', function(event) {
    if (event.state) {
        content.textContent = `Olet sivulla ${event.state.page}`
    }
})