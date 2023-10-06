//Знайти суму всіх цілих чисел від 1 до 15
let a = 1;
let addResult = 0;

while (a <= 15) {
    addResult += a;
    a++;
}
console.log('Сума чисел від 1 до 15:', addResult);

//Знайти добуток усіх цілих чисел від 15 до 35
let b = 15;
let multResult = 1;

while (b <= 35) {
    multResult = multResult * b;
    b++;
}
console.log('Добуток цілих чисел від 15 до 35:', multResult);

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500
let c = 1;
let value = 0;
let average;

while (c <= 500) {
    value += c;
    c++;
}
average = value / 500;
console.log('Середнє арифметичне чисел від 1 до 500:', average);

//Вивести суму лише парних чисел у діапазоні від 30 до 80
let sum = 0;
for (let d = 30; d <= 80; d++) {
    if(d % 2 === 0) {
        sum += d;
    }
}
console.log('Суму парних чисел від 30 до 80:', sum);

//Вивести на консоль таблицю Піфагора з використанням циклів.
for (let colNumber = 1; colNumber <= 10; colNumber++) {
    let rowString = '';
    for (let rowNumber = 1; rowNumber <=10; rowNumber++) {
        let result = colNumber * rowNumber;
        rowString += result + ' ';

        if (String(result).length < 2) {
            rowString += ' ';
        }
    }
    console.log(rowString);
}
