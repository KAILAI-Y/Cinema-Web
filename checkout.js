function calculate() {
    var oTshirts = document.getElementsByName("T-shirt");
    var oQuantity = document.getElementById("quantity");

    var price = 0;
    for (var index = 0; index < oTshirts.length; index++) {
        if (oTshirts[index].checked) {
            price = oTshirts[index].value;
            break;
        }
    }
    var quantity = oQuantity.value;
    var subtotal = quantity * price;
    var total = subtotal * 1.13;
    var tax = total - subtotal;

    document.getElementById("total").innerHTML = "$" + total.toFixed(2);
    document.getElementById("subtotal").innerHTML = "$" + subtotal.toFixed(2);
    document.getElementById("tax").innerHTML = "$" + tax.toFixed(2);
}
