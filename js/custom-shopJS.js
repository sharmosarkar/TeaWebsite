/**
 * Created by Sharmo on 2/11/2018.
 */

function goSinglesPage( prodId){
    var prodName = document.getElementById(prodId+"-name");
    var prodPrice = document.getElementById(prodId+"-price");
    var prodDescription = "xx";
    console.log(prodName);console.log(prodId);console.log(prodDescription);console.log(prodPrice);
    localStorage.setItem("prodName", prodName);
    localStorage.setItem("prodId", prodId);
    localStorage.setItem("prodDescription", prodDescription);
    localStorage.setItem("prodPrice", prodPrice);
    window.location.href = '/single.html';
}
