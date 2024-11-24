let inputValue = "Hacked by yigger".repeat(100000);
console.log(inputValue);

fetch('http://192.168.1.222', {
    method: 'POST',
    headers: {
        'Content-Type': 'text/plain'
    },
    body: inputValue
})

.then(response => response.text())
.then(data => console.log('Antwort vom Server:', data))
.catch(error => console.error('Fehler:', error));