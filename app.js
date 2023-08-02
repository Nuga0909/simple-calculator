window.onload = function () {
    let listItems = document.getElementsByTagName('li');
    let screen = document.getElementsByTagName('span')[0];
    let clear = document.getElementById('clear');

    const addToScreen = (i) => {
        return function () {
            if (listItems[i].innerHTML === "x") {
                screen.innerHTML += "*";
            }
            else screen.innerHTML += listItems[i].innerHTML;
        }
    }

    const calculate = () => {
        screen.innerHTML = eval(screen.innerHTML);
    }

    const clearScreen = () => {
        screen.innerHTML = '';
    }

    clear.addEventListener('click', clearScreen);

    for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].innerHTML === "=") {
            listItems[i].addEventListener('click', calculate);
        } else
            listItems[i].addEventListener('click', addToScreen(i));
    }
}    