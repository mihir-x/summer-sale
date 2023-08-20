function applyClicked(apply){
    const discountField = document.getElementById('discount');
    const totalPrice = parseFloat(document.getElementById('total-price').innerText);
    const totalField = document.getElementById('total');
    const coupon = document.getElementById('coupon-field').value;
    let discount = 0.00;
    if(coupon === 'SELL200'){
        discount = totalPrice * .20;
    }
    discountField.innerText = `${discount.toFixed(2)} Tk`;
    const totalAfterDiscount = totalPrice - discount;
    totalField.innerText = `${totalAfterDiscount} Tk`;
}