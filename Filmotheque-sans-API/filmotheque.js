// Exercice - Filmotheque

// // gestion des affichages de la liste des films 
let body = document.querySelector("body");
let liste = document.querySelector("#liste");
let indexFilm =0; // variable permettant de stocker le numéro d'ordre du fil, utiliser pour créer les liens allant vers la page d'un film

const pagefilm = new URLSearchParams(window.location.search).get("id");

console.log(pagefilm)

//__________________________
for(objfilm of baseFilm){
   afficherList(objfilm);
   indexFilm = indexFilm +1;
}
afficherSynthese(objfilm);


// Fonction permettant d'afficher les données dans la page html
function afficherList(film){

   const filmDiv = document.createElement("div");
   liste.appendChild(filmDiv);
   filmDiv.id ="film";

   const filmDi = document.createElement("div");
   filmDiv.appendChild(filmDi);
   filmDi.id ="filmD";

   const afImage = document.createElement("img");
   filmDi.appendChild(afImage);
   afImage.style.display="block";
   afImage.src=film.image;

   const filmD = document.createElement("div");
   filmDi.appendChild(filmD);
   filmD.id ="film";

   const afTitre = document.createElement("h2");
   filmD.appendChild(afTitre);
   afTitre.id ="filmTitre";
   afTitre.textContent = film.titre;;

   const afDescription = document.createElement("p");
   filmD.appendChild(afDescription);
   afDescription.textContent = film.description;

   const afData = document.createElement('div');
   afData.className = "data";
   filmDiv.appendChild(afData);

   const afTotalDH = document.createElement("p");
   afData.appendChild(afTotalDH);
   afTotalDH.textContent =  film.totalD + "Mn / "+ (Math.round(film.totalD/60)) +'H' + (film.totalD%60); // conversion du temp en minutes en heures
   
   // affichage d'une icone en fonction de vue ou pas vue
   // remarque : pourrait être amélioré afin d'avoir une tolérance sur le début et sur la fin .. 
   const Visu = document.createElement("p");
   afData.appendChild(Visu);
   if(film.visioD == film.totalD){Visu.innerHTML= '<ion-icon name="eye-outline"></ion-icon>'} ;
   if(film.visioD == 0 ){Visu.innerHTML= '<ion-icon name="eye-off-outline"></ion-icon>'};

   const afvisioD = document.createElement("p");
   afData.appendChild(afvisioD);
   afvisioD.textContent = "Visionné: "+ film.visioD + "Mn";

      // le bouton qui va vers la page affichant la fiche d'un film
      const lien = document.createElement("a");
      lien.innerHTML = "Video";
      afData.appendChild(lien);
      lien.setAttribute ("href", ("pagefilm.html?id=" + indexFilm));

}

// Fonction permettant de réaliser les calculs % temps de visionnage et de les afficher 
function afficherSynthese(objfilm){
   // Pourcentage de visionnage par film - Pourctpsvis 
   baseFilm.forEach(element => {
      let Pourctpsvis = (element.visioD/element.totalD*100).toFixed(1);
   });
   // Pourcentage de visionnage total - Pourctpsvistotal
   let tpstotalVisu = 0;
   let tpstotal = 0;
   let Pourctpsvistotal
   baseFilm.forEach(element => {
      tpstotalVisu += element.visioD;
      tpstotal += element.totalD;
      });
   Pourctpsvistotal = (tpstotalVisu/tpstotal*100).toFixed(1);

   // Affichage des calculs
   const afSynthese = document.createElement("p");
      body.appendChild(afSynthese);
      afSynthese.textContent = " Les films ont été visionné à hauteur de " + Pourctpsvistotal + "%";
      afSynthese.id="synthese"
}

