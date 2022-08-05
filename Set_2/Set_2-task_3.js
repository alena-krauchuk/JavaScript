// 3
// Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, 
// сколько в слове гласных, и сколько согласных букв. e.g. function getWordStructure(word)

// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв
// 
// Проверки: 'case', 'Case', 'Check-list'

let word = "Check@list";
let count_vow = 0;
let count_cons = 0;
let vowels = ["a", "e", "i", "o", "u", "y"];
let consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"]


const getWordStructure = function() {
    for (let char of word.toLowerCase()) {                /* for...of  - перебрали строку посимвольно; метод toLowerCase() преобразует строку в нижний регистр */
        if(vowels.includes(char)) {                       /* метод includes() выявляет, содержит ли массив определенное значение  */
            count_vow++;
        } else if (consonants.includes(char)) {           /* проверяем, чтобы отсечь тире и др. небуквы в строке  */                
            count_cons++;                                 /* и подсчитать количество согласных  */
        }        
    }
    console.log("Слово", word, "состоит из", count_vow, "гласных и", count_cons, "согласных букв");
}

getWordStructure(word);


// Проверки:
// 'case' - 2 гласных и 2 согласных букв
// 'Case' - 2 гласных и 2 согласных букв
// 'Check-list' - 2 гласных и 7 согласных букв
