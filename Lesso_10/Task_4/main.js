let valueNumber = +localStorage.getItem('number');
valueNumber += 1;
localStorage.setItem('number', valueNumber);



const numberTitle = document.getElementsByTagName('h1')[0];
numberTitle.innerText = valueNumber;



let scaleValue = +localStorage.getItem('scale');
scaleValue += 0.1;
localStorage.setItem('scale', scaleValue);
numberTitle.style.transform = `scale(${scaleValue})`;




