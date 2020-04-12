function start(id) {
    var text = "";
    var divInfo = document.querySelector("#plusInfo");
    var contenu = document.querySelector("#plusInfo div");

    switch (id) {
        case 'premierExp':
            text = "<p>Conception d'une nouvelle fonctionnalité dans le portail interne</br>Développement du front-end (html, css, javascript)</br>Développement du back-end (C#, bases de données, procédure stockée)</p>";
            contenu.innerHTML = text;
            afficheDivInfo(divInfo);
            break;
        case 'deuxiemeExp':
            afficheDivInfo(divInfo);
            text = "<p>Conception d'une nouvelle fonctionnalité dans le portail interne</br>Développement du front-end (html, css, javascript)</br>Développement du back-end (C#, bases de données, procédure stockée)</p>";
            contenu.innerHTML = text;
            break;
        case 'troisiemeExp':
            afficheDivInfo(divInfo);
            text = "<p>Conception d'une nouvelle fonctionnalité dans le portail interne</br>Développement du front-end (html, css, javascript)</br>Développement du back-end (C#, bases de données, procédure stockée)</p>";
            contenu.innerHTML = text;
            break;
        case 'quatriemeExp':
            afficheDivInfo(divInfo);
            text = "<p>Conception d'une nouvelle fonctionnalité dans le portail interne</br>Développement du front-end (html, css, javascript)</br>Développement du back-end (C#, bases de données, procédure stockée)</p>";
            contenu.innerHTML = text;
            break;
        case 'cinquiemeExp':
            afficheDivInfo(divInfo);
            text = "<p>Conception d'une nouvelle fonctionnalité dans le portail interne</br>Développement du front-end (html, css, javascript)</br>Développement du back-end (C#, bases de données, procédure stockée)</p>";
            contenu.innerHTML = text;
            break;
        case 'sixiemeExp':
            afficheDivInfo(divInfo);
            text = "<p>Conception d'une nouvelle fonctionnalité dans le portail interne</br>Développement du front-end (html, css, javascript)</br>Développement du back-end (C#, bases de données, procédure stockée)</p>";
            contenu.innerHTML = text;
            break;
        case 'septiemeExp':
            afficheDivInfo(divInfo);
            text = "<p>Conception d'une nouvelle fonctionnalité dans le portail interne</br>Développement du front-end (html, css, javascript)</br>Développement du back-end (C#, bases de données, procédure stockée)</p>";
            contenu.innerHTML = text;
            break;
        case 'huitiemeExp':
            afficheDivInfo(divInfo);
            text = "<p>Conception d'une nouvelle fonctionnalité dans le portail interne</br>Développement du front-end (html, css, javascript)</br>Développement du back-end (C#, bases de données, procédure stockée)</p>";
            contenu.innerHTML = text;
            break;
        case 'neuviemeExp':
            afficheDivInfo(divInfo);
            text = "<p>Conception d'une nouvelle fonctionnalité dans le portail interne</br>Développement du front-end (html, css, javascript)</br>Développement du back-end (C#, bases de données, procédure stockée)</p>";
            contenu.innerHTML = text;
            break;
        case 'dixiemeExp':
            afficheDivInfo(divInfo);
            text = "<p>Conception d'une nouvelle fonctionnalité dans le portail interne</br>Développement du front-end (html, css, javascript)</br>Développement du back-end (C#, bases de données, procédure stockée)</p>";
            contenu.innerHTML = text;
            break;
    }
};

function afficheDivInfo(divInfo) {
    // div.style.display = "block";
    $(divInfo).toggle("slow");
}

function closeDiv() {
    document.querySelector("#plusInfo").style.display = "none";
}



