const box = document.getElementById('box');
const form = document.getElementById('myForm');
const message = document.getElementById('message');

box.addEventListener('click', function() {
    box.classList.toggle('highlight');
    box.textContent = box.classList.contains('highlight') ? 'Klikattu' : 'Hiiri tänne';
});

box.addEventListener('mouseover', function() {
    if (!box.classList.contains('highlight')) {
        box.textContent = 'Hiiresi on täällä'
    }
});

box.addEventListener('mouseout', function() {
    if (!box.classList.contains('highlight')) {
        box.textContent = 'Hiiri tänne';
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;

    if(name.trim() === '') {
        message.textContent = 'Kirjoitappa nimesi ensimmäisenä.'
        message.style.color = 'red';
        document.body.style.backgroundColor = 'black';
    } else {
        message.textContent = `Lomake lähetetty. Terevetuloa, ${name}`;
        message.style.color = 'green';
        document.body.style.backgroundColor = 'white';
    }
})
    