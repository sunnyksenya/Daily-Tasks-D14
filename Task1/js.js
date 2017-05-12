// метод arr.join(str) превращает массив в строку, используя str как разделитель
var arr = ['Alex', 'John', 'Den', 'Peter'];
var str = arr.join(';');
console.log(str);

// метод arr.toString() превращает массив в строку
var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
var a = fruits.toString();
console.log(a);

// метод split(separator, limit) превращает строку в массив, разбив ее по разделителю s
// separator(необязательный)("" " " "o" ","...) - что использовать в качестве разделителя
// limit(необязательный) - (натуральное число) сколько элементов из массива (начиная с первого) брать для формирования строки
// Если их больше, чем указано – остаток массива будет отброшен "a,b,c,d".split(',', 2) ); // a,b
var s = "How'are'you' doing today?";
var res = s.split("'", 3);
console.log(res);

// функция Array.from('arrayLike', mapfn, thisArg) превращает в массив итерируемый объект или объект, имеющий вид массива
// 'arrayLike'(обязательный) - строка в кавычках
// mapfn (необязательный) - функция сопоставления, которую необходимо вызвать для каждого элемента в arrayLike
// thisArg (необязательный) - определяет объект this в функции сопоставления
var stringToConvert = "I am fine";
var arrayFromString = Array.from(stringToConvert, x => x+1);
console.log(arrayFromString);
