// Exercice - Filmotheque

// // initialisation appel au dom
let body = document.querySelector("body");
let liste = document.querySelector("#liste");


// Interrogation de l'api
const baseFilmApi = fetch("http://localhost:3000/api/movies");

baseFilmApi

.then((response)=>{
   return response.json()
})

.then ((baseFilm) => {console.log(baseFilm);
for(objfilm of baseFilm){
   afficherList(objfilm)}
})

.catch(function(error){console.log(error)})


// fonction permettant d'afficher les informations de la réponse
function afficherList(film){
      //.. cette fonction aurait pu être simplifier en créant utilisant la fonction Template ( ce que j'ai fait pour la page d'un film)

   const filmDiv = document.createElement("div");
   liste.appendChild(filmDiv);
   filmDiv.id ="film";

   const filmDi = document.createElement("div");
   filmDiv.appendChild(filmDi);
   filmDi.id ="filmD";

   const afImage = document.createElement("img");
   filmDi.appendChild(afImage);
   afImage.style.display="block";
   afImage.src=film.imageUrl;

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

// le bouton qui va vers l'autre page et paser le numéro du film dans l'url
      const lien = document.createElement("a");
      lien.innerHTML = "Plus d'informations ? ";
      afData.appendChild(lien);
      indexFilm = film._id;
      lien.setAttribute ("href", ("pagefilm.html?id=" + indexFilm));
}


