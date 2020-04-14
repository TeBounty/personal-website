window.onload = init;

function init() {
    var elements = document.querySelectorAll('#contentExp div div');
    
    positionDivInfo(elements);
}

function positionDivInfo(elements) {
    
    for (const element of elements) {
        element.addEventListener("click", function () {
            
            var positions = recupererPositionBouton(element);

            // Placer la div d'info en fonction de la position de la div cliquer
            placementDivInfo = document.querySelector("#plusInfo");
            placementDivInfo.style.left = positions.clientX + 'px';
            placementDivInfo.style.top = positions.clientY + 'px';
            placementDivInfo.style.display = "block";

            // element.classList.add("activeItemE");
        });
    }
}

// Récupérer les coordonnées des boutons
function recupererPositionBouton(a) {
    var b = a.getBoundingClientRect();
    return {
        clientX: a.offsetLeft,
        clientY: a.offsetTop,
        viewportX: (b.x || b.left),
        viewportY: (b.y || b.top)
    }
}

// Ferme la div si on clique sur la croix
function closeDiv() {
    document.querySelector("#plusInfo").style.display = "none";
    // element.classList.remove("activeItemE");
}




