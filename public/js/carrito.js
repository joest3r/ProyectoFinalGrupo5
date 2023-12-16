const more1 = document.querySelector('#more1');
const less1 = document.querySelector('#less1');
const quantity1 = document.querySelector('#quantity1');
const price1 = document.querySelector('#price1');

const cantelem = document.querySelector('#cant_elem');
const subtotal = document.querySelector('#subtotal');
const total = document.querySelector('#total');

const more2 = document.querySelector('#more2');
const less2 = document.querySelector('#less2');
const quantity2 = document.querySelector('#quantity2');
const price2 = document.querySelector('#price2');



more1.addEventListener('click', () => {
    quantity1.value = Number(quantity1.value) + 1;

    price1.innerHTML = "$ " + Number(quantity1.value) * 1799.99;

    subtotal.innerHTML = "$ " + (price1.innerHTML);
});

less1.addEventListener('click', () => {
    if (quantity1.value != 0) {
        quantity1.value = Number(quantity1.value) - 1;

        price1.innerHTML = "$ " + Number(quantity1.value) * 1799.99;
        subtotal.innerHTML = "$ " - (price1.innerHTML);
    }
});

more2.addEventListener('click', () => {
    quantity2.value = Number(quantity2.value) + 1;

    price2.innerHTML = "$ " + Number(quantity2.value) * 1799.99;

    subtotal.innerHTML = "$ " + (price2.innerHTML);
});

less2.addEventListener('click', () => {
    if (quantity2.value != 0) {
        quantity2.value = Number(quantity2.value) - 1;

        price2.innerHTML = "$ " + Number(quantity2.value) * 1799.99;
        subtotal.innerHTML = "$ " - (price2.innerHTML);
    }
});