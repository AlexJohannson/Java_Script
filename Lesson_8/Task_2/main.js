function clone(object) {
    if (object) {
        let functionObject= [];
        for (const key in object) {
            if (typeof object[key] === 'function') {
                const functionClone = object[key].bind({});
                functionObject.push({functionClone, key});
            }
        }
        const cloneObject = JSON.parse(JSON.stringify(object));
        for (const functions of functionObject) {
            cloneObject[functions.key] = functions.functionClone;
        }
        return cloneObject;
    }
    throw new Error('!!!');
}

const cloned = clone({id: 1, name: 'Oleksandr', surname: 'Oleksandr', userName() {console.log(cloned.name);}});
console.log(cloned);
cloned.userName();

