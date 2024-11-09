let arr = [1, 45, 'javascript', true, false, -567, 'node,js'];
list(arr);


function list(arrayOfItem) {
    document.write(`<ul>`);
    for (const item of arrayOfItem) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`);
}



/*----------------------------------------------------------------------------*/


function array(arrayOfPrimitive) {
    document.write(`<ul>`);
    for (const item of arrayOfPrimitive) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}
array([1, 0, 'typescript', false, 'okten', -567, 'java']);
