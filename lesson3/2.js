// Cоздать функцию greeting, которая принимает в качестве аргумента имя человека и 
// выводит приветствие, используя переданное ей имя, в консоль.
function greeting() {
    const name = prompt("Введите имя");
    console.log(`Приветствую вас ${name}`);
    return name;
}
greeting();