function manipulateData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    })
    .then((array) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const evenNumbers = array.filter(num => num % 2 === 0);
                document.getElementById('output').innerText = evenNumbers.join(', ');
                resolve(evenNumbers);
            }, 1000);
        });
    })
    .then((evenNumbers) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const multipliedNumbers = evenNumbers.map(num => num * 2);
                document.getElementById('output').innerText = multipliedNumbers.join(', ');
                resolve(multipliedNumbers);
            }, 2000);
        });
    });
}

manipulateData();

