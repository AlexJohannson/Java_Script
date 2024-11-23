const currentTime = new Date().getTime();
const lastUpdate = +localStorage.getItem('lastUpdate') || 0;

const moneyTitle = document.getElementsByTagName('h1')[0];
let currentMoney = +localStorage.getItem('money') || 100;
        if (lastUpdate > 10000) {
           currentMoney += 10;
           moneyTitle.innerText = currentMoney + 'грн';
           localStorage.setItem('lastUpdate', currentTime);
           localStorage.setItem('money', currentMoney);
        } else {
           moneyTitle.innerText = currentMoney + 'грн'
        }

