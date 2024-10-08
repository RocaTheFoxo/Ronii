document.getElementById('addButton').addEventListener('click', function() {
    let newElement = document.createElement('div')
    newElement.textContent = 'Uusi elementti ' + (document.getElementById('elementContainer').children.length + 1)

    document.getElementById('elementContainer').appendChild(newElement)
})

document.getElementById('removeButton').addEventListener('click', function() {
    let container = document.getElementById('elementContainer');
    if (container.children.length > 0) {
        container.lastElementChild.remove();
    } else {
        alert('Ei elementtejä poistettavaksi!')
    }
})