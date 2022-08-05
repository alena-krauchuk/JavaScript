// 1
// Проверить границы возраста и невалидные значения, создав функцию, принимающую на вход возраст
// Вывести в консоль результат работы функции

const age_2 = 18;
const age_3 = 60;

const checkAge = function(age) {                           /* будем сверять возраст, поэтому достаточно одной переменной age */
    if (age > 0 && age < age_2) {                          /* Отсекаем от валидных значенийй age <= 0 */
        console.log("You don't have access cause your age is", age + '.', "It's less then", age_2 + ', just believe me.');   
    } else if (age >= age_2 && age < age_3) {            
        console.log("Welcome !");
    } else if (age >= age_3) {                             /* Верхнюю границу возраста включаем в диапозон валидных значений */
        console.log("Keep calm and look Culture channel");
    } else {
        console.log("Technical work");                     /* Это сообщение будет маркером для невалидных значений age_1 */
    }
}

// Помимо заданных проверок на входящие значения 17, 18, 61 - проверим еще и на другие граничные и др.важные значения

checkAge(17);               /* Ожидаем сообщение в консоли "You don't have access cause your age is 17. It's less then 18, just believe me."  */
checkAge(18);               /* Ожидаем сообщение в консоли "Welcome !"  */
checkAge(19);               /* Ожидаем сообщение в консоли "Welcome !"  */
checkAge(59);               /* Ожидаем сообщение в консоли "Welcome !"  */
checkAge(60);               /* Ожидаем сообщение в консоли "Keep calm and look Culture channel"  */
checkAge(61);               /* Ожидаем сообщение в консоли "Keep calm and look Culture channel"  */
checkAge(0);                /* Ожидаем сообщение в консоли "Technical work"  */
checkAge(-1);               /* Ожидаем сообщение в консоли "Technical work"  */
checkAge("bublik");         /* Ожидаем сообщение в консоли "Technical work"  */
checkAge("24ka");           /* Ожидаем сообщение в консоли "Technical work"  */
