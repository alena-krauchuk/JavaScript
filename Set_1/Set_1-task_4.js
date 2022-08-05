// 4
// Преобразовать task_3 таким образом, чтобы возраст вводился, используя функцию prompt в привязанной верстке.


const age_2 = 18;
const age_3 = 60;

const checkAge = function(age) {
    if(age && !isNaN(age)) {            /* Проверка, что значение введено и оно не NaN - если подаем пустую строку, в ней значения нет */
        if (age > 0 && age < age_2) {
            alert("Input kind #1: \nYour age is less then lowest limit.");
       } else if (age >= age_2 && age < age_3) {           /* Сюда ушли положительные числа больше или равные минимальной и меньше максимальной границы возраста */  
            alert("Input kind #2 \nWelcome!");            
        } else if (age >= age_3) {                          /* Сюда ушли положительные числа больше или равные максимальной границы возраста */       
            alert("Input kind #3 \nKeep calm and look Culture channel.");            
        } else {                                            /* Сюда ушли отрицательные числа, 0 как строка, пробел   */
            alert("Input kind #4 \nSorry, it's not your age, but some other number or null/emptiness. \nPlease, try again.");                                   
        }

    }  else {                                               /* Сюда ушли другие знаки (не арабские цифры), 0 как число, пустая строка   */
        alert("Input kind #5 \nSorry, it's not your age, but some other sign(s) or null/emptiness. \nPlease, try again.");        
    }
}

let a = prompt("Enter your age please");

checkAge(a);


// Показательные проверки:
// checkAge('2');              /* Ожидаем сообщение в консоли "You don't have access cause your age is 2. It's less then 18, just believe me."  */
// checkAge(17);               /* Ожидаем сообщение в консоли "You don't have access cause your age is 17. It's less then 18, just believe me."  */           
// checkAge(18);               /* Ожидаем сообщение в консоли "Welcome!"  */
// checkAge(0);                /* Ожидаем сообщение в консоли "Sorry, it's not your age, but some other sign(s) or null/emptiness"  */
// checkAge(-1);               /* Ожидаем сообщение в консоли "Sorry, it's not your age, but some other number or emptiness"  */
// checkAge('bublik');         /* Ожидаем сообщение в консоли "Sorry, it's not your age, but some other sign(s) or null/emptiness"  */
// checkAge('24ka');           /* Ожидаем сообщение в консоли "Sorry, it's not your age, but some other sign(s) or null/emptiness"  */
// checkAge('0');              /* Ожидаем сообщение в консоли "Sorry, it's not your age, but some other number or emptiness"  */
// checkAge('');               /* Ожидаем сообщение в консоли "orry, it's not your age, but some other sign(s) or null/emptiness", тут пустая строка преобразовывается в ноль */
// checkAge(' ');              /* Ожидаем сообщение в консоли "Sorry, it's not your age, but some other number or emptiness", тут пробел */
// checkAge('&%^$#@*!');       /* Ожидаем сообщение в консоли "Sorry, it's not your age, but some other sign(s) or null/emptiness"  */
