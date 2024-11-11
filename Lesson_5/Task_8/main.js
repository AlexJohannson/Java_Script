let array = [1, 45, 'Javascript', true, false, -567, 'Node.js'];


let list = (arrayOfItem) => {
    document.write(`<ul>`);
    for (const item of arrayOfItem) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}

list(array);