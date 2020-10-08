let button = document.getElementById("btn");
button.addEventListener("click", function(){
    let billAmount = document.getElementById("bill_amount").value;
    let tipPercentage = document.getElementById("tip_percentage").value;

    let tipAmount = document.getElementById("tip_amount").value = 0.01 * percentTip * orderTotal;
    document.getElementById("total_bill").value = parseFloat(orderTotal) + parseFloat(amountTip);
})