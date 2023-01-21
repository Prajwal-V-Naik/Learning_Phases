document.addEventListener("click", function(event) {
    var circle = document.createElement("div");
    circle.className = "circle";
    circle.style.left = event.clientX + "px";
    circle.style.top = event.clientY + "px";
    document.body.appendChild(circle);
  });
  document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    location.reload();
  });
    