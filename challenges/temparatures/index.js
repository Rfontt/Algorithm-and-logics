function closetsTemperature(temperatures) {    
    const arraySort = temperatures.sort((a, b) => parseInt(a) - parseInt(b));

    const onlyNumberNegatives = [];
    const onlyNumberPositives = [];

    for (let i = 0; i < arraySort.length; i++) {
        const element = temperatures[i];

        if (element < 0) {
            onlyNumberNegatives.push(element);
        } else {
            onlyNumberPositives.push(element);
        }
    }

    if (temperatures.length === 0) {
        return 0;
    }

    if (onlyNumberNegatives.length > 0 && onlyNumberPositives.length === 0) {
        const sortOrder = onlyNumberNegatives.sort((a, b) => b - a);

        return sortOrder[0];
    } else {
        return onlyNumberPositives[0];
    }
}

const arrayPositivesAndNegativesNumbers = [-1, 10, 2, 100, 5];
const arrayOnlyNegatives = [-10, -2, -300, -20, -1, -2];

console.log(closetsTemperature(arrayPositivesAndNegativesNumbers)); // input = 2
console.log(closetsTemperature(arrayOnlyNegatives)); // input = -1
console.log(closetsTemperature([])); // input = 0
