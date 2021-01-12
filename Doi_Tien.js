function Doi_Tien(){
   var amount = document.getElementById("Amount").value;
    var  from = document.getElementById("From").value;
    var to = document.getElementById("To").value;
    var donvi = To.options[To.selectedIndex].innerHTML;
           Result = amount*from/to
    document.getElementById("Result").innerHTML = "Result: " +Result +donvi
}