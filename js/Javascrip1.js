document.addEventListener("DOMContentLoaded", function () {
    const galletasInfoButton = document.getElementById("galletasInfoButton");
    const menu = document.getElementById("menu");

    galletasInfoButton.addEventListener("click", () => {
        if (menu.style.display === "none" || menu.style.display === "") {
            const galletasInfoButtonRect = galletasInfoButton.getBoundingClientRect();
            menu.style.display = "block";
            menu.style.top = galletasInfoButtonRect.top + "px";
            menu.style.left = galletasInfoButtonRect.right + "px";
        } else {
            menu.style.display = "none";
        }
    });
});

function cambiarContenido() {
    var skillDiv = document.querySelector('.six .skill');
    var texto2Div = document.querySelector('.six .parrafo2');
    var flechaButton = document.getElementById('flecha');
  
    if (skillDiv.style.display !== 'none') {
      skillDiv.style.display = 'none';
      texto2Div.style.display = 'block';
      flechaButton.textContent = '🢀'; // Cambia la flecha para retroceder
    } else {
      skillDiv.style.display = 'block';
      texto2Div.style.display = 'none';
      flechaButton.textContent = '🢂'; // Cambia la flecha para avanzar
    }
  }

  
  