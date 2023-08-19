let totalPrice = 0;
let totalDiscount = 0;
let finalCost = 0;
let count = 0;
function selectCard(card){
    const name = card.querySelector('h2').innerText;
    const price = parseFloat(card.querySelector('span').innerText);
    const totalPriceField = document.getElementById('total-price');
    const discountField = document.getElementById('discount');
    const totalField = document.getElementById('total');
    const shoppingList = document.getElementById('shopping-list');

    //write the product name in the shopping list
    const h3 = document.createElement('h3');
    h3.style.fontWeight = 600;
    h3.innerText = `${count +=1}.  ${name}`;
    shoppingList.appendChild(h3);

    //calculate and set the total cost in the total price field
    totalPrice += price;
    totalPriceField.innerText = `${totalPrice} Tk`
    console.log(totalPrice);

}