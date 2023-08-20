function goHome(goH){
    document.getElementById('shopping-list').innerHTML = '';
    document.getElementById('total-price').innerText = '';
    document.getElementById('discount').innerText = '';
    document.getElementById('total').innerText = '';
    document.getElementById('coupon-field').value ='';
    document.getElementById('apply').classList.add('btn-disabled');
    document.getElementById('apply').style.backgroundColor = '#d898c7';
    document.getElementById('make-purchase').classList.add('btn-disabled');
    document.getElementById('make-purchase').style.backgroundColor = '#d898c7';
}