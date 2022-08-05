// 2
// Преобразовать task_1 таким образом, чтобы сначала в функции проверялся тип данных. 
// И если он не Number - кидалась ошибка.

const age_2 = 18;
const age_3 = 60;

const checkAge = function(age) {                    
    if (typeof age == "number") {                   /* Проверяем, является ли тип вводимой информации численным  */
        if (age > 0 && age < age_2) {                         
            console.log("You don't have access cause your age is", age + '.', "It's less then", age_2 + ', just believe me.'); 
        } else if (age >= age_2 && age < age_3) {            
            console.log("Welcome !");
        } else if (age >= age_3) {                            
            console.log("Keep calm and look Culture channel");
        } else {
            console.log("Technical work");                       
        }

    }  else {
        console.log("Sorry, it's not a number");
    }
}

checkAge(17);               /* Ожидаем сообщение в консоли "You don't have access cause your age is 17. It's less then 18, just believe me."  */
checkAge(18);               /* Ожидаем сообщение в консоли "Welcome !"  */
checkAge(0);                /* Ожидаем сообщение в консоли "Technical work"  */
checkAge(-1);               /* Ожидаем сообщение в консоли "Technical work"  */
checkAge('bublik');         /* Ожидаем сообщение в консоли "Sorry, it's not a number"  */
checkAge('24ka');           /* Ожидаем сообщение в консоли "Sorry, it's not a number"  */
checkAge(' ');              /* Ожидаем сообщение в консоли "Sorry, it's not a number"  */
checkAge('');               /* Ожидаем сообщение в консоли "Sorry, it's not a number"  */
checkAge('33');             /* Ожидаем сообщение в консоли "Sorry, it's not a number"  */

