const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubled = numbers.map(num => num * 2);

const evenNumbers = numbers.filter(num => num % 2 === 0);

const sum = numbers.reduce((total, num) => total + num, 0);

document.getElementById('output').innerHTML = `
    <h2>Kaksinkertaistetut: ${doubled.join(', ')}</h2>
    <h2>Parilliset: ${evenNumbers.join(', ')}</h2>
    <h2>Summa: ${sum}</h2>
`