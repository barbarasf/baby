document.getElementById("simBtn").addEventListener("click", function() {
    var novaJanela = window.open("", "_blank");
    novaJanela.document.write("<h1 style='text-align:center; color:#333;'>Delicioso, que bom que aceitou, usufruindo do seu livre arbítrio. Te amo</h1>");
    novaJanela.document.close();
  });
  
  document.getElementById("naoBtn").addEventListener("mouseover", function() {
    var newX = Math.random() * (window.innerWidth - this.offsetWidth);
    var newY = Math.random() * (window.innerHeight - this.offsetHeight);
    this.style.position = "absolute";
    this.style.left = newX + "px";
    this.style.top = newY + "px";
  });
  