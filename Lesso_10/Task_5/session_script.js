const sessionList = document.getElementById('sessionList');

let session = JSON.parse(localStorage.getItem('session'));
for (const sessionTime of session) {
    const sessionDate = document.createElement('h3');
    sessionDate.innerText = sessionTime.toString();
    sessionList.appendChild(sessionDate);
}