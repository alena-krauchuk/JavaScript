// 3
// Преобразовать task_2 таким образом, чтобы значение '2' (строка, в которой лежит только цифра) пропускалось,
// преобразовываясь в number. 

// Мой анализ:
// Согласно бизнес-логике приложения ожидается валидация ввода значений возраста человека в целом (и в заданных границах возраста в частности), 
// поэтому любые символы, отличные от арабских цифр, отсутствие символов, отрицательные числа и ноль
// 1) относим к диапазону невалидных значений и
// 2) будем информировать об этом пользователя в валидационных сообщениях.
// Ввод римских цифр в этой задаче не рассматриваем.


const age_2 = 18;
const age_3 = 60;

const checkAge = function(age) {
    if(age && !isNaN(age)) {                                 /* Проверка, что значение введено и оно не NaN - если подаем пустую строку, в ней значения нет */
        if (age > 0 && age < age_2) {                        /* Сюда ушли положительные числа меньше минимальной границы возраста */   
            console.log("Your 1 input is:", age);
            console.log("You don't have access cause your age is", age + '.', "It's less then", age_2 + ", just believe me.\n"); 
        } else if (age >= age_2 && age < age_3) {           /* Сюда ушли положительные числа больше или равные минимальной и меньше максимальной границы возраста */  
            console.log("Your 2 input is:", age);
            console.log("Welcome !\n");            
        } else if (age >= age_3) {                          /* Сюда ушли положительные числа больше или равные максимальной границы возраста */       
            console.log("Your 3 input is:", age);
            console.log("Keep calm and look Culture channel\n");            
        } else {                                            /* Сюда ушли отрицательные числа, 0 как строка, пробел   */
            console.log("Your 4 input is:", age);
            console.log("Sorry, it's not an age, but some other number or emptiness\n");                                   
        }
    }  else {                                               /* Сюда ушли другие знаки (не арабские цифры), 0 как число, пустая строка   */
        console.log("Your 5 input is:", age);
        console.log("Sorry, it's not an age, but some other sign(s) or null/emptiness\n");        
    }
}

checkAge('2');              /* Ожидаем сообщение в консоли "You don't have access cause your age is 2. It's less then 18, just believe me."  */
checkAge(17);               /* Ожидаем сообщение в консоли "You don't have access cause your age is 17. It's less then 18, just believe me."  */           
checkAge(18);               /* Ожидаем сообщение в консоли "Welcome !"  */
checkAge(0);                /* Ожидаем сообщение в консоли "Sorry, it's not an age, but some other sign(s) or null/emptiness"  */
checkAge(-1);               /* Ожидаем сообщение в консоли "Sorry, it's not an age, but some other number or emptiness"  */
checkAge('bublik');         /* Ожидаем сообщение в консоли "Sorry, it's not an age, but some other sign(s) or null/emptiness"  */
checkAge('24ka');           /* Ожидаем сообщение в консоли "Sorry, it's not an age, but some other sign(s) or null/emptiness"  */
checkAge('0');              /* Ожидаем сообщение в консоли "Sorry, it's not an age, but some other number or emptiness"  */
checkAge('');               /* Ожидаем сообщение в консоли "orry, it's not an age, but some other sign(s) or null/emptiness", тут пустая строка преобразовывается в ноль */
checkAge(' ');              /* Ожидаем сообщение в консоли "Sorry, it's not an age, but some other number or emptiness", тут пробел */
checkAge('&%^$#@*!');       /* Ожидаем сообщение в консоли "Sorry, it's not an age, but some other sign(s) or null/emptiness"  */
