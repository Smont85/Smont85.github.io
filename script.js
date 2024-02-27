function changeSize(elementid) {
    const element = document.getElementById(elementid);
    if (element && element.id === 'f2l') {
        if (element.style.height === '150px') {
            element.style.height = '200px';
            element.style.animation = 'paused';
        }
        else {
            element.style.height = '150px';
        }
    }
    if (element && element.id === 'oll') {
        if (element.style.height === '150px') {
            element.style.height = '200px';
            element.style.animation = 'paused';
        }
        else {
            element.style.height = '150px';
        }
    }
    if (element && element.id === 'pll') {
        if (element.style.height === '150px') {
            element.style.height = '200px';
            element.style.animation = 'paused';
        }
        else {
            element.style.height = '150px';
        }
    }
    if (element && element.id === 'five') {
        if (element.style.height === '160px') {
            element.style.height = '210px';
            element.style.animation = 'paused';
        }
        else {
            element.style.height = '160px';
        }
    }
}

