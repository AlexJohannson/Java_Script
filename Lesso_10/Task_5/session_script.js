const sessionList = document.getElementById('sessionList');

let session = JSON.parse(localStorage.getItem('session'));
for (const sessionTime of session) {
    const sessionDate = document.createElement('h3');
    sessionDate.style.background = 'lightgray';
    sessionDate.style.paddingBottom = '10px'
    sessionDate.innerText = sessionTime.toString();
    sessionList.appendChild(sessionDate);
}