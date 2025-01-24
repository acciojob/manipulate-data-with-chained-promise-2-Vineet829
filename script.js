function getNumbers() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}


function filterEvenNumbers(numbers) {
  return new Promise(resolve => {
    setTimeout(() => {
      const evenNumbers = numbers.filter(num => num % 2 === 0);
      resolve(evenNumbers);
    }, 1000); 
  });
}

function multiplyByTwo(numbers) {
  return new Promise(resolve => {
    setTimeout(() => {
      const result = numbers.map(num => num * 2);
      resolve(result);
    }, 2000); 
  });
}

getNumbers()
  .then(numbers => {
    return filterEvenNumbers(numbers);
  })
  .then(filteredNumbers => {
    document.getElementById('output').textContent = `${filteredNumbers}`;
    return filteredNumbers;
  })
  .then(evenNumbers => {
    return multiplyByTwo(evenNumbers);
  })
  .then(multipliedNumbers => {
    document.getElementById('output').textContent = `${multipliedNumbers}`;
  })
  .catch(error => {
    console.error('Error:', error);
  });