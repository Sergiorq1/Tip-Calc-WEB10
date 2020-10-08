let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    let billAmount = parseFloat(document.getElementById('bill_amount').value);
    let tipPercentage = parseFloat(document.getElementById('tip_percentage').value);
    let people = parseFloat(document.getElementById('people').value);

    let computedTip = billAmount / tipPercentage;
    let totalBill = document.getElementById('total_bill').value = billAmount / people + computedTip / people;
    let tipAmount = document.getElementById('tip_amount').value = computedTip;
})