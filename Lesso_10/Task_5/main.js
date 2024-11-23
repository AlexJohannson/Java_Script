let session = JSON.parse(localStorage.getItem('session')) || [];
session.push(new Date());
localStorage.setItem('session', JSON.stringify(session));