function myFunction() {
    var x = document.getElementById("navbar");
    var y = document.getElementById("navbar-mobile");
    if (y.style.display === "block") {
      y.style.display = "none";
    } else {
      y.style.display = "block";
    }
  }
