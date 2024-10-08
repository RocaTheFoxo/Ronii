document.getElementById('copyText').addEventListener('click', async function() {
    const text = document.getElementById('textToCopy').value;
    try {
        await navigator.clipboard.writeText(text);
        document.getElementById('message').textContent = 'Teksti Kopioitu!'
    } catch (error) {
        document.getElementById('message').textContent = 'Kopiointi epäonnistui!'
    }
})