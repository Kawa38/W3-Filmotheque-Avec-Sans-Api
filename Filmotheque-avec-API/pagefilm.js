
// initialisation des variables 
const filmId = new URLSearchParams(window.location.search).get("id");
console.log(filmId); // pour l'intérrogation de l'api
let body = document.querySelector("body"); // pour affichage dans le html
let page = document.querySelector("#page");// idem


// Interrogation de l'api
const baseFilmApi = fetch("http://localhost:3000/api/movies");

baseFilmApi

.then((response)=>{
    return response.json()
})
            
.then ((baseFilm) => {console.log(baseFilm);

        for (film of baseFilm){
          // je parcours les différents film et je n'affiche que cellui qui a _id défini dans l'url 
          if (film._id == filmId)
            { 
            let divF = templateElement('div', "", page);
            divF.id = "filmTitre";
            let titre = templateElement("h1", film.titre, divF);
            titre.id = "filmTitre";
            let qui = templateElement("h1", film.realisateur, divF);
            let description = templateElement("h1", film.description, divF);
            let  affImage = templateElement("img","",divF);
            affImage.style.display="block";
            affImage.src=film.imageUrl;
            affImage.id = "ImgGrand";


            };
        };
      }
      )
.catch(function(error){console.log(error)})
            
// Fonctions permettant de simplifier la création du html

const templateElement = (element_name, text, parent) => {
  const template = document.createElement(element_name);
  text ? template.textContent = text : "";
  parent ? parent.appendChild(template) : "";
  return template;
    }


